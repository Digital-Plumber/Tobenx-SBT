import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import GlobeCanvas from '../common/GlobeCanvas';

/**
 * Section 4: GrowAroundTheWorld
 * ─────────────────────────────
 * Features:
 *  - 13-country flag carousel (auto-rotates every 2.5 s or on click)
 *  - 3D Rotating World Globe background behind cards
 *  - Localized "Buy now" card stack (card-left, card-hero, card-right) rotates with country
 *  - Price pill floats up into view when section enters viewport
 *  - Checkout window image animates in on scroll
 */

const COUNTRIES = [
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/e9b1787b05cc3141b4aec50b024ad68c.png', label: 'United States', emoji: '🇺🇸', price: 'US$125.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/c87d3ea84d6b07cc56c44653ed8911f5.png', label: 'United Kingdom', emoji: '🇬🇧', price: '£99.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/b1debcf2c15172ecfe86b0d30d664ad3.png', label: 'Canada', emoji: '🇨🇦', price: 'CA$165.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7fd378060668fbb746a61d562bd40dc9.png', label: 'Australia', emoji: '🇦🇺', price: 'AU$190.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/48c3fa7e8d48a8a316f818f7ab8c3335.png', label: 'Germany', emoji: '🇩🇪', price: '€115.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7aa525b00d5c1f6ca1db1f7d8030e493.png', label: 'France', emoji: '🇫🇷', price: '€115.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/dfe62984c290cac4d9ab1f6d64d56990.png', label: 'Japan', emoji: '🇯🇵', price: '¥18,000' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/0f899d067f8fd6d3de6df6dc072a9f95.png', label: 'Brazil', emoji: '🇧🇷', price: 'R$650.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/ea64c5d6352869143ca123c102a436e8.png', label: 'India', emoji: '🇮🇳', price: '₹10,400' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/dc2669381c95b83588445a4aa4401214.png', label: 'Spain', emoji: '🇪🇸', price: '€115.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/4142eddf07530c57040f91cc1bb2b5d0.png', label: 'Netherlands', emoji: '🇳🇱', price: '€115.00' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/d7f23791c6047e0be843461f636db279.png', label: 'Nigeria', emoji: '🇳🇬', price: '₦195,000' },
  { flag: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7a63b5c2087a9ad7f05c4a6721cbf726.png', label: 'South Africa', emoji: '🇿🇦', price: 'R2,300' },
];

const CARD_IMAGES = [
  'https://cdn.shopify.com/b/shopify-brochure2-assets/966c4fe15bc05cfe25422b7c25e981ec.jpg?originalWidth=812&originalHeight=904',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/b5695aa84d13d681040a1f792102db4c.jpg?originalWidth=812&originalHeight=904',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/8c2c23882c250ec4a2b9e4e8bb2db7ed.jpg?originalWidth=812&originalHeight=904',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/bc86cf8bb923173525f0463b4ede64f3.jpg?originalWidth=812&originalHeight=904',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/2f7cc9cc755fdf8b468557953320b3f5.jpg?originalWidth=812&originalHeight=904',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/34c79ed6726fca9045a7e6549b56a204.jpg?originalWidth=812&originalHeight=904',
];

function wrap(idx, len) {
  return ((idx % len) + len) % len;
}

