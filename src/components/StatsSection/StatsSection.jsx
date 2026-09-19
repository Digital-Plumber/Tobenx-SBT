import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';

export default function StatsSection() {
  const rockSteady = shopifyData.rockSteady;
  const stats = shopifyData.stats;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const playCashRegisterSound = () => {
    const audioUrl = rockSteady.factoids[3]?.audioUrl;
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      setIsPlayingAudio(true);
      audio.play().catch(() => {});
      audio.onended = () => setIsPlayingAudio(false);
    }
  };

  return (
    <section className="py-24 bg-[#02090a] relative overflow-hidden">
      {/* Rotating Globe Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <img
          src={rockSteady.fallbackImage.src}
          alt="Globe Network"
          className="w-[900px] max-w-none animate-spin"
          style={{ animationDuration: '80s' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-[#6cd484] uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-boost" />
            </svg>
            <span>Infrastructure & Scale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {rockSteady.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {rockSteady.headingGroup.subheadHtml}
          </p>
        </div>

        {/* 5-Factoid Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {rockSteady.factoids.map((factoid, idx) => {
            const isSoundFactoid = !!factoid.audioUrl;
            return (
              <div
                key={idx}
                className={`bg-[#0c1417]/90 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all hover:-translate-y-2 hover:border-zinc-700 ${
                  isSoundFactoid ? 'border-emerald-500/40 bg-emerald-950/20 cursor-pointer' : ''
                }`}
                onClick={isSoundFactoid ? playCashRegisterSound : undefined}
                title={isSoundFactoid ? 'Click to play Shopify cha-ching sound!' : undefined}
              >
                <div className="flex items-center justify-between mb-4">
                  <img src={factoid.image.src} alt="" className="w-8 h-8" />
                  {isSoundFactoid && (
                    <button
                      className={`p-2 rounded-full border transition-all ${
                        isPlayingAudio
                          ? 'bg-[#6cd484] text-black border-[#6cd484] animate-bounce'
                          : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-white'
                      }`}
                      aria-label="Play Shopify sales sound"
                    >
                      <Volume2 size={16} />
                    </button>
                  )}
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-2">
                    {factoid.headingHtml}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-snug">
                    {factoid.subheadHtml}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout Stats Layered UI Banner */}
        <div className="bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy & Stats */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-[#6cd484] rounded-full mb-4">
                Shop Pay & Checkout
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {stats.headingGroup.headingHtml}
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed mb-8">
                Shopify Checkout with Shop Pay converts up to 50% higher than guest checkout and exposes your brand to hundreds of millions of pre-verified buyers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                {stats.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#6cd484] mb-1">
                      {st.value}{st.unit}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {st.heading}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Layered Checkout UI Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full group">
                <img
                  src={stats.layeredImages.checkoutUI.src}
                  alt={stats.alt}
                  className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
