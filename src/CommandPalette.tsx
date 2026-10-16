import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Play, 
  Sparkles, 
  Compass, 
  Wrench, 
  Film, 
  Music, 
  Shirt, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { ALL_CONTENT } from '../data/mockData';
import { ContentItem } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContent: (item: ContentItem) => void;
  onNavigate: (route: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectContent,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredItems = ALL_CONTENT.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.summary.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesFilter && matchesQuery;
  });

  const QUICK_PAGES = [
    { label: 'Explore Hub', route: '/explore', icon: Compass },
    { label: 'Trending Leaderboard', route: '/trending', icon: Flame },
    { label: 'Music & Afrobeats', route: '/music', icon: Music },
    { label: 'Movies & Nollywood', route: '/movies', icon: Film },
    { label: 'Smart Tools Dashboard', route: '/tools', icon: Wrench },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#131424] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#181a2e]">
          <Search className="w-5 h-5 text-[#ff007a] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a trend, song, movie, tool, or creator..."
            autoFocus
            className="w-full bg-transparent text-white text-base placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-white/10 text-slate-400 hover:text-white ml-2"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {['all', 'Music', 'Movies', 'Travel', 'Lifestyle', 'Fashion', 'Tech', 'Food'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === cat
                  ? 'bg-[#ff007a] text-white shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Results' : cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto space-y-1 flex-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectContent(item);
                  onClose();
                }}
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0 bg-slate-800"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white group-hover:text-[#ff007a] transition-colors truncate">
                      {item.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-slate-300 shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{item.summary}</p>
                </div>

                <div className="text-[11px] font-mono text-slate-400 shrink-0 hidden sm:block">
                  {item.views} views
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-slate-400 text-xs">
              No results found for "{query}".
            </div>
          )}

          {/* Quick Navigation Links */}
          <div className="pt-3 mt-3 border-t border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-400 px-2 tracking-wider">
              Quick Shortcuts
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mt-2">
              {QUICK_PAGES.map((qp) => {
                const Icon = qp.icon;
                return (
                  <button
                    key={qp.route}
                    onClick={() => {
                      onNavigate(qp.route);
                      onClose();
                    }}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs text-slate-300 hover:text-white transition-colors text-left"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#00f2fe]" />
                    <span className="truncate">{qp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
