import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  ArrowRight, 
  Radio,
  Loader2,
  ChevronDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ContentItem } from '../types';
import { VideoCard } from './VideoCard';

interface FeaturedPicksProps {
  items: ContentItem[];
  onSelectItem: (item: ContentItem) => void;
  onViewAll: () => void;
  selectedCategory?: string;
}

// Helper to filter out irrelevant or corrupt entries and deduplicate by YouTube video ID
const filterAndDeduplicateVideos = (rawList: any[]): ContentItem[] => {
  const seenIds = new Set<string>();
  const validItems: ContentItem[] = [];

  for (const yt of rawList) {
    if (!yt) continue;
    const rawId = yt.id || yt.videoId;
    if (!rawId || typeof rawId !== 'string') continue;

    // Extract pure 11-char YouTube ID if wrapped in URL
    const cleanId = rawId.includes('watch?v=')
      ? rawId.split('watch?v=')[1].split('&')[0]
      : rawId.includes('embed/')
      ? rawId.split('embed/')[1].split('?')[0]
      : rawId;

    if (!cleanId || cleanId.length < 5 || seenIds.has(cleanId)) continue;

    // Filter out deleted/private or empty titles
    const title = (yt.title || '').trim();
    if (!title || title.toLowerCase().includes('[deleted video]') || title.toLowerCase().includes('[private video]')) {
      continue;
    }

    seenIds.add(cleanId);

    validItems.push({
      id: cleanId,
      title: title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      summary: yt.summary || yt.description || 'Official streamable YouTube video on VibeMeter.',
      category: yt.category || 'Trending',
      contentType: 'video' as const,
      duration: yt.duration || 'Video',
      views: yt.views || '1.2M',
      likes: yt.likes || '95K',
      comments: yt.comments || '1.8K',
      creator: {
        name: yt.creator?.name || yt.creator || 'Verified Channel',
        handle: typeof yt.creator === 'object' && yt.creator?.handle 
          ? yt.creator.handle 
          : `@${(yt.creator || 'creator').toLowerCase().replace(/\s+/g, '')}`,
        avatar: yt.creator?.avatar || yt.thumbnailUrl || `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`,
        verified: true,
        role: yt.creator?.role || 'Channel Host'
      },
      publishedAt: yt.publishedAt || 'Trending',
      thumbnailUrl: yt.thumbnailUrl || `https://i.ytimg.com/vi/${cleanId}/hqdefault.jpg`,
      mediaEmbedUrl: yt.embedUrl || yt.mediaEmbedUrl || `https://www.youtube-nocookie.com/embed/${cleanId}?autoplay=1&enablejsapi=1`,
      tags: Array.isArray(yt.tags) ? yt.tags : ['YouTube', 'Trending', yt.category || 'Featured'],
      featured: true
    });
  }

  return validItems;
};

