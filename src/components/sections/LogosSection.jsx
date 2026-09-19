import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

/**
 * Section 1: LogosSection (AB Tabbed Store Showcase)
 * ────────────────────────────────────────────────────
 * This is the "Sell everywhere people shop" section from the original Shopify page.
 * It features a tabbed interface with 4 categories:
 *   0. Sell everywhere people shop.
 *   1. Online and in person.
 *   2. Across AI and on social.
 *   3. Locally and globally.
 *
 * Each tab reveals a horizontally scrollable row of real Shopify merchant store
 * screenshots. Hovering a screenshot reveals the store URL.
 *
 * The tab labels use a gradient text clip effect: inactive tabs appear
 * semi-transparent (text-shade-50), active tab is white.
 *
 * All tab panels slide via a translateX flex-row offset animation.
 */

// ─── Merchant showcase data per tab ──────────────────────────────────────────
const TAB_GROUPS = [
  {
    id: 0,
    label: 'Sell everywhere people shop.',
    stores: [
      {
        url: 'https://www.stevemadden.com/',
        name: 'stevemadden.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/7f3f5f3a6e7b9e7a4f3f5f3a6e7b9e7a.png',
      },
      {
        url: 'https://www.ornotbike.com/',
        name: 'ornotbike.com',
        img: 'https://cdn.shopify.com/b/shopify-brochure2-assets/8c2c23882c250ec4a2b9e4e8bb2db7ed.jpg',
      },
      {
        url: 'https://www.glossier.com/',
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
    ],
  },
];

export default function LogosSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 });

  // Fade in panels when section enters viewport
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setPanelVisible(true), 500);
      return () => clearTimeout(t);
    }
  }, [inView]);

  // Auto-rotate tabs every 3.5 s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TAB_GROUPS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-2xl grid-cols-full bg-section-dark-bg text-section-dark-text pt-0 overflow-hidden pb-16 md:pb-20"
      data-section-name="a-b"
      data-component-name="home-ab-section"
      data-viewable-component="true"
      data-mode="dark"
    >
      {/* ── Tab labels (gradient text switcher) ─────────── */}
      <div className="container">
        <div
          role="tablist"
          aria-label="Browse merchant categories"
          className="bg-clip-text text-t2 leading-none tracking-[-0.02em] bg-ab-control sm:text-balance py-[0.12em] -my-[0.12em]"
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
                'cursor-pointer focus-visible:text-transparent hover:text-transparent transition-colors duration-300',
                i === activeTab ? '!text-white' : 'text-shade-50',
              ].join(' ')}
            >
              {i > 0 ? ' ' : ''}
              {group.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Tab panels (horizontally scrollable store cards) ─ */}
      <div className="container max-lg:mr-0 xl:overflow-hidden">
        <div
          className={[
            'flex space-x-[var(--margin)] transition-all duration-1000',
            panelVisible ? 'opacity-100' : 'opacity-0 delay-500',
          ].join(' ')}
          // Slide to active panel by offsetting the flex row
          style={{
            transform: `translateX(calc(${-activeTab * 100}% - ${activeTab} * var(--margin, 1.5rem)))`,
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 1s',
          }}
        >
          {TAB_GROUPS.map((group, i) => (
            <div
              key={group.id}
              role="tabpanel"
              id={`ab-section-content-${i}`}
              aria-labelledby={`ab-section-tab-${i}`}
              inert={i !== activeTab ? '' : undefined}
              className="relative flex shrink-0 flex-nowrap lg:basis-full items-start h-[196px] sm:h-[310px] md:h-[360px] lg:h-[initial] max-lg:last:mr-[var(--margin)] cursor-grab active:cursor-grabbing no-scrollbar overflow-x-scroll"
              style={{ width: '100%' }}
            >
              {group.stores.map((store) => (
                <div
                  key={store.url}
                  className="relative max-lg:h-full mr-2 shrink-0 max-lg:last:mr-[var(--margin)] md:mr-4 lg:shrink overflow-hidden mask-image-[radial-gradient(white,black)] rounded-[5px] group"
                  tabIndex={i === activeTab ? 0 : -1}
                  style={{ minWidth: '240px', maxWidth: '360px', flex: '1 1 auto' }}
                >
                  {/* Store screenshot */}
                  <img
                    src={store.img}
                    alt={store.name}
                    className="w-full h-full object-cover object-top rounded-[5px]"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover overlay with store URL */}
                  <span className="before:absolute before:bg-[#061A1C] before:content-[''] before:h-full before:w-full absolute duration-300 flex inset-0 items-center justify-center opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100 rounded-[5px]">
                    <div className="absolute bottom-4 hidden items-center md:flex">
                      <a
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={i === activeTab ? 0 : -1}
                        className="text-white text-sm underline hover:no-underline"
                      >
                        {store.name}
                      </a>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
