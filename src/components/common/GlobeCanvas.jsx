import React, { useEffect, useRef } from 'react';

/**
 * GlobeCanvas
 * ───────────
 * High-performance 2D Canvas 3D Rotating World Globe.
 * Renders:
 *  - 3D sphere grid with rotating meridians (longitude) & parallels (latitude)
 *  - Atmospheric outer radial glow matching Shopify brand colors (#36F4A4, #157076)
 *  - World continent landmass points & country hubs
 *  - Pulsing global merchant sales nodes (Lagos, New York, London, Tokyo, Sydney, Berlin, São Paulo)
 *  - Animated glowing arc trajectories (commerce moving around the world)
 */

// Major global trade hubs with 3D spherical coordinates (lat, lon in degrees)
const CITIES = [
  { name: 'Nigeria (Lagos)', lat: 6.5244, lon: 3.3792 },
  { name: 'United States (NYC)', lat: 40.7128, lon: -74.006 },
  { name: 'United Kingdom (London)', lat: 51.5074, lon: -0.1278 },
  { name: 'Japan (Tokyo)', lat: 35.6762, lon: 139.6503 },
  { name: 'Australia (Sydney)', lat: -33.8688, lon: 151.2093 },
  { name: 'Germany (Berlin)', lat: 52.52, lon: 13.405 },
  { name: 'Brazil (São Paulo)', lat: -23.5505, lon: -46.6333 },
  { name: 'India (Mumbai)', lat: 19.076, lon: 72.8777 },
  { name: 'South Africa (Cape Town)', lat: -33.9249, lon: 18.4241 },
];

// Simplified continent landmass dots (lat, lon) to form recognizable earth shapes
const CONTINENT_DOTS = [];
// Generate dense land dots for major continents
(function generateLand() {
  const regions = [
    // North America
    { minLat: 15, maxLat: 65, minLon: -130, maxLon: -60, density: 45 },
    // South America
    { minLat: -50, maxLat: 12, minLon: -80, maxLon: -35, density: 35 },
    // Europe
    { minLat: 35, maxLat: 68, minLon: -10, maxLon: 40, density: 40 },
    // Africa
    { minLat: -34, maxLat: 36, minLon: -17, maxLon: 51, density: 45 },
    // Asia
    { minLat: 10, maxLat: 70, minLon: 45, maxLon: 145, density: 70 },
    // Australia
    { minLat: -42, maxLat: -11, minLon: 112, maxLon: 154, density: 25 },
  ];

  regions.forEach((r) => {
    for (let i = 0; i < r.density; i++) {
      const lat = r.minLat + Math.random() * (r.maxLat - r.minLat);
      const lon = r.minLon + Math.random() * (r.maxLon - r.minLon);
      CONTINENT_DOTS.push({ lat, lon });
    }
  });
})();

