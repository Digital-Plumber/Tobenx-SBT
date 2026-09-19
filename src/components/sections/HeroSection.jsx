import React, { useState, useEffect } from 'react';

/**
 * Tobenx Hero Section
 * ────────────────────
 * Layout (desktop): Left = copy + CTAs | Right = rotating 4-tile visual
 *
 * Features:
 *  - Eyebrow tag: "Built for African Businesses"
 *  - H1 with rotating word (global brand / top hire / trending store / skilled expert)
 *  - Subheadline
 *  - Primary + WhatsApp CTAs
 *  - Trust strip (NG flag · 4.9/5 · Google-verified)
 *  - Right panel: 4 auto-rotating tiles (Website · Season X · Academy · JobIn)
 */

// ── Rotating words ─────────────────────────────────────────────────────────────
const ROTATIONS = [
  { word: 'global brand',    color: '#15C44A' },
  { word: 'top hire',        color: '#1A56E8' },
  { word: 'trending store',  color: '#F59E0B' },
  { word: 'skilled expert',  color: '#A855F7' },
];

const WORD_DURATION = 2600;
const FADE_MS       = 400;

// ── Showcase tiles ─────────────────────────────────────────────────────────────
const TILES = [
  {
    id: 'website',
    label: 'Website Design',
    badge: 'Tobenx SBT',
    badgeColor: '#1A56E8',
    emoji: '🖥️',
    headline: 'Your brand, beautifully built',
    desc: 'Custom websites that convert — fast, mobile-first, and AI-powered.',
    accent: 'linear-gradient(135deg, #0D1B5E 0%, #1A56E8 100%)',
    stat: '200+ sites launched',
    statColor: '#60A5FA',
  },
  {
    id: 'seasonx',
    label: 'Season X Store',
    badge: 'E-Commerce',
    badgeColor: '#F59E0B',
    emoji: '🛍️',
    headline: 'Shop the season\'s best',
    desc: 'Curated fashion & lifestyle products. Delivered across Africa.',
    accent: 'linear-gradient(135deg, #1C0A00 0%, #C2410C 100%)',
    stat: '1,200+ products',
    statColor: '#FCD34D',
  },
  {
    id: 'academy',
    label: 'Tobenx Academy',
    badge: 'Learning',
    badgeColor: '#8B5CF6',
    emoji: '🎓',
    headline: 'Skills that pay the bills',
    desc: 'Live cohorts, video courses & mentorship in tech, design & business.',
    accent: 'linear-gradient(135deg, #1E0A3C 0%, #7C3AED 100%)',
    stat: '5,000+ students',
    statColor: '#C4B5FD',
  },
  {
    id: 'jobin',
    label: 'JobIn Platform',
    badge: 'Careers',
    badgeColor: '#15C44A',
    emoji: '💼',
    headline: 'Your next opportunity',
    desc: 'Find jobs, build your CV, and get hired — powered by SoftHire AI.',
    accent: 'linear-gradient(135deg, #022C1A 0%, #15803D 100%)',
    stat: '8,000+ job listings',
    statColor: '#86EFAC',
  },
];

// ── Tile Card ──────────────────────────────────────────────────────────────────
function TileCard({ tile, active, direction }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      borderRadius: '24px',
      background: tile.accent,
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      opacity: active ? 1 : 0,
      transform: active ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(12px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      pointerEvents: active ? 'auto' : 'none',
    }}>
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
          color: tile.badgeColor,
          background: `${tile.badgeColor}20`,
          border: `1px solid ${tile.badgeColor}50`,
          borderRadius: '20px', padding: '4px 12px',
          textTransform: 'uppercase',
        }}>
          {tile.badge}
        </span>
        <span style={{ fontSize: '36px', lineHeight: 1 }}>{tile.emoji}</span>
      </div>

      {/* Label */}
      <div>
        <div style={{
          fontSize: '13px', fontWeight: 600,
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '8px', letterSpacing: '0.04em',
        }}>
          {tile.label}
        </div>
        <h3 style={{
          fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
          fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 26px)',
          color: '#fff', lineHeight: 1.2, margin: 0,
        }}>
          {tile.headline}
        </h3>
        <p style={{
          marginTop: '10px', fontSize: '14px', lineHeight: 1.6,
          color: 'rgba(255,255,255,0.65)',
        }}>
          {tile.desc}
        </p>
      </div>

      {/* Stat footer */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '12px 16px',
        background: 'rgba(0,0,0,0.25)',
        borderRadius: '12px',
      }}>
        <div style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: tile.statColor,
          boxShadow: `0 0 8px ${tile.statColor}`,
          flexShrink: 0,
        }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: tile.statColor }}>
          {tile.stat}
        </span>
      </div>
    </div>
  );
}

