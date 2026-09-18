import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 12: BuildFastSection
 * ─────────────────────────────
 * "Build fast on Shopify" — the final conversion section featuring:
 *  - 3-step onboarding list (01 Add product / 02 Customize / 03 Set up payments)
 *    • Active step highlights white, inactive dimmed
 *    • Steps auto-rotate every 2.5s
 *    • Clicking a step makes it active immediately
 *  - Two tall product photo columns (left & right) that cross-fade images
 *    synced to the active step
 *  - "Take your shot" CTA button
 *
 * Each step maps to a pair of images in the left/right columns.
 * When inView = false the columns start as opacity-0/translate-y-4 (hidden).
 * On entering viewport they slide up.
 */

// ─── Step definitions ─────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    label: 'Add your first product',
    // left column image for step 1
    leftImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/009e0d56f84770923ca3b27f2316b73b.jpg?originalWidth=575&originalHeight=794',
    leftSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/009e0d56f84770923ca3b27f2316b73b.jpg?originalWidth=575&originalHeight=794&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/009e0d56f84770923ca3b27f2316b73b.jpg?originalWidth=575&originalHeight=794&width=400 400w',
    // right column image for step 1
    rightImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg?originalWidth=575&originalHeight=745',
    rightSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg?originalWidth=575&originalHeight=745&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg?originalWidth=575&originalHeight=745&width=400 400w',
  },
  {
    num: '02',
    label: 'Customize your store',
    leftImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/e01306d7c9407822b98b4558ae74b768.jpg?originalWidth=575&originalHeight=794',
    leftSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/e01306d7c9407822b98b4558ae74b768.jpg?originalWidth=575&originalHeight=794&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/e01306d7c9407822b98b4558ae74b768.jpg?originalWidth=575&originalHeight=794&width=400 400w',
    rightImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/9b3e46ff5c451d6a8af038b1c1d5b185.jpg?originalWidth=575&originalHeight=745',
    rightSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/9b3e46ff5c451d6a8af038b1c1d5b185.jpg?originalWidth=575&originalHeight=745&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/9b3e46ff5c451d6a8af038b1c1d5b185.jpg?originalWidth=575&originalHeight=745&width=400 400w',
  },
  {
    num: '03',
    label: 'Set up payments',
    leftImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/c7bad325aac87c1f7954a84084796d3d.jpg?originalWidth=575&originalHeight=794',
    leftSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/c7bad325aac87c1f7954a84084796d3d.jpg?originalWidth=575&originalHeight=794&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/c7bad325aac87c1f7954a84084796d3d.jpg?originalWidth=575&originalHeight=794&width=400 400w',
    rightImg: 'https://cdn.shopify.com/b/shopify-brochure2-assets/6850f6e5d31fae2377f152c6ae29557a.jpg?originalWidth=575&originalHeight=745',
    rightSrcSet: 'https://cdn.shopify.com/b/shopify-brochure2-assets/6850f6e5d31fae2377f152c6ae29557a.jpg?originalWidth=575&originalHeight=745&width=200 200w, https://cdn.shopify.com/b/shopify-brochure2-assets/6850f6e5d31fae2377f152c6ae29557a.jpg?originalWidth=575&originalHeight=745&width=400 400w',
  },
];

