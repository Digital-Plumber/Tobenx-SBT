import React, { useState } from 'react';
import { shopifyData } from '../../data/shopifyData';

export default function GlobalSelling() {
  const localGlobal = shopifyData.localGlobal;
  const locales = localGlobal.locales;
  const [selectedCountryCode, setSelectedCountryCode] = useState('US');
  const [productType, setProductType] = useState('sweater');

  const selectedLocale = locales.find((l) => l.countryCode === selectedCountryCode) || locales[11];
  const price = productType === 'sweater' ? selectedLocale.sweaterPrice : selectedLocale.shirtPrice;

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="markets">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-global-markets" />
            </svg>
            <span>Shopify Markets</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {localGlobal.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Shopify takes the complexity out of international selling, from delivering products faster and more affordably to localising your experience.
          </p>
        </div>

        {/* 13-Country Flags Carousel */}
        <div className="flags-carousel overflow-x-auto pb-4 mb-10">
          <div className="flex gap-3 min-w-max justify-center px-4">
            {locales.map((loc) => {
              const isSelected = selectedCountryCode === loc.countryCode;
              return (
                <button
                  key={loc.countryCode}
                  onClick={() => setSelectedCountryCode(loc.countryCode)}
                  className={`flag-item-transition flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl scale-110 font-bold'
                      : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <img src={loc.flag.src} alt={loc.countryCode} className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-sm">{loc.countryCode}</span>
                  <span className={`text-xs ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>{loc.currencyCode}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Global Checkout & Map Sandbox */}
        <div className="bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Product & Localized Buy Box */}
            <div className="lg:col-span-5 bg-black/60 border border-zinc-800 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6cd484]">
                  Localized Storefront
                </span>
                <div className="flex items-center gap-1.5 bg-zinc-800 px-3 py-1 rounded-full text-xs text-white">
                  <img src={selectedLocale.flag.src} alt={selectedLocale.countryCode} className="w-4 h-4 rounded-full" />
                  <span>{selectedLocale.currencyCode}</span>
                </div>
              </div>

              {/* Product toggle buttons */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setProductType('sweater')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    productType === 'sweater' ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-400'
                  }`}
                >
                  Merino Knit Sweater
                </button>
                <button
                  onClick={() => setProductType('shirt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    productType === 'shirt' ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-400'
                  }`}
                >
                  Organic Tee
                </button>
              </div>

              {/* Product Card */}
              <div className="flex gap-4 items-center mb-6 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                <img
                  src={localGlobal.products[0].src}
                  alt="Product preview"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-base">
                    {productType === 'sweater' ? 'Merino Knit Sweater' : 'Organic Cotton Tee'}
                  </h4>
                  <div className="text-2xl font-extrabold text-white mt-1">
                    {selectedLocale.currencyCode} {price.toLocaleString()}
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">Duties & Taxes Calculated</span>
                </div>
              </div>

              {/* Dynamic Localized Action Button */}
              <button className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-bold text-base rounded-full shadow-xl transition-transform hover:scale-105 active:scale-100 mb-4 flex items-center justify-between px-6">
                <span>{selectedLocale.buttonText}</span>
                <span className="bg-black/10 px-3 py-1 rounded-full text-xs font-extrabold">
                  {selectedLocale.currencyCode} {price.toLocaleString()}
                </span>
              </button>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#6cd484] animate-pulse" />
                <span>{localGlobal.shippedLabel} from international fulfillment hub to {selectedLocale.countryCode}</span>
              </div>
            </div>

            {/* Right: Map Graphic with Shipment Pulses */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <img
                src={localGlobal.mapImage}
                alt={localGlobal.alt}
                className="w-full h-auto max-h-[460px] object-contain"
              />
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-emerald-500/20 blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
