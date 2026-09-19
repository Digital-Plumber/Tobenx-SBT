import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../../utils/useIntersectionObserver';
import GlobeCanvas from '../common/GlobeCanvas';

/**
 * Section 11: RockSteadySection
 * ──────────────────────────────
 * Features:
 *  - "Rock steady. Blazing fast." heading with deep-pine dark background
 *  - 3D Rotating Globe canvas with glowing atmosphere & commerce arcs
 *  - Scale factoids: $1.6T GMV milestone plays an audio clip on click
 *  - Stats animate in when the section scrolls into view
 */

const STATS = [
  {
    id: 'gmv',
    value: '$1.6T+',
    label: 'in GMV',
    description: 'Total commerce powered by Shopify merchants worldwide',
    hasAudio: true,
  },
  {
    id: 'merchants',
    value: '150+',
    label: 'countries',
    description: 'Shopify merchants sell in more than 150 countries globally',
    hasAudio: false,
  },
  {
    id: 'uptime',
    value: '99.99%',
    label: 'uptime',
    description: 'Enterprise-grade reliability you can count on',
    hasAudio: false,
  },
];

const AUDIO_URL =
  'https://cdn.shopify.com/b/shopify-brochure2-assets/6fb4a7473d5c49d6e61ee9bec0615b6d.mp3';

export default function RockSteadySection() {
  const audioRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.15 });

  function handleGmvClick() {
    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_URL);
      audioRef.current.addEventListener('ended', () => setAudioPlaying(false));
    }
    const audio = audioRef.current;
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setAudioPlaying(true);
    } else {
      audio.pause();
      setAudioPlaying(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      className="grid gap-y-2xl grid-cols-full pb-16 text-section-dark-text relative z-10 overflow-hidden bg-[#061A1C] pt-20"
      data-section-name="rock-steady"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        {/* ── Left column: 3D Rotating Globe ────────────────────── */}
        <div className="lg:col-span-7 flex justify-center items-center relative min-h-[450px] sm:min-h-[550px]">
          <div
            id="globe-container"
            className="w-full h-full max-w-[600px] max-h-[600px] aspect-square flex items-center justify-center relative"
          >
            <GlobeCanvas width={600} height={600} />
          </div>
        </div>

        {/* ── Right column: Heading + Scale Stats ──────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-y-8 relative z-20">
          <div className="pb-0">
            <h3 className="richtext text-t3 text-white mb-4 font-semibold">
              Rock steady. Blazing fast.
            </h3>
            <p className="richtext text-body-base text-gray-300">
              Your Shopify store runs strong, even during your most epic product drops.
            </p>
          </div>

          <ul className="flex flex-col gap-y-6">
            {STATS.map((stat, i) => {
              const isGmv = stat.hasAudio;
              return (
                <li
                  key={stat.id}
                  className={[
                    'transition-all duration-700 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#36F4A4]/50',
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                  ].join(' ')}
                  style={{ transitionDelay: inView ? `${i * 150}ms` : '0ms' }}
                >
                  {isGmv ? (
                    <button
                      type="button"
                      id="rock-steady-gmv-audio"
                      onClick={handleGmvClick}
                      className="text-left group cursor-pointer w-full"
                    >
                      <div className="flex items-baseline gap-x-2">
                        <span className="richtext text-t3 text-white group-hover:text-[#36F4A4] transition-colors duration-200 font-bold">
                          {stat.value}
                        </span>
                        <span className="text-body-base text-gray-300">{stat.label}</span>
                        <span
                          className={[
                            'ms-auto text-xl transition-transform duration-200',
                            audioPlaying ? 'scale-125 text-[#36F4A4]' : 'text-gray-400 group-hover:text-[#36F4A4]',
                          ].join(' ')}
                        >
                          🔊
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{stat.description}</p>
                    </button>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-x-2">
                        <span className="richtext text-t3 text-white font-bold">{stat.value}</span>
                        <span className="text-body-base text-gray-300">{stat.label}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{stat.description}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
