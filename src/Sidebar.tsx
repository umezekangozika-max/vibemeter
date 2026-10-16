import React from 'react';
import { 
  Home, 
  Compass, 
  Flame, 
  PlaySquare, 
  Music2, 
  Gem, 
  Shirt, 
  Cpu, 
  UtensilsCrossed, 
  Heart, 
  Users2, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Wrench,
  Crown,
  ChevronRight,
  Zap
} from 'lucide-react';

interface SidebarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenUpgradeModal: () => void;
}

export const NAV_ITEMS = [
  { id: '/', label: 'Home', icon: Home },
  { id: '/explore', label: 'Explore', icon: Compass },
  { id: '/trending', label: 'Trending', icon: Flame },
  { id: '/videos', label: 'Videos', icon: PlaySquare },
  { id: '/music', label: 'Music', icon: Music2 },
  { id: '/lifestyle', label: 'Lifestyle', icon: Gem },
  { id: '/fashion', label: 'Fashion', icon: Shirt },
  { id: '/technology', label: 'Tech & Gadgets', icon: Cpu },
  { id: '/food-travel', label: 'Food & Travel', icon: UtensilsCrossed },
  { id: '/health', label: 'Health & Wellness', icon: Heart },
  { id: '/relationships', label: 'Relationships', icon: Users2 },
  { id: '/sports', label: 'Sports', icon: Trophy },
  { id: '/business', label: 'Business', icon: Briefcase },
  { id: '/education', label: 'Education', icon: GraduationCap },
  { id: '/tools', label: 'Smart Tools', icon: Wrench, isSpecial: true },
  { id: '/promote', label: 'Promote Post', icon: Zap, isSpecial: true },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onNavigate,
  onOpenUpgradeModal
}) => {
  return (
    <aside className="w-64 shrink-0 flex flex-col justify-between py-4 pr-3 pl-2 min-h-[calc(100vh-65px)]">
      
      {/* Navigation List */}
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all group relative text-left ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff007a] via-[#b026ff] to-[#7928ca] text-white shadow-lg shadow-[#ff007a]/25 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Icon 
                className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-white' : item.isSpecial ? 'text-[#00f2fe]' : 'text-slate-400 group-hover:text-white'
                }`} 
              />
              <span className="truncate">{item.label}</span>

              {item.isSpecial && !isActive && (
                <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40">
                  New
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Go Premium Bottom Card */}
      <div className="mt-8 pt-4">
        <div className="p-4 rounded-3xl bg-gradient-to-br from-[#1a1c32] via-[#141628] to-[#0f1120] border border-white/10 shadow-xl relative overflow-hidden group">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#ff007a]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#8b25ff]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mb-3">
              <Crown className="w-5 h-5 text-amber-400" />
            </div>

            <h4 className="text-sm font-bold text-white font-display">Go Premium</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Unlock exclusive content, perks and more!
            </p>

            <button
              onClick={onOpenUpgradeModal}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:from-[#ff1a8c] hover:to-[#9a38ff] text-white text-xs font-bold shadow-md shadow-[#ff007a]/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 group-hover:shadow-lg"
            >
              <span>Upgrade Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </aside>
  );
};
