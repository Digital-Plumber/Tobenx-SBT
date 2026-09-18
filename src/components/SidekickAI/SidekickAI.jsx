import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { shopifyData } from '../../data/shopifyData';

export default function SidekickAI() {
  const sidekick = shopifyData.sidekick;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 bg-[#02090a] relative overflow-hidden" id="sidekick">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#5433eb]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5433eb]/20 border border-[#5433eb]/40 text-xs font-bold text-[#c084fc] uppercase tracking-wider mb-4">
            <svg className="w-3.5 h-3.5">
              <use href="#icon-ai" />
            </svg>
            <span>Commerce AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {sidekick.headingGroup.headingHtml}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Spot opportunities for growth and automate tedious tasks with Sidekick. Built right into your Shopify admin.
          </p>
        </div>

        {/* 2-Card Grid (Sidekick Feature Card + Interactive Video Testimonial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Sidekick Feature Card */}
          <div className="lg:col-span-7 bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 mb-8">
              <span className="inline-block px-3 py-1 bg-[#5433eb]/30 border border-[#5433eb]/50 text-xs font-bold text-[#c084fc] rounded-full mb-3">
                Shopify Sidekick
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                {sidekick.sidekickCard.headingHtml}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Spot opportunities for growth, answer deep commerce questions, draft marketing campaigns, and automate daily tasks in seconds.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-black">
              <img
                src={sidekick.sidekickCard.image.src}
                alt="Shopify Sidekick AI Interface"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Interactive Video Testimonial Card */}
          <div className="lg:col-span-5 bg-[#0c1417] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-full mb-3">
                Merchant Spotlight
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {sidekick.testimonialCard.headingHtml}
              </h3>
              <p className="text-zinc-400 text-sm">
                {sidekick.testimonialCard.subheadHtml}
              </p>
            </div>

            {/* Video Player Box */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700 bg-black aspect-[4/3] group">
              <video
                ref={videoRef}
                poster={sidekick.testimonialCard.poster}
                className="w-full h-full object-cover"
                loop
                playsInline
                muted={isMuted}
                onClick={togglePlay}
              >
                <source src={sidekick.testimonialCard.videoSrc} type="video/mp4" />
                <source src={sidekick.testimonialCard.videoWebmSrc} type="video/webm" />
              </video>

              {/* Play / Pause Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none">
                <button
                  onClick={togglePlay}
                  className="pointer-events-auto p-4 bg-white/90 hover:bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
                  aria-label={isPlaying ? 'Pause video' : 'Play testimonial video'}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 bg-black/80 hover:bg-black text-white rounded-full border border-zinc-700 backdrop-blur-md"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
