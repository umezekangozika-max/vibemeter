import React, { useState } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

interface HeroSectionProps {
  onExplore: (route: string) => void;
  onWatchTrending: () => void;
  onPlayHeroVideo?: (youtubeId: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onWatchTrending,
  onPlayHeroVideo
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#121323] via-[#16172e] to-[#121323] border border-white/[0.08] shadow-2xl min-h-[380px] lg:min-h-[420px] flex items-center">
      
      {/* Background and Ambient Neon Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff007a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8b25ff]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Image Side with smooth gradient blend */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-35 md:opacity-100 pointer-events-none overflow-hidden">
        <img
          src={slide.imageUrl}
          alt={slide.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center md:object-right transition-all duration-700 scale-100"
        />
        {/* Soft edge masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121323] via-[#121323]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121323] via-transparent to-transparent md:hidden" />
      </div>

      {/* Script neon decoration: "Live Explore Connect" */}
      <div className="hidden lg:block absolute right-[32%] top-[35%] -rotate-12 pointer-events-none z-10">
        <span className="font-serif italic text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff007a] to-[#ff66b2] drop-shadow-[0_0_12px_rgba(255,0,122,0.8)] tracking-wide">
          {slide.neonScript}
        </span>
      </div>

      {/* Real YouTube Channel Avatars Overlay (Top Right Stack) */}
      <div className="absolute top-6 right-6 z-20 hidden sm:flex flex-col gap-2">
        <img
          src="https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg"
          alt="Curator"
          referrerPolicy="no-referrer"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ff007a] shadow-lg"
        />
        <img
          src="https://i.ytimg.com/vi/9g_7e2Ym_E8/hqdefault.jpg"
          alt="Curator"
          referrerPolicy="no-referrer"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-[#8b25ff] shadow-lg"
        />
        <img
          src="https://i.ytimg.com/vi/n3W-n6e5lXo/hqdefault.jpg"
          alt="Curator"
          referrerPolicy="no-referrer"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-[#00f2fe] shadow-lg"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
        
        {/* Tag Badges Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ff007a] to-[#ff2e93] text-white font-extrabold text-[11px] tracking-wider uppercase shadow-md shadow-[#ff007a]/30">
            {slide.tags[0]}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold">
            <Radio className="w-3 h-3 animate-pulse text-red-500" />
            <span>Active YouTube Feed</span>
          </span>
          {slide.tags.slice(1).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-slate-200 text-xs font-medium backdrop-blur-sm border border-white/[0.06] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
          {slide.title.replace(slide.highlightWord, '')}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007a] via-[#ff2e93] to-[#8b25ff] drop-shadow-[0_0_20px_rgba(255,0,122,0.5)]">
            {slide.highlightWord}
          </span>
          {slide.title.endsWith('!') ? '!' : ''}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
          {slide.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onExplore(slide.targetRoute)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff007a] via-[#ff2e93] to-[#ff5e3a] hover:from-[#ff1a8c] hover:to-[#ff7554] text-white text-sm font-bold shadow-lg shadow-[#ff007a]/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <span>{slide.actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (onPlayHeroVideo && slide.youtubeId) {
                onPlayHeroVideo(slide.youtubeId, slide.title);
              } else {
                onWatchTrending();
              }
            }}
            className="px-5 py-3 rounded-full bg-white/[0.07] hover:bg-white/[0.14] text-white text-sm font-semibold backdrop-blur-md border border-white/[0.15] flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
            </div>
            <span>{slide.secondaryText}</span>
          </button>
        </div>

      </div>

      {/* Carousel Controls (Bottom Right Indicator & Arrows) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 bg-[#0b0c14]/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
        <span className="text-xs font-mono font-semibold text-slate-300">
          {currentSlideIndex + 1} / {HERO_SLIDES.length}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-1 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
