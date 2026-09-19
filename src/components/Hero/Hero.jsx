import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';
import { validateEmail } from '../../utils/formatters';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden with-blurred-ellipse" id="trial">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Universal Commerce AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs font-semibold text-zinc-300 mb-8 backdrop-blur-md hover:border-[#6cd484] transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5 text-[#6cd484]">
            <use href="#icon-ai" />
          </svg>
          <span>Universal Commerce Platform</span>
          <span className="text-zinc-500">•</span>
          <span className="text-[#6cd484]">Explore AI</span>
          <svg className="w-3 h-3 text-zinc-400">
            <use href="#icon-arrow" />
          </svg>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08] mb-6 text-white">
          Build or grow your business <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-[#d4f9e0] to-[#6cd484] bg-clip-text text-transparent">
            fast with AI
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          Try Shopify free. Get more than ecommerce software with tools to manage every part of your business from day one.
        </p>

        {/* Email Signup Form */}
        <div className="w-full max-w-lg mb-16">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row p-1.5 bg-zinc-900/90 border border-zinc-700 rounded-2xl sm:rounded-full backdrop-blur-xl shadow-2xl focus-within:border-[#6cd484] transition-colors">
                <input
                  type="email"
                  className="flex-1 px-5 py-3 text-base text-white placeholder-zinc-500 bg-transparent focus:outline-none"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  aria-label="Email address for free trial"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-sm rounded-full transition-all shadow-lg hover:scale-105 active:scale-100"
                >
                  <span>Start free trial</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              {error && <span className="text-xs text-red-400 text-left px-4">{error}</span>}
              <p className="text-xs text-zinc-500 mt-2">
                Start for free, then enjoy your first month for $1. No credit card required.
              </p>
            </form>
          ) : (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl flex items-center gap-3 text-left">
              <CheckCircle2 size={24} className="text-[#6cd484] flex-shrink-0" />
              <div>
                <strong className="text-white text-sm block">Welcome to Shopify!</strong>
                <p className="text-zinc-300 text-xs">Instructions have been sent to <span className="text-[#6cd484] font-semibold">{email}</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Hero Interactive Video/Visual Preview */}
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.8)] bg-[#0c1417] mb-20 relative group">
          <div className="aspect-[16/9] w-full relative">
            <img
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/4a9828c3264de541545637026e9de272.jpg"
              alt="Shopify Platform Dashboard Experience"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-700">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6cd484] animate-ping" />
                <span className="text-xs font-semibold text-white">Live Storefront & Real-time Operations</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-xs font-bold text-[#6cd484]">
                <svg className="w-3.5 h-3.5">
                  <use href="#icon-boost" />
                </svg>
                <span>50% Higher Conversion Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logo Soup */}
        <div className="w-full max-w-6xl">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-8">
            Trusted by the world’s most ambitious brands and millions of entrepreneurs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
            {shopifyData.logos.map((logo, idx) => (
              <div key={idx} className="h-10 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all hover:scale-110" title={logo.alt}>
                <img src={logo.srcSet} alt={logo.alt} className="max-h-8 max-w-[130px] object-contain invert" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
