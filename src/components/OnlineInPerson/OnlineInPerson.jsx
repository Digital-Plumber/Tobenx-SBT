import React, { useState } from 'react';
import { shopifyData } from '../../data/shopifyData';

export default function OnlineInPerson() {
  const [activeCard, setActiveCard] = useState('online');
  const onlineData = shopifyData.online;

  const cards = [
    {
      id: 'online',
      tag: 'Online Store',
      icon: '#icon-online',
      title: 'Get a stunning store that’s built to sell',
      sub: 'Design fast with AI. Pick a prebuilt theme. Or go totally custom with full developer freedom.',
      image: onlineData.oseCard.fallbackImage.src,
      badge: 'Theme Builder & AI Storefront',
    },
    {
      id: 'pos',
      tag: 'Shopify POS',
      icon: '#icon-pos-tick',
      title: 'Sell face to face in retail and pop-ups',
      sub: 'Sell in person and keep online and in-store sales, inventory, and staff permissions fully in sync.',
      image: onlineData.posCard.image.src,
      secondaryImage: onlineData.posCard.handheldImageSrc,
      badge: 'Unified Point of Sale Hardware',
    },
    {
      id: 'channels',
      tag: 'Multichannel',
      icon: '#icon-social',
      title: 'Sell on every social & marketplace channel',
      sub: 'Put your products directly where shoppers search and scroll: Instagram, TikTok, Facebook, Google & YouTube.',
      image: onlineData.channelsCard.image.src,
      badge: 'TikTok, IG & Google Channels',
    },
    {
      id: 'checkout',
      tag: 'Shop Pay',
      icon: '#icon-shop-app',
      title: 'Sell to 250M+ shoppers with 1-click Shop Pay',
      sub: 'Automatically show up on the Shop app. Boost conversion up to 50% higher with verified buyer credentials.',
      image: onlineData.checkoutCard.rive.posterImage.src,
      badge: 'World’s #1 Checkout',
    },
  ];

  return (
    <section className="py-24 bg-black relative" id="online">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-[#6cd484] uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-sales-up" />
            </svg>
            <span>Omnichannel Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sell more in more places
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Get a stunning store that's built to sell. Design fast with AI. Pick a prebuilt theme. Or go totally custom.
          </p>
        </div>

        {/* 4-Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {cards.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCard(c.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                activeCard === c.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4">
                <use href={c.icon} />
              </svg>
              <span>{c.tag}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-12 shadow-2xl">
          {/* Card Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {(() => {
              const cur = cards.find((c) => c.id === activeCard) || cards[0];
              return (
                <div key={cur.id} className="animate-fadeIn">
                  <span className="inline-block px-3 py-1 bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-[#6cd484] rounded-full mb-4">
                    {cur.badge}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                    {cur.title}
                  </h3>
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
                    {cur.sub}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#trial"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all hover:scale-105"
                    >
                      <span>Get started with {cur.tag}</span>
                      <svg className="w-3.5 h-3.5">
                        <use href="#icon-arrow" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Card Visual Column */}
          <div className="lg:col-span-7 relative">
            {(() => {
              const cur = cards.find((c) => c.id === activeCard) || cards[0];
              return (
                <div className="relative rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-black/40 group">
                  <img
                    src={cur.image}
                    alt={cur.title}
                    className="w-full h-auto max-h-[500px] object-contain object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  {cur.secondaryImage && (
                    <div className="absolute -bottom-4 -right-4 w-36 sm:w-44 rounded-xl overflow-hidden border-2 border-zinc-600 shadow-2xl bg-black hidden sm:block">
                      <img src={cur.secondaryImage} alt="Hardware POS device" className="w-full h-auto" />
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