// ── Dot indicators ─────────────────────────────────────────────────────────────
function Dots({ total, active, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Show tile ${i + 1}`}
          style={{
            width: i === active ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === active ? '#15C44A' : 'rgba(255,255,255,0.25)',
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'width 0.3s ease, background 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

// ── Main HeroSection ───────────────────────────────────────────────────────────
export default function HeroSection() {
  // rotating word
  const [wordIdx, setWordIdx]   = useState(0);
  const [wordOut, setWordOut]   = useState(false);

  // rotating tile
  const [tileIdx, setTileIdx]   = useState(0);

  // Word rotation
  useEffect(() => {
    const show = setTimeout(() => {
      setWordOut(true);
      const swap = setTimeout(() => {
        setWordIdx((p) => (p + 1) % ROTATIONS.length);
        setWordOut(false);
      }, FADE_MS);
      return () => clearTimeout(swap);
    }, WORD_DURATION);
    return () => clearTimeout(show);
  }, [wordIdx]);

  // Tile auto-rotation (4 s)
  useEffect(() => {
    const t = setInterval(() => setTileIdx((p) => (p + 1) % TILES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const rotation = ROTATIONS[wordIdx];

  return (
    <section
      data-section-name="hero"
      data-component-name="tobenx-hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#030612',
      }}
    >
      {/* ── Background video ─── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0,
        pointerEvents: 'none',
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080&width=828"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            transform: 'scale(1.05)',
          }}
        >
          <source
            src="https://cdn.shopify.com/b/shopify-brochure2-assets/524da6f828b5a55d571fafa1607b907f.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay so text stays readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(3,6,18,0.65) 0%, rgba(3,6,18,0.45) 40%, rgba(3,6,18,0.75) 100%)',
        }} />
        {/* Subtle grid on top */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* ── Content wrapper ─────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '1280px', margin: '0 auto',
        padding: 'clamp(80px, 10vw, 120px) 24px clamp(60px, 8vw, 100px)',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}
        className="hero-grid"
      >

        {/* ════════════════ LEFT: COPY ════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: 'rgba(21,196,74,0.1)',
            border: '1px solid rgba(21,196,74,0.3)',
            width: 'fit-content',
          }}>
            <span style={{ fontSize: '18px' }}>🌍</span>
            <span style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em',
              color: '#15C44A', textTransform: 'uppercase',
            }}>
              Built for African Businesses
            </span>
          </div>

          {/* H1 */}
          <div>
            {/* SEO static (screen-reader) */}
            <h1 className="sr-only">
              Power your business like a global brand.
            </h1>

            {/* Animated visual headline */}
            <div aria-hidden="true" style={{
              fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#fff',
            }}>
              <div>Power your</div>
              <div>business like a</div>
              {/* Rotating word */}
              <div style={{
                display: 'inline-block',
                position: 'relative',
                minHeight: '1.15em',
                overflow: 'hidden',
              }}>
                <span style={{
                  display: 'inline-block',
                  color: rotation.color,
                  opacity: wordOut ? 0 : 1,
                  transform: wordOut ? 'translateY(-30px)' : 'translateY(0)',
                  transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                  fontStyle: 'italic',
                  position: 'relative',
                }}>
                  {rotation.word}
                  {/* underline accent */}
                  <svg
                    viewBox="0 0 200 10" aria-hidden="true"
                    style={{
                      position: 'absolute', bottom: '-4px', left: 0,
                      width: '100%', height: '6px',
                      opacity: wordOut ? 0 : 1,
                      transition: `opacity ${FADE_MS}ms ease`,
                    }}
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q50 0 100 5 Q150 10 200 4"
                      stroke={rotation.color}
                      strokeWidth="3" fill="none" strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span style={{ opacity: 0, pointerEvents: 'none', display: 'block' }}>
                  {/* height placeholder using longest word */}
                  trending store
                </span>
              </div>
              <span style={{ display: 'block' }}>.</span>
            </div>
          </div>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.68)',
            maxWidth: '500px',
            margin: 0,
          }}>
            Websites. AI automation. Skills. Jobs.{' '}
            <span style={{ color: 'rgba(255,255,255,0.88)' }}>
              Everything a growing African business — or person needs, in one place.
            </span>
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            {/* Primary */}
            <a
              href="#get-started"
              id="hero-cta-primary"
              style={{
                padding: '14px 32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1A56E8 0%, #0F3AAF 100%)',
                color: '#fff',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '16px', fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(26,86,232,0.45)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(26,86,232,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,86,232,0.45)';
              }}
            >
              Get Started Free
            </a>

            {/* WhatsApp secondary */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '13px 24px',
                borderRadius: '10px',
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.35)',
                color: '#25D366',
                fontSize: '15px', fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.18s ease, border-color 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(37,211,102,0.18)';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(37,211,102,0.1)';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.35)';
              }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to Us on WhatsApp →
            </a>
          </div>

          {/* Trust strip */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center',
            paddingTop: '4px',
          }}>
            {[
              { icon: '🇳🇬', text: 'Proudly African' },
              { icon: '⭐', text: '4.9/5 client rating' },
              { icon: '✅', text: 'Secure & Google-verified' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ fontSize: '15px' }}>{icon}</span>
                <span style={{
                  fontSize: '13px', fontWeight: 500,
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════ RIGHT: ROTATING TILES ════════════════ */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          {/* Tile stack */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '4/3.5',
          }}>
            {/* Stacked background cards for depth */}
            <div style={{
              position: 'absolute', inset: '0',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              transform: 'rotate(4deg) scale(0.95)',
              transformOrigin: 'center bottom',
            }} />
            <div style={{
              position: 'absolute', inset: '0',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              transform: 'rotate(2deg) scale(0.97)',
              transformOrigin: 'center bottom',
            }} />

            {/* Active tile cards */}
            {TILES.map((tile, i) => (
              <TileCard
                key={tile.id}
                tile={tile}
                active={i === tileIdx}
                direction={1}
              />
            ))}
          </div>

          {/* Dot navigation */}
          <Dots total={TILES.length} active={tileIdx} onSelect={setTileIdx} />

          {/* Tile label strip */}
          <div style={{
            display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {TILES.map((tile, i) => (
              <button
                key={tile.id}
                onClick={() => setTileIdx(i)}
                style={{
                  padding: '5px 14px',
                  borderRadius: '20px',
                  background: i === tileIdx ? 'rgba(255,255,255,0.12)' : 'transparent',
                  border: `1px solid ${i === tileIdx ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                  color: i === tileIdx ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                }}
              >
                {tile.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
        background: 'linear-gradient(to bottom, transparent, rgba(3,6,18,0.8))',
        zIndex: 5, pointerEvents: 'none',
      }} />

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
