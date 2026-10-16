/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar, NAV_ITEMS } from './components/Sidebar';
import { RightSidebar } from './components/RightSidebar';
import { HeroSection } from './components/HeroSection';
import { CategoryStrip } from './components/CategoryStrip';
import { FeaturedPicks } from './components/FeaturedPicks';
import { CategoryCards } from './components/CategoryCards';
import { Footer } from './components/Footer';
import { SmartToolsHub } from './components/SmartToolsHub';
import { VibeMeterAiModal } from './components/VibeMeterAiModal';
import { CommandPalette } from './components/CommandPalette';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoCard } from './components/VideoCard';
import { PremiumModal } from './components/PremiumModal';

import { ExplorePage } from './components/pages/ExplorePage';
import { TrendingPage } from './components/pages/TrendingPage';
import { CategoryDetailView } from './components/pages/CategoryDetailView';
import { CreatorStudioPage } from './components/pages/CreatorStudioPage';
import { AdminStatusPage } from './components/pages/AdminStatusPage';
import { CommunityPage } from './components/pages/CommunityPage';
import { EditorialMagazineView } from './components/editorial/EditorialMagazineView';
import { PromotePostPage } from './components/pages/PromotePostPage';
import { FashionPage } from './components/pages/FashionPage';
import { VideosPage } from './components/pages/VideosPage';

