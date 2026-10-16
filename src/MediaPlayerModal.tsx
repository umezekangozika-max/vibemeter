import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Bookmark, 
  Share2, 
  Eye, 
  CheckCircle2, 
  MessageSquare, 
  Send,
  Sparkles
} from 'lucide-react';
import { ContentItem } from '../types';

interface MediaPlayerModalProps {
  item: ContentItem | null;
  onClose: () => void;
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
  isLiked: boolean;
  isSaved: boolean;
}

export const MediaPlayerModal: React.FC<MediaPlayerModalProps> = ({
  item,
  onClose,
  onToggleLike,
  onToggleSave,
  isLiked,
  isSaved
}) => {
  const [comments, setComments] = useState<Array<{ id: string; user: string; text: string; time: string }>>([
    { id: '1', user: 'Chidi_Afro', text: 'This production quality is unmatched! Afrobeats to the whole world 🌍🔥', time: '2h ago' },
    { id: '2', user: 'ZainabLagos', text: 'Santorini is definitely next on my bucket list. The aesthetics are unreal!', time: '5h ago' },
    { id: '3', user: 'LondonVibes', text: 'VibeMeter always has the freshest cultural curation.', time: '1d ago' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [copiedShare, setCopiedShare] = useState(false);

  if (!item) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      { id: Date.now().toString(), user: 'You (VIP)', text: newComment.trim(), time: 'Just now' },
      ...comments
    ]);
    setNewComment('');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#121323] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#17182c]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ff007a] text-white">
              {item.category}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-300 font-medium truncate max-w-md">
              {item.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-5">
          
          {/* Media Player Embed Container */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg relative border border-white/10">
            {item.mediaEmbedUrl ? (
              <iframe
                src={`${item.mediaEmbedUrl}?autoplay=1&modestbranding=1&rel=0`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full relative">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="p-4 rounded-2xl bg-[#131422]/90 border border-white/10 text-center">
                    <p className="text-sm font-semibold text-white">Curated Media Showcase</p>
                    <p className="text-xs text-slate-400 mt-1">Official authorized preview active</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Title & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                {item.title}
              </h2>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{item.views} views</span>
                </span>
                <span>·</span>
                <span>{item.publishedAt}</span>
                {item.duration && (
                  <>
                    <span>·</span>
                    <span className="font-mono">{item.duration}</span>
                  </>
                )}
              </div>
            </div>

            {/* Like, Save, Share Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleLike(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  isLiked
                    ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{isLiked ? 'Liked' : item.likes}</span>
              </button>

              <button
                onClick={() => onToggleSave(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  isSaved
                    ? 'bg-[#8b25ff]/20 border-[#8b25ff]/40 text-[#8b25ff]'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#8b25ff]' : ''}`} />
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedShare ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Creator Profile Lockup */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#181a2e] border border-white/5">
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
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe]" />
                  )}
                </div>
                <p className="text-xs text-slate-400">{item.creator.handle} · {item.creator.role || 'Creator'}</p>
              </div>
            </div>

            <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:opacity-90 text-white text-xs font-bold transition-transform active:scale-95 shadow-md">
              Follow
            </button>
          </div>

          {/* Summary & Tags */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {item.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-medium text-slate-300 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Comments Section */}
          <div className="pt-2 space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#ff007a]" />
              <h4 className="text-sm font-bold text-white font-display">
                Discussion ({comments.length})
              </h4>
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts on this vibe..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#191b2e] border border-white/10 text-white text-xs focus:border-[#ff007a] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-90"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post</span>
              </button>
            </form>

            <div className="space-y-2.5 mt-3">
              {comments.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">{c.user}</span>
                    <span className="text-[10px] text-slate-400">{c.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
