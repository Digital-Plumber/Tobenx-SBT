import React, { useState, useEffect } from 'react';

/**
 * Section 0: HeroSection
 * ───────────────────────
 * The hero section featuring:
 *  - Full-viewport background video (Shopify merchants celebrating & working)
 *  - Animated headline: "Be the next [cycling word]"
 *  - "Start for free" CTA button
 *  - "Why we build Shopify" video modal trigger button
 */

const PHRASES = [
  { words: ['AI', 'all-star'] },
  { words: ['household', 'name'] },
  { words: ['solo-preneur'] },
  { words: ['category', 'creator'] },
  { words: ['global', 'empire'] },
  { words: ['store', 'they', 'line', 'up', 'for'] },
  { words: ['big', 'thing'] },
];

const PHRASE_DURATION = 2800;
const TRANSITION_MS = 450;

export default function HeroSection({ onOpenVideo }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [outgoing, setOutgoing] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setOutgoing(true);
      const switchTimer = setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % PHRASES.length);
        setOutgoing(false);
      }, TRANSITION_MS);

      return () => clearTimeout(switchTimer);
    }, PHRASE_DURATION);

    return () => clearTimeout(showTimer);
  }, [activeIdx]);

  const phrase = PHRASES[activeIdx];

  return (
    <section
      className="grid grid-cols-full pb-0 bg-section-dark-bg text-section-dark-text relative pt-hero-top gap-y-0 after:relative after:z-10 after:inset-x-0 after:bottom-[-1px] after:bg-coal-black after:h-3xl after:mt-auto after:rounded-t-5xl after:box-content after:shadow-hero-ab-card-edge overflow-hidden"
      data-section-name="hero"
      data-component-name="hero"
      data-viewable-component="true"
      data-mode="dark"
    >
      {/* ── Background Hero Video (Autoplay loop) ───────────────── */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080&width=828"
          className="w-full h-full object-cover object-center scale-105"
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
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
      </div>

      {/* ── Content container ─────────────────────────────────── */}
      <div className="container pt-4xl pb-xl md:pb-3xl z-20 flex flex-col justify-between gap-y-lg sm:min-h-min sm:justify-end sm:pt-[165px] lg:pt-[225px] max-sm:!max-w-[calc(100vw-(var(--margin)*2))] overflow-hidden relative">
        <div>
          <div>
            {/* ── Accessible static headline (SEO) ──────────────── */}
            <div className="sr-only js-disabled:not-sr-only motion-reduce:not-sr-only">
              <h1 className="richtext text-dsp mb-lg md:mb-2xl tracking-[-0.02em]">
                Be the next<br />AI all-star
              </h1>
            </div>

            {/* ── Animated cycling headline ─────────────────────── */}
            <div aria-hidden="true" className="motion-reduce:hidden js-disabled:hidden">
              <div className="richtext text-dsp tracking-[-0.02em]">Be the next</div>

              <div className="relative">
                <h2
                  className="text-dsp min-h-32 sm:min-h-0 opacity-0 user-select-none pointer-events-none mb-lg tracking-[-0.02em]"
                  aria-hidden="true"
                >
                  store they line up for
                </h2>

                <div
                  className="text-dsp lg:tracking-[-0.02em] absolute top-0 pt-2 flex flex-wrap items-start justify-start gap-0"
                  key={activeIdx}
                >
                  {phrase.words.map((word, i) => (
                    <span key={word} className="inline-block overflow-hidden pb-2 -mt-2">
                      <span
                        className={[
                          'inline-block m-0 p-0 transition-opacity-transform duration-[0.45s] ease-heading-transition-ease hyphens-auto',
                          outgoing
                            ? '-translate-y-full opacity-0'
                            : 'translate-y-0 opacity-100',
                        ].join(' ')}
                        style={{ transitionDelay: `${i * 0.15}s` }}
                      >
                        {word}
                        {i < phrase.words.length - 1 ? '\u00a0' : ''}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Subheadline ──────────────────────────────────────── */}
            <p className="richtext text-t6 w-full sm:w-1/2 lg:w-1/3 text-balance tracking-[-0.02em] text-gray-200 drop-shadow-md">
              Dream big and build fast on Shopify. The world's best commerce platform.
            </p>
          </div>
        </div>

        {/* ── CTA Button row ──────────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-sm flex-wrap sm:justify-start gap-x-md">
            <div>
              <a
                href="https://admin.shopify.com/signup?locale=en-NG&language=en"
                className="self-center overflow-hidden max-w-full px-button-px py-button-py ring-inset rounded-button font-button-font font-button-weight tracking-button-tracking transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 md:px-button-lg-px md:py-button-lg-py text-button-lg-size border-2 text-button-dark-primary-text bg-button-dark-primary-bg border-button-dark-primary-border hover:bg-white hover:text-black hover:border-white block w-full text-center sm:w-auto shadow-lg"
              >
                Start for free
              </a>
            </div>

            {/* "Why we build Shopify" video modal button */}
            <button
              type="button"
              onClick={() => onOpenVideo?.({
                videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/0ffe48edaea0731ab1eebcd01d717886.mp4',
                webmSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/d74c631ce9e1ade89bf595c486f5d502.webm',
                title: 'Why we build Shopify',
              })}
              className="group flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition-all cursor-pointer shadow-md"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black group-hover:scale-110 transition-transform">
                ▶
              </span>
              <span>Why we build Shopify</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