import { FEATURED_PICKS, ALL_CONTENT } from './data/mockData';
import { ContentItem, TrendingItem, UserAccount } from './types';
import { Wrench, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals state
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [activeMediaItem, setActiveMediaItem] = useState<ContentItem | null>(null);

  // User account state with localStorage persistence
  const [user, setUser] = useState<UserAccount>(() => {
    const saved = localStorage.getItem('vibemeter_user');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return {
      name: 'Ngozika U.',
      handle: '@ngozika_vibes',
      email: 'umezekangozika@gmail.com',
      avatar: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
      isPremium: true,
      savedItemIds: ['4TWRwO8yOQU', 'tO01J-13nCE', '0fKBhvDjuy0'],
      likedItemIds: ['4TWRwO8yOQU', '0fKBhvDjuy0'],
      followingCreators: ['@vibemeter', '@travelguru', '@mkbhd'],
      notificationsCount: 12,
      messagesCount: 3,
    };
  });

  useEffect(() => {
    localStorage.setItem('vibemeter_user', JSON.stringify(user));
  }, [user]);

  // Global ⌘K hotkey listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLike = (id: string) => {
    setUser(prev => {
      const liked = prev.likedItemIds.includes(id);
      return {
        ...prev,
        likedItemIds: liked
          ? prev.likedItemIds.filter(item => item !== id)
          : [...prev.likedItemIds, id]
      };
    });
  };

  const handleToggleSave = (id: string) => {
    setUser(prev => {
      const saved = prev.savedItemIds.includes(id);
      return {
        ...prev,
        savedItemIds: saved
          ? prev.savedItemIds.filter(item => item !== id)
          : [...prev.savedItemIds, id]
      };
    });
  };

  // Select item from Trending list
  const handleSelectTrending = (trending: TrendingItem) => {
    const videoId = trending.thumbnailUrl.includes('vi/')
      ? trending.thumbnailUrl.split('vi/')[1].split('/')[0]
      : '4TWRwO8yOQU';

    const found = ALL_CONTENT.find(c => c.id === videoId || c.title.toLowerCase().includes(trending.title.toLowerCase().slice(0, 15))) || {
      id: videoId,
      title: trending.title,
      slug: trending.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      summary: `Viral trend ranked #${trending.rank} with ${trending.views} views and ${trending.likes} likes.`,
      category: trending.category,
      contentType: 'video' as const,
      views: trending.views,
      likes: trending.likes,
      comments: '1.2K',
      creator: {
        name: trending.creator,
        handle: `@${trending.creator.toLowerCase().replace(/\s+/g, '')}`,
        avatar: trending.thumbnailUrl,
        verified: true
      },
      publishedAt: 'Trending now',
      thumbnailUrl: trending.thumbnailUrl,
      mediaEmbedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1`,
      tags: ['Trending', trending.category, 'YouTube']
    };
    setActiveMediaItem(found);
  };

  // Filter content based on category strip
  const displayedFeatured = (selectedCategory === 'all' || selectedCategory === 'trending')
    ? FEATURED_PICKS
    : ALL_CONTENT.filter(item => 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(item.category.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-[#0b0c14] text-slate-100 flex flex-col font-sans selection:bg-[#ff007a] selection:text-white">
      
      {/* 1. Global Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        user={user}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-16 px-4">
          <div className="bg-[#121323] border border-white/10 rounded-3xl p-4 max-h-[85vh] overflow-y-auto space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Main Layout Shell */}
      <div className="flex-1 max-w-[1720px] w-full mx-auto px-2 sm:px-4 lg:px-6 flex gap-4 lg:gap-6 pt-3">
        
        {/* Left Sidebar (Desktop) */}
        <div className="hidden lg:block shrink-0">
          <Sidebar
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            onOpenUpgradeModal={() => setIsUpgradeModalOpen(true)}
          />
        </div>

        {/* Central Content Canvas */}
        <main className="flex-1 min-w-0 pb-12">
          
          {/* ROUTE: HOME / */}
          {currentRoute === '/' && (
            <div className="space-y-2 animate-in fade-in duration-200">
              
              {/* Hero Banner with model, neon script & carousel */}
              <HeroSection
                onExplore={(route) => handleNavigate(route || '/explore')}
                onWatchTrending={() => handleNavigate('/trending')}
                onPlayHeroVideo={(youtubeId, title) => {
                  const found = ALL_CONTENT.find(c => c.id === youtubeId) || {
                    id: youtubeId,
                    title: title,
                    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    summary: `Featured viral stream from VibeMeter hero curation.`,
                    category: 'Featured',
                    contentType: 'video' as const,
                    views: '1.2M',
                    likes: '95K',
                    comments: '2.1K',
                    creator: {
                      name: 'VibeMeter Featured',
                      handle: '@vibemeter',
                      avatar: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
                      verified: true
                    },
                    publishedAt: 'Featured Stream',
                    thumbnailUrl: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
                    mediaEmbedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1`,
                    tags: ['Featured', 'YouTube']
                  };
                  setActiveMediaItem(found);
                }}
              />

              {/* Category Shortcut Strip (All, Trending, Entertainment, Lifestyle, Travel, Fashion, Tech) */}
              <CategoryStrip
                selectedCategory={selectedCategory}
                onSelectCategory={(catId) => {
                  setSelectedCategory(catId);
                }}
              />

              {/* Featured & Trending Picks */}
              <FeaturedPicks
                items={displayedFeatured.length > 0 ? displayedFeatured : FEATURED_PICKS}
                selectedCategory={selectedCategory}
                onSelectItem={(item) => setActiveMediaItem(item)}
                onViewAll={() => handleNavigate('/explore')}
              />

              {/* Explore by Category Tiles (Movies, Music, Lifestyle, Fashion, Travel, Food, Tech, Health) */}
              <CategoryCards
                onSelectCategory={(catId) => handleNavigate(`/${catId}`)}
                onViewAllCategories={() => handleNavigate('/explore')}
              />

              {/* Smart Utility Tools Teaser Strip */}
              <div className="my-8 p-6 rounded-3xl bg-gradient-to-r from-[#141628] via-[#1a1735] to-[#141628] border border-[#00f2fe]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00f2fe]/20 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#00f2fe]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      Smart Everyday Digital Utilities
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      QR Code generator, Naira/USD Currency FX, Image resizer, and Caption Assistant.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleNavigate('/tools')}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#00f2fe] hover:text-black text-white text-xs font-bold border border-white/10 flex items-center gap-2 transition-all active:scale-95 self-start sm:self-auto"
                >
                  <span>Launch Tools</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* ROUTE: /explore */}
          {currentRoute === '/explore' && (
            <ExplorePage
              onSelectItem={(item) => setActiveMediaItem(item)}
              onOpenAiModal={() => setIsAiModalOpen(true)}
            />
          )}

          {/* ROUTE: /trending */}
          {currentRoute === '/trending' && (
            <TrendingPage
              onSelectItem={(item) => setActiveMediaItem(item)}
            />
          )}

          {/* ROUTE: /tools */}
          {currentRoute === '/tools' && (
            <SmartToolsHub />
          )}

          {/* ROUTE: /creator */}
          {currentRoute === '/creator' && (
            <CreatorStudioPage />
          )}

          {/* ROUTE: /admin */}
          {currentRoute === '/admin' && (
            <AdminStatusPage />
          )}

          {/* ROUTE: /community */}
          {currentRoute === '/community' && (
            <CommunityPage />
          )}

          {/* ROUTE: /promote (Sponsored Post Paystack Checkout) */}
          {currentRoute === '/promote' && (
            <PromotePostPage onNavigateCategory={handleNavigate} />
          )}

          {/* ROUTE: FASHION (/fashion) - Pure High-End Editorial & Product Curation (Zero Videos) */}
          {currentRoute.startsWith('/fashion') && (
            <FashionPage
              onNavigatePromote={() => handleNavigate('/promote')}
              userEmail={user.email}
            />
          )}

          {/* ROUTE: VIDEOS (/videos) - Active YouTube API Engine with Streetwear & Startup queries */}
          {currentRoute.startsWith('/videos') && (
            <VideosPage
              onSelectItem={(item) => setActiveMediaItem(item)}
            />
          )}

          {/* EDITORIAL MAGAZINE VIEW: BUSINESS (/business) - Hypebeast/CNBC inspired */}
          {currentRoute.startsWith('/business') && (
            <EditorialMagazineView
              categoryType="business"
              onPlayVideo={(youtubeId, title) => {
                const found = ALL_CONTENT.find(c => c.id === youtubeId) || {
                  id: youtubeId,
                  title,
                  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  summary: 'Business market insight video stream.',
                  category: 'Business',
                  contentType: 'video' as const,
                  views: '650K',
                  likes: '54K',
                  comments: '1.8K',
                  creator: {
                    name: 'TechCabal & CNBC',
                    handle: '@techcabal',
                    avatar: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
                    verified: true
                  },
                  publishedAt: 'Market Report',
                  thumbnailUrl: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
                  mediaEmbedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&enablejsapi=1`,
                  tags: ['Business', 'Startups']
                };
                setActiveMediaItem(found);
              }}
              onNavigatePromote={() => handleNavigate('/promote')}
            />
          )}

          {/* EDITORIAL & CATEGORY DETAIL VIEWS */}
          {(currentRoute.startsWith('/movies') ||
            currentRoute.startsWith('/music') ||
            currentRoute.startsWith('/lifestyle') ||
            currentRoute.startsWith('/travel') ||
            currentRoute.startsWith('/food') ||
            currentRoute.startsWith('/food-travel') ||
            currentRoute.startsWith('/technology') ||
            currentRoute.startsWith('/tech') ||
            currentRoute.startsWith('/health') ||
            currentRoute.startsWith('/relationships') ||
            currentRoute.startsWith('/sports') ||
            currentRoute.startsWith('/business') ||
            currentRoute.startsWith('/education')) && (
            <CategoryDetailView
              categoryId={currentRoute}
              onSelectItem={(item) => setActiveMediaItem(item)}
            />
          )}

          {/* ROUTE: /saved */}
          {currentRoute === '/saved' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h1 className="text-2xl font-bold text-white font-display">Saved Collections</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {ALL_CONTENT.filter(c => user.savedItemIds.includes(c.id)).map(item => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    onSelect={(selected) => setActiveMediaItem(selected)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ROUTE: Legal / Business (About, Privacy, Terms, Help, Contact) */}
          {(currentRoute === '/about' || currentRoute === '/privacy' || currentRoute === '/terms' || currentRoute === '/help' || currentRoute === '/contact') && (
            <div className="p-8 rounded-3xl bg-[#131422] border border-white/10 max-w-3xl mx-auto space-y-4 animate-in fade-in">
              <h1 className="text-2xl font-bold text-white font-display capitalize">
                {currentRoute.replace('/', '')} Policy & Information
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                VibeMeter™ is an entertainment and lifestyle discovery platform committed to high-standard cultural journalism, authorized media syndication, respectful creator attribution, and user privacy.
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-2">
                <p>• DMCA / Copyright inquiries: legal@vibemeter.app</p>
                <p>• Advertising & Brand Partnerships: partnerships@vibemeter.app</p>
                <p>• Creator Submissions & Community: creators@vibemeter.app</p>
              </div>
            </div>
          )}

        </main>

        {/* Right Sidebar (Trending Now Leaderboard, VibeMeter AI, Stay Connected) */}
        <RightSidebar
          onSelectItem={handleSelectTrending}
          onOpenAiModal={() => setIsAiModalOpen(true)}
          onOpenCommunity={() => handleNavigate('/community')}
          onViewAllTrending={() => handleNavigate('/trending')}
        />

      </div>

      {/* 3. Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Modals */}
      <VibeMeterAiModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        onPlayVibe={(title) => {
          setIsAiModalOpen(false);
          const found = ALL_CONTENT.find(c => c.title.toLowerCase().includes(title.toLowerCase())) || ALL_CONTENT[0];
          setActiveMediaItem(found);
        }}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectContent={(item) => setActiveMediaItem(item)}
        onNavigate={handleNavigate}
      />

      {/* VideoPlayer Component for all playable streams */}
      <VideoPlayer
        item={activeMediaItem}
        isOpen={Boolean(activeMediaItem)}
        onClose={() => setActiveMediaItem(null)}
        onToggleLike={handleToggleLike}
        onToggleSave={handleToggleSave}
        isLiked={activeMediaItem ? user.likedItemIds.includes(activeMediaItem.id) : false}
        isSaved={activeMediaItem ? user.savedItemIds.includes(activeMediaItem.id) : false}
        onSelectVideo={(item) => setActiveMediaItem(item)}
      />

      <PremiumModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onUpgradeSuccess={() => {
          setUser(prev => ({ ...prev, isPremium: true }));
        }}
      />

    </div>
  );
}