export default function GlobeCanvas({ className = '', height = 600, width = 600 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let rotationAngle = 0; // Y-axis rotation in radians

    // Dynamic sizing based on canvas bounds
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width || width || 600;
      const h = rect.height || height || 600;
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    // Converts spherical (lat, lon, rotation) to 3D screen space (x, y, z)
    function project(latDeg, lonDeg, radius, rotY) {
      const lat = (latDeg * Math.PI) / 180;
      const lon = ((lonDeg + rotY) * Math.PI) / 180;

      // 3D coordinates on unit sphere
      const x3d = radius * Math.cos(lat) * Math.sin(lon);
      const y3d = -radius * Math.sin(lat);
      const z3d = radius * Math.cos(lat) * Math.cos(lon);

      return { x: x3d, y: y3d, z: z3d };
    }

    let pulseTime = 0;

    function render() {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 600;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);

      // Increment globe rotation & pulse counter
      rotationAngle += 0.35; // degrees per frame
      pulseTime += 0.04;

      // ── 1. Outer Atmospheric Glow ──────────────────────────────────────────
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.35);
      glowGrad.addColorStop(0, 'rgba(54, 244, 164, 0.25)');
      glowGrad.addColorStop(0.5, 'rgba(21, 112, 118, 0.15)');
      glowGrad.addColorStop(1, 'rgba(6, 26, 28, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // ── 2. Globe Sphere Dark Background ────────────────────────────────────
      const sphereGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 0, cx, cy, radius);
      sphereGrad.addColorStop(0, '#0d3a33');
      sphereGrad.addColorStop(0.7, '#061a1c');
      sphereGrad.addColorStop(1, '#020a08');

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.shadowColor = 'rgba(54, 244, 164, 0.4)';
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.restore();

      // Clip rendering to front of sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius - 0.5, 0, Math.PI * 2);
      ctx.clip();

      // ── 3. Latitude Grid Lines (Parallels) ──────────────────────────────────
      ctx.strokeStyle = 'rgba(54, 244, 164, 0.08)';
      ctx.lineWidth = 1;

      for (let lat = -60; lat <= 60; lat += 20) {
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 5) {
          const pt = project(lat, lon, radius, rotationAngle);
          if (pt.z > 0) {
            const sx = cx + pt.x;
            const sy = cy + pt.y;
            if (first) {
              ctx.moveTo(sx, sy);
              first = false;
            } else {
              ctx.lineTo(sx, sy);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // ── 4. Longitude Grid Lines (Meridians) ─────────────────────────────────
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 5) {
          const pt = project(lat, lon, radius, rotationAngle);
          if (pt.z > 0) {
            const sx = cx + pt.x;
            const sy = cy + pt.y;
            if (first) {
              ctx.moveTo(sx, sy);
              first = false;
            } else {
              ctx.lineTo(sx, sy);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // ── 5. Continent Landmass Dots ──────────────────────────────────────────
      CONTINENT_DOTS.forEach((dot) => {
        const pt = project(dot.lat, dot.lon, radius, rotationAngle);
        if (pt.z > -10) {
          // Fade dots as they rotate towards rim/back
          const alpha = Math.max(0, (pt.z / radius) * 0.75 + 0.15);
          const sx = cx + pt.x;
          const sy = cy + pt.y;

          ctx.fillStyle = `rgba(54, 244, 164, ${alpha})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── 6. Trade Hub Cities & Pulsing Sales Nodes ───────────────────────────
      const visibleCities = [];
      CITIES.forEach((city, idx) => {
        const pt = project(city.lat, city.lon, radius, rotationAngle);
        if (pt.z > 0) {
          const sx = cx + pt.x;
          const sy = cy + pt.y;
          const zRatio = pt.z / radius;
          visibleCities.push({ ...city, sx, sy, zRatio, idx });

          // Pulsing core node
          const pulse = (Math.sin(pulseTime * 3 + idx) + 1) / 2; // 0 to 1
          const ringRadius = 4 + pulse * 10;

          // Outer pulse ring
          ctx.strokeStyle = `rgba(54, 244, 164, ${(1 - pulse) * zRatio * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Core bright dot
          ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * zRatio})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(54, 244, 164, ${zRatio})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── 7. Animated Commerce Arcs (Connecting Cities) ──────────────────────
      for (let i = 0; i < visibleCities.length - 1; i++) {
        const c1 = visibleCities[i];
        const c2 = visibleCities[i + 1];

        if (c1.zRatio > 0.2 && c2.zRatio > 0.2) {
          const midX = (c1.sx + c2.sx) / 2;
          const midY = (c1.sy + c2.sy) / 2 - 35; // Curve height

          ctx.save();
          ctx.strokeStyle = `rgba(54, 244, 164, ${Math.min(c1.zRatio, c2.zRatio) * 0.5})`;
          ctx.lineWidth = 1.8;
          ctx.setLineDash([4, 4]);

          ctx.beginPath();
          ctx.moveTo(c1.sx, c1.sy);
          ctx.quadraticCurveTo(midX, midY, c2.sx, c2.sy);
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.restore(); // Restore sphere clip

      // ── 8. Outer Sphere Rim Edge Highlight ─────────────────────────────────
      ctx.strokeStyle = 'rgba(54, 244, 164, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [height, width]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-full max-h-full object-contain pointer-events-none"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
