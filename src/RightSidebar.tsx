import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Eye, 
  Users, 
  CheckCircle2, 
  Share2,
  Play
} from 'lucide-react';
import { TRENDING_LEADERBOARD } from '../data/mockData';
import { TrendingItem } from '../types';

interface RightSidebarProps {
  onSelectItem: (item: TrendingItem) => void;
  onOpenAiModal: () => void;
  onOpenCommunity: () => void;
  onViewAllTrending: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  onSelectItem,
  onOpenAiModal,
  onOpenCommunity,
  onViewAllTrending
}) => {
  const [items, setItems] = useState<TrendingItem[]>(TRENDING_LEADERBOARD);

  useEffect(() => {
    // Dynamically fetch live YouTube trending videos
    const fetchTrending = async () => {
      try {
        const res = await fetch('/api/youtube/trending');
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            const mapped: TrendingItem[] = data.items.slice(0, 5).map((yt: any, index: number) => ({
              rank: index + 1,
              title: yt.title,
              category: yt.category || 'Music',
              views: yt.views || '1.2M',
              likes: yt.likes || '90K',
              thumbnailUrl: yt.thumbnailUrl || `https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg`,
              creator: yt.creator || 'Verified Creator',
              duration: yt.duration || 'Video',
              change: index % 2 === 0 ? 'up' : 'steady'
            }));
            setItems(mapped);
          }
        }
      } catch {
        // Keeps fallback
      }
    };
    fetchTrending();
  }, []);

  const getRankBadgeStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-orange-500/30';
      case 2:
        return 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-blue-500/30';
      case 3:
        return 'bg-gradient-to-br from-amber-400 to-yellow-600 text-white shadow-amber-500/30';
      case 4:
        return 'bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-emerald-500/30';
      case 5:
        return 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-pink-500/30';
      default:
        return 'bg-slate-700 text-slate-200';
    }
  };

  return (
    <aside className="w-80 shrink-0 space-y-5 py-4 pl-3 pr-2 hidden xl:block">
      
      {/* 1. Trending Now Section */}
      <div className="p-4 rounded-3xl bg-[#131422] border border-white/[0.08] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400/20" />
            </div>
            <h3 className="text-sm font-bold text-white font-display">Trending Now</h3>
          </div>
          <button 
            onClick={onViewAllTrending}
            className="text-xs text-[#ff007a] hover:text-[#ff3b99] font-medium flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* 5 Leaderboard Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.rank}
              onClick={() => onSelectItem(item)}
              className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-white/[0.04] transition-all cursor-pointer group"
            >
              {/* Rank number badge */}
              <div className={`w-6 h-7 rounded-xl flex items-center justify-center font-bold text-xs shadow-md shrink-0 ${getRankBadgeStyle(item.rank)}`}>
                {item.rank}
              </div>

              {/* Real YouTube Video Thumbnail */}
              <div className="w-14 h-11 rounded-xl overflow-hidden shrink-0 bg-black relative">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                </div>
              </div>

              {/* Title & metrics */}
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold text-white group-hover:text-[#ff007a] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                
                <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-slate-500" />
                    <span>{item.views}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400" />
                    <span>{item.likes}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. VibeMeter AI Card */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-[#17162e] via-[#121323] to-[#0d0e1a] border border-[#8b25ff]/30 shadow-xl relative overflow-hidden group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#8b25ff]/20 flex items-center justify-center border border-[#8b25ff]/40">
              <Sparkles className="w-4 h-4 text-[#00f2fe]" />
            </div>
            <h4 className="text-sm font-bold text-white font-display">VibeMeter AI</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-[10px] font-bold text-white shadow-sm">
            Beta
          </span>
        </div>

        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
          Get personalized recommendations, trends and lifestyle tips powered by AI.
        </p>

        {/* Glowing orb visual */}
        <div className="my-3 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ff007a] via-[#8b25ff] to-[#00f2fe] p-1 animate-spin [animation-duration:8s] shadow-lg shadow-[#8b25ff]/40">
            <div className="w-full h-full bg-[#0d0e1a] rounded-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f2fe]/40 to-[#ff007a]/40 blur-xs" />
            </div>
          </div>
        </div>

        <button
          onClick={onOpenAiModal}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:from-[#ff1a8c] hover:to-[#9a38ff] text-white text-xs font-bold shadow-md shadow-[#ff007a]/25 flex items-center justify-center gap-1.5 transition-all active:scale-95 group-hover:shadow-lg"
        >
          <span>Try Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Stay Connected Card */}
      <div className="p-4 rounded-3xl bg-[#131422] border border-white/[0.08] shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center">
            <Share2 className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <h4 className="text-sm font-bold text-white font-display">Stay Connected</h4>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-3">
          Join our community and be part of the VibeMeter family!
        </p>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onOpenCommunity}
            className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:from-[#ff1a8c] hover:to-[#9a38ff] text-white text-xs font-bold shadow-md flex items-center justify-center gap-1 transition-all active:scale-95"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Avatar stack with real YouTube creator thumbnails */}
          <div className="flex items-center -space-x-2 shrink-0">
            <img
              src="https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg"
              alt="Community User"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover ring-2 ring-[#131422]"
            />
            <img
              src="https://i.ytimg.com/vi/9g_7e2Ym_E8/hqdefault.jpg"
              alt="Community User"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-full object-cover ring-2 ring-[#131422]"
            />
            <div className="w-7 h-7 rounded-full bg-slate-800 text-[9px] font-bold text-slate-300 ring-2 ring-[#131422] flex items-center justify-center">
              +12K
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
};
