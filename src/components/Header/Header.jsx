import React, { useState, useEffect, useRef } from 'react';
import TobenxLogo from '../common/TobenxLogo';

// ── Responsive hook ───────────────────────────────────────────────────────────
function useIsDesktop(bp = 1024) {
  const [ok, setOk] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= bp : true
  );
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${bp}px)`);
    const fn = (e) => setOk(e.matches);
    mq.addEventListener('change', fn);
    setOk(mq.matches);
    return () => mq.removeEventListener('change', fn);
  }, [bp]);
  return ok;
}

// ── Brand tokens ──────────────────────────────────────────────────────────────
const BLUE  = '#1A56E8';
const GREEN = '#15C44A';

// ── Nav data ──────────────────────────────────────────────────────────────────
const NAV = [
  {
    label: 'Tobenx SBT',
    dropdown: [
      { icon: '🖥️', label: 'Website Design',        href: '#website-design' },
      { icon: '🤖', label: 'AI Automation',          href: '#ai-automation' },
      { icon: '📢', label: 'Digital Marketing',      href: '#digital-marketing' },
      { icon: '☁️', label: 'Cloud & Infrastructure', href: '#cloud' },
    ],
  },
  { label: 'Season X',       href: '#season-x', badge: 'Store' },
  { label: 'Tobenx Academy', href: '#academy' },
  {
    label: 'JobIn',
    dropdown: [
      { icon: '💼', label: 'SoftHire',   href: '#softhire' },
      { icon: '🧑‍💻', label: 'iWork',      href: '#iwork' },
      { icon: '🔍', label: 'Find Jobs',  href: '#find-jobs' },
      { icon: '📄', label: 'CV Builder', href: '#cv-builder' },
    ],
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About',   href: '#about' },
];

// ── Chevron ───────────────────────────────────────────────────────────────────
function Chevron({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── WhatsApp icon ─────────────────────────────────────────────────────────────
function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Dropdown panel ────────────────────────────────────────────────────────────
function Dropdown({ items, visible }) {
  return (
    <div role="menu" style={{
      position: 'absolute',
      top: 'calc(100% + 10px)',
      left: '50%',
      transform: visible
        ? 'translateX(-50%) translateY(0)'
        : 'translateX(-50%) translateY(-6px)',
      minWidth: '220px',
      background: 'rgba(5, 10, 30, 0.97)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '14px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(26,86,232,0.15)',
      padding: '8px',
      zIndex: 200,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 0.18s ease, transform 0.18s ease',
    }}>
      {items.map((it) => (
        <a key={it.label} href={it.href} role="menuitem" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px 14px', borderRadius: '9px',
          color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
          fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap',
          transition: 'background 0.15s, color 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(26,86,232,0.18)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
        >
          <span style={{ fontSize: '16px', lineHeight: 1 }}>{it.icon}</span>
          {it.label}
        </a>
      ))}
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
export default function Header() {
  const [open, setOpen]       = useState(null);   // which dropdown is open (label)
  const [mobOpen, setMobOpen] = useState(false);  // mobile drawer
  const [mobExp, setMobExp]   = useState(null);   // which mobile accordion is open
  const [scrolled, setScrolled] = useState(false);
  const navRef   = useRef(null);
  const desktop  = useIsDesktop();

  /* scroll blur */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* click-outside to close */
  useEffect(() => {
    const fn = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
        setMobOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  /* lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobOpen]);

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ══════════════════ NAVBAR ══════════════════ */}
      <header ref={navRef} data-component-name="tobenx-header" style={{
        position: 'sticky', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(4,8,22,0.97)' : 'rgba(4,8,22,0.78)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 20px',
          height: '68px', display: 'flex', alignItems: 'center', gap: '16px',
        }}>

          {/* Logo */}
          <a href="/" aria-label="Tobenx – Home" style={{
            flexShrink: 0, display: 'inline-flex', alignItems: 'center', textDecoration: 'none',
          }}>
            <TobenxLogo variant="horizontal" size="sm" theme="dark" />
          </a>

          {/* ── Desktop nav ── */}
          {desktop && (
            <nav aria-label="Main navigation" style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-evenly',
              flex: 1,
            }}>
              {NAV.map((item) => {
                const hasDrop = Boolean(item.dropdown);
                const isOpen  = open === item.label;
                return (
                  <div key={item.label} style={{ position: 'relative' }}
                    onMouseEnter={() => hasDrop && setOpen(item.label)}
                    onMouseLeave={() => hasDrop && setOpen(null)}
                  >
                    {hasDrop ? (
                      <button
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : item.label)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '6px 12px', borderRadius: '8px',
                          background: 'transparent', border: 'none',
                          color: isOpen ? '#fff' : 'rgba(255,255,255,0.78)',
                          fontSize: '14px', fontWeight: 500, cursor: 'pointer',
                          transition: 'color 0.15s, background 0.15s',
                          fontFamily: 'inherit', letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = isOpen ? '#fff' : 'rgba(255,255,255,0.78)';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {item.label}
                        <Chevron open={isOpen} />
                      </button>
                    ) : (
                      <a href={item.href} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '6px 12px', borderRadius: '8px',
                        color: 'rgba(255,255,255,0.78)',
                        fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                        transition: 'color 0.15s, background 0.15s',
                        letterSpacing: '0.01em',
                      }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.78)';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {item.label}
                        {item.badge && (
                          <span style={{
                            fontSize: '10px', fontWeight: 700, color: GREEN,
                            border: `1px solid ${GREEN}55`, borderRadius: '4px',
                            padding: '1px 5px', background: `${GREEN}14`,
                            letterSpacing: '0.06em',
                          }}>
                            {item.badge}
                          </span>
                        )}
                      </a>
                    )}
                    {hasDrop && <Dropdown items={item.dropdown} visible={isOpen} />}
                  </div>
                );
              })}
            </nav>
          )}

          {/* ── Desktop CTAs ── */}
          {desktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <a href="#login" id="header-login-btn" style={{
                padding: '8px 18px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.88)', fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.01em',
                transition: 'background 0.15s, border-color 0.15s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                }}
              >
                Log In
              </a>
              <a href="#get-started" id="header-cta-btn" style={{
                padding: '8px 20px', borderRadius: '8px',
                background: `linear-gradient(135deg, ${BLUE} 0%, #0F3AAF 100%)`,
                color: '#fff', fontSize: '14px', fontWeight: 700,
                textDecoration: 'none', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(26,86,232,0.45)',
                letterSpacing: '0.01em',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,86,232,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,86,232,0.45)';
                }}
              >
                Get Started Free
              </a>
            </div>
          )}

          {/* ── Hamburger (mobile) ── */}
          {!desktop && (
            <button
              aria-label={mobOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobOpen}
              onClick={() => setMobOpen((v) => !v)}
              style={{
                marginLeft: 'auto', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', gap: '5px',
                width: '36px', height: '36px',
                background: 'transparent', border: 'none',
                cursor: 'pointer', padding: '4px', borderRadius: '6px', flexShrink: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', height: '2px', borderRadius: '2px', background: '#fff',
                  transition: 'all 0.25s ease',
                  width: i === 1 ? (mobOpen ? '100%' : '72%') : '100%',
                  transform: mobOpen
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                      : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                        : 'scaleX(0)'
                    : 'none',
                  opacity: mobOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>

        {/* ══════════════════ MOBILE DRAWER ══════════════════ */}
        {!desktop && (
          <div aria-hidden={!mobOpen} style={{
            position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
            background: 'rgba(3,6,18,0.98)',
            backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            overflowY: 'auto', zIndex: 99,
            opacity: mobOpen ? 1 : 0,
            pointerEvents: mobOpen ? 'auto' : 'none',
            transition: 'opacity 0.25s ease',
            padding: '24px 24px 48px',
          }}>
            <nav aria-label="Mobile navigation">
              {NAV.map((item) => {
                const hasDrop   = Boolean(item.dropdown);
                const isExpanded = mobExp === item.label;
                return (
                  <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {hasDrop ? (
                      <>
                        <button onClick={() => setMobExp(isExpanded ? null : item.label)} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          width: '100%', padding: '18px 4px',
                          background: 'transparent', border: 'none',
                          color: '#fff', fontSize: '19px', fontWeight: 600,
                          cursor: 'pointer', fontFamily: 'inherit',
                        }}>
                          {item.label}
                          <Chevron open={isExpanded} />
                        </button>
                        {isExpanded && (
                          <div style={{ paddingBottom: '12px', paddingLeft: '12px' }}>
                            {item.dropdown.map((sub) => (
                              <a key={sub.label} href={sub.href}
                                onClick={() => setMobOpen(false)}
                                style={{
                                  display: 'flex', alignItems: 'center', gap: '10px',
                                  padding: '12px 8px',
                                  color: 'rgba(255,255,255,0.75)',
                                  textDecoration: 'none',
                                  fontSize: '15px', fontWeight: 500,
                                }}>
                                <span style={{ fontSize: '18px' }}>{sub.icon}</span>
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a href={item.href} onClick={() => setMobOpen(false)} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '18px 4px',
                        color: '#fff', fontSize: '19px', fontWeight: 600,
                        textDecoration: 'none',
                      }}>
                        {item.label}
                        {item.badge && (
                          <span style={{
                            fontSize: '11px', fontWeight: 700, color: GREEN,
                            border: `1px solid ${GREEN}55`, borderRadius: '4px',
                            padding: '2px 6px', background: `${GREEN}14`,
                          }}>
                            {item.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
                <a href="#login" onClick={() => setMobOpen(false)} style={{
                  display: 'block', padding: '14px', textAlign: 'center',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff', fontSize: '16px', fontWeight: 600, textDecoration: 'none',
                }}>
                  Log In
                </a>
                <a href="#get-started" onClick={() => setMobOpen(false)} style={{
                  display: 'block', padding: '14px', textAlign: 'center',
                  borderRadius: '10px',
                  background: `linear-gradient(135deg, ${BLUE}, #0F3AAF)`,
                  color: '#fff', fontSize: '16px', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(26,86,232,0.4)',
                }}>
                  Get Started Free
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ══════════════════ WHATSAPP FAB ══════════════════ */}
      <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer"
        id="whatsapp-fab" aria-label="Chat with us on WhatsApp"
        style={{
          position: 'fixed', bottom: '28px', right: '24px', zIndex: 9999,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.6), 0 4px 12px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)';
        }}
      >
        <WAIcon />
      </a>
    </>
  );
}