function FlagItem({ country, isActive, onClick }) {
  return (
    <div className="aspect-square shrink-0 w-10 sm:w-16 md:w-12 lg:w-16 m-1 sm:m-2 md:m-3">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Select ${country.label}`}
        className={[
          'relative flex justify-center items-center w-full h-full rounded-xl cursor-pointer transition-all duration-300',
          isActive ? 'bg-white/50 ring-2 ring-[#36F4A4]' : 'bg-white/10 hover:bg-white/20',
        ].join(' ')}
      >
        <span className="sr-only">{country.label}</span>
        <img
          alt=""
          className={[
            'relative z-[1] w-6 h-[1.1rem] sm:w-10 sm:h-[1.8rem] md:w-8 md:h-[1.4rem] lg:w-10 lg:h-[1.8rem] transition-all duration-300',
            isActive ? 'opacity-100 scale-110' : 'opacity-60',
          ].join(' ')}
          loading="lazy"
          src={country.flag}
        />
      </button>
    </div>
  );
}

function ProductCard({ imgSrc, role, pillEmoji, pillPrice, pillVisible }) {
  const zByRole = { left: 'z-20', hero: 'z-30', right: 'z-10' };

  return (
    <div
      className={[
        'card bg-white absolute inset-0 w-full h-full flex flex-col overflow-hidden',
        'p-2 gap-2 rounded-md sm:p-3 sm:gap-3 md:rounded-lg lg:p-4 shadow-2xl',
        'pointer-events-none select-none opacity-100 transition-all duration-500',
        zByRole[role],
      ].join(' ')}
    >
      <div className="rounded w-full grow relative overflow-hidden bg-deep-green/20">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={imgSrc}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-1 min-h-10 md:min-h-12 lg:min-h-14 text-body-sm flex items-center rounded bg-[#157076] shadow-md">
        <span className="block mx-auto text-white font-medium">Buy now</span>
      </div>

      {role === 'hero' && (
        <div
          className={[
            'absolute bg-white rounded-full flex items-center text-black z-40 shadow-2xl border border-gray-200',
            'p-1.5 pr-4 gap-2',
            'top-[45%] left-[35%] sm:top-[15%] sm:left-[70%] md:pr-6 md:left-[46%] md:top-[40%] lg:left-[80%] xl:left-[calc(100%+1rem)]',
            'transition-all duration-700',
            pillVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          <div className="aspect-square bg-emerald-100 rounded-full flex items-center justify-center h-8 w-8 text-base">
            {pillEmoji}
          </div>
          <span className="flex text-sm font-semibold whitespace-nowrap">
            <span>Order for&nbsp;</span>
            <span className="text-[#157076]">{pillPrice}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default function GrowAroundTheWorld() {
  const [activeIdx, setActiveIdx] = useState(11); // Default Nigeria
  const [pillVisible, setPillVisible] = useState(false);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const [inViewRef, inView] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setCheckoutVisible(true), 100);
      setTimeout(() => setPillVisible(true), 700);
    }
  }, [inView]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => wrap(prev + 1, COUNTRIES.length));
    }, 2500);
    return () => clearInterval(id);
  }, [paused]);

  const leftImg  = CARD_IMAGES[wrap(activeIdx - 1, CARD_IMAGES.length)];
  const heroImg  = CARD_IMAGES[wrap(activeIdx,     CARD_IMAGES.length)];
  const rightImg = CARD_IMAGES[wrap(activeIdx + 1, CARD_IMAGES.length)];

  const activeCountry = COUNTRIES[activeIdx];

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        inViewRef.current = el;
      }}
      className="grid gap-y-2xl grid-cols-full pb-2xl bg-section-dark-bg text-section-dark-text pt-2xl"
      data-section-name="local-and-global"
    >
      <div className="container">
        <div className="pb-xl">
          <h3 className="richtext text-t2 text-white">Grow around the world</h3>
        </div>

        <div
          className="rounded-2xl overflow-hidden flex flex-col justify-between border-t border-[#157076]/40 shadow-2xl bg-[#061A1C] relative p-lg md:gap-md lg:pt-md min-h-[600px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── 3D Rotating Globe Background ────────────────────── */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0 flex items-center justify-center overflow-hidden">
            <GlobeCanvas width={700} height={700} />
          </div>

          {/* Upper content row */}
          <div className="z-10 grow relative">
            <div className="w-full flex flex-col gap-md items-center sm:justify-between md:flex-row xl:relative">
              {/* Left column: flag carousel + card stack */}
              <div className="w-full flex flex-col gap-md justify-around items-center sm:flex-row sm:pl-[12px] md:h-96 md:w-[50%] md:pl-0 lg:w-[55%] xl:w-1/2">
                <div id="flags-carousel" className="flags-carousel max-w-full py-2">
                  <div className="flex w-full sm:block sm:w-auto sm:h-full">
                    {COUNTRIES.map((country, idx) => (
                      <FlagItem
                        key={country.label}
                        country={country}
                        isActive={idx === activeIdx}
                        onClick={() => {
                          setActiveIdx(idx);
                          setPaused(true);
                          setTimeout(() => setPaused(false), 6000);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* 3-D card stack */}
                <div className="relative mx-auto aspect-[165/217] w-[165px] h-[217px] sm:aspect-[213/280] sm:w-[213px] sm:h-[280px] lg:aspect-[236/310] lg:w-[236px] lg:h-[310px]">
                  <ProductCard imgSrc={leftImg} role="left" pillEmoji={activeCountry.emoji} pillPrice={activeCountry.price} pillVisible={pillVisible} />
                  <ProductCard imgSrc={heroImg} role="hero" pillEmoji={activeCountry.emoji} pillPrice={activeCountry.price} pillVisible={pillVisible} />
                  <ProductCard imgSrc={rightImg} role="right" pillEmoji={activeCountry.emoji} pillPrice={activeCountry.price} pillVisible={pillVisible} />
                </div>
              </div>

              {/* Right column: Shopify checkout window */}
              <div className="flex items-center justify-center xl:w-1/2">
                <div
                  className={[
                    'relative w-64 lg:w-80 aspect-[624/674] flex justify-center items-center z-10 overflow-hidden',
                    'transition-all duration-700 ease-in-out',
                    checkoutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                  ].join(' ')}
                >
                  <img
                    className="object-contain w-full h-full drop-shadow-2xl"
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/e2171748bad7b4de048e4444e0128486.png?originalWidth=859&originalHeight=751"
                    alt="Shopify checkout"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copy */}
          <div className="z-10 pt-lg max-w-[65ch]">
            <h4 className="richtext text-t7 mb-sm text-white font-semibold">Sell across borders</h4>
            <p className="richtext text-body-base text-gray-300">
              Shopify takes the complexity out of international selling, from delivering products faster and more affordably to localising your experience with{' '}
              <a href="/ng/international" className="text-[#36F4A4] underline hover:no-underline font-medium">
                Shopify Markets
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
