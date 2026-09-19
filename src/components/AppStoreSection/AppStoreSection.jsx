import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';

export default function AppStoreSection() {
  const apps = shopifyData.apps;

  return (
    <section className="py-24 bg-[#02090a] relative overflow-hidden" id="apps">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-drag-and-drop" />
            </svg>
            <span>21,000+ App Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {apps.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            The Shopify App Store has 21,000+ commerce apps for whatever specialized features your business needs.
          </p>
        </div>

        {/* High-Res Scrolling App Icons Wallpaper Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black group mb-12">
          <picture>
            <source media="(min-width: 1600px)" srcSet={apps.appsBg.sources[0].srcSet} />
            <source media="(min-width: 1200px)" srcSet={apps.appsBg.sources[1].srcSet} />
            <source media="(min-width: 900px)" srcSet={apps.appsBg.sources[2].srcSet} />
            <img
              src={apps.appsBg.src}
              alt={apps.alt}
              className="w-full h-auto max-h-[380px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-white font-bold text-lg sm:text-xl">Find the perfect app for your store</h3>
              <p className="text-xs sm:text-sm text-zinc-300">Marketing, SEO, Shipping, Reviews, Dropshipping & AI Automations</p>
            </div>
            <a
              href="https://apps.shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-sm rounded-full transition-all shadow-xl hover:scale-105"
            >
              <span>Explore 21,000+ Apps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