export const FeaturedPicks: React.FC<FeaturedPicksProps> = ({
  items: defaultItems,
  onSelectItem,
  onViewAll,
  selectedCategory = 'all'
}) => {
  // Store all available verified videos (up to 20-25)
  const [allVideos, setAllVideos] = useState<ContentItem[]>(() => 
    filterAndDeduplicateVideos(defaultItems)
  );
  // Initially display up to 8 videos
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    const fetchVideos = async () => {
      setLoading(true);
      try {
        const endpoint = (selectedCategory === 'all' || selectedCategory === 'trending')
          ? '/api/youtube/trending'
          : `/api/youtube/category?category=${encodeURIComponent(selectedCategory.toLowerCase())}`;

        const res = await fetch(endpoint);
        if (res.ok && !isCancelled) {
          const data = await res.json();
          if (data.items && Array.isArray(data.items) && data.items.length > 0) {
            const sanitized = filterAndDeduplicateVideos(data.items);
            if (sanitized.length > 0) {
              setAllVideos(sanitized);
              // Reset initial visible count to 8
              setVisibleCount(8);
              return;
            }
          }
        }
      } catch {
        // Keeps fallback items
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }

      // If API gave no results, ensure fallback is deduplicated and reset count to 8
      if (!isCancelled && defaultItems.length > 0) {
        setAllVideos(filterAndDeduplicateVideos(defaultItems));
        setVisibleCount(8);
      }
    };

    fetchVideos();

    return () => {
      isCancelled = true;
    };
  }, [selectedCategory, defaultItems]);

  // Max limit of 20 videos for this section
  const maxAvailable = Math.min(20, allVideos.length);
  const displayedVideos = allVideos.slice(0, visibleCount);
  const hasMore = visibleCount < maxAvailable;

  const handleLoadMore = () => {
    // Increment by 4, capped at up to 20
    setVisibleCount(prev => Math.min(maxAvailable, prev + 4));
  };

  const isTrending = selectedCategory === 'all' || selectedCategory === 'trending';

  return (
    <section className="my-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#ff007a]/30 to-[#ff5e3a]/30 border border-[#ff007a]/40 flex items-center justify-center">
            {isTrending ? (
              <Flame className="w-4 h-4 text-[#ff5e3a] fill-[#ff5e3a]" />
            ) : (
              <Sparkles className="w-4 h-4 text-[#ff007a]" />
            )}
          </div>
          <div>
            <div className="flex items-center flex-wrap gap-2">
              <h2 className="text-lg font-bold text-white font-display">
                {selectedCategory === 'trending' 
                  ? 'Trending Videos' 
                  : selectedCategory === 'all' 
                  ? 'Trending & Featured Picks' 
                  : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Highlights`}
              </h2>
              <span className="text-xs text-slate-400 hidden md:inline">Playable YouTube streams</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] font-bold">
                <Radio className="w-2.5 h-2.5 animate-pulse text-red-500" />
                <span>Live Stream Player</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing {displayedVideos.length} of {maxAvailable} curated videos
            </p>
          </div>
        </div>

        <button 
          onClick={onViewAll}
          className="text-xs text-[#ff007a] hover:text-[#ff3b99] font-semibold flex items-center gap-1 transition-colors self-start sm:self-auto"
        >
          <span>Explore All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Video Grid (Up to 8 initially, responsive 4-column layout) */}
      {loading && allVideos.length === 0 ? (
        <div className="py-16 flex flex-col items-center justify-center space-y-3 bg-[#131422]/50 rounded-3xl border border-white/5">
          <Loader2 className="w-8 h-8 text-[#ff007a] animate-spin" />
          <p className="text-xs text-slate-400">Loading YouTube stream feeds...</p>
        </div>
      ) : displayedVideos.length === 0 ? (
        <div className="py-12 text-center bg-[#131422] rounded-3xl border border-white/5">
          <p className="text-sm text-slate-400">No videos available right now. Please check back shortly.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedVideos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onSelect={onSelectItem}
            />
          ))}
        </div>
      )}

      {/* Load More Control Bar (up to 20 videos) */}
      {!loading && allVideos.length > 0 && (
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="group px-7 py-3 rounded-2xl bg-gradient-to-r from-[#ff007a]/20 via-[#8b25ff]/20 to-[#00f2fe]/20 hover:from-[#ff007a] hover:via-[#8b25ff] hover:to-[#00f2fe] text-white text-xs font-bold border border-white/10 hover:border-transparent flex items-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-[#ff007a]/25 active:scale-95 cursor-pointer"
            >
              <span>Load More Videos</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-mono font-semibold">
                +{Math.min(4, maxAvailable - visibleCount)}
              </span>
            </button>
          ) : maxAvailable >= 8 ? (
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.04] px-4 py-2 rounded-full border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>All {displayedVideos.length} trending videos loaded</span>
            </div>
          ) : null}

          <p className="text-[11px] text-slate-500">
            {displayedVideos.length} of {maxAvailable} videos displayed {maxAvailable >= 20 ? '(maximum reached)' : ''}
          </p>
        </div>
      )}

    </section>
  );
};
