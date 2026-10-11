import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 1: LogosSection (AB Tabbed Store Showcase)
 * ────────────────────────────────────────────────────
 * - 4 cards visible at a time in viewport
 * - Tabbed headline interface with 4 categories
 * - Slide translateX flex animation
 * - Auto-rotation with hover pause
 */

const TAB_GROUPS = [
  {
    id: 0,
    label: 'Sell everywhere people shop.',
    stores: [
      {
        url: 'https://kotn.com/',
        name: 'kotn.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg',
      },
      {
        url: 'https://kirrinfinch.com/',
        name: 'kirrinfinch.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/6850f6e5d31fae2377f152c6ae29557a.jpg',
      },
      {
        url: 'https://houseplant.com/',
        name: 'houseplant.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/b5695aa84d13d681040a1f792102db4c.jpg',
      },
      {
        url: 'https://glossier.com/',
        name: 'glossier.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/966c4fe15bc05cfe25422b7c25e981ec.jpg',
      },
    ],
  },
  {
    id: 1,
    label: 'Online and in person.',
    stores: [
      {
        url: 'https://houseplant.com/',
        name: 'houseplant.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/b5695aa84d13d681040a1f792102db4c.jpg',
      },
      {
        url: 'https://kotn.com/',
        name: 'kotn.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg',
      },
      {
        url: 'https://eastfork.com/',
        name: 'eastfork.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/009e0d56f84770923ca3b27f2316b73b.jpg',
      },
      {
        url: 'https://www.stevemadden.com/',
        name: 'stevemadden.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7f3f5f3a6e7b9e7a4f3f5f3a6e7b9e7a.png',
      },
    ],
  },
  {
    id: 2,
    label: 'Across AI and on social.',
    stores: [
      {
        url: 'https://monos.com/',
        name: 'monos.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/bc86cf8bb923173525f0463b4ede64f3.jpg',
      },
      {
        url: 'https://www.stanley1913.com/',
        name: 'stanley1913.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/2f7cc9cc755fdf8b468557953320b3f5.jpg',
      },
      {
        url: 'https://shopyowie.com/',
        name: 'shopyowie.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/34c79ed6726fca9045a7e6549b56a204.jpg',
      },
      {
        url: 'https://www.ornotbike.com/',
        name: 'ornotbike.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/8c2c23882c250ec4a2b9e4e8bb2db7ed.jpg',
      },
    ],
  },
  {
    id: 3,
    label: 'Locally and globally.',
    stores: [
      {
        url: 'https://www.tecovas.com/',
        name: 'tecovas.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/9b3e46ff5c451d6a8af038b1c1d5b185.jpg',
      },
      {
        url: 'https://kirrinfinch.com/',
        name: 'kirrinfinch.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/6850f6e5d31fae2377f152c6ae29557a.jpg',
      },
      {
        url: 'https://brooklinen.com/',
        name: 'brooklinen.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/c286d3c96e94b18cd1192ada3807c359.jpg',
      },
      {
        url: 'https://kotn.com/',
        name: 'kotn.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/a4cb30be10c7967c08f80b935611b0b7.jpg',
      },
    ],
  },
];

export default function LogosSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 });

  // Fade in panels when section enters viewport
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setPanelVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, [inView]);

  // Auto-rotate tabs every 4s unless paused by user hover
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TAB_GROUPS.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-xl grid-cols-full bg-section-dark-bg text-section-dark-text pt-8 overflow-hidden pb-12 md:pb-16"
      data-section-name="a-b"
      data-component-name="home-ab-section"
      data-viewable-component="true"
      data-mode="dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Tab labels (gradient text switcher) ─────────── */}
      <div className="container">
        <div
          role="tablist"
          aria-label="Browse merchant categories"
          className="bg-clip-text text-t3 md:text-t2 leading-tight tracking-[-0.02em] bg-ab-control sm:text-balance py-[0.12em] -my-[0.12em] flex flex-wrap gap-x-2 gap-y-1 mb-2"
        >
          {TAB_GROUPS.map((group, i) => (
            <span
              key={group.id}
              role="tab"
              id={`ab-section-tab-${i}`}
              aria-controls={`ab-section-content-${i}`}
              aria-selected={i === activeTab}
              tabIndex={i === activeTab ? 0 : -1}
              data-group-index={i}
              onClick={() => setActiveTab(i)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveTab(i)}
              className={[
                'cursor-pointer transition-colors duration-300 select-none inline-block',
                i === activeTab
                  ? '!text-white font-medium drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'text-zinc-500 hover:text-zinc-300',
              ].join(' ')}
            >
              {group.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Tab panels (4 store cards per view in viewport) ─ */}
      <div className="container max-lg:mr-0 xl:overflow-hidden">
        <div
          className={[
            'flex transition-all duration-700 ease-out',
            panelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
          style={{
            transform: `translateX(calc(${-activeTab * 100}% - ${activeTab * 20}px))`,
            transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s',
          }}
        >
          {TAB_GROUPS.map((group, i) => (
            <div
              key={group.id}
              role="tabpanel"
              id={`ab-section-content-${i}`}
              aria-labelledby={`ab-section-tab-${i}`}
              inert={i !== activeTab ? '' : undefined}
              className="grid grid-cols-2 md:grid-cols-4 shrink-0 w-full items-stretch gap-3 md:gap-4"
              style={{ minWidth: '100%', width: '100%' }}
            >
              {group.stores.slice(0, 4).map((store) => (
                <div
                  key={store.url}
                  className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-[#061A1C] group transition-all duration-500 hover:border-white/30 hover:shadow-xl aspect-[4/5] max-h-[300px] md:max-h-[340px]"
                  tabIndex={i === activeTab ? 0 : -1}
                >
                  {/* Store screenshot */}
                  <img
                    src={store.img}
                    alt={store.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle inner shadow / gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Hover overlay with store URL */}
                  <div className="absolute inset-0 flex items-end p-3.5 md:p-4 z-10 transition-opacity duration-300">
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i === activeTab ? 0 : -1}
                      className="text-white text-xs md:text-sm font-semibold tracking-wide flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:text-amber-300 transition-all transform translate-y-1 group-hover:translate-y-0 truncate"
                    >
                      <span className="truncate">{store.name}</span>
                      <span className="text-xs transition-transform group-hover:translate-x-0.5 shrink-0">&#8599;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
