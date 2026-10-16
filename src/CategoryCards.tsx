import { 
  Clapperboard, 
  Music2, 
  Sparkles, 
  Shirt, 
  Plane, 
  UtensilsCrossed, 
  Cpu, 
  Heart,
  Trophy,
  Briefcase,
  GraduationCap,
  Users2,
  ArrowRight,
  LayoutGrid
} from 'lucide-react';
import { CATEGORIES_LIST } from '../data/mockData';

interface CategoryCardsProps {
  onSelectCategory: (categoryId: string) => void;
  onViewAllCategories: () => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  onSelectCategory,
  onViewAllCategories
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard':
        return Clapperboard;
      case 'Music2':
        return Music2;
      case 'Sparkles':
        return Sparkles;
      case 'Shirt':
        return Shirt;
      case 'Plane':
        return Plane;
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'Cpu':
        return Cpu;
      case 'Heart':
        return Heart;
      case 'Trophy':
        return Trophy;
      case 'Briefcase':
        return Briefcase;
      case 'GraduationCap':
        return GraduationCap;
      case 'Users2':
        return Users2;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="my-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-pink-500/20 flex items-center justify-center">
            <LayoutGrid className="w-4 h-4 text-[#ff007a]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white font-display">Explore by Category</h2>
              <span className="text-xs text-slate-400 hidden sm:inline">Find what matches your vibe</span>
            </div>
          </div>
        </div>

        <button
          onClick={onViewAllCategories}
          className="text-xs text-[#ff007a] hover:text-[#ff3b99] font-semibold flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Category Tiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {CATEGORIES_LIST.map((cat) => {
          const Icon = getCategoryIcon(cat.iconName);

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-3.5 rounded-2xl bg-[#131422] hover:bg-[#181a2e] border border-white/[0.07] hover:border-white/20 transition-all duration-200 group text-left flex flex-col justify-between min-h-[96px] shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer relative overflow-hidden`}
            >
              {/* Top Row: Icon & Counter */}
              <div className="flex items-center justify-between w-full">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}22`, color: cat.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom: Name & Count */}
              <div className="mt-2">
                <div className="text-xs font-bold text-white group-hover:text-[#ff007a] transition-colors truncate">
                  {cat.name}
                </div>
                <div className="text-[11px] font-mono font-medium text-slate-400">
                  {cat.count}
                </div>
              </div>

              {/* Ambient Hover Glow */}
              <div 
                className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity pointer-events-none"
                style={{ backgroundColor: cat.color }}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
