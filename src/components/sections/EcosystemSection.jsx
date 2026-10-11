import React, { useState, useEffect } from 'react';

/**
 * Tobenx Ecosystem Section (Section 3)
 * ──────────────────────────────────────
 * Shopify-standard design system: dark mode, clean vector icons, no emojis, no long dashes.
 */

const ECOSYSTEM_CARDS = [
  {
    id: 'sbt',
    name: 'Tobenx SBT',
    badge: 'Agency & Tech',
    oneLiner: 'Websites, AI & marketing for your business',
    details: 'Custom websites, AI workflow automation, digital marketing, and enterprise cloud infrastructure.',
    accentColor: '#10B981',
    tags: ['Websites', 'AI Automation', 'Digital Marketing'],
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8l4 4-4 4" />
        <line x1="13" y1="16" x2="17" y2="16" />
      </svg>
    ),
  },
  {
    id: 'season-x',
    name: 'Season X',
    badge: 'Trending Store',
    oneLiner: 'Shop trending seasonal products',
    details: 'Curated e-commerce collection featuring top-tier fashion, gadget accessories, and seasonal essentials.',
    accentColor: '#F59E0B',
    tags: ['E-Commerce', 'Fashion', 'Seasonal Drops'],
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'academy',
    name: 'Tobenx Academy',
    badge: 'Skill Building',
    oneLiner: 'Learn tech skills that pay',
    details: 'Practical tech courses in Web Dev, AI Prompt Engineering, UI/UX, and digital growth strategy.',
    accentColor: '#8B5CF6',
    tags: ['Web Dev', 'AI & Automation', 'UI/UX Design'],
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'jobin',
    name: 'JobIn',
    badge: 'Talent & Hiring',
    oneLiner: 'Hire developers or get hired',
    details: 'Direct job marketplace connecting vetted African developers, designers, and tech experts with top employers.',
    accentColor: '#3B82F6',
    tags: ['SoftHire', 'CV Builder', 'Remote Jobs'],
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function EcosystemSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollTo = (id) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="ecosystem"
      style={{
        backgroundColor: '#050B14',
        padding: isDesktop ? '100px 48px' : '64px 20px',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                color: '#9CA3AF',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Your business has entered the future
            </span>
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            One brand. Four ways to grow.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: '#9CA3AF',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Tobenx isn't just an agency, it is an ecosystem. Build your website, automate your business, upskill your team, and hire talent all under one roof.
          </p>
        </div>

        {/* 4 QUICK-NAV CARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {ECOSYSTEM_CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <a
                key={card.id}
                href={`#${card.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(card.id);
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: isHovered ? '#0D1527' : '#09101D',
                  border: `1px solid ${isHovered ? card.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '16px',
                  padding: '28px 24px',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 16px 32px rgba(0, 0, 0, 0.4)' : 'none',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: card.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {card.iconSvg}
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#9CA3AF',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.3rem',
                      color: '#FFFFFF',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {card.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#E5E7EB',
                      margin: '0 0 10px 0',
                      lineHeight: 1.4,
                    }}
                  >
                    {card.oneLiner}
                  </p>

                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: '#9CA3AF',
                      margin: '0 0 20px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.details}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '16px',
                    }}
                  >
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.7rem',
                          color: '#6B7280',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: isHovered ? card.accentColor : '#9CA3AF',
                    }}
                  >
                    <span>Explore {card.name}</span>
                    <span style={{ transition: 'transform 0.2s ease', transform: isHovered ? 'translateX(4px)' : 'none' }}>
                      →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
