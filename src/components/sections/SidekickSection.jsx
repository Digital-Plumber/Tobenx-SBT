import React, { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 6: SidekickSection
 * ──────────────────────────
 * Features:
 *  - Sidekick AI card with product screenshot
 *  - Right hand side testimonial card with autoplaying video on scroll
 */
export default function SidekickSection({ onOpenVideo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.15 });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    }
  }, [inView]);

  function handlePlayToggle() {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
      if (onOpenVideo) {
        onOpenVideo({
          videoSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/43fcd120ac3678f9c736c5e136f19456.mp4',
          webmSrc: 'https://cdn.shopify.com/b/shopify-brochure2-assets/99ded60def529a689cecaea5a18e7284.webm',
          poster: 'https://cdn.shopify.com/b/shopify-brochure2-assets/89c9725d301503b2de05c561eb773134.png?width=434',
          title: 'Sidekick: What winning looks like',
        });
      }
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-2xl grid-cols-full bg-section-dark-bg text-section-dark-text rounded-t-4xl md:rounded-t-5xl bg-gradient-to-b from-[#2C007F] from-[42.49%] to-[#000A1D] py-16 md:py-25"
      data-section-name="sidekick"
    >
      <div className="container">
        <div className="pb-xl md:pb-3xl text-pretty">
          <h2 className="richtext text-t2 text-white font-semibold">Meet your secret weapon, Sidekick</h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_auto] gap-4 md:gap-6">
          {/* ── Left Card: Sidekick AI Interface ─────────────────── */}
          <div className="relative flex flex-col rounded-xl overflow-hidden bg-[#020A08] shadow-card md:grid md:grid-rows-[subgrid] md:row-span-2 border border-white/10">
            <div className="relative z-10">
              <img
                src="https://cdn.shopify.com/b/shopify-brochure2-assets/97cf336291224b2612219d418a61eab1.png?originalWidth=2016&originalHeight=872"
                alt="Sidekick AI Interface"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="z-10 px-lg pb-lg pt-md sm:pt-lg lg:max-w-3/4 text-pretty">
              <h3 className="text-t7 mb-sm text-white font-semibold flex items-center gap-2">
                <span>Your very own commerce AI</span>
                <span className="text-xl">✨</span>
              </h3>
              <p className="text-body-base text-[#9797A2]">
                Spot opportunities for growth and automate tedious tasks with{' '}
                <a href="/ng/sidekick" className="text-[#36F4A4] underline hover:no-underline font-medium">
                  Sidekick
                </a>
                . Built right into your Shopify admin.
              </p>
            </div>
          </div>

          {/* ── Right-Hand Side Card: Testimonial Video ───────────── */}
          <div className="relative flex flex-col rounded-xl overflow-hidden bg-[#020A08] shadow-card md:grid md:grid-rows-[subgrid] md:row-span-2 border border-[#157076]/40 hover:border-[#36F4A4]/50 transition-colors">
            <div className="relative z-10 overflow-hidden min-h-0 aspect-[930/828] bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted
                playsInline
                poster="https://cdn.shopify.com/b/shopify-brochure2-assets/89c9725d301503b2de05c561eb773134.png?width=434"
                onClick={handlePlayToggle}
              >
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/99ded60def529a689cecaea5a18e7284.webm"
                  type="video/webm"
                />
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/43fcd120ac3678f9c736c5e136f19456.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Minimal overlay button */}
              <button
                type="button"
                id="sidekick-video-play"
                className={[
                  'absolute bottom-4 right-4 z-20 flex items-center justify-center cursor-pointer',
                  'transition-all duration-300',
                  isPlaying ? 'opacity-40 hover:opacity-100' : 'opacity-100',
                ].join(' ')}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayToggle();
                }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-black/60 backdrop-blur-sm text-white shadow-xl hover:scale-110 transition-transform">
                  {isPlaying ? '❚❚' : '▶'}
                </span>
              </button>
            </div>

            <div className="z-10 px-lg pb-lg pt-md sm:pt-lg max-w-[65ch]">
              <h3 className="text-t7 mb-sm text-white font-semibold">What winning looks like</h3>
              <p className="text-body-base text-[#9797A2]">
                Hear how brands use Sidekick to build faster and smarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
