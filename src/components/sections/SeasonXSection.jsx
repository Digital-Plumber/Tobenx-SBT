﻿import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const SEASON_GROUPS = [
  {
    id: 0,
    label: 'Christmas & Holiday Drops',
    shortLabel: 'Christmas',
    products: [
      {
        id: 'sx-5',
        title: 'Holiday Tech & Luxury Gift Hamper',
        seasonTag: 'Christmas',
        rating: '4.9 (184)',
        imageUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop',
        desc: 'Curated audio gear and festive keepsakes. Perfect for cozy celebrations and premier gifting.',
      },
      {
        id: 'sx-6',
        title: 'Smart Home Ambient Lighting Bundle',
        seasonTag: 'Festive Tech',
        rating: '5.0 (310)',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
        desc: 'Voice-controlled RGB light strips and smart hub. Transform your living space with vibrant colors.',
      },
      {
        id: 'sx-7',
        title: 'Cozy Fireside Cashmere & Mug Set',
        seasonTag: 'Winter Curation',
        rating: '4.8 (88)',
        imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
        desc: 'Ultra-soft pure wool throw and insulated mug. Designed for peaceful evenings beside the fire.',
      },
      {
        id: 'sx-8',
        title: 'Artisanal Spiced Pantry Vault',
        seasonTag: 'Holiday Gourmet',
        rating: '4.9 (115)',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
        desc: 'Handcrafted seasonal syrups, chocolates, and teas. Bring warmth and rich flavors to your home.',
      },
    ],
  },
  {
    id: 1,
    label: "Valentine's & Romance",
    shortLabel: "Valentine's",
    products: [
      {
        id: 'sx-9',
        title: 'Forever Glow Romance Set',
        seasonTag: "Valentine's",
        rating: '5.0 (210)',
        imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
        desc: 'Luxury scented candles and matching couples watch. An enchanting gift made to celebrate your bond.',
      },
      {
        id: 'sx-10',
        title: 'Artisan Rose Gold Jewelry Capsule',
        seasonTag: 'Fine Jewelry',
        rating: '4.9 (132)',
        imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
        desc: 'Handcrafted pendant necklace and minimalist bracelet. Elegant accents tailored for romantic nights.',
      },
      {
        id: 'sx-11',
        title: 'Couples Date Night Experience Box',
        seasonTag: 'Romance Drop',
        rating: '4.9 (95)',
        imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
        desc: 'Curated card conversation decks and fondue kit. Spark unforgettable memories with your favorite person.',
      },
      {
        id: 'sx-12',
        title: 'Silk Sleepwear & Fragrance Duo',
        seasonTag: 'Lounge Luxury',
        rating: '4.8 (76)',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
        desc: 'Mulberry silk eye mask, robe, and pillow mist. Experience supreme relaxation and serene sleep.',
      },
    ],
  },
  {
    id: 2,
    label: 'Weddings & Celebrations',
    shortLabel: 'Weddings',
    products: [
      {
        id: 'sx-13',
        title: 'Bride & Groom Celebration Vault',
        seasonTag: 'Weddings',
        rating: '4.9 (96)',
        imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
        desc: 'Custom engraved champagne flutes and keepsake chest. Cherish wedding milestones with timeless elegance.',
      },
      {
        id: 'sx-14',
        title: 'Groomsmen Heritage Leather Valet',
        seasonTag: 'Wedding Party',
        rating: '4.8 (64)',
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
        desc: 'Monogrammed full-grain leather organizer and flask. The ultimate token of appreciation for groomsmen.',
      },
      {
        id: 'sx-15',
        title: 'Guest Memory Signature Album',
        seasonTag: 'Keepsake',
        rating: '5.0 (120)',
        imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop',
        desc: 'Archival linen photo album with gold foil lettering. Preserve heartfelt wedding wishes for a lifetime.',
      },
      {
        id: 'sx-16',
        title: 'Crystal Toasting Flute Pair',
        seasonTag: 'Tableware',
        rating: '4.9 (53)',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
        desc: 'Hand-blown lead-free crystal flutes with gold rim. Raise a sparkling glass to love and laughter.',
      },
    ],
  },
  {
    id: 3,
    label: 'Graduation & Easter Collections',
    shortLabel: 'Graduation & Easter',
    products: [
      {
        id: 'sx-17',
        title: 'Future Leader Pro Tech Kit',
        seasonTag: 'Graduation',
        rating: '4.8 (142)',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
        desc: 'Ergonomic desk gear, noise-canceling audio, and planner. Empower new graduates to excel in their career.',
      },
      {
        id: 'sx-18',
        title: 'Spring Blossom Life & Home Curation',
        seasonTag: 'Easter Drop',
        rating: '4.9 (78)',
        imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
        desc: 'Artisanal spring decor and organic diffusers. Refresh your living quarters with botanical scents.',
      },
      {
        id: 'sx-19',
        title: 'Executive Wireless Charging Deskpad',
        seasonTag: 'Graduation Tech',
        rating: '4.9 (205)',
        imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
        desc: 'Vegan leather surface with multi-device wireless charging. Keep essential tech organized and fully powered.',
      },
      {
        id: 'sx-20',
        title: 'Minimalist Aluminum Laptop Stand',
        seasonTag: 'Desk Workspace',
        rating: '4.9 (189)',
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop',
        desc: 'Foldable ergonomic stand for portable workspace. Optimize your posture wherever remote work takes you.',
      },
    ],
  },
];

