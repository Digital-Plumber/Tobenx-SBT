import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';

export default function ConversionSteps() {
  const conversion = shopifyData.conversion;
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const steps = [
    {
      idx: 0,
      title: conversion.listItems[0], // "Add your first product"
      desc: 'Add items with high-resolution photos, automated AI product descriptions, pricing rules, and inventory variants.',
      images: conversion.imageSets[0],
    },
    {
      idx: 1,
      title: conversion.listItems[1], // "Customize your store"
      desc: 'Personalize your brand identity with designer templates, custom color palettes, custom fonts, and responsive layout blocks.',
      images: conversion.imageSets[1],
    },
    {
      idx: 2,
      title: conversion.listItems[2], // "Set up payments"
      desc: 'Activate Shopify Payments and Shop Pay to start taking secure credit cards, local wallets, and accelerated 1-click checkouts.',
      images: conversion.imageSets[2],
    },
  ];

  const currentStep = steps[activeStepIdx] || steps[0];

  return (
    <section className="py-24 bg-black relative" id="start">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold text-[#6cd484] uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-arrow" />
            </svg>
            <span>Fast Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {conversion.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            From setup to first sale. Here is how simple it is to get your store live on Shopify.
          </p>
        </div>

        {/* 3 Step Interactive Card System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-12 shadow-2xl mb-16">
          {/* Step Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((st) => {
              const isActive = activeStepIdx === st.idx;
              return (
                <button
                  key={st.idx}
                  onClick={() => setActiveStepIdx(st.idx)}
                  className={`text-left p-6 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-zinc-900 border-[#6cd484] shadow-xl scale-[1.02]'
                      : 'bg-black/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-[#6cd484] text-black' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {st.idx + 1}
                    </span>
                    <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {st.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 pl-10 leading-relaxed">
                    {st.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Step Images Showcase */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
              {currentStep.images.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl bg-black">
                  <img
                    src={img.src}
                    alt={currentStep.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big "Take your shot" Callout Box */}
        <div className="text-center bg-gradient-to-r from-emerald-950/40 via-[#0c1417] to-purple-950/40 border border-emerald-500/30 rounded-3xl p-10 sm:p-16 shadow-2xl">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Take your shot. Start for free.
          </h3>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Try Shopify free, then enjoy your first month for $1. Join millions of merchants growing around the world.
          </p>
          <a
            href="#trial"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black font-extrabold text-base rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start free trial</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
