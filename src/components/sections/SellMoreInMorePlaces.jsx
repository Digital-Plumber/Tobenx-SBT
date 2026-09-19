import React, { useRef } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 3: SellMoreInMorePlaces
 * ─────────────────────────────────
 * "Sell more in more places" — three commerce channel cards:
 *
 * Top card (full-width):
 *  card-ose — Shopify Online Store Editor demo video (autoplay muted loop)
 *
 * Bottom row (3 equal cards):
 *  card-channels — Social & Marketplace channels (screenshot image)
 *  card-pos      — Shopify POS hardware (device image)
 *  card-checkout — Shop app (device mockup image)
 *
 * All cards use the authentic Shopify `bg-deep-green` + `border-hairline-green`
 * design system. Cards animate in (opacity + translate) on scroll.
 */
export default function SellMoreInMorePlaces() {
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-2xl grid-cols-full pb-2xl bg-section-dark-bg text-section-dark-text pt-2xl"
      data-section-name="online-and-in-person"
      data-component-name="home-online-section"
      data-viewable-component="true"
      data-mode="dark"
    >
      <div className="container">
        {/* ── Section heading ──────────────────────────────────────── */}
        <div className="pb-2xl">
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline">
            <div className="w-full pb-md sm:w-2/3 lg:w-3/5 sm:pb-0 sm:pr-lg">
              <h3 className="richtext text-t2 inline-block text-pretty">Sell more in more places</h3>
            </div>
            <div className="w-full sm:w-1/3 lg:w-2/5">
              <p className="richtext text-body-base text-gray-c text-pretty inline-block">
                <a data-component-name="cta-online" href="/ng/online">Get a stunning store</a>
                {' '}that's built to sell. Design fast with AI. Pick a prebuilt theme. Or go totally custom.
              </p>
            </div>
          </div>
        </div>

        {/* ── Top card: Online Store Editor video ──────────────────── */}
        <div className="grid grid-cols-1 gap-md md:gap-sm xl:gap-md mb-md md:mb-sm xl:mb-md">
          <div
            data-component-name="card-ose"
            className={[
              'bg-[linear-gradient(0deg,#061518_20%,#0a2c30)] rounded-xl overflow-hidden',
              'flex flex-col justify-between border-t border-hairline-green shadow-card',
              'transition-all duration-700',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ containerType: 'inline-size' }}
          >
            {/*
             * OSE video — the Shopify Online Store Editor walkthrough.
             * Autoplay + muted + loop so it plays without user interaction.
             * This is the authenticated visual from cdn.shopify.com.
             */}
            <div
              className="z-10 relative mx-auto w-[calc(100%-40px)] sm:w-3/4 md:w-[calc(100%-96px)]"
              style={{ aspectRatio: '2291/1080' }}
            >
              <video
                className="w-full h-full object-cover rounded-t-lg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Shopify Online Store Editor demo"
              >
                {/* WebM for Chrome/Firefox */}
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/90ccaa3754ed4c1f485353f1853faaa9.webm"
                  type="video/webm; codecs=av01.0.08M.08"
                />
                {/* MP4 for Safari */}
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/952301edf0f8a5a57f90d6a395dd4a10.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        {/* ── Bottom row: Channels / POS / Shop cards ──────────────── */}
        <div className="grid grid-cols-1 gap-md md:gap-sm xl:gap-md md:grid-cols-3 mb-0">

          {/* Card 1: Sell on every channel */}
          <div
            data-component-name="card-channels"
            className={[
              'relative rounded-xl overflow-hidden flex flex-col min-h-[400px] sm:min-h-0',
              'justify-between border-t border-hairline-green shadow-card bg-deep-green',
              'transition-all duration-700 delay-100',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ containerType: 'inline-size' }}
          >
            {/* Decorative glow */}
            <div className="absolute z-0 glow-0 top-[18cqw] left-[4cqw] w-[84cqw] h-[70cqw] rounded-[340px] transform scale-160 rotate-[53deg] bg-[radial-gradient(#1c4e50,#133032_34%,#091a1c_70%,#061a1c_100%)]" />

            {/* Channel icons montage image */}
            <div className="z-10 grow relative" style={{ aspectRatio: 'auto' }}>
              <img
                className="rounded-b-lg object-cover w-full h-full"
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936"
                alt=""
                loading="lazy"
                decoding="async"
                width="1632"
                height="1936"
                srcSet={[
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=200 200w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=400 400w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=600 600w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=800 800w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=1000 1000w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=1200 1200w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=1400 1400w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/ce7af876194544c78d798afdeab18654.png?originalWidth=1632&originalHeight=1936&width=1600 1600w',
                ].join(', ')}
                sizes="(min-width: 900px) 33vw, 100vw"
              />
            </div>
            <div>
              <div className="z-10 px-lg pb-lg pt-md sm:pt-lg max-w-[65ch] text-pretty [transform:translateZ(0)]">
                <h4 className="richtext text-t7 mb-sm md:mb-xs text-pretty">Sell on every channel</h4>
                <p className="richtext text-body-base text-gray-a">
                  Put your products where shoppers search, shop, and scroll with{' '}
                  <a data-component-name="cta-channels" href="/ng/channels">multichannel integration</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Shopify POS */}
          <div
            data-component-name="card-pos"
            className={[
              'rounded-xl overflow-hidden flex flex-col min-h-[400px] sm:min-h-0',
              'justify-between border-t border-hairline-green shadow-card bg-deep-green relative',
              'transition-all duration-700 delay-200',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ containerType: 'inline-size' }}
          >
            {/* Decorative glow */}
            <div className="absolute z-0 glow-0 top-[17cqw] left-[20cqw] w-[83cqw] h-[75cqw] rounded-[340px] scale-180 bg-[radial-gradient(#3E4646,#0f3335_40%,#061a1c_70%,#061a1c_100%)]" />

            {/* POS device image */}
            <div className="z-10 grow relative" style={{ aspectRatio: 'auto' }}>
              <div className="sm:h-[600px] md:h-full flex items-center justify-center">
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532"
                  alt="Shopify POS hardware device"
                  className="w-full h-full object-contain object-bottom"
                  loading="lazy"
                  decoding="async"
                  width="1920"
                  height="1532"
                  srcSet={[
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=200 200w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=400 400w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=600 600w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=800 800w',
                  ].join(', ')}
                  sizes="(min-width: 900px) 33vw, 100vw"
                />
              </div>
            </div>
            <div>
              <div className="z-10 px-lg pb-lg pt-md sm:pt-lg max-w-[65ch] text-pretty [transform:translateZ(0)]">
                <h4 className="richtext text-t7 mb-sm md:mb-xs text-pretty">Sell face to face</h4>
                <p className="richtext text-body-base text-gray-a">
                  Sell in person and keep online and in-store sales in sync with{' '}
                  <a data-component-name="cta-pos" href="/ng/pos">Shopify POS</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Shop App (250M+ shoppers) */}
          <div
            data-component-name="card-checkout"
            className={[
              'relative rounded-xl overflow-hidden flex flex-col min-h-[400px] sm:min-h-0',
              'justify-between border-t border-hairline-green shadow-card bg-deep-green pt-lg md:pt-0',
              'transition-all duration-700 delay-300',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ containerType: 'inline-size' }}
          >
            {/* Decorative glow */}
            <div className="absolute z-0 glow-0 top-[32cqw] left-[6cqw] w-[84cqw] h-[84cqw] rounded-[340px] scale-160 bg-[radial-gradient(#2a4344,rgb(6_26_28)_70%,#061a1c)]" />

            {/* Shop Pay checkout mockup */}
            <div className="z-10 grow relative" style={{ aspectRatio: 'auto' }}>
              <div className="absolute size-full sm:static">
                <div
                  className="relative size-full mx-auto"
                  data-nosnippet="true"
                  style={{ aspectRatio: '9/11' }}
                >
                  <img
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338"
                    alt="Shop app checkout interface"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width="1394"
                    height="1338"
                    srcSet={[
                      'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=200 200w',
                      'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=400 400w',
                      'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=600 600w',
                      'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=800 800w',
                    ].join(', ')}
                    sizes="(min-width: 900px) 33vw, 100vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="z-10 px-lg pb-lg pt-md sm:pt-lg max-w-[65ch] text-pretty [transform:translateZ(0)]">
                <h4 className="richtext text-t7 mb-sm md:mb-xs text-pretty">Sell to 250M+ shoppers with Shop</h4>
                <p className="richtext text-body-base text-gray-a">
                  Automatically show up on the{' '}
                  <a data-component-name="cta-shop" href="/ng/shop">Shop app</a>.
                  {' '}Reach millions of pre-verified shoppers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
