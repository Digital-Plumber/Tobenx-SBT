import React, { useEffect, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, FileText, Search, UserRoundCheck } from 'lucide-react';

const JOBIN_FEATURES = [
  {
    title: 'SoftHire',
    desc: 'Hire a vetted developer for your solo project.',
    cta: 'Hire a Developer',
    icon: UserRoundCheck,
    accent: '#36F4A4',
  },
  {
    title: 'iWork',
    desc: 'Sign up as a freelancer, get matched with clients.',
    cta: 'Join as Freelancer',
    icon: BriefcaseBusiness,
    accent: '#7DD3FC',
  },
  {
    title: 'Find Jobs',
    desc: 'Browse global job openings.',
    cta: 'Browse Jobs',
    icon: Search,
    accent: '#FBBF24',
  },
  {
    title: 'CV Builder',
    desc: 'Build a standout CV - manually or with AI.',
    cta: 'Build My CV',
    icon: FileText,
    accent: '#C084FC',
  },
];

export default function JobInSection() {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 960 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="jobin"
      style={{
        backgroundColor: '#030712',
        color: '#FFFFFF',
        padding: isDesktop ? '104px 48px' : '68px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isDesktop ? '52px' : '36px' }}>
          <p
            style={{
              margin: '0 0 14px 0',
              color: '#36F4A4',
              fontSize: '0.78rem',
              fontWeight: 900,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            JobIn Talent Network
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.55rem, 6vw, 5.2rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.045em',
            }}
          >
            Hire fast. Get hired faster.
          </h2>
          <p
            style={{
              margin: '22px auto 0',
              maxWidth: '640px',
              color: '#9CA3AF',
              fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
              lineHeight: 1.65,
            }}
          >
            One platform, four ways to work.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '0.9fr 1.35fr' : '1fr',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid rgba(21,112,118,0.48)',
            backgroundColor: '#061A1C',
            backgroundImage: 'linear-gradient(290.7deg, #061A1C 58.79%, #0D3A2D 100%)',
            boxShadow: '0 28px 70px rgba(0,0,0,0.52)',
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: isDesktop ? '44px 40px' : '30px 24px',
              minHeight: isDesktop ? '560px' : 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '34px',
              borderRight: isDesktop ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom: isDesktop ? 'none' : '1px solid rgba(255,255,255,0.1)',
              background:
                'radial-gradient(circle at 12% 8%, rgba(54,244,164,0.24), transparent 34%), linear-gradient(150deg, rgba(13,58,45,0.92), rgba(6,26,28,0.98) 58%, rgba(3,7,18,1))',
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  maxWidth: '440px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 3.5vw, 3.1rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                }}
              >
                Work opportunities, organized for action.
              </h3>
              <p
                style={{
                  margin: '20px 0 0',
                  maxWidth: '430px',
                  color: '#D1D5DB',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                }}
              >
                Hire vetted builders, join as a freelancer, browse roles, or create a sharper CV with AI support.
              </p>
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: 'fit-content',
                minHeight: '56px',
                padding: '6px',
                borderRadius: '16px',
                backgroundColor: '#36F4A4',
                color: '#03110d',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: '0.95rem',
                boxShadow: '0 18px 42px rgba(54,244,164,0.25)',
              }}
            >
              <span style={{ padding: '0 18px' }}>Explore JobIn</span>
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#03110d',
                  color: '#36F4A4',
                }}
              >
                <ArrowRight size={18} strokeWidth={2.8} aria-hidden="true" />
              </span>
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? 'repeat(2, minmax(0, 1fr))' : '1fr',
              gap: '1px',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
          >
            {JOBIN_FEATURES.map(({ title, desc, cta, icon: Icon, accent }) => (
              <article
                key={title}
                style={{
                  minHeight: isDesktop ? '280px' : '230px',
                  padding: isDesktop ? '34px' : '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#071517',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accent,
                      border: `1px solid ${accent}55`,
                      backgroundColor: 'rgba(255,255,255,0.045)',
                      boxShadow: `0 16px 36px ${accent}18`,
                      marginBottom: '24px',
                    }}
                  >
                    <Icon size={24} strokeWidth={2.35} aria-hidden="true" />
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.55rem',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: '12px 0 0',
                      maxWidth: '280px',
                      color: '#B8C5C9',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: 'fit-content',
                    minHeight: '44px',
                    padding: '0 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.055)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                  }}
                >
                  <span>{cta}</span>
                  <ArrowRight size={15} strokeWidth={2.7} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
