import React, { useState } from 'react';
import { 
  Play, 
  Eye, 
  Heart, 
  MessageSquare, 
  CheckCircle2, 
  X, 
  Radio, 
  Maximize2 
} from 'lucide-react';
import { ContentItem } from '../types';

interface VideoCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
  badgeColor?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  item,
  onSelect,
  badgeColor
}) => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  // Extract clean YouTube video ID
  const rawId = item.id;
  const youtubeId = rawId.includes('watch?v=')
    ? rawId.split('watch?v=')[1].split('&')[0]
    : rawId.includes('embed/')
    ? rawId.split('embed/')[1].split('?')[0]
    : rawId;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;

  const getCategoryBadgeClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'music':
        return 'bg-[#ff007a] text-white';
      case 'travel':
        return 'bg-[#00b4d8] text-white';
      case 'lifestyle':
        return 'bg-[#8b25ff] text-white';
      case 'tech':
      case 'technology':
        return 'bg-[#10b981] text-white';
      case 'fashion':
        return 'bg-[#ff007a] text-white';
      case 'movies':
        return 'bg-[#ff5e3a] text-white';
      case 'food':
        return 'bg-[#eab308] text-black font-extrabold';
      case 'sports':
        return 'bg-[#3b82f6] text-white';
      default:
        return 'bg-purple-600 text-white';
    }
  };

  return (
    <div className="group rounded-3xl bg-[#131422] border border-white/[0.08] hover:border-[#ff007a]/40 p-2.5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#ff007a]/10 hover:-translate-y-1">
      
      {/* Media Container: Thumbnail or Active Embedded YouTube Player */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black shadow-md">
        {isPlayingInline ? (
          <div className="w-full h-full relative">
            <iframe
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
            
            {/* Control Overlays */}
            <div className="absolute top-2 right-2 flex items-center gap-1 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(item);
                }}
                className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs backdrop-blur-md"
                title="Expand to Full Player"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlayingInline(false);
                }}
                className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs backdrop-blur-md"
                title="Close inline player"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div 
            onClick={() => onSelect(item)}
            className="w-full h-full cursor-pointer relative"
          >
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

            {/* Category Pill (Top Left) */}
            <span className={`absolute top-2.5 left-2.5 px-3 py-0.5 rounded-full text-[11px] font-bold shadow-md ${badgeColor || getCategoryBadgeClass(item.category)}`}>
              {item.category}
            </span>

            {/* Live Stream Indicator ONLY IF isLive IS TRUE, otherwise duration */}
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
              {item.isLive && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-600/90 text-white text-[9px] font-bold shadow animate-pulse">
                  <Radio className="w-2 h-2 text-white" />
                  <span>Live Stream</span>
                </span>
              )}
              {item.duration && !item.isLive && (
                <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-medium">
                  {item.duration}
                </span>
              )}
            </div>

            {/* Center Play Button (Inline Stream Trigger) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlayingInline(true);
                }}
                className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#ff007a] transition-all duration-300"
                title="Watch Video Stream Inline"
              >
                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Card Info Body */}
      <div 
        onClick={() => onSelect(item)}
        className="p-2 pt-3 flex flex-col flex-1 justify-between cursor-pointer"
      >
        <div>
          <h3 className="text-sm font-bold text-white group-hover:text-[#ff007a] transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>

          {item.summary && (
            <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
              {item.summary}
            </p>
          )}

          {/* Metrics - render real metrics when available */}
          {(item.views || item.likes || item.comments) && (
            <div className="flex items-center gap-3 mt-2.5 text-[11px] text-slate-400">
              {item.views && (
                <span className="flex items-center gap-1" title={`${item.views} views`}>
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono">{item.views}</span>
                </span>
              )}
              {item.likes && (
                <span className="flex items-center gap-1" title={`${item.likes} likes`}>
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                  <span className="font-mono">{item.likes}</span>
                </span>
              )}
              {item.comments && (
                <span className="flex items-center gap-1" title={`${item.comments} comments`}>
                  <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono">{item.comments}</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Creator & Published Info */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 truncate">
            <img
              src={item.creator.avatar}
              alt={item.creator.name}
              referrerPolicy="no-referrer"
              className="w-5 h-5 rounded-full object-cover ring-1 ring-white/20 shrink-0"
            />
            <span className="text-xs font-semibold text-slate-200 truncate">
              {item.creator.name}
            </span>
            {item.creator.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
            )}
          </div>

          <span className="text-[10px] text-slate-400 shrink-0">
            {item.publishedAt}
          </span>
        </div>

      </div>

    </div>
  );
};
