import React, { useState, useEffect } from 'react';

/**
 * Tobenx SBT Section (Section 4)
 * ──────────────────────────────────────
 * H2: Everything your business needs to run smart
 * Sub: From your first website to full automation. We build the tech, you run the business.
 *
 * Carrier Container (matching AgenticChatSection):
 * - Top Left: 5 Overlapping Real Tech Brand Logos per service (Instagram, TikTok, AWS, GCP, Azure, ChatGPT, Gemini, Claude, Webflow, Shopify, etc.).
 * - Left: Auto-rotating text with smooth fade transition.
 * - Right: Video-like display updating seamlessly per active service.
 * - Zero emojis, zero long dashes.
 */

// ── BRAND LOGO VECTOR DEFINITIONS (100% reliable rendering) ──────────────────
const LOGOS = {
  // Website Design Stack
  shopify: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18.8 4.2c-.1 0-.3 0-.4.1L15 5.5 13.5.7c-.1-.3-.4-.5-.7-.5h-2c-.3 0-.6.2-.7.5L8.6 5.5l-3.4-1.2c-.1 0-.3-.1-.4-.1-.5 0-.9.4-.9.9 0 .1 0 .3.1.4l2.8 9.8L3 17.5c-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4l4.3-1.6 4 6c.2.3.5.4.8.4.3 0 .6-.1.8-.4l4-6 4.3 1.6c.1 0 .2.1.3.1.4 0 .8-.3.9-.7.2-.4 0-.9-.4-1.1l-3.8-2.2 2.8-9.8c.1-.1.1-.3.1-.4 0-.5-.4-.9-.9-.9z" fill="#95BF47"/>
    </svg>
  ),
  webflow: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#146EF5">
      <path d="M16.4 7.6L12 18.8h-3.4L4.2 7.6h3.4l2.7 7.7 2.7-7.7h3.4zM22.8 7.6L18.4 18.8h-3.4l2.7-7.7-2.7-3.5h3.4l1.4 4.2 1.4-4.2h1.6z"/>
    </svg>
  ),
  wordpress: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#21759B">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5z"/>
    </svg>
  ),
  react: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  nextjs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
      <circle cx="12" cy="12" r="11" fill="#000" stroke="#FFF" strokeWidth="1"/>
      <path d="M7 16V8h2.2l5.6 7.5V8H17v8h-2.2L9.2 8.5V16H7z" fill="#FFF"/>
    </svg>
  ),

  // AI Automation Stack
  chatgpt: (
    <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/bed4594e2c394553b2f03d9da43cb685.png?width=80" alt="ChatGPT" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  gemini: (
    <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/dfd1d6ffc02fdd7a562f8fb104e97815.svg" alt="Gemini" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  perplexity: (
    <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/8aca5aedd28634c235a5fd3a74ac1cd2.png?width=80" alt="Perplexity" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  claude: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#D97706">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.7 3.7-6.7 3.7-6.7-3.7L12 4.3zM5 9.1l6 3.3v6.7l-6-3.3V9.1zm14 6.7l-6 3.3v-6.7l6-3.3v6.7z"/>
    </svg>
  ),
  make: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#6D28D9">
      <rect x="3" y="3" width="7" height="7" rx="2"/>
      <rect x="14" y="3" width="7" height="7" rx="2"/>
      <rect x="14" y="14" width="7" height="7" rx="2"/>
      <rect x="3" y="14" width="7" height="7" rx="2"/>
    </svg>
  ),

  // Cloud & Infrastructure Stack
  aws: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
  ),
  gcp: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  azure: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  docker: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  cloudflare: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),

  // Digital Marketing Stack
  instagram: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#FFF" strokeWidth="2"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#833AB4"/>
          <stop offset="0.5" stopColor="#FD1D1D"/>
          <stop offset="1" stopColor="#FCB045"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  tiktok: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.35V9.12a6.34 6.34 0 0 0-5.06 6.18A6.34 6.34 0 1 0 15.3 9V7.47a8.27 8.27 0 0 0 4.29 1.22V6.69z"/>
    </svg>
  ),
  googleAds: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Ads" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  meta: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Meta" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
  linkedin: (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
  ),
};

