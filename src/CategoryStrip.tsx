import React, { useRef } from 'react';
import { 
  Sparkles, 
  Flame, 
  Clapperboard, 
  Gem, 
  Plane, 
  Shirt, 
  Cpu, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface CategoryStripProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CATEGORY_STRIP_ITEMS = [
  { id: 'all', title: 'All', subtitle: 'Everything', icon: Sparkles, color: '#ff007a' },
  { id: 'trending', title: 'Trending', subtitle: 'Hot Now', icon: Flame, color: '#ff5e3a' },
  { id: 'entertainment', title: 'Entertainment', subtitle: 'Movies, Music...', icon: Clapperboard, color: '#b026ff' },
  { id: 'lifestyle', title: 'Lifestyle', subtitle: 'Live Better', icon: Gem, color: '#10b981' },
  { id: 'travel', title: 'Travel', subtitle: 'Explore More', icon: Plane, color: '#00f2fe' },
  { id: 'fashion', title: 'Fashion', subtitle: 'Style Inspo', icon: Shirt, color: '#ff007a' },
  { id: 'tech', title: 'Tech', subtitle: 'Smart Living', icon: Cpu, color: '#06b6d4' },
];

export const CategoryStrip: React.FC<CategoryStripProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center my-6 group">
      
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1 pr-12"
      >
        {CATEGORY_STRIP_ITEMS.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedCategory === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl shrink-0 transition-all text-left border ${
                isSelected
                  ? 'bg-gradient-to-r from-[#ff007a] via-[#8b25ff] to-[#7928ca] border-[#ff007a]/40 text-white shadow-lg shadow-[#ff007a]/20 scale-102 font-semibold'
                  : 'bg-[#131422] hover:bg-[#191b2e] border-white/[0.07] text-slate-300 hover:text-white'
              }`}
            >
              <div 
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/[0.05] text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div>
                <div className="text-xs font-bold leading-tight">{item.title}</div>
                <div className={`text-[10px] truncate ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                  {item.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#181a2e] hover:bg-[#20233d] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

    </div>
  );
};