export default function SeasonXSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 });
  const activeGroup = SEASON_GROUPS[activeTab];

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setPanelVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, [inView]);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SEASON_GROUPS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="season-x"
      style={{
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 50% 0%, rgba(54,244,164,0.12), transparent 34%), linear-gradient(180deg, #02090A 0%, #030712 100%)',
        color: '#FFFFFF',
        padding: '86px 24px 88px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: "'Inter', sans-serif",
      }}
      data-section-name="season-x"
      data-component-name="home-season-x-section"
      data-viewable-component="true"
      data-mode="dark"
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '34px',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 12px',
                color: '#36F4A4',
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Season X Store
            </p>
            <h2
              style={{
                margin: 0,
                maxWidth: '780px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4.7rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.045em',
              }}
            >
              Shop your seasonal products.
            </h2>
          </div>

          <p
            style={{
              maxWidth: '330px',
              margin: 0,
              color: '#A7B3B8',
              fontSize: '1rem',
              lineHeight: 1.65,
            }}
          >
            Curated drops for holidays, celebrations, gifting moments, and high-intent shopping seasons.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '26px',
          }}
          role="tablist"
          aria-label="Season X collections"
        >
          {SEASON_GROUPS.map((group, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={group.id}
                id={`season-x-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`season-x-content-${index}`}
                onClick={() => setActiveTab(index)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '42px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  border: isActive ? '1px solid rgba(54,244,164,0.7)' : '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: isActive ? 'rgba(54,244,164,0.14)' : 'rgba(255,255,255,0.045)',
                  color: isActive ? '#BDFBE0' : '#D1D5DB',
                  fontSize: '0.88rem',
                  fontWeight: 850,
                  cursor: 'pointer',
                }}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '2px',
                      width: '100%',
                      backgroundColor: '#36F4A4',
                      animation: 'seasonXTabProgress 4s linear forwards',
                    }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{group.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div
          style={{
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid rgba(21,112,118,0.42)',
            background:
              'linear-gradient(290.7deg, rgba(6,26,28,0.96) 58.79%, rgba(13,58,45,0.95) 100%)',
            boxShadow: '0 28px 70px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '18px',
              padding: '22px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div>
              <div
                style={{
                  color: '#36F4A4',
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Featured collection
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(1.55rem, 3vw, 2.35rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                }}
              >
                {activeGroup.label}
              </h3>
            </div>
          </div>

          <div
            className={[
              'relative transition-all duration-700 ease-out',
              panelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ padding: '24px' }}
          >
            <div
              key={activeGroup.id}
              role="tabpanel"
              id={`season-x-content-${activeTab}`}
              aria-labelledby={`season-x-tab-${activeTab}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '18px',
              }}
            >
              {activeGroup.products.map((prod, index) => (
                <article
                  key={prod.id}
                  className="seasonx-card-enter group"
                  tabIndex={0}
                  style={{
                    animationDelay: `${index * 120}ms`,
                    overflow: 'hidden',
                    minHeight: '420px',
                    borderRadius: '18px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: '#071517',
                    boxShadow: '0 18px 42px rgba(0,0,0,0.32)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      height: '260px',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                    }}
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.7s ease',
                      }}
                      className="group-hover:scale-105"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(3,7,18,0.62) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '16px',
                        bottom: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        minHeight: '34px',
                        padding: '0 12px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(3,7,18,0.72)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        backdropFilter: 'blur(10px)',
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: 850,
                      }}
                    >
                      <Star size={14} fill="#36F4A4" color="#36F4A4" aria-hidden="true" />
                      {prod.rating}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        color: '#36F4A4',
                        fontSize: '0.76rem',
                        fontWeight: 900,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      {prod.seasonTag}
                    </div>
                    <h4
                      style={{
                        margin: 0,
                        color: '#FFFFFF',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.12rem',
                        lineHeight: 1.25,
                        fontWeight: 900,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {prod.title}
                    </h4>
                    <p
                      style={{
                        margin: '10px 0 0',
                        color: '#A7B3B8',
                        fontSize: '0.92rem',
                        lineHeight: 1.55,
                      }}
                    >
                      {prod.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '0 24px 28px',
            }}
          >
            <button
              type="button"
              aria-label="Explore Season X"
              onClick={() => {
                const el = document.getElementById('season-x');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '54px',
                padding: '6px',
                borderRadius: '16px',
                border: '1px solid rgba(54,244,164,0.42)',
                backgroundColor: '#36F4A4',
                color: '#03110d',
                fontSize: '0.95rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 18px 42px rgba(54,244,164,0.24)',
              }}
            >
              <span style={{ padding: '0 18px' }}>Explore Season X</span>
              <span
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#03110d',
                  color: '#36F4A4',
                }}
              >
                <ArrowRight size={16} strokeWidth={2.75} aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
