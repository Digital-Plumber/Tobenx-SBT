import React from 'react';

/**
 * Tobenx SBT — Professional Brand Logo Component
 * ─────────────────────────────────────────────────
 * Accurate SVG recreation of the Tobenx brand identity:
 *   - Navy blue (#0D1B5E) wordmark "Toben"
 *   - X letterform in blue-to-green gradient (matches original)
 *   - "Smart Business Technology" tagline
 *   - T + Africa + circuit + orbit emblem mark
 *
 * Props:
 *  variant: 'horizontal' | 'stacked' | 'icon'
 *  size: 'sm' | 'md' | 'lg' | 'xl'
 *  theme: 'dark' | 'light'
 *  className: string
 */
export default function TobenxLogo({
  variant = 'horizontal',
  size = 'md',
  theme = 'dark',
  className = '',
}) {
  const scales = {
    sm: { icon: 32, name: '1.25rem', tag: '0.5rem', gap: 8 },
    md: { icon: 44, name: '1.75rem', tag: '0.62rem', gap: 12 },
    lg: { icon: 58, name: '2.25rem', tag: '0.78rem', gap: 14 },
    xl: { icon: 76, name: '2.9rem', tag: '1rem', gap: 18 },
  };

  const s = scales[size] || scales.md;

  // Brand palette — exact match to the original Tobenx logo
  const NAVY = '#0D1B5E';
  const BLUE = '#1A56E8';
  const GREEN = '#15C44A';
  const wordColor = theme === 'dark' ? '#FFFFFF' : NAVY;
  const subColor = theme === 'dark' ? 'rgba(255,255,255,0.75)' : 'rgba(13,27,94,0.7)';

  // ─── Real Logo Emblem (transparent PNG) ─────────────────────────────────────
  const Emblem = ({ height }) => (
    <img
      src="/tobenx-icon-transparent.png"
      alt="Tobenx emblem"
      aria-hidden="true"
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
        flexShrink: 0,
        objectFit: 'contain',
      }}
    />
  );


  // ─── Wordmark ─────────────────────────────────────────────────────────────
  const Wordmark = () => (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', userSelect: 'none' }}>
      {/* Name row: Toben + X (gradient) + SBT badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.05em', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: s.name,
            color: wordColor,
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
        >
          Toben
        </span>
        {/* X uses an inline SVG so we can apply a gradient fill */}
        <svg
          viewBox="0 0 36 40"
          width={`calc(${s.name} * 0.92)`}
          height={`calc(${s.name} * 1.02)`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="tbx-xGrad" x1="0" y1="0" x2="36" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={BLUE} />
              <stop offset="100%" stopColor={GREEN} />
            </linearGradient>
          </defs>
          <text
            x="18" y="34"
            textAnchor="middle"
            fill="url(#tbx-xGrad)"
            fontFamily="'Montserrat', 'Inter', system-ui, sans-serif"
            fontWeight="900"
            fontSize="38"
          >
            x
          </text>
        </svg>
      </div>

      {/* Tagline */}
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: s.tag,
          color: subColor,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginTop: '0.38em',
          lineHeight: 1,
        }}
      >
        Smart Business Technology
      </span>
    </div>
  );

  // ─── icon variant ─────────────────────────────────────────────────────────
  if (variant === 'icon') {
    return (
      <div className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Emblem height={s.icon} />
      </div>
    );
  }

  // ─── stacked variant ──────────────────────────────────────────────────────
  if (variant === 'stacked') {
    return (
      <div
        className={className}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: `${s.gap * 1.2}px`,
        }}
      >
        <Emblem height={Math.round(s.icon * 1.4)} />
        <Wordmark />
      </div>
    );
  }

  // ─── horizontal (default) ─────────────────────────────────────────────────
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${s.gap}px`,
      }}
    >
      <Emblem height={s.icon} />
      <Wordmark />
    </div>
  );
}