const SERVICES_DATA = [
  {
    id: 'web-design',
    title: 'Website Design',
    badge: 'Popular',
    desc: 'Fast, mobile-first websites that convert visitors into customers. Built with industry-standard platforms like Webflow, WordPress, Shopify, React, and Next.js.',
    ctaText: 'See Website Plans →',
    ctaLink: '#contact',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/4ea4c67da04aea216ee972ec1b9bfb08.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png',
    partnerLogos: [
      { name: 'Webflow', icon: LOGOS.webflow },
      { name: 'WordPress', icon: LOGOS.wordpress },
      { name: 'Shopify', icon: LOGOS.shopify },
      { name: 'React', icon: LOGOS.react },
      { name: 'Next.js', icon: LOGOS.nextjs },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    badge: 'High ROI',
    desc: 'Automate bookings, customer replies, sales pipelines, content generation, and 24/7 support. Powered by top AI platforms like ChatGPT, Gemini, Perplexity, Claude, and Make.',
    ctaText: 'Automate My Business →',
    ctaLink: '#contact',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/66fdd68b91e6376507fbea99e7fc153f.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/59ee2f1c4ee7318b33100d4bf6685cca.png',
    partnerLogos: [
      { name: 'ChatGPT', icon: LOGOS.chatgpt },
      { name: 'Gemini', icon: LOGOS.gemini },
      { name: 'Perplexity', icon: LOGOS.perplexity },
      { name: 'Claude AI', icon: LOGOS.claude },
      { name: 'Make', icon: LOGOS.make },
    ],
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure Management',
    badge: 'Enterprise',
    desc: 'Secure cloud hosting, daily automated backups, SSL encryption, and 99.99% uptime on enterprise infrastructure including AWS, Google Cloud, Azure, Docker, and Cloudflare.',
    ctaText: 'Manage My Infrastructure →',
    ctaLink: '#contact',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/952301edf0f8a5a57f90d6a395dd4a10.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png',
    partnerLogos: [
      { name: 'AWS', icon: LOGOS.aws },
      { name: 'Google Cloud', icon: LOGOS.gcp },
      { name: 'Azure', icon: LOGOS.azure },
      { name: 'Docker', icon: LOGOS.docker },
      { name: 'Cloudflare', icon: LOGOS.cloudflare },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    badge: 'Growth',
    desc: 'Data-driven SEO, ad campaign management, and targeted social growth campaigns across Instagram, TikTok, Google Ads, Meta, and LinkedIn.',
    ctaText: 'Grow My Business →',
    ctaLink: '#contact',
    videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/43fcd120ac3678f9c736c5e136f19456.mp4',
    poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/59ee2f1c4ee7318b33100d4bf6685cca.png',
    partnerLogos: [
      { name: 'Instagram', icon: LOGOS.instagram },
      { name: 'TikTok', icon: LOGOS.tiktok },
      { name: 'Google Ads', icon: LOGOS.googleAds },
      { name: 'Meta', icon: LOGOS.meta },
      { name: 'LinkedIn', icon: LOGOS.linkedin },
    ],
  },
];

const AUTO_ROTATE_INTERVAL = 4500;

export default function SbtSection({
  sectionId = 'sbt',
  eyebrow,
  heading = 'Everything your business needs to run smart',
  subtitle = 'From your first website to full automation. We build the tech, you run the business.',
  services = SERVICES_DATA,
  bottomTitle = 'Ready to transform your business operations?',
  bottomText = 'Talk to our technical team today and get a tailored proposal within 24 hours.',
  primaryCta = { label: 'Book a Free Strategy Call', href: '#contact' },
  secondaryCta = {
    label: 'Chat With Us on WhatsApp',
    href: "https://wa.me/2348000000000?text=Hi%20Tobenx,%20I'd%20like%20to%20book%20a%20strategy%20call",
    external: true,
  },
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      triggerSlideChange((prev) => (prev + 1) % services.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [services.length]);

  const triggerSlideChange = (nextIndexOrFn) => {
    setIsFading(true);
    setTimeout(() => {
      if (typeof nextIndexOrFn === 'function') {
        setActiveIndex(nextIndexOrFn);
      } else {
        setActiveIndex(nextIndexOrFn);
      }
      setIsFading(false);
    }, 250);
  };

  const currentService = services[activeIndex % services.length];

  return (
    <section
      id={sectionId}
      style={{
        backgroundColor: '#030712',
        padding: isDesktop ? '100px 48px' : '64px 20px',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          {eyebrow && (
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#36F4A4',
                margin: '0 0 12px 0',
              }}
            >
              {eyebrow}
            </p>
          )}

          {/* H2 */}
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            {heading}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: '#9CA3AF',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* CARRIER CONTAINER (Matching AgenticChatSection frame) */}
        <div
          style={{
            backgroundColor: '#061A1C',
            backgroundImage: 'linear-gradient(290.7deg, #061A1C 58.79%, #0D3A2D 100%)',
            border: '1px solid rgba(21, 112, 118, 0.4)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)',
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            marginBottom: '40px',
            minHeight: isDesktop ? '480px' : 'auto',
          }}
        >
          {/* LEFT SIDE: Partner Brand Logos + Service Pills + Fading Text Content */}
          <div
            style={{
              padding: isDesktop ? '44px 40px' : '28px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRight: isDesktop ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
              borderBottom: isDesktop ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              zIndex: 2,
            }}
          >
            <div>
              {/* 5 OVERLAPPING REAL BRAND LOGOS STRIP (Fades with slide change) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px',
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? 'translateY(4px)' : 'translateY(0)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
              >
                {currentService.partnerLogos.map((logo, lIdx) => (
                  <div
                    key={lIdx}
                    style={{
                      position: 'relative',
                      zIndex: 5 - lIdx,
                      marginLeft: lIdx === 0 ? 0 : '-12px',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #061A1C',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      overflow: 'hidden',
                    }}
                    title={logo.name}
                  >
                    {logo.icon}
                  </div>
                ))}
              </div>

              {/* FADING TEXT CONTENT AREA */}
              <div
                style={{
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? 'translateY(6px)' : 'translateY(0)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
              >
                {/* Service Title */}
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    color: '#FFFFFF',
                    margin: '0 0 14px 0',
                    lineHeight: 1.2,
                  }}
                >
                  {currentService.title}
                </h3>

                {/* Service Copy */}
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                    color: '#D1D5DB',
                    lineHeight: 1.65,
                    margin: '0 0 24px 0',
                    maxWidth: '520px',
                  }}
                >
                  {currentService.desc}
                </p>
              </div>
            </div>

            {/* FADING CTA BUTTON */}
            <div
              style={{
                opacity: isFading ? 0 : 1,
                transition: 'opacity 0.25s ease',
              }}
            >
              <a
                href={currentService.ctaLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#36F4A4',
                  color: '#061A1C',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(54, 244, 164, 0.25)',
                }}
              >
                <span>{currentService.ctaText}</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Video Display Frame (Updating per service) */}
          <div
            style={{
              padding: isDesktop ? '32px' : '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '260px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                backgroundColor: '#000000',
              }}
            >
              <video
                key={currentService.id}
                autoPlay
                loop
                muted
                playsInline
                poster={currentService.poster}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: isFading ? 0.3 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <source src={currentService.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* SECTION BOTTOM CTAS */}
        <div
          style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            backgroundColor: '#09101D',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '28px 32px',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '1.2rem',
                margin: '0 0 6px 0',
                color: '#FFFFFF',
              }}
            >
              {bottomTitle}
            </h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9CA3AF' }}>
              {bottomText}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              gap: '12px',
              width: isDesktop ? 'auto' : '100%',
            }}
          >
            {/* Primary CTA */}
            <a
              href={primaryCta.href}
              style={{
                backgroundColor: '#10B981',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{primaryCta.label}</span>
              <span>→</span>
            </a>

            {/* Secondary WhatsApp CTA */}
            <a
              href={secondaryCta.href}
              target={secondaryCta.external ? '_blank' : undefined}
              rel={secondaryCta.external ? 'noopener noreferrer' : undefined}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{secondaryCta.label}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
