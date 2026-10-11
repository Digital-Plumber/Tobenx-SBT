import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you need',
    desc: 'Website, automation, skills, or hire.',
  },
  {
    num: '02',
    title: 'We build, train, or match you',
    desc: 'Fast, practical delivery focused on outcomes.',
  },
  {
    num: '03',
    title: 'You grow. We support you.',
    desc: 'Ongoing support and optimisation.',
  },
];

const IMAGES = [
  'https://cdn.shopify.com/b/shopify-brochure2-assets/009e0d56f84770923ca3b27f2316b73b.jpg?originalWidth=575&originalHeight=794',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg?originalWidth=575&originalHeight=745',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/e01306d7c9407822b98b4558ae74b768.jpg?originalWidth=575&originalHeight=794',
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 900 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((current) => (current + 1) % STEPS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="how-it-works"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 50% 0%, rgba(75,85,99,0.34), transparent 38%), linear-gradient(180deg, #131720 0%, #030712 68%)',
        color: '#FFFFFF',
        padding: isDesktop ? '90px 48px 84px' : '64px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <h2
          style={{
            margin: isDesktop ? '0 0 54px' : '0 0 38px',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(2.7rem, 6vw, 5.4rem)',
            lineHeight: 0.96,
            fontWeight: 900,
            letterSpacing: '-0.045em',
          }}
        >
          Get started in 3 steps
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '0.9fr 1.1fr' : '1fr',
            gap: isDesktop ? '76px' : '42px',
            alignItems: 'center',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'relative',
              minHeight: isDesktop ? '390px' : '300px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: isDesktop ? 'flex-start' : 'center',
              gap: isDesktop ? '24px' : '14px',
            }}
          >
            <div
              style={{
                width: isDesktop ? '45%' : '43%',
                maxWidth: '250px',
                aspectRatio: '0.72',
                borderRadius: '18px',
                overflow: 'hidden',
                transform: 'translateY(-34px)',
                boxShadow: '0 26px 52px rgba(0,0,0,0.42)',
              }}
            >
              <img
                src={IMAGES[0]}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div
              style={{
                width: isDesktop ? '45%' : '43%',
                maxWidth: '250px',
                aspectRatio: '0.72',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 26px 52px rgba(0,0,0,0.42)',
              }}
            >
              <img
                src={IMAGES[activeStep]}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <div>
            <div role="list" aria-label="Get started steps">
              {STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.num}
                    type="button"
                    role="listitem"
                    onClick={() => setActiveStep(index)}
                    aria-current={isActive ? 'step' : undefined}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isDesktop ? '62px 1fr' : '48px 1fr',
                      width: '100%',
                      alignItems: 'start',
                      gap: '18px',
                      padding: isDesktop ? '18px 0' : '16px 0',
                      border: 0,
                      borderBottom: index === STEPS.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.28)',
                      background: 'transparent',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        color: isActive ? '#36F4A4' : 'rgba(255,255,255,0.72)',
                        fontSize: '1.12rem',
                        fontWeight: 900,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.num}
                    </span>
                    <span>
                      <span
                        style={{
                          display: 'block',
                          color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.82)',
                          fontSize: 'clamp(1.65rem, 3.3vw, 3rem)',
                          lineHeight: 1.1,
                          fontWeight: 700,
                          letterSpacing: '-0.035em',
                        }}
                      >
                        {step.title}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          maxHeight: isActive ? '70px' : '0',
                          opacity: isActive ? 1 : 0,
                          overflow: 'hidden',
                          marginTop: isActive ? '10px' : '0',
                          color: '#A7B3B8',
                          fontSize: '1rem',
                          lineHeight: 1.65,
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {step.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: isDesktop ? '42px' : '30px',
                minHeight: '54px',
                padding: '0 22px',
                borderRadius: '999px',
                backgroundColor: '#FFFFFF',
                color: '#071517',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 900,
                boxShadow: '0 18px 40px rgba(0,0,0,0.3)',
              }}
            >
              <span>Start Now</span>
              <ArrowRight size={16} strokeWidth={2.7} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
