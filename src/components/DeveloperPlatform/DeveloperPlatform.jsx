import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';

export default function DeveloperPlatform() {
  const dev = shopifyData.developer;

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="developer">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-[#c084fc] uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-computer-tick" />
            </svg>
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {dev.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Shopify's Universal Commerce Protocol and GraphQL APIs give developers the power to build custom, headless, and agentic commerce experiences.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href={dev.hydrogenBadgeProps.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-[#6cd484] rounded-full text-xs font-bold text-white transition-all hover:scale-105"
            >
              <span>{dev.hydrogenBadgeProps.link.text}</span>
              <ExternalLink size={12} className="text-[#6cd484]" />
            </a>
            <a
              href={dev.forkBadgeProps.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-purple-400 rounded-full text-xs font-bold text-white transition-all hover:scale-105"
            >
              <span>{dev.forkBadgeProps.link.text}</span>
              <ExternalLink size={12} className="text-purple-400" />
            </a>
          </div>
        </div>

        {/* 3 Developer Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Build for AI */}
          <a
            href={dev.leftCard.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-2 hover:border-purple-500/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Universal Commerce Protocol
                </span>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6cd484] transition-colors">
                {dev.leftCard.link.label}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Equip autonomous AI shopping agents with full catalog search and instantaneous checkout tokens.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-700/60 bg-black">
              <img
                src={dev.leftCard.image.src}
                alt={dev.leftCard.link.label}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </a>

          {/* Card 2: Build Custom Storefronts */}
          <a
            href={dev.middleCard.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-2 hover:border-[#6cd484]/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6cd484]">
                  Headless Commerce
                </span>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6cd484] transition-colors">
                {dev.middleCard.link.label}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Deploy lightning-fast storefronts using Hydrogen and Remix hosted at edge globally on Oxygen.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-700/60 bg-black">
              <img
                src={dev.middleCard.image.src}
                alt={dev.middleCard.link.label}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </a>

          {/* Card 3: Build Apps */}
          <a
            href={dev.rightCard.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-2 hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Shopify APIs & Extensions
                </span>
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6cd484] transition-colors">
                {dev.rightCard.link.label}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Build apps and custom checkout extensions used by millions of global storefronts.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-700/60 bg-black">
              <img
                src={dev.rightCard.image.src}
                alt={dev.rightCard.link.label}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
