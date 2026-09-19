import React from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 2: AgenticChatSection
 * ──────────────────────────────
 * "Your brand has entered the chat" — Agentic Storefronts showcase.
 *
 * Features:
 *  - Dark teal gradient card with glowing borders
 *  - Three overlapping AI agent avatar circles (Perplexity, ChatGPT, Gemini)
 *  - Heading + body copy with CTA link to /ng/agentic-storefronts
 *  - Right side: Active autoplay WebM/MP4 video of AI chat checkout interface
 */
export default function AgenticChatSection() {
  const [cardRef, inView] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      className="grid gap-y-2xl grid-cols-full pb-2xl bg-section-dark-bg text-section-dark-text pt-2xl"
      data-section-name="agentic"
    >
      <div className="container">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl bg-[#061A1C] md:bg-[linear-gradient(290.7deg,#061A1C_58.79%,#0D3A2D_100%)] border border-[#157076]/40 shadow-2xl grid grid-cols-1 md:grid-cols-2"
        >
          {/* ── Left column: AI Avatars + copy ──────────────────── */}
          <div className="flex flex-col gap-6 p-6 md:justify-between md:p-10 z-10">
            {/* Three overlapping AI agent avatar circles */}
            <div className="flex items-center">
              {/* Avatar 1 — Perplexity */}
              <div
                className="relative flex items-center justify-center rounded-full bg-white size-12 md:size-14 shadow-xl overflow-hidden border-2 border-[#061A1C]"
                style={{ zIndex: 3 }}
              >
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/8aca5aedd28634c235a5fd3a74ac1cd2.png?width=80"
                  alt="Perplexity AI"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Avatar 2 — ChatGPT */}
              <div
                className="relative flex items-center justify-center rounded-full bg-white size-12 md:size-14 shadow-xl -ms-4 overflow-hidden border-2 border-[#061A1C]"
                style={{ zIndex: 2 }}
              >
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/bed4594e2c394553b2f03d9da43cb685.png?width=80"
                  alt="ChatGPT"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Avatar 3 — Gemini / Copilot */}
              <div
                className="relative flex items-center justify-center rounded-full bg-white size-12 md:size-14 shadow-xl -ms-4 overflow-hidden border-2 border-[#061A1C] p-2"
                style={{ zIndex: 1 }}
              >
                <img
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/dfd1d6ffc02fdd7a562f8fb104e97815.svg"
                  alt="Copilot / Gemini"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Heading + copy */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="richtext text-t2 text-white text-balance font-semibold">
                  Your brand has entered the chat
                </h2>
              </div>
              <p className="text-body-base text-gray-300 text-pretty lg:max-w-3/4">
                Get discovered across AI channels. Shoppers check out right in the chat. You don't lift a finger. All powered by{' '}
                <a href="/ng/agentic-storefronts" className="text-[#36F4A4] underline hover:no-underline font-medium">
                  Agentic Storefronts
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── Right column: AI Chat Autoplay Video ─────────────── */}
          <div className="flex items-center justify-center p-4 md:p-6">
            <div
              className={[
                'w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ aspectRatio: '2090/1742' }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://cdn.shopify.com/b/shopify-brochure2-assets/59ee2f1c4ee7318b33100d4bf6685cca.png?originalWidth=2090&originalHeight=1742"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/297a585daeef11b9368ee3f8f06c6ffd.webm"
                  type="video/webm"
                />
                <source
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/66fdd68b91e6376507fbea99e7fc153f.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
