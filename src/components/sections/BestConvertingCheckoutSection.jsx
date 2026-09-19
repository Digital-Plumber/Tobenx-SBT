import React, { useRef, useEffect } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 10: BestConvertingCheckoutSection
 * ──────────────────────────────────────────
 * The "world's best-converting checkout" section featuring:
 *  - 15% higher conversions stat + 250M+ shoppers stat
 *  - Shop Pay checkout UI image (animates up on scroll)
 *  - Blurred ellipse glow + floating Shop Pay badge
 *
 * All three image layers (glow ellipse, checkout UI, Shop Pay badge)
 * animate from opacity-0/translate-y-4 → opacity-100/translate-y-0
 * staggered by 330ms each when the section enters the viewport.
 */
export default function BestConvertingCheckoutSection() {
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.2 });

  // Stat counter animation state
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        statsRef.current = el;
      }}
      className="grid gap-y-2xl grid-cols-full text-section-dark-text overflow-x-clip bg-deep-pine pt-xl pb-0 sm:pt-4xl sm:pb-3xl xl:pb-4xl with-blurred-ellipse before:left-[-12.5%] before:rotate-[-20deg] before:top-[25%]"
      data-section-name="checkout-stats"
      data-component-name="home-stats-section"
      data-viewable-component="true"
      data-mode="dark"
    >
      <div className="container grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-gutter gap-y-xl items-center z-20">

        {/* ── Left column: Stats + copy ──────────────────────────── */}
        <div className="col-span-4 xs:col-span-4 md:col-span-6 col-start-1 flex flex-col gap-y-xl sm:col-span-4 sm:mb-0 mb-0">
          {/* Heading */}
          <div
            className={[
              'pb-0 transition-all duration-700',
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
          >
            <h3 className="richtext text-t3">The world's best-converting checkout</h3>
          </div>

          {/* Stats row */}
          <ul className="flex mt-4 space-x-4 md:mt-8 md:space-x-6">
            {/* Stat 1: 15% higher conversions */}
            <li
              className={[
                'border-t-[.5px] border-[#11352D] flex flex-col grow justify-between pt-2 w-1/2',
                'transition-all duration-700 delay-150',
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
            >
              <div className="[&_picture]:self-start flex font-mono items-center space-x-3 text-avocado uppercase">
                <picture data-component-name="image">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/94bf4a2851a16821c472f9e9cf1b5bb7.svg"
                  />
                </picture>
                <p className="richtext text-xs">Higher conversions</p>
              </div>
              <div dir="ltr" className="flex items-start mt-2 md:mt-4 whitespace-nowrap rtl:justify-end">
                <p className="richtext text-dsp lg:leading-[0.96] lg:tracking-normal" dir="auto">15</p>
                <p className="richtext text-t1 leading-[1.3] lg:leading-none lg:tracking-normal">%</p>
              </div>
            </li>

            {/* Stat 2: 250M+ shoppers */}
            <li
              className={[
                'border-t-[.5px] border-[#11352D] flex flex-col grow justify-between pt-2 w-1/2',
                'transition-all duration-700 delay-300',
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
            >
              <div className="[&_picture]:self-start flex font-mono items-center space-x-3 text-avocado uppercase">
                <picture data-component-name="image">
                  <img
                    alt=""
                    loading="lazy"
                    src="https://cdn.shopify.com/b/shopify-brochure2-assets/67583e03fbb03b2f502951e163150c8f.svg"
                  />
                </picture>
                <p className="richtext text-xs">High-intent shoppers</p>
              </div>
              <div dir="ltr" className="flex items-start mt-2 md:mt-4 whitespace-nowrap rtl:justify-end">
                <p className="richtext text-dsp lg:leading-[0.96] lg:tracking-normal" dir="auto">250M</p>
                <p className="richtext text-t1 lg:leading-none lg:tracking-normal leading-6 md:leading-10">+</p>
              </div>
            </li>
          </ul>

          {/* Pull-quote */}
          <div
            className={[
              'pb-0 transition-all duration-700 delay-[450ms]',
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
          >
            <p className="richtext text-body-base border-l-2 border-avocado pl-[1em] relative text-gray-b text-pretty xl:max-w-[85%]">
              <a data-component-name="cta-checkout" href="/ng/checkout">Shopify Checkout</a>
              {' '}with{' '}
              <a data-component-name="cta-shop-pay" href="/ng/shop-pay">Shop Pay</a>
              {' '}converts up to 50% higher than guest checkout and exposes your brand to hundreds of millions of buyers.
            </p>
          </div>

          <div
            className={[
              'text-gray-b text-body-sm text-[0.8125rem] transition-all duration-700 delay-500',
              statsVisible ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          >
            Based on external study with a Big Three global consulting firm in April, 2023.
          </div>
        </div>

        {/* ── Right column: Checkout UI imagery ─────────────────── */}
        <div className="col-span-4 xs:col-span-4 md:col-span-5 xs:col-start-1 md:col-start-8 flex flex-col gap-y-xl sm:col-span-3 sm:col-start-6">
          <div
            role="img"
            aria-label="Image of Shopify's streamlined checkout with Shop Pay, PayPal, and Apple Pay"
            className="relative px-10 py-18 lg:px-5 sm:py-0 overflow-hidden sm:overflow-visible sm:mt-12"
          >
            {/* Layer 1: blurred glow ellipse (animates in first) */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 sm:top-[45%] -translate-x-1/2 -translate-y-1/2 w-full lg:w-[140%] z-0 sm:max-md:w-[115%]"
            >
              <div
                className={[
                  'duration-1000 transition-all',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                ].join(' ')}
              >
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="1394"
                  height="1338"
                  srcSet={[
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=200 200w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=400 400w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=600 600w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=800 800w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=1000 1000w',
                    'https://cdn.shopify.com/b/shopify-brochure2-assets/edecfcf93c7ea58e8b257bfb6ee8a1ff.png?originalWidth=1394&originalHeight=1338&width=1200 1200w',
                  ].join(', ')}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>

            {/* Layer 2: Checkout UI screenshot (animates in 330ms after layer 1) */}
            <div
              aria-hidden="true"
              className={[
                'relative rounded-lg overflow-hidden z-10 max-w-[83%] mx-auto sm:max-w-none',
                'duration-1000 transition-all',
                inView ? 'opacity-100 translate-y-0 delay-[330ms]' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              <img
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532"
                alt=""
                loading="lazy"
                decoding="async"
                width="1920"
                height="1532"
                srcSet={[
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=200 200w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=400 400w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=600 600w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=800 800w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=1000 1000w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=1200 1200w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=1400 1400w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=1600 1600w',
                  'https://cdn.shopify.com/b/shopify-brochure2-assets/8362556036e5ec5a6ec4bfdd390f804b.png?originalWidth=1920&originalHeight=1532&width=1800 1800w',
                ].join(', ')}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>

            {/* Layer 3: Shop Pay badge (animates in last at 660ms) */}
            <div
              aria-hidden="true"
              className={[
                'absolute bg-[#5a31f4] bottom-[20%] px-3 py-2 right-7 rounded shadow-md z-20',
                'w-[80px] sm:-right-3 md:w-[100px] lg:px-4 lg:py-3 lg:right-0 lg:w-[130px]',
                'duration-1000 transition-all',
                inView ? 'opacity-100 translate-y-0 delay-[660ms]' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              <picture data-component-name="image">
                <img
                  alt="Shop Pay"
                  loading="lazy"
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/2fd05c36a60e97081de65d1568eb7ec0.svg"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
