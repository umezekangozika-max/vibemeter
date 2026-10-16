import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  Bookmark, 
  Share2, 
  Eye, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  ExternalLink,
  Maximize2,
  Minimize2,
  Radio,
  Play,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ListVideo
} from 'lucide-react';
import { ContentItem } from '../types';

interface VideoPlayerProps {
  item: ContentItem | null;
  isOpen?: boolean;
  onClose: () => void;
  onToggleLike?: (id: string) => void;
  onToggleSave?: (id: string) => void;
  isLiked?: boolean;
  isSaved?: boolean;
  onSelectVideo?: (item: ContentItem) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  item,
  isOpen = true,
  onClose,
  onToggleLike,
  onToggleSave,
  isLiked = false,
  isSaved = false,
  onSelectVideo
}) => {
  const [isTheater, setIsTheater] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [queue, setQueue] = useState<ContentItem[]>([]);
  const [loadingQueue, setLoadingQueue] = useState(false);
  const [comments, setComments] = useState<Array<{ id: string; user: string; text: string; time: string; likes: number }>>([
    { id: '1', user: 'Chidi_Afro', text: 'This production quality is unmatched! Afrobeats taking over the world 🌍🔥', time: '2h ago', likes: 24 },
    { id: '2', user: 'ZainabLagos', text: 'Watching this in 4K is breathtaking. The sound engineering is elite.', time: '4h ago', likes: 18 },
    { id: '3', user: 'LondonVibes', text: 'VibeMeter always has the freshest cultural curation. Pure energy!', time: '1d ago', likes: 31 }
  ]);
  const [newComment, setNewComment] = useState('');

  // Fetch related queue for next-up recommendation
  useEffect(() => {
    if (!item) return;

    const fetchQueue = async () => {
      setLoadingQueue(true);
      try {
        const cat = item.category ? item.category.toLowerCase() : 'trending';
        const res = await fetch(`/api/youtube/category?category=${encodeURIComponent(cat)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            const mapped: ContentItem[] = data.items
              .filter((v: any) => v.id !== item.id)
              .slice(0, 6)
              .map((yt: any) => ({
                id: yt.id,
                title: yt.title,
                slug: yt.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                summary: yt.summary || 'Playable YouTube stream.',
                category: yt.category || item.category,
                contentType: 'video' as const,
                duration: yt.duration || 'Video',
                views: yt.views || '1.2M',
                likes: yt.likes || '85K',
                comments: yt.comments || '1.1K',
                creator: {
                  name: yt.creator || 'Verified Channel',
                  handle: `@${(yt.creator || 'creator').toLowerCase().replace(/\s+/g, '')}`,
                  avatar: yt.thumbnailUrl || `https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg`,
                  verified: true,
                  role: 'Creator'
                },
                publishedAt: yt.publishedAt || 'Active',
                thumbnailUrl: yt.thumbnailUrl || `https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg`,
                mediaEmbedUrl: yt.embedUrl || `https://www.youtube-nocookie.com/embed/${yt.id}?autoplay=1&enablejsapi=1`,
                tags: ['YouTube', item.category]
              }));
            setQueue(mapped);
          }
        }
      } catch {
        // Keeps local state
      } finally {
        setLoadingQueue(false);
      }
    };

    fetchQueue();
  }, [item?.id, item?.category]);

  if (!isOpen || !item) return null;

  // Extract clean YouTube video ID
  const rawId = item.id;
  const youtubeId = rawId.includes('watch?v=')
    ? rawId.split('watch?v=')[1].split('&')[0]
    : rawId.includes('embed/')
    ? rawId.split('embed/')[1].split('?')[0]
    : rawId;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&origin=${encodeURIComponent(window.location.origin)}`;

  const handleShare = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    navigator.clipboard?.writeText(videoUrl);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      {
        id: Date.now().toString(),
        user: 'You (VIP Member)',
        text: newComment.trim(),
        time: 'Just now',
        likes: 1
      },
      ...comments
    ]);
    setNewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container with dynamic theater mode sizing */}
      <div 
        className={`relative bg-[#111222] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] transition-all duration-300 ${
          isTheater ? 'w-full max-w-7xl' : 'w-full max-w-5xl'
        }`}
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#15162a]">
          <div className="flex items-center gap-2.5 truncate">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white shadow-sm shrink-0">
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] font-bold shrink-0">
              <Radio className="w-2.5 h-2.5 animate-pulse text-red-500" />
              <span>YouTube Live Player</span>
            </span>
            <span className="text-xs text-slate-300 font-medium truncate hidden md:inline">
              {item.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Theater Mode Toggle */}
            <button
              onClick={() => setIsTheater(!isTheater)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title={isTheater ? 'Default View' : 'Theater Mode'}
            >
              {isTheater ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              title="Close player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-3 sm:p-5 space-y-5">
          
          {/* Main Video Embed Player */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
            <iframe
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>

          {/* Video Metadata & Actions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Columns: Title, Stats, Creator & Comments */}
            <div className="lg:col-span-2 space-y-5">
              
              {/* Title & Stats */}
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-white font-display leading-tight">
                  {item.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <span className="flex items-center gap-1 text-slate-200 font-semibold font-mono">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.views} views</span>
                    </span>
                    <span>·</span>
                    <span>{item.publishedAt}</span>
                    {item.duration && (
                      <>
                        <span>·</span>
                        <span className="font-mono text-slate-300">{item.duration}</span>
                      </>
                    )}
                  </div>

                  {/* Like, Save, Share & External YouTube Link */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleLike && onToggleLike(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        isLiked
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{isLiked ? 'Liked' : item.likes}</span>
                    </button>

                    <button
                      onClick={() => onToggleSave && onToggleSave(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        isSaved
                          ? 'bg-[#8b25ff]/20 border-[#8b25ff]/40 text-[#8b25ff]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#8b25ff]' : ''}`} />
                      <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title="Copy video link"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copiedShare ? 'Copied!' : 'Share'}</span>
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 hover:text-red-300 transition-colors"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Creator Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#16172e] border border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={item.creator.avatar}
                    alt={item.creator.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ff007a]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white">{item.creator.name}</h4>
                      {item.creator.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe]" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{item.creator.handle} · {item.creator.role || 'Official Channel'}</p>
                  </div>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:opacity-95 text-white text-xs font-bold transition-transform active:scale-95 shadow-md flex items-center gap-1.5"
                >
                  <span>Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Description & Tags */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2.5">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                  {item.summary}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Discussion / Comments Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#ff007a]" />
                    <h3 className="text-sm font-bold text-white font-display">
                      Community Conversation ({comments.length})
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400">Live Comments Active</span>
                </div>

                <form onSubmit={handleAddComment} className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts on this video stream..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#191b2e] border border-white/10 text-white text-xs focus:border-[#ff007a] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post</span>
                  </button>
                </form>

                <div className="space-y-2 mt-3">
                  {comments.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{c.user}</span>
                        <span className="text-[10px] text-slate-400">{c.time}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Up Next Playlist Queue */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <ListVideo className="w-4 h-4 text-[#00f2fe]" />
                <h3 className="text-sm font-bold text-white font-display">
                  Up Next ({queue.length})
                </h3>
              </div>

              <div className="space-y-2.5">
                {queue.map((queueItem) => (
                  <div
                    key={queueItem.id}
                    onClick={() => onSelectVideo && onSelectVideo(queueItem)}
                    className="flex items-center gap-3 p-2 rounded-2xl bg-[#15162a] hover:bg-[#1c1e38] border border-white/5 hover:border-[#ff007a]/40 transition-all cursor-pointer group"
                  >
                    {/* Thumbnail */}
                    <div className="w-24 aspect-video rounded-xl overflow-hidden shrink-0 bg-black relative">
                      <img
                        src={queueItem.thumbnailUrl}
                        alt={queueItem.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </div>
                      {queueItem.duration && (
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-white">
                          {queueItem.duration}
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-white group-hover:text-[#ff007a] transition-colors line-clamp-2 leading-snug">
                        {queueItem.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate mt-1">
                        {queueItem.creator.name}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-mono">
                        <span>{queueItem.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
