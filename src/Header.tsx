import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  Sun, 
  Moon, 
  PenSquare, 
  ChevronDown, 
  User, 
  Bookmark, 
  Crown, 
  Sliders, 
  ShieldCheck, 
  LogOut, 
  Menu, 
  X,
  Sparkles,
  Zap
} from 'lucide-react';
import { UserAccount } from '../types';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onOpenAiModal: () => void;
  user: UserAccount;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenAiModal,
  user,
  onToggleMobileMenu,
  isMobileMenuOpen
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const notifications = [
    { id: '1', title: 'New Afrobeats chart dropped', time: '10m ago', read: false },
    { id: '2', title: 'Asake liked your comment on MMS', time: '1h ago', read: false },
    { id: '3', title: 'Travel deal: Lagos to Santorini 30% off', time: '4h ago', read: true }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c14]/90 backdrop-blur-xl border-b border-white/[0.07] px-4 lg:px-6 py-3 transition-colors">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button 
            onClick={() => onNavigate('/')} 
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            {/* VibeMeter stylized V icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff007a] via-[#8b25ff] to-[#00f2fe] flex items-center justify-center p-[2px] shadow-lg shadow-[#ff007a]/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0c14] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-xl font-display">
                  V
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-slate-100">
                  VibeMeter
                </span>
                <span className="text-[10px] text-[#ff007a] font-bold align-super">TM</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider font-medium hidden sm:block">
                Viral Entertainment & Lifestyle Utility
              </p>
            </div>
          </button>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-xl mx-2 hidden sm:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-[#161828]/80 hover:bg-[#1c1f35] border border-white/[0.08] hover:border-[#ff007a]/40 text-slate-400 hover:text-slate-200 transition-all text-sm group shadow-inner"
          >
            <div className="flex items-center gap-2.5 truncate">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-[#ff007a] transition-colors shrink-0" />
              <span className="text-xs lg:text-sm truncate">
                Search for videos, trends, celebrities, places, tools...
              </span>
            </div>
            <kbd className="hidden md:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-white/[0.06] border border-white/[0.1] rounded-md shrink-0">
              ⌘ K
            </kbd>
          </button>
        </div>

        {/* Right: Actions, Notifications, User */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          
          {/* Mobile search icon trigger */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/5"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Create Button */}
          <button
            onClick={() => onNavigate('/creator')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.25] text-white text-xs lg:text-sm font-medium transition-all hover:scale-105 active:scale-95"
          >
            <PenSquare className="w-3.5 h-3.5 text-[#ff007a]" />
            <span>Create</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
              className="relative p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#ff007a] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md shadow-[#ff007a]/40">
                12
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#141628] border border-white/10 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 px-2">
                  <h4 className="text-xs font-semibold text-white">Notifications</h4>
                  <span className="text-[10px] text-[#ff007a] cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="divide-y divide-white/5 mt-1">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer text-left">
                      <p className="text-xs font-medium text-slate-200">{n.title}</p>
                      <span className="text-[10px] text-slate-400">{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <button
            onClick={() => onNavigate('/community')}
            className="relative p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors hidden sm:block"
            aria-label="Messages"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#ff007a] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md shadow-[#ff007a]/40">
              3
            </span>
          </button>

          {/* Sparkles / AI Assistant Quick Button */}
          <button
            onClick={onOpenAiModal}
            className="p-2 text-[#00f2fe] hover:text-white rounded-full hover:bg-white/5 transition-colors"
            title="Open VibeMeter AI"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
          </button>

          {/* User Avatar & Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-1.5 p-1 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
            >
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ff007a]/50" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#0b0c14]" />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#141628] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-2 border-b border-white/5">
                  <p className="text-xs font-semibold text-white">{user.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ff007a]/20 border border-[#ff007a]/40 text-[#ff007a] text-[10px] font-semibold">
                    <Crown className="w-3 h-3" />
                    <span>VIP Member</span>
                  </div>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => {
                      onNavigate('/saved');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-[#8b25ff]" />
                    <span>Saved Collections</span>
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('/tools');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-[#00f2fe]" />
                    <span>Smart Utility Tools</span>
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('/creator');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <PenSquare className="w-3.5 h-3.5 text-[#ff007a]" />
                    <span>Creator Studio</span>
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('/admin');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Admin & API Status</span>
                  </button>
                </div>

                <div className="pt-1 border-t border-white/5">
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