export default function BuildFastSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  // Scroll-triggered entry animation for the image columns
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.15 });

  // Auto-rotate steps every 2.5s (pauses when user has clicked a step)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2500);
    return () => clearInterval(id);
  }, [paused]);

  function handleStepClick(idx) {
    setActiveStep(idx);
    setPaused(true);
    // Resume auto-rotate after 6 s
    setTimeout(() => setPaused(false), 6000);
  }

  const step = STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-2xl grid-cols-full pb-4xl text-section-dark-text rounded-t-4xl md:rounded-t-5xl pt-3xl relative bg-conversion-gradient z-10"
      data-section-name="conversion"
      data-component-name="home-conversion-section"
      data-viewable-component="true"
      data-mode="dark"
    >
      <div className="container">
        {/* Heading */}
        <div className="pb-xl pl-[40px] text-pretty sm:pl-0 sm:text-wrap sm:text-center">
          <h2 className="richtext text-t1" id="conversion-heading">
            Build fast on Shopify
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid-container grid gap-x-md gap-y-xl grid-cols-4 sm:items-end md:grid-cols-12">

          {/* ── Left column: Two photo cards ─────────────────── */}
          <div className="grid-images-container w-full h-full hidden sm:flex gap-sm justify-self-end col-span-4 items-end ml-10 order-2 sm:col-span-2 sm:ml-0 sm:order-1 md:col-span-5 lg:col-span-6">

            {/* Left photo card (taller, offset lower) */}
            <div
              className={[
                'rounded-xl aspect-[281/375] w-full relative overflow-hidden',
                'sm:max-w-40 md:max-w-44 lg:max-w-72 mb-20',
                'transition-all duration-700',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              {STEPS.map((s, i) => (
                <img
                  key={s.num}
                  className={[
                    'object-cover w-full h-full absolute inset-0 transition-opacity duration-500',
                    i === activeStep ? 'opacity-100 z-10' : 'opacity-0 z-0',
                    i === 0 ? 'relative' : 'absolute',
                  ].join(' ')}
                  src={s.leftImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="575"
                  height="794"
                  srcSet={s.leftSrcSet}
                  sizes="25vw"
                />
              ))}
            </div>

            {/* Right photo card (shorter, no bottom margin) */}
            <div
              className={[
                'rounded-xl aspect-[281/375] w-full relative overflow-hidden',
                'sm:max-w-40 md:max-w-44 lg:max-w-72',
                'transition-all duration-700 delay-200',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              {STEPS.map((s, i) => (
                <img
                  key={s.num}
                  className={[
                    'object-cover w-full h-full transition-opacity duration-500',
                    i === activeStep ? 'opacity-100 z-10' : 'opacity-0 z-0',
                    i === 0 ? 'relative' : 'absolute inset-0',
                  ].join(' ')}
                  src={s.rightImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="575"
                  height="745"
                  srcSet={s.rightSrcSet}
                  sizes="25vw"
                />
              ))}
            </div>
          </div>

          {/* ── Right column: Step list + CTA ────────────────── */}
          <div className="grid-listItems-container col-span-4 sm:col-span-2 sm:order-2 md:col-span-7 lg:col-span-6 lg:pl-lg">

            {/* Step list */}
            <div className="mb-2xl" role="list" aria-labelledby="conversion-heading">
              {STEPS.map((s, i) => {
                const isActive = i === activeStep;
                return (
                  <button
                    key={s.num}
                    type="button"
                    role="listitem"
                    onClick={() => handleStepClick(i)}
                    className={[
                      'cursor-pointer w-full text-start items-center flex mb-md',
                      'transition-all duration-300',
                      'group',
                    ].join(' ')}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {/* Step number */}
                    <span
                      className={[
                        'block text-t6 w-10 md:w-16 pb-2 md:pb-[0.625rem] transition-colors duration-300',
                        isActive ? 'text-avocado' : 'text-white/30',
                      ].join(' ')}
                    >
                      {s.num}
                    </span>

                    {/* Step label */}
                    <span
                      className={[
                        'block grow text-t3 border-b pb-2 md:pb-[0.625rem] text-pretty',
                        'transition-all duration-300',
                        isActive
                          ? 'text-white border-white/30'
                          : 'text-white/30 border-transparent group-hover:text-white/60',
                        // Last step has no border
                        i === STEPS.length - 1 ? 'border-transparent' : '',
                      ].join(' ')}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="sm:ps-10 md:ps-16 text-center sm:text-start">
              <a
                href="https://admin.shopify.com/signup?locale=en-NG&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fng&signup_types%5B%5D=paid_trial_experience"
                className="inline-block self-center overflow-hidden max-w-full px-button-px py-button-py ring-inset rounded-button font-button-font font-button-weight tracking-button-tracking transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline md:px-button-lg-px md:py-button-lg-py text-button-lg-size border-2 text-button-dark-primary-text bg-button-dark-primary-bg border-button-dark-primary-border ring-button-dark-primary-border hover:text-button-dark-primary-text-hover hover:bg-button-dark-primary-bg-hover hover:border-button-dark-primary-border-hover hover:ring-button-dark-primary-border-hover focus:text-button-dark-primary-text-focus focus:bg-button-dark-primary-bg-focus focus:border-button-dark-primary-border-focus focus:ring-button-dark-primary-border-focus active:text-button-dark-primary-text-active active:bg-button-dark-primary-bg-active active:border-button-dark-primary-border-active active:ring-button-dark-primary-border-active disabled:text-button-dark-primary-text-disabled disabled:bg-button-dark-primary-bg-disabled disabled:border-button-dark-primary-border-disabled disabled:ring-button-dark-primary-border-disabled w-full sm:w-auto !tracking-button-tracking"
                data-component-name="start-free-trial"
                data-mode="dark"
              >
                Take your shot
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
