import { ContentItem, CategoryInfo, TrendingItem, EditorialCardData } from '../types';

// SMART TOOLS LOCAL FUNCTIONAL JSON CONFIGURATION ARRAY
export const SMART_TOOLS_CONFIG = [
  { toolName: "Global Sneaker Size Converter", type: "Metric Calculator" },
  { toolName: "Luxury Exchange Rate Converter", type: "Currency Tool" },
  { toolName: "Digital Wardrobe Capsule Planner", type: "Interactive Tracker" }
] as const;

// PROMOTE POST SECURE MONETIZATION PARAMETER ARCHITECTURE
export const PROMOTE_POST_CONFIG = {
  feature: "Promote Sponsored Story",
  currency: "NGN",
  amount_pennies: 1000000,
  display_price: "₦10,000",
  integration_sdk: "@paystack/inline-js"
} as const;

// PREMIUM DATA PIPELINE SPECIFICATION
export const PREMIUM_DATA_PIPELINES = {
  fashion: {
    sources: ['https://hypebeast.com', 'https://highsnobiety.com', 'https://vogue.com'],
    focus: 'Pure editorial & retail product curation, affiliate monetization, buy now CTAs. Zero videos.',
  },
  lifestyle: {
    sources: ['https://hypebeast.com', 'https://vogue.com'],
    focus: 'Architecture and luxury asset elements, brutalist residences & horology.',
  },
  trending: {
    sources: ['http://feedburner.com'],
    focus: 'High-hype items and rapid cultural trend updates.',
  },
  videos: {
    sources: ['YouTube Data API engine', 'https://hypebeast.com'],
    focus: 'Active YouTube infrastructure querying "Streetwear fashion drops" & "startup business trends", supplemented by Hypebeast text summaries.',
  },
  music: {
    sources: ['https://hypebeast.com'],
    focus: 'Music drop tables, runway scores, and artist spotlights.',
  },
  tech: {
    sources: ['https://hypebeast.com'],
    focus: 'Minimalist workspace configurations and consumer EDC gear updates.',
  },
  foodTravel: {
    sources: ['https://hypebeast.com', 'https://vogue.com'],
    focus: 'Premium culinary hotspots and boutique hotel design logs.',
  },
  healthWellness: {
    sources: ['https://vogue.com'],
    focus: 'Luxury fragrance drops, grooming lines, and skincare lists.',
  },
  relationships: {
    sources: ['https://gq.com'],
    focus: 'Premium gift lists and modern etiquette editorial text arrays.',
  },
  sports: {
    sources: ['https://hypebeast.com'],
    focus: 'Sports culture highlights, athlete fashion tunnels, and sportswear drops.',
  },
  businessEducation: {
    sources: ['https://businessoffashion.com'],
    focus: 'Luxury market indices and creator economy briefings.',
  }
} as const;

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    tags: ['TRENDING NOW', '#Vibes', '#Lifestyle', '#Entertainment'],
    title: 'Discover the Best Vibes in One Place!',
    highlightWord: 'Vibes',
    subtitle: 'Stream the latest in Afrobeats, fashion runways, travel documentaries, gadgets, recipes and lifestyle — all in one platform.',
    imageUrl: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
    actionText: 'Explore Now',
    secondaryText: 'Watch Trending',
    neonScript: 'Live Explore Connect',
    targetRoute: '/explore',
    youtubeId: '4TWRwO8yOQU'
  },
  {
    id: 'hero-2',
    tags: ['HOT IN LAGOS & LONDON', '#Afrobeats', '#Grammys', '#GlobalSound'],
    title: 'Afrobeats To The World: Sound Revolution',
    highlightWord: 'Revolution',
    subtitle: 'From Burna Boy and Asake to Tems and Rema — experience the stadium-filling anthems taking over global pop culture.',
    imageUrl: 'https://i.ytimg.com/vi/9g_7e2Ym_E8/hqdefault.jpg',
    actionText: 'Listen Now',
    secondaryText: 'Watch Music Videos',
    neonScript: 'Feel The Pulse',
    targetRoute: '/music',
    youtubeId: '9g_7e2Ym_E8'
  },
  {
    id: 'hero-3',
    tags: ['WANDERLUST 2025', '#Santorini', '#Zanzibar', '#CapeTown'],
    title: '10 Unreal Escapes Every Traveler Dreams Of',
    highlightWord: 'Escapes',
    subtitle: 'Pristine coastlines, African safari lodges, and cliffside Mediterranean retreats handpicked for your next getaway.',
    imageUrl: 'https://i.ytimg.com/vi/tO01J-13nCE/hqdefault.jpg',
    actionText: 'View Guides',
    secondaryText: 'Watch Travel Film',
    neonScript: 'Wander Beyond',
    targetRoute: '/travel',
    youtubeId: 'tO01J-13nCE'
  },
  {
    id: 'hero-4',
    tags: ['WELLNESS RESET', '#SelfCare', '#MorningRitual', '#Mindfulness'],
    title: 'Simple Daily Habits For A Vibrant Mind',
    highlightWord: 'Habits',
    subtitle: 'Holistic wellness tips, restorative breathwork, nutrition routines, and mindful living to elevate your daily energy.',
    imageUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
    actionText: 'Start Routine',
    secondaryText: 'Watch Routine',
    neonScript: 'Thrive Daily',
    targetRoute: '/lifestyle',
    youtubeId: 'inpok4MKVLM'
  },
  {
    id: 'hero-5',
    tags: ['FUTURE GEAR', '#SmartTech', '#AIHardware', '#NextGen'],
    title: 'Next-Gen Gadgets That Redefine Productivity',
    highlightWord: 'Gadgets',
    subtitle: 'Spatial audio monitors, foldable dual screens, and smart wearables setting the bar for creators in 2025.',
    imageUrl: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
    actionText: 'Inspect Tech',
    secondaryText: 'Watch Review',
    neonScript: 'Power Up',
    targetRoute: '/technology',
    youtubeId: '0fKBhvDjuy0'
  }
];

export const CATEGORIES_LIST: CategoryInfo[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    count: 'Editorial Drops',
    iconName: 'Shirt',
    color: '#ff007a',
    gradient: 'from-pink-500/20 to-rose-600/10 border-pink-500/30',
    description: 'Hypebeast, Highsnobiety & Vogue curation · Footwear drops, lookbooks & affiliate retail'
  },
  {
    id: 'videos',
    name: 'Videos',
    count: 'Live Streams',
    iconName: 'PlaySquare',
    color: '#ff007a',
    gradient: 'from-red-500/20 to-pink-600/10 border-red-500/30',
    description: 'Trending YouTube videos: Streetwear drops, startup business trends & cultural visualizers'
  },
  {
    id: 'music',
    name: 'Music',
    count: '18K+',
    iconName: 'Music2',
    color: '#b026ff',
    gradient: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
    description: 'Hypebeast music drop tables, runway scores, and artist spotlights'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    count: '24K+',
    iconName: 'Sparkles',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30',
    description: 'Hypebeast & Vogue architecture, luxury asset elements & minimalist living'
  },
  {
    id: 'technology',
    name: 'Tech & Gadgets',
    count: '12K+',
    iconName: 'Cpu',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-indigo-600/10 border-cyan-500/30',
    description: 'Hypebeast minimalist workspace configurations & consumer EDC gear updates'
  },
  {
    id: 'food-travel',
    name: 'Food & Travel',
    count: '16K+',
    iconName: 'Plane',
    color: '#00f2fe',
    gradient: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30',
    description: 'Hypebeast & Vogue culinary hotspots and boutique hotel design logs'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    count: '10K+',
    iconName: 'Heart',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-purple-600/10 border-pink-500/30',
    description: 'Vogue luxury fragrance drops, grooming lines, and skincare lists'
  },
  {
    id: 'relationships',
    name: 'Relationships',
    count: '9K+',
    iconName: 'Users2',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-pink-600/10 border-rose-500/30',
    description: 'GQ premium gift lists and modern etiquette editorial text arrays'
  },
  {
    id: 'sports',
    name: 'Sports',
    count: '14K+',
    iconName: 'Trophy',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-indigo-600/10 border-blue-500/30',
    description: 'Hypebeast sports culture highlights, athlete fashion tunnels & sportswear drops'
  },
  {
    id: 'business',
    name: 'Business & Education',
    count: '11K+',
    iconName: 'Briefcase',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30',
    description: 'Business of Fashion luxury market indices and creator economy briefings'
  },
  {
    id: 'movies',
    name: 'Movies',
    count: '12K+',
    iconName: 'Clapperboard',
    color: '#ff5e3a',
    gradient: 'from-orange-500/20 to-red-600/10 border-orange-500/30',
    description: 'Blockbusters, Nollywood releases, African cinema & official movie trailers'
  }
];

// PURE FASHION EDITORIAL DROPS (Zero Videos, 100% High-End Editorial & Affiliate Monetization)
export const FASHION_EDITORIAL_DROPS = [
  {
    id: 'fash-hb-01',
    title: 'Corteiz x Nike Air Max 95 "Tour Yellow" Official Global Release',
    subtitle: 'Clint419 delivers military-grade ballistic nylon overlays, drawcord lacing, and iconic gas-mask embroidery in the year’s most anticipated continental drop.',
    category: 'Footwear Drop',
    brand: 'Corteiz / Nike',
    priceTag: '₦185,000 / $120 USD',
    amountInNaira: 185000,
    publishedAt: '2 Hrs ago',
    timeAgo: '2h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Hypebeast',
    sourceUrl: 'https://hypebeast.com/2025/corteiz-nike-air-max-95-release',
    affiliateUrl: 'https://hypebeast.com/drops/corteiz-air-max-95?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 842,
    commentsCount: 64,
    tags: ['Corteiz', 'Nike', 'Sneakers', 'Streetwear']
  },
  {
    id: 'fash-hs-02',
    title: 'Jacquemus SS25 "La Casa" Linen Chore Jacket & Capri Silhouettes',
    subtitle: 'Simon Porte Jacquemus champions relaxed Mediterranean luxury with boxy garment-dyed raw linen outerwear, tortoiseshell horn buttons, and sculpted trousers.',
    category: 'Capsule Collection',
    brand: 'Jacquemus',
    priceTag: '₦320,000 / $210 USD',
    amountInNaira: 320000,
    publishedAt: '4 Hrs ago',
    timeAgo: '4h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Highsnobiety',
    sourceUrl: 'https://highsnobiety.com/p/jacquemus-ss25-collection',
    affiliateUrl: 'https://highsnobiety.com/shop/jacquemus-ss25?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 615,
    commentsCount: 42,
    tags: ['Jacquemus', 'Parisian', 'Luxury', 'SS25']
  },
  {
    id: 'fash-vg-03',
    title: 'Lagos Fashion Week: The Sovereign Adire Trench by Orange Culture',
    subtitle: 'Adebayo Oke-Lawal reinvents Nigerian Yoruba indigo resist-dyeing on 100% cruelty-free silk twill, tailored with dramatic architectural lapels.',
    category: 'Runway Trends',
    brand: 'Orange Culture',
    priceTag: '₦240,000 / $160 USD',
    amountInNaira: 240000,
    publishedAt: '6 Hrs ago',
    timeAgo: '6h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Vogue',
    sourceUrl: 'https://vogue.com/fashion-shows/lagos-fashion-week/orange-culture',
    affiliateUrl: 'https://vogue.com/runway-shop/orange-culture-adire?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 930,
    commentsCount: 78,
    tags: ['LagosFashionWeek', 'Adire', 'Runway', 'Vogue']
  },
  {
    id: 'fash-hb-04',
    title: 'Bottega Veneta Intrecciato Leather Weekend Duffle in Dark Barolo',
    subtitle: 'Matthieu Blazy showcases unbranded quiet-luxury mastery with hand-woven supple calfskin and brushed palladium hardware engineered for lifetime durability.',
    category: 'Luxury Accessories',
    brand: 'Bottega Veneta',
    priceTag: '₦1,450,000 / $950 USD',
    amountInNaira: 1450000,
    publishedAt: '8 Hrs ago',
    timeAgo: '8h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Hypebeast',
    sourceUrl: 'https://hypebeast.com/2025/bottega-veneta-intrecciato-duffle',
    affiliateUrl: 'https://hypebeast.com/drops/bottega-duffle?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 490,
    commentsCount: 31,
    tags: ['BottegaVeneta', 'Leather', 'Accessories', 'Italian']
  },
  {
    id: 'fash-hs-05',
    title: 'Wales Bonner x Adidas Originals Samba "Nappa Ecru" Limited Release',
    subtitle: 'Grace Wales Bonner returns to her celebrated retro sportswear canon with hand-stitched crochet heel tabs, elongated tongue flaps, and gum outsoles.',
    category: 'Footwear Drop',
    brand: 'Wales Bonner / Adidas',
    priceTag: '₦210,000 / $140 USD',
    amountInNaira: 210000,
    publishedAt: '12 Hrs ago',
    timeAgo: '12h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Highsnobiety',
    sourceUrl: 'https://highsnobiety.com/p/wales-bonner-adidas-samba-2025',
    affiliateUrl: 'https://highsnobiety.com/shop/wales-bonner-samba?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 780,
    commentsCount: 56,
    tags: ['WalesBonner', 'Adidas', 'Samba', 'Footwear']
  },
  {
    id: 'fash-vg-06',
    title: 'The Modern Monogram: Daily Paper SS25 Akan Gold Weight Jacquard',
    subtitle: 'Amsterdam-meets-Ghanaian streetwear architects unveil heavy-gauge knit cardigans interwoven with West African geometric symbolism and horn button closures.',
    category: 'Streetwear Capsule',
    brand: 'Daily Paper',
    priceTag: '₦135,000 / $90 USD',
    amountInNaira: 135000,
    publishedAt: '14 Hrs ago',
    timeAgo: '14h ago',
    heroImageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    sourceName: 'Vogue',
    sourceUrl: 'https://vogue.com/fashion-shows/daily-paper-ss25',
    affiliateUrl: 'https://vogue.com/runway-shop/daily-paper-cardigan?aff_id=vibemeter_curated&utm_source=vibemeter_fashion',
    upvotes: 562,
    commentsCount: 38,
    tags: ['DailyPaper', 'Knitwear', 'Heritage', 'Vogue']
  }
];

export const FEATURED_PICKS: ContentItem[] = [
  {
    id: '4TWRwO8yOQU',
    title: 'Top 10 Afrobeats Artists Dominating the World in 2025',
    slug: 'top-10-afrobeats-artists-dominating-world-2025',
    summary: 'From filling New York stadiums to setting streaming records in Paris and Tokyo, here are the titans redefining contemporary global pop music.',
    category: 'Music',
    contentType: 'video',
    duration: '3:15',
    views: '112M',
    likes: '890K',
    comments: '34K',
    creator: {
      name: 'Burna Boy',
      handle: '@burnaboy',
      avatar: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
      verified: true,
      role: 'Global Afro-Fusion Lead'
    },
    publishedAt: '2 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/4TWRwO8yOQU?autoplay=1&enablejsapi=1',
    tags: ['Afrobeats', 'Grammys', 'Lagos', 'Music Charts'],
    rating: 4.9,
    featured: true
  },
  {
    id: 'tO01J-13nCE',
    title: '10 Must-See Travel Spots: Santorini Caldera & Sunset Tour',
    slug: '10-must-see-travel-spots-santorini',
    summary: 'From the cascading cliffside terraces of Santorini to turquoise Aegean bays and volcanic islands, explore travel perfection in 4K.',
    category: 'Food & Travel',
    contentType: 'video',
    duration: '14:20',
    views: '1.2M',
    likes: '89K',
    comments: '2.4K',
    creator: {
      name: 'TravelGuru',
      handle: '@travelguru',
      avatar: 'https://i.ytimg.com/vi/tO01J-13nCE/hqdefault.jpg',
      verified: true,
      role: 'Globetrotter'
    },
    publishedAt: '3 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/tO01J-13nCE/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/tO01J-13nCE?autoplay=1&enablejsapi=1',
    tags: ['Travel', 'Santorini', 'Islands', 'BucketList'],
    rating: 4.8,
    featured: true
  },
  {
    id: 'inpok4MKVLM',
    title: 'Simple Self-Care Habits for a Better You (Morning & Night)',
    slug: 'simple-self-care-habits-for-better-you',
    summary: 'A grounded, practical approach to morning sunlight, hydration, digital detox, and journaling habits that build lasting mental clarity.',
    category: 'Lifestyle',
    contentType: 'video',
    duration: '5:20',
    views: '760K',
    likes: '72K',
    comments: '1.1K',
    creator: {
      name: 'LifeWithJoy',
      handle: '@lifewithjoy',
      avatar: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
      verified: true,
      role: 'Wellness Coach'
    },
    publishedAt: '4 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/inpok4MKVLM?autoplay=1&enablejsapi=1',
    tags: ['Wellness', 'Mindfulness', 'MorningRoutine', 'SelfCare'],
    rating: 4.9,
    featured: true
  },
  {
    id: '0fKBhvDjuy0',
    title: 'MKBHD Smartphone Awards: Best Hardware & AI Devices 2025',
    slug: 'mkbhd-smartphone-awards-best-hardware',
    summary: 'Game-changing flagship phones, battery test champions, camera systems, and folding displays setting the bar for creators.',
    category: 'Tech & Gadgets',
    contentType: 'video',
    duration: '18:42',
    views: '3.8M',
    likes: '220K',
    comments: '14K',
    creator: {
      name: 'Marques Brownlee',
      handle: '@mkbhd',
      avatar: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
      verified: true,
      role: 'Hardware Critic'
    },
    publishedAt: '5 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/0fKBhvDjuy0?autoplay=1&enablejsapi=1',
    tags: ['Tech', 'Android', 'Hardware', 'MKBHD'],
    rating: 4.95,
    featured: true
  },
  {
    id: 'bB9_e5Vp-Yw',
    title: 'Streetwear Fashion Drops: London to Lagos Underground Culture',
    slug: 'streetwear-fashion-drops-london-lagos',
    summary: 'Inside the limited-edition sneaker drops, technical outerwear, and youth subcultures transforming modern luxury.',
    category: 'Videos',
    contentType: 'video',
    duration: '11:30',
    views: '620K',
    likes: '48K',
    comments: '1.4K',
    creator: {
      name: 'Streetwear Central',
      handle: '@streetdrops',
      avatar: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
      verified: true,
      role: 'Style Curator'
    },
    publishedAt: '1 day ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/bB9_e5Vp-Yw?autoplay=1&enablejsapi=1',
    tags: ['Streetwear', 'Drops', 'Sneakers', 'Fashion'],
    rating: 4.88,
    featured: true
  },
  {
    id: 'P6FORpg0KVo',
    title: 'Startup Business Trends: Fintech, Clean Energy & Scaling in 2025',
    slug: 'startup-business-trends-fintech-clean-energy',
    summary: 'Early stage venture ecosystems, founder growth playbooks, and how cross-border creators monetize global audiences.',
    category: 'Videos',
    contentType: 'video',
    duration: '14:45',
    views: '840K',
    likes: '62K',
    comments: '2.1K',
    creator: {
      name: 'Startup Briefings',
      handle: '@startuptrends',
      avatar: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
      verified: true,
      role: 'Business Analyst'
    },
    publishedAt: '2 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/P6FORpg0KVo?autoplay=1&enablejsapi=1',
    tags: ['Startups', 'Business', 'Fintech', 'Trends'],
    rating: 4.92,
    featured: true
  },
  {
    id: 'g4Hbz2jLxvQ',
    title: 'The Black Book | Official Trailer | Netflix Nollywood Action',
    slug: 'the-black-book-official-trailer',
    summary: 'High-octane espionage and justice thriller set across the bustling metropolis of Lagos.',
    category: 'Movies',
    contentType: 'video',
    duration: '2:24',
    views: '4.8M',
    likes: '280K',
    comments: '19K',
    creator: {
      name: 'Netflix Nigeria',
      handle: '@netflixnaija',
      avatar: 'https://i.ytimg.com/vi/g4Hbz2jLxvQ/hqdefault.jpg',
      verified: true,
      role: 'Cinema Distributor'
    },
    publishedAt: 'Official Trailer',
    thumbnailUrl: 'https://i.ytimg.com/vi/g4Hbz2jLxvQ/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/g4Hbz2jLxvQ?autoplay=1&enablejsapi=1',
    tags: ['Movies', 'Nollywood', 'Trailer', 'Action'],
    rating: 4.92,
    featured: true
  },
  {
    id: '6d8pZz0cK_s',
    title: 'Top 10 Most Iconic Goals in AFCON History',
    slug: 'top-10-most-iconic-goals-afcon',
    summary: 'Electrifying strikes, buzzer beaters, and historic tournament moments celebrating African football.',
    category: 'Sports',
    contentType: 'video',
    duration: '9:15',
    views: '2.6M',
    likes: '175K',
    comments: '9.4K',
    creator: {
      name: 'CAF TV Africa',
      handle: '@caftv',
      avatar: 'https://i.ytimg.com/vi/6d8pZz0cK_s/hqdefault.jpg',
      verified: true,
      role: 'Sports Broadcaster'
    },
    publishedAt: 'Tournament Highlights',
    thumbnailUrl: 'https://i.ytimg.com/vi/6d8pZz0cK_s/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/6d8pZz0cK_s?autoplay=1&enablejsapi=1',
    tags: ['Sports', 'Football', 'AFCON', 'Goals'],
    rating: 4.91,
    featured: true
  }
];

export const TRENDING_LEADERBOARD: TrendingItem[] = [
  {
    rank: 1,
    title: 'Burna Boy - City Boys [Official Music Video]',
    category: 'Music',
    views: '112M',
    likes: '890K',
    thumbnailUrl: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
    creator: 'Burna Boy',
    duration: '3:15',
    change: 'up'
  },
  {
    rank: 2,
    title: '10 Must-See Places in Santorini Greece | 4K Walking Tour',
    category: 'Food & Travel',
    views: '1.2M',
    likes: '89K',
    thumbnailUrl: 'https://i.ytimg.com/vi/tO01J-13nCE/hqdefault.jpg',
    creator: 'TravelGuru',
    duration: '14:20',
    change: 'up'
  },
  {
    rank: 3,
    title: 'Simple Self-Care Habits for a Better You (Morning & Night)',
    category: 'Lifestyle',
    views: '760K',
    likes: '72K',
    thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
    creator: 'LifeWithJoy',
    duration: '5:20',
    change: 'steady'
  },
  {
    rank: 4,
    title: 'MKBHD Smartphone Awards: Best Hardware Innovations',
    category: 'Tech & Gadgets',
    views: '3.8M',
    likes: '220K',
    thumbnailUrl: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
    creator: 'Marques Brownlee',
    duration: '18:42',
    change: 'up'
  },
  {
    rank: 5,
    title: 'Streetwear Fashion Drops: London to Lagos Underground Culture',
    category: 'Videos',
    views: '620K',
    likes: '48K',
    thumbnailUrl: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
    creator: 'Streetwear Central',
    duration: '11:30',
    change: 'up'
  },
  {
    rank: 6,
    title: 'Startup Business Trends: Fintech, Clean Energy & Scaling in 2025',
    category: 'Videos',
    views: '840K',
    likes: '62K',
    thumbnailUrl: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
    creator: 'Startup Briefings',
    duration: '14:45',
    change: 'up'
  }
];

// COMPREHENSIVE PIPELINE-MAPPED DATASET
export const ALL_CONTENT: ContentItem[] = [
  ...FEATURED_PICKS,

  // LIFESTYLE PIPELINE (Architecture and luxury asset elements from https://hypebeast.com & https://vogue.com)
  {
    id: 'life-arch-01',
    title: 'Minimalist Brutalist Pavilion on the Lagos Atlantic Coast',
    slug: 'brutalist-pavilion-lagos-atlantic-coast',
    summary: 'Cantilevered raw concrete, indigenous timber louvers, and sea-breeze thermal engineering define this award-winning luxury residence.',
    category: 'Lifestyle',
    contentType: 'lifestyle',
    views: '430K',
    likes: '38K',
    comments: '1.2K',
    creator: {
      name: 'Hypebeast Living',
      handle: '@hypebeastliving',
      avatar: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: 'Yesterday',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Architecture', 'Brutalist', 'LuxuryAsset', 'Hypebeast'],
    rating: 4.95
  },
  {
    id: 'life-watch-02',
    title: 'The Horology Vault: Audemars Piguet Royal Oak Perpetual Calendar',
    slug: 'horology-vault-royal-oak-perpetual',
    summary: 'A deep-dive appraisal into blue ceramic complications, astronomical moon phases, and the enduring luxury asset value of haute horlogerie.',
    category: 'Lifestyle',
    contentType: 'lifestyle',
    views: '510K',
    likes: '49K',
    comments: '1.8K',
    creator: {
      name: 'Vogue Horology',
      handle: '@voguehorology',
      avatar: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: '2 days ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    tags: ['LuxuryAssets', 'Horology', 'Watches', 'Vogue'],
    rating: 4.92
  },

  // VIDEOS PIPELINE (Active YouTube engine querying "Streetwear fashion drops" & "startup business trends", supplemented by Hypebeast summaries)
  {
    id: 'vid-streetwear-01',
    title: 'Streetwear Fashion Drops: The Most Hyped Releases of the Season',
    slug: 'streetwear-fashion-drops-hyped-releases',
    summary: 'Corteiz, Supreme, Stüssy, and Nike Air Max collaborations evaluated on secondary market heat, construction quality, and styling versatility.',
    category: 'Videos',
    contentType: 'video',
    duration: '12:40',
    views: '710K',
    likes: '59K',
    comments: '1.9K',
    creator: {
      name: 'Hypebeast Drops',
      handle: '@hypebeastdrops',
      avatar: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
      verified: true
    },
    publishedAt: '2 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/bB9_e5Vp-Yw?autoplay=1&enablejsapi=1',
    tags: ['Streetwear fashion drops', 'Hypebeast', 'YouTube', 'Sneakers'],
    rating: 4.88
  },
  {
    id: 'vid-startup-02',
    title: 'Startup Business Trends: Why Founders Are Building Niche Sovereign Software',
    slug: 'startup-business-trends-sovereign-software',
    summary: 'How modern venture teams replace bloated enterprise subscriptions with lean, high-margin micro-SaaS and local AI deployment.',
    category: 'Videos',
    contentType: 'video',
    duration: '16:15',
    views: '890K',
    likes: '74K',
    comments: '2.4K',
    creator: {
      name: 'TechCabal & CNBC',
      handle: '@techcabal',
      avatar: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
      verified: true
    },
    publishedAt: '3 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/P6FORpg0KVo?autoplay=1&enablejsapi=1',
    tags: ['startup business trends', 'Fintech', 'Venture', 'YouTube'],
    rating: 4.94
  },

  // MUSIC PIPELINE (Music drop tables, runway scores, and artist spotlights from https://hypebeast.com)
  {
    id: 'music-hb-01',
    title: 'Paris Runway Sound Scores: The Pharrell Williams Louis Vuitton Orchestration',
    slug: 'paris-runway-sound-scores-pharrell-louis-vuitton',
    summary: 'Full music drop breakdown of the gospel choir brass arrangement and modular synths scored for the Pont Neuf summer presentation.',
    category: 'Music',
    contentType: 'music',
    views: '820K',
    likes: '91K',
    comments: '3.1K',
    creator: {
      name: 'Hypebeast Sound',
      handle: '@hypebeastsound',
      avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: '3 days ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    tags: ['MusicDrops', 'RunwayScores', 'Pharrell', 'Hypebeast'],
    rating: 4.96
  },
  {
    id: '9g_7e2Ym_E8',
    title: 'Asake & Wizkid - MMS (Official Visualizer)',
    slug: 'asake-wizkid-mms-breakdown',
    summary: 'A spiritual Afro-fusion masterpiece that blends Fuji cadence with modern saxophone licks and introspective lyricism.',
    category: 'Music',
    contentType: 'video',
    duration: '3:38',
    views: '24M',
    likes: '410K',
    comments: '18K',
    creator: {
      name: 'Asake Official',
      handle: '@asake',
      avatar: 'https://i.ytimg.com/vi/9g_7e2Ym_E8/hqdefault.jpg',
      verified: true
    },
    publishedAt: '4 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/9g_7e2Ym_E8/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/9g_7e2Ym_E8?autoplay=1&enablejsapi=1',
    tags: ['Afrobeats', 'Asake', 'Wizkid', 'Hypebeast'],
    rating: 4.95
  },

  // TECH & GADGETS PIPELINE (Minimalist workspace configurations & consumer EDC gear from https://hypebeast.com)
  {
    id: 'tech-edc-01',
    title: 'Minimalist Workspace Configuration: Titanium EDC & OLED Ultrawide Studio',
    slug: 'minimalist-workspace-titanium-edc',
    summary: 'An architect’s desk setup featuring solid walnut monitor risers, custom CNC mechanical keyboards, and Grade 5 titanium daily essentials.',
    category: 'Tech & Gadgets',
    contentType: 'tech',
    views: '640K',
    likes: '58K',
    comments: '1.9K',
    creator: {
      name: 'Hypebeast Tech',
      handle: '@hypebeasttech',
      avatar: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: 'Yesterday',
    thumbnailUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    tags: ['Workspaces', 'EDCGear', 'Hardware', 'Hypebeast'],
    rating: 4.91
  },

  // FOOD & TRAVEL PIPELINE (Culinary hotspots & boutique hotel design logs from https://hypebeast.com & https://vogue.com)
  {
    id: 'food-trav-01',
    title: 'Aman Kyoto Forest Sanctuary: Boutique Hotel Architectural Design Log',
    slug: 'aman-kyoto-forest-sanctuary-design-log',
    summary: 'Nestled among moss gardens and cedar groves, Kerry Hill Architects harmonizes minimalist Ryokan aesthetics with restorative hot spring onsens.',
    category: 'Food & Travel',
    contentType: 'travel',
    views: '950K',
    likes: '84K',
    comments: '2.8K',
    creator: {
      name: 'Vogue Escapes',
      handle: '@vogueescapes',
      avatar: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: '3 days ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    tags: ['BoutiqueHotels', 'DesignLogs', 'Kyoto', 'Vogue'],
    rating: 4.97
  },
  {
    id: 'pXlB_ZkH6qQ',
    title: 'Authentic Smoky Party Jollof Rice Masterclass Recipe',
    slug: 'authentic-smoky-party-jollof-rice',
    summary: 'Achieving signature firewood smoke aroma, distinct separate grains, and rich scotch bonnet pepper reductions.',
    category: 'Food & Travel',
    contentType: 'food',
    duration: '11:15',
    views: '1.1M',
    likes: '94K',
    comments: '4.2K',
    creator: {
      name: 'Chef Kemi',
      handle: '@chefkemi',
      avatar: 'https://i.ytimg.com/vi/pXlB_ZkH6qQ/hqdefault.jpg',
      verified: true
    },
    publishedAt: '5 days ago',
    thumbnailUrl: 'https://i.ytimg.com/vi/pXlB_ZkH6qQ/hqdefault.jpg',
    mediaEmbedUrl: 'https://www.youtube-nocookie.com/embed/pXlB_ZkH6qQ?autoplay=1&enablejsapi=1',
    tags: ['Jollof', 'Recipes', 'CulinaryHotspots'],
    rating: 5.0
  },

  // HEALTH & WELLNESS PIPELINE (Luxury fragrance drops, grooming lines & skincare lists from https://vogue.com)
  {
    id: 'health-frag-01',
    title: 'The Artisanal Niche Perfumery Guide: Rare Oud & Botanical Extraits',
    slug: 'artisanal-niche-perfumery-rare-oud',
    summary: 'Vogue curates the most intoxicating luxury fragrance drops of 2025, exploring resinous amber accords, smoke distillation, and clean skin formulations.',
    category: 'Health & Wellness',
    contentType: 'health',
    views: '380K',
    likes: '35K',
    comments: '980',
    creator: {
      name: 'Vogue Beauty',
      handle: '@voguebeauty',
      avatar: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: 'Yesterday',
    thumbnailUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    tags: ['FragranceDrops', 'SkincareLists', 'Grooming', 'Vogue'],
    rating: 4.89
  },

  // RELATIONSHIPS PIPELINE (Premium gift lists & modern etiquette editorial from https://gq.com)
  {
    id: 'relat-gq-01',
    title: 'The Connoisseur Gifting Guide: 12 Timeless Heirlooms for Partners',
    slug: 'connoisseur-gifting-guide-timeless-heirlooms',
    summary: 'From bespoke monogrammed stationery to vintage automatic chronographs, GQ presents modern etiquette for thoughtful, lasting gifting.',
    category: 'Relationships',
    contentType: 'article',
    views: '420K',
    likes: '39K',
    comments: '1.1K',
    creator: {
      name: 'GQ Editorial',
      handle: '@gqeditorial',
      avatar: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: '2 days ago',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    tags: ['GiftLists', 'ModernEtiquette', 'GQ', 'Relationships'],
    rating: 4.87
  },

  // SPORTS PIPELINE (Sports culture highlights, athlete fashion tunnels & sportswear drops from https://hypebeast.com)
  {
    id: 'sports-tunnel-01',
    title: 'NBA Runway Tunnels: How Athlete Pre-Game Fits Eclipse Fashion Week',
    slug: 'nba-runway-tunnels-athlete-fits',
    summary: 'Shai Gilgeous-Alexander and LeBron James bring bespoke tailoring, vintage leather jackets, and grail sneakers to the tunnel catwalk.',
    category: 'Sports',
    contentType: 'sports' as any,
    views: '1.2M',
    likes: '114K',
    comments: '4.6K',
    creator: {
      name: 'Hypebeast Sports',
      handle: '@hypebeastsports',
      avatar: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: 'Yesterday',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    tags: ['AthleteTunnels', 'SportswearDrops', 'NBA', 'Hypebeast'],
    rating: 4.96
  },

  // BUSINESS & EDUCATION PIPELINE (Luxury market indices & creator economy briefings from https://businessoffashion.com)
  {
    id: 'biz-bof-01',
    title: 'The BoF Luxury Market Index: Global Consumer Sentiment Shift in 2025',
    slug: 'bof-luxury-market-index-2025',
    summary: 'Business of Fashion dissects secondary luxury market liquidity, creative director transitions, and the rise of direct-to-collector brands.',
    category: 'Business',
    contentType: 'article',
    views: '680K',
    likes: '62K',
    comments: '2.1K',
    creator: {
      name: 'Business of Fashion',
      handle: '@bof',
      avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedAt: 'Yesterday',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tags: ['LuxuryIndices', 'CreatorEconomy', 'BoF', 'Business'],
    rating: 4.93
  }
];

// DEDICATED PURE EDITORIAL COLLECTIONS FOR FOOD & TRAVEL, HEALTH, RELATIONSHIPS, SPORTS, EDUCATION, LIFESTYLE
// Strictly zero YouTube video logic, zero play overlays, 100% visual markdown cards with outbound source link tags
export const EDITORIAL_COLLECTIONS: Record<string, EditorialCardData[]> = {
  travel: [
    {
      id: 'edt-trav-01',
      title: 'Aman Kyoto Forest Sanctuary: Boutique Hotel Architectural Design Log',
      subtitle: 'Kerry Hill Architects harmonizes minimalist Ryokan cedar pavilions with natural hot spring onsens.',
      description: 'Nestled on the slopes of Mount Hidari Daimonji, Aman Kyoto sets a new global high-water mark for restorative hospitality. The property is cloaked in twenty-four hectares of centuries-old moss gardens, flowering andromeda, and cedar groves.',
      markdownContent: `### Design Notes & Materiality
- **Ryokan Harmony**: Hand-carved granite baths and Hinoki cypress soaking tubs.
- **Biophilic Acoustic Balance**: Natural mountain runoff streams routed through slate stone channels.
- **Culinary Philosophy**: Multi-course Kaiseki menus honoring seasonal wild Kyoto bamboo shoots.

> "True luxury is not ornament; it is the deliberate elimination of all unnecessary distractions." — Kerry Hill Studio`,
      category: 'Food & Travel',
      readTime: '5 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Escapes',
      sourceUrl: 'https://vogue.com/travel',
      tags: ['BoutiqueHotels', 'Kyoto', 'Architecture', 'DesignLog', 'Vogue'],
      upvotes: 680,
      author: {
        name: 'Vogue Architectural Team',
        role: 'Design Editor',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-food-02',
      title: 'African Culinary Hotspots: The Lagos & Accra Fine Dining Revolution',
      subtitle: 'Modern avant-garde chefs merge ancestral firewood smoke, wild herbs, and fermentation.',
      description: 'Across Victoria Island, Ikoyi, and Osu, a renaissance in West African haute cuisine is capturing the international gastronomic spotlight. Michelin-pedigree chefs are transforming regional ingredients—from fermented locust bean (iru) to wild alligator pepper—into refined tasting menus.',
      markdownContent: `### Gastronomic Highlights
- **Smoke Infusion Techniques**: Seasoned mahogany and fruitwood smoke reductions replacing industrial char.
- **Artisanal Pairings**: Wild palm sap reductions and small-batch hibiscus infusions served in blown crystal.
- **Cultural Preservation**: Preserving oral recipes through modern molecular emulsions.`,
      category: 'Food & Travel',
      readTime: '4 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Eats',
      sourceUrl: 'https://hypebeast.com',
      tags: ['CulinaryHotspots', 'FineDining', 'Lagos', 'Hypebeast'],
      upvotes: 940,
      author: {
        name: 'Hypebeast Food Desk',
        role: 'Culinary Critic',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-trav-03',
      title: 'Santorini Cliffside Architectural Guide & Cycladic Modernism',
      subtitle: 'Whitewashed limestone cantilevers and private infinity pools suspended over the Aegean Caldera.',
      description: 'The volcanic cliffs of Oia and Imerovigli demonstrate centuries of vernacular climate-responsive architecture. Modern renovations preserve subterranean cave vaults while introducing brushed titanium finishes and solar microgrids.',
      markdownContent: `### Architectural Insights
- **Thermal Inertia**: Cave suites carved into pumice rock naturally maintain 20°C temperatures year-round.
- **Monochrome Minimalism**: Titanium dioxide whitewash bouncing Mediterranean UV heat.
- **Sunset Vantage Points**: Hidden footpaths away from standard tourist corridors.`,
      category: 'Food & Travel',
      readTime: '6 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Travel',
      sourceUrl: 'https://vogue.com/travel',
      tags: ['CycladicDesign', 'Santorini', 'LuxuryHospitality', 'Vogue'],
      upvotes: 820,
      author: {
        name: 'Elena Rostova',
        role: 'Travel Contributor',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-food-04',
      title: 'Stone Town Spice Route: Zanzibar Coastal Seafood & Clove Heritage',
      subtitle: 'Historic coral-stone alleys harbor millennia of Persian, Arab, and Swahili flavor diplomacy.',
      description: 'Zanzibar remains the beating heart of Indian Ocean culinary trading routes. Early morning dhow fishermen deliver kingfish and rock lobster directly to seaside braziers, seasoned with fresh ginger and crushed cardamoms.',
      markdownContent: `### The Flavor Blueprint
- **Forodhani Gardens**: Night markets serving spiced coconut cassava flatbreads and calamari brochettes.
- **Organic Spice Plantations**: Harvesting fresh vanilla orchids, star anise, and whole nutmeg.`,
      category: 'Food & Travel',
      readTime: '4 min read',
      publishedAt: '4 days ago',
      timeAgo: '4d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast',
      sourceUrl: 'https://hypebeast.com',
      tags: ['Zanzibar', 'Seafood', 'SpiceRoute', 'Hypebeast'],
      upvotes: 560,
      author: {
        name: 'Marcus Chen',
        role: 'Field Writer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  health: [
    {
      id: 'edt-hlth-01',
      title: 'The Artisanal Niche Perfumery Guide: Rare Oud & Botanical Extraits',
      subtitle: 'Vogue curates 2025’s most intoxicating luxury fragrance drops and smoke distillations.',
      description: 'Moving far beyond commercial synthetic aroma chemicals, boutique perfumers in Grasse, Kyoto, and Dubai are sourcing wild agarwood, harvested iris orris butter, and cold-pressed Damask roses for multi-sensory longevity.',
      markdownContent: `### Fragrance Profiles to Know
- **Kyoto Hinoki & Wild Smoke**: Resinous temple incense balanced with wet river stone and green tea accord.
- **Aged Cambodian Oud**: Sweet balsamic undertones cured in vintage oak casks for seven years.
- **Skin Scent Chemistry**: Molecular ambrette seeds that adapt uniquely to individual body warmth.

> "A great fragrance is invisible tailoring — it dictates the room before you speak." — Vogue Beauty`,
      category: 'Health & Wellness',
      readTime: '4 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Beauty',
      sourceUrl: 'https://vogue.com',
      tags: ['FragranceDrops', 'NichePerfumery', 'LuxuryBeauty', 'Vogue'],
      upvotes: 890,
      author: {
        name: 'Camille Moreau',
        role: 'Beauty Director',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-hlth-02',
      title: 'Clean Skin Formulations: Bio-Fermented Botanical Skincare Lists',
      subtitle: 'Microbiome lipid barrier reinforcement and clinically verified botanical extractions.',
      description: 'The modern skincare movement has shifted from aggressive acid peels to restorative bio-fermentation. Cultivating lactobacillus ferment lysates and micro-algae extracts, these clean formulations rebuild deep moisture resilience.',
      markdownContent: `### Daily Protocol Essentials
- **Step 1**: Low-foam botanical cleansing oil infused with squalane and jojoba seed.
- **Step 2**: Bio-fermented galactomyces essence for cellular barrier hydration.
- **Step 3**: Zinc oxide physical mineral veil with broad-spectrum blue-light defense.`,
      category: 'Health & Wellness',
      readTime: '5 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Wellness',
      sourceUrl: 'https://vogue.com',
      tags: ['SkincareLists', 'BioFerment', 'CleanBeauty', 'Vogue'],
      upvotes: 750,
      author: {
        name: 'Dr. Sarah Lin',
        role: 'Dermatology Contributor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-hlth-03',
      title: 'Circadian Architecture & Downregulation Protocols for Peak Focus',
      subtitle: 'Restorative evening rituals, red-light frequencies, and parasympathetic reset habits.',
      description: 'High-performing creative directors and founders understand that focus is directly downstream from sleep architecture. Designing light environments with low-temperature amber lighting eliminates nocturnal cortisol spikes.',
      markdownContent: `### Evening Protocol Checklist
- **60 Mins Before Sleep**: Full blue-spectrum screen blackout.
- **Thermal Regulation**: Dropping ambient bedroom temperature to 18°C.
- **Nutritional Support**: 400mg Magnesium L-threonate with chamomile floral infusions.`,
      category: 'Health & Wellness',
      readTime: '3 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Health',
      sourceUrl: 'https://vogue.com',
      tags: ['CircadianReset', 'Mindfulness', 'Longevity', 'Vogue'],
      upvotes: 610,
      author: {
        name: 'Julian Vance',
        role: 'Wellness Columnist',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  relationships: [
    {
      id: 'edt-rel-01',
      title: 'The Connoisseur Gifting Guide: 12 Timeless Heirlooms for Partners',
      subtitle: 'GQ presents modern etiquette, heritage craftsmanship, and lasting heirloom selections.',
      description: 'The greatest gifts are tangible artifacts of shared history. From bespoke heavyweight letterpress stationery to hand-wound mechanical timepieces, GQ surveys objects designed to age gracefully over decades.',
      markdownContent: `### Curated Heirloom Selections
- **Horological Masterpieces**: Vintage 36mm dress watches with guilloché dials and alligator straps.
- **Leather Craft**: Vegetable-tanned bridle leather travel folios with hand-stamped initials.
- **Bespoke Scents**: Custom private flacons formulated with rare botanical extracts.

> "Etiquette in modern gifting is less about price tags and entirely about intimate recognition." — GQ Editorial`,
      category: 'Relationships',
      readTime: '5 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'GQ Editorial',
      sourceUrl: 'https://gq.com',
      tags: ['GiftLists', 'ModernEtiquette', 'Heirlooms', 'GQ'],
      upvotes: 1120,
      author: {
        name: 'GQ Style Bureau',
        role: 'Senior Editor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-rel-02',
      title: 'Modern Etiquette in the Digital Era: Communication Architecture',
      subtitle: 'Navigating notifications, presence, and intentional conversations in high-demand relationships.',
      description: 'When devices demand infinite attention, undivided human focus becomes the ultimate expression of love. Establishing sacred screen-free dinners and asynchronous check-ins protects intimacy from algorithmic burnout.',
      markdownContent: `### Principles of Modern Etiquette
- **The Pocket Rule**: Phones face down and silenced during one-on-one dinners.
- **Deep Listening Over Problem Solving**: Validating emotional cues before offering logistical fixes.
- **Shared Calendar Rituals**: Scheduling protected date hours like non-negotiable board meetings.`,
      category: 'Relationships',
      readTime: '4 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'GQ Etiquette',
      sourceUrl: 'https://gq.com',
      tags: ['ModernEtiquette', 'Communication', 'Presence', 'GQ'],
      upvotes: 840,
      author: {
        name: 'David Sterling',
        role: 'Etiquette Columnist',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-rel-03',
      title: 'Curated Anniversary Gift Arrays: Heritage Craft & Fine Materials',
      subtitle: 'Hand-blown Murano decanters, Japanese kitchen steel, and bespoke cashmere throws.',
      description: 'Marking relationship milestones calls for exceptional materials. We partner with heritage European and Japanese ateliers to assemble memorable gifts that become daily household touchstones.',
      markdownContent: `### Material Excellence
- **Echizen Hammered Knives**: 67-layer Damascus steel chef knives built for shared home cooking.
- **Mongolian Raw Cashmere**: Double-weight heirloom blankets in natural un-dyed oatmeal tones.`,
      category: 'Relationships',
      readTime: '3 min read',
      publishedAt: '4 days ago',
      timeAgo: '4d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'GQ',
      sourceUrl: 'https://gq.com',
      tags: ['Anniversary', 'GiftArrays', 'HeritageCraft', 'GQ'],
      upvotes: 710,
      author: {
        name: 'Amara Banks',
        role: 'Lifestyle Writer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  sports: [
    {
      id: 'edt-sprt-01',
      title: 'NBA Runway Tunnels: How Athlete Pre-Game Fits Eclipse Fashion Week',
      subtitle: 'Shai Gilgeous-Alexander and LeBron James turn arena concrete into premier menswear catwalks.',
      description: 'The pre-game tunnel walk has superseded Parisian runways as the most influential incubator for contemporary menswear. Basketball luminaries are bypassing traditional endorsements to curate bespoke tailorings, rare Japanese denim, and unreleased archival sneakers.',
      markdownContent: `### Tunnel Catwalk Dynamics
- **Tailoring Shift**: Boxy double-breasted Savile Row suits paired with aggressive chunky soles.
- **Bespoke Leather Outerwear**: Distressed moto jackets and custom shearling bombers.
- **Grail Sneaker Rotation**: Vintage 1985 Jordan 1s and unreleased artisan luxury collaborations.

> "The tunnel walk is raw theater. It's where sport, identity, and haute couture collide in real time." — Hypebeast Sports`,
      category: 'Sports',
      readTime: '4 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Sports',
      sourceUrl: 'https://hypebeast.com',
      tags: ['AthleteTunnels', 'NBAFits', 'SportswearDrops', 'Hypebeast'],
      upvotes: 1420,
      author: {
        name: 'Hypebeast Sports Desk',
        role: 'Streetwear & Sport Editor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-sprt-02',
      title: 'AFCON Cultural Football Legacy: Continental Pride & Iconic Kits',
      subtitle: 'From Nigeria’s 2018 Chevron phenomenon to vintage Senegalese embroidery kits.',
      description: 'African football jerseys are celebrated worldwide as vibrant works of cultural art. Incorporating native floral motifs, geometric tribal weaves, and bold neon palettes, these shirts routinely sell out in London, Tokyo, and New York within minutes of release.',
      markdownContent: `### Design Heritage
- **Geometric Symbolism**: Hand-drawn chevron and Ankara textile patterns integrated into performance polyester.
- **Grassroots Talent Pipelines**: How Lagos, Abidjan, and Dakar street academies shape European top flight leagues.
- **Collector Demand**: Deadstock tournament shirts trading for quadruple retail value on secondary markets.`,
      category: 'Sports',
      readTime: '5 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast',
      sourceUrl: 'https://hypebeast.com',
      tags: ['AFCON', 'FootballCulture', 'KitDesign', 'Hypebeast'],
      upvotes: 980,
      author: {
        name: 'Kofi Mensah',
        role: 'Football Culture Contributor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-sprt-03',
      title: 'Technical Sportswear Drops: GORE-TEX Silhouettes & Trail Runners',
      subtitle: 'High-performance mountain trail engineering enters global streetwear consciousness.',
      description: 'Salomon, Arc’teryx, and Nike ACG continue their dominant reign. Waterproof breathable membranes, Quicklace systems, and Contagrip outsoles deliver rugged utility suited for both mountain ridges and urban streetscapes.',
      markdownContent: `### Technical Innovations
- **GORE-TEX Pro Membranes**: 3-layer breathable laminates resisting extreme precipitation.
- **Vibram Megagrip**: Advanced rubber compounds providing traction on slick asphalt and wet stone.`,
      category: 'Sports',
      readTime: '3 min read',
      publishedAt: '4 days ago',
      timeAgo: '4d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Sports',
      sourceUrl: 'https://hypebeast.com',
      tags: ['TechnicalGear', 'GORETEX', 'TrailRunning', 'Hypebeast'],
      upvotes: 760,
      author: {
        name: 'Tariq Hassan',
        role: 'Gear Analyst',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  education: [
    {
      id: 'edt-edu-01',
      title: 'The BoF Luxury Market Index: Global Consumer Sentiment Shift in 2025',
      subtitle: 'Business of Fashion dissects secondary luxury liquidity, pricing power, and collector behaviors.',
      description: 'The global luxury paradigm is undergoing its most radical transformation since the rise of e-commerce. Consumer fatigue with repetitive logo-centric merchandise is driving a stampede toward unbranded artisanal tailoring, independent ateliers, and archival collector pieces.',
      markdownContent: `### BoF Key Index Takeaways
- **The Quiet Luxury Plateau**: Consumers demand demonstrable tactile craft rather than surface minimalism.
- **Direct-to-Collector Platforms**: How independent creators are achieving 75% gross margins bypassing wholesale department stores.
- **Emerging Market Capital**: African and Southeast Asian consumer purchasing power growing at 14% CAGR.

> "Brands that rely solely on heritage marketing without contemporary cultural relevance are facing rapid margin compression." — Business of Fashion`,
      category: 'Education & Business',
      readTime: '6 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Business of Fashion',
      sourceUrl: 'https://businessoffashion.com',
      tags: ['LuxuryIndex', 'BoF', 'MarketIndices', 'BusinessOfFashion'],
      upvotes: 1250,
      author: {
        name: 'BoF Intelligence Team',
        role: 'Senior Market Analyst',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-edu-02',
      title: 'Creator Economy Briefing: Independent Media Studios Monetization Models',
      subtitle: 'Building recurring seven-figure digital media brands with lean editorial teams.',
      description: 'Traditional media conglomerates with massive overheads are being outmaneuvered by 3-person digital curation collectives. By combining specialized newsletters, podcast syndication, and high-converting affiliate partnerships, these creators capture premium advertising yields.',
      markdownContent: `### The Monetization Stack
- **Direct Brand Underwriting**: High-touch bespoke sponsorships replacing low-CPM programmatic ad banners.
- **Curated Commerce & Drops**: Limited-edition capsule merchandise with near-zero inventory holding costs.
- **Paywalled Community Access**: Private chat channels and investor roundtables commanding $500+/year.`,
      category: 'Education & Business',
      readTime: '5 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Business of Fashion',
      sourceUrl: 'https://businessoffashion.com',
      tags: ['CreatorEconomy', 'MediaMonetization', 'Briefing', 'BoF'],
      upvotes: 890,
      author: {
        name: 'Rachel Sterling',
        role: 'Digital Media Strategist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-edu-03',
      title: 'Venture Capital Across African Tech: The 2025 Cross-Border Briefing',
      subtitle: 'Fintech settlement infrastructure, multi-currency wallets, and clean energy investments.',
      description: 'Despite global venture pullbacks, strategic infrastructure investments across Lagos, Nairobi, and Cairo remain resilient. Investors are prioritizing real unit economics over subsidized user acquisition, with cross-border remittances leading transaction volume.',
      markdownContent: `### Sector Allocations
- **Payment Settlement Rails**: APIs converting Naira, Cedi, and Shillings instantly into US Dollar liquidity.
- **Decentralized Solar Grids**: Commercial power infrastructure serving distributed SME factories.`,
      category: 'Education & Business',
      readTime: '4 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Business of Fashion',
      sourceUrl: 'https://businessoffashion.com',
      tags: ['VentureCapital', 'EmergingMarkets', 'Fintech', 'BoF'],
      upvotes: 670,
      author: {
        name: 'Oluwaseun Adeyemi',
        role: 'Emerging Markets Lead',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  lifestyle: [
    {
      id: 'edt-life-01',
      title: 'Architectural Digest x Hypebeast: Brutalist Tropical Villa Design Log',
      subtitle: 'Board-formed concrete, cantilevered reflections, and reclaimed teakwood sanctuaries.',
      description: 'Balancing monumental raw concrete with lush tropical vegetation, this residential masterpiece redefines indoor-outdoor coastal living. Deep cantilever overhangs shield living pavilions from intense sun while open courtyards capture cross-breezes.',
      markdownContent: `### Spatial Philosophy
- **Board-Formed Concrete**: Raw timber grain textures imprinted on grey architectural concrete walls.
- **Passive Thermal Ventilation**: Water features positioned in windward breezeways to naturally cool interior spaces.
- **Custom Teak Joinery**: Locally milled reclaimed timber framing panoramic sliding pocket doors.

> "Architecture is the frame; nature and human life provide the canvas." — Hypebeast Living`,
      category: 'Lifestyle',
      readTime: '5 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Living',
      sourceUrl: 'https://hypebeast.com',
      tags: ['Architecture', 'BrutalistDesign', 'TropicalVilla', 'Hypebeast'],
      upvotes: 1140,
      author: {
        name: 'Hypebeast Design Desk',
        role: 'Architecture Editor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-life-02',
      title: 'Quiet Luxury Assets: Rare Horology, Art Decanters & Bespoke Interior Design',
      subtitle: 'Vogue Living investigates tangible aesthetic investments for modern connoisseurs.',
      description: 'The shift from ostentatious displays of wealth toward discreet, connoisseur-grade living assets continues to accelerate. Hand-cut mouth-blown decanters, collector-grade mid-century Pierre Jeanneret chairs, and museum lighting installations are in record demand.',
      markdownContent: `### Collecting Benchmarks
- **Independent Watchmaking**: Ateliers producing fewer than 100 hand-finished timepieces annually.
- **Artisanal Lighting**: Cast bronze sconces with hand-poured Murano glass diffusers.
- **Sculptural Seating**: Patinated leather lounge chairs that grow richer in character with age.`,
      category: 'Lifestyle',
      readTime: '4 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Vogue Living',
      sourceUrl: 'https://vogue.com',
      tags: ['QuietLuxury', 'InteriorDesign', 'Horology', 'Vogue'],
      upvotes: 920,
      author: {
        name: 'Isabelle Fontaine',
        role: 'Interiors Editor',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  music: [
    {
      id: 'edt-mus-01',
      title: 'Hypebeast Music Drop: Asake & Wizkid Deliver Global Afro-Fusion Masterclass',
      subtitle: 'Poly-rhythmic log drums, layered brass sections, and the sound of West Africa taking global center stage.',
      description: 'Lagos soundsmiths continue their stadium-filling reign across London, Paris, and New York. The latest sonic drop unites Fuji vocal cadences with amapiano basslines and razor-sharp orchestral arrangements.',
      markdownContent: `### Sonic Breakdown & Production
- **Orchestration**: Live brass and saxophone arrangements recorded at Abbey Road Studios.
- **Log Drum Dynamics**: Low-frequency resonant amapiano percussion balanced for festival sound systems.
- **Vocal Harmonies**: Call-and-response gospel choral undertones reflecting classic Yoruba folk cadence.

> "African music isn't a regional subgenre anymore; it is the dominant rhythm of contemporary global pop culture." — Hypebeast Music`,
      category: 'Music',
      readTime: '4 min read',
      publishedAt: 'Today',
      timeAgo: '2h ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Music',
      sourceUrl: 'https://hypebeast.com/music',
      tags: ['MusicDrops', 'Afrobeats', 'ArtistSpotlight', 'Hypebeast'],
      upvotes: 1540,
      author: {
        name: 'Hypebeast Sound Desk',
        role: 'Music Editor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-mus-02',
      title: 'Runway Scores & Sonic Architecture: The Best Fashion Week Soundscapes',
      subtitle: 'How avant-garde producers compose immersive audio environments for Paris & Milan catwalks.',
      description: 'Beyond visual tailoring, the sonic atmosphere of fashion week dictates the emotional weight of a collection. From Steve McQueen’s soundscapes at Guggenheim to industrial techno at Balenciaga, music is high fashion’s most potent amplifier.',
      markdownContent: `### Catwalk Sound Design
- **Ambient Drones**: Sub-bass frequencies synced with model pacing.
- **Field Recordings**: Urban sirens, mechanical clicks, and spoken-word poetry collaged live.
- **Custom Sound Systems**: Spatial audio arrays surrounding runway attendees.`,
      category: 'Music',
      readTime: '5 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast',
      sourceUrl: 'https://hypebeast.com/music',
      tags: ['RunwayScores', 'SoundDesign', 'FashionWeek', 'Hypebeast'],
      upvotes: 1120,
      author: {
        name: 'Tariq Hassan',
        role: 'Audio Critic',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-mus-03',
      title: 'The Analog Modular Synth Renaissance in Contemporary Beatmaking',
      subtitle: 'Producers abandon pure digital software plugins for voltage-controlled Eurorack patches.',
      description: 'Tactile knobs, patch cables, and unpredictably warm analog transistors are experiencing a massive resurgence among premier recording artists. Moving outside the computer screen creates spontaneous harmonic overtones.',
      markdownContent: `### Hardware Spotlight
- **Buchla & Moog Filter Sweeps**: Natural acoustic non-linearities impossible to emulate in software.
- **Tape Saturation**: Running master mixes through vintage 1/4-inch reel-to-reel tape decks.`,
      category: 'Music',
      readTime: '3 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Music',
      sourceUrl: 'https://hypebeast.com/music',
      tags: ['AnalogSynths', 'StudioGear', 'Production', 'Hypebeast'],
      upvotes: 890,
      author: {
        name: 'Julian Vance',
        role: 'Sound Engineer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
      }
    }
  ],

  tech: [
    {
      id: 'edt-tech-01',
      title: 'Minimalist Workspace Configuration: Titanium EDC & OLED Ultrawide Studio',
      subtitle: 'Solid walnut monitor risers, custom CNC mechanical keyboards, and Grade 5 titanium daily essentials.',
      description: 'The modern creative workspace has evolved into an architectural study in ergonomics and tactile hardware. Eliminating cable clutter with under-desk magnetic routing and pairing high-refresh QD-OLED displays with custom anodized macropads creates an uncompromising production environment.',
      markdownContent: `### Hardware Blueprint & Desk Ergonomics
- **Display Architecture**: 49-inch 240Hz QD-OLED curved ultrawide with 99% DCI-P3 color calibration.
- **Machined Peripherals**: Custom 65% gasket-mounted keyboard with brass weight and hand-lubed linear switches.
- **Grade 5 Titanium EDC**: Precision pocket knives, modular key organizers, and titanium bolt-action pens.

> "A great desk setup does not just look beautiful; it removes cognitive drag between creative thought and execution." — The Verge Tech`,
      category: 'Tech & Gadgets',
      readTime: '4 min read',
      publishedAt: 'Today',
      timeAgo: '1h ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'The Verge',
      sourceUrl: 'https://theverge.com',
      tags: ['Hardware', 'Workspaces', 'EDCGear', 'TheVerge'],
      upvotes: 1820,
      author: {
        name: 'Alex Cranz',
        role: 'Hardware Editor',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-tech-02',
      title: 'Next-Gen 3nm Silicon Architecture & On-Device Neural Engines',
      subtitle: 'Hardware benchmarks, thermal vapor chambers, and unified memory bandwidth in 2025 flagship laptops.',
      description: 'Chipmakers are shattering performance-per-watt thresholds with extreme ultraviolet (EUV) lithography. Massive neural processing units (NPUs) now execute multi-billion parameter language models locally at 45 tokens per second without fan spin.',
      markdownContent: `### Silicon Teardown & Benchmarks
- **Unified Memory Bus**: 800 GB/s bandwidth allowing instantaneous video rendering and local LLM fine-tuning.
- **Vapor Chamber Thermals**: Graphite thermal spreaders dissipating 65W sustained load silently.
- **Battery Efficiency**: 22 hours of continuous web browsing and code compilation on a single charge.`,
      category: 'Tech & Gadgets',
      readTime: '6 min read',
      publishedAt: 'Yesterday',
      timeAgo: '1d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Wired Tech',
      sourceUrl: 'https://wired.com',
      tags: ['Silicon', 'Processors', 'Hardware', 'Wired'],
      upvotes: 1430,
      author: {
        name: 'Dieter Bohn',
        role: 'Senior Tech Reporter',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-tech-03',
      title: 'Foldable Dual-Display OLED Ecosystems for Mobile Creative Workflows',
      subtitle: 'Zero-crease fluid hinges, titanium tear-drop mechanisms, and dual-layer anti-reflective glass.',
      description: 'The foldable form factor has matured into a dependable production tool for mobile architects, coders, and editors. By combining book-style horizontal unfolds with stylus digitizers, pocket devices now replace dedicated secondary monitors on the go.',
      markdownContent: `### Engineering Highlights
- **Titanium Tear-Drop Hinge**: Rated for 500,000 fold cycles with frictionless friction dampers.
- **Multi-Window Multitasking**: Running three simultaneous desktop-class apps side by side.
- **Camera Sensor Integration**: 1-inch type image sensors paired with periscope telephoto optics.`,
      category: 'Tech & Gadgets',
      readTime: '5 min read',
      publishedAt: '2 days ago',
      timeAgo: '2d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'The Verge',
      sourceUrl: 'https://theverge.com',
      tags: ['Foldables', 'MobileTech', 'Displays', 'TheVerge'],
      upvotes: 1190,
      author: {
        name: 'David Pierce',
        role: 'Editor at Large',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      }
    },
    {
      id: 'edt-tech-04',
      title: 'The Mechanical Keyboard Connoisseur: Custom Brass Weights & Gasket Mounts',
      subtitle: 'Anodized aluminum chassis, hot-swappable PCBs, and tactile acoustic engineering.',
      description: 'A growing subculture of typing purists is elevating keyboard design into haute horology. From heavy brass internal weights that deepen the acoustic resonance to individually lubed POM switches, typing has become a sensory art form.',
      markdownContent: `### Tactile & Acoustic Parameters
- **Poron Gasket Dampening**: Isolates PCB vibration for a soft, cushioned bottom-out keystroke.
- **PBT Dye-Sub Keycaps**: 1.5mm thick textured plastic resisting finger oil shine over years of daily typing.`,
      category: 'Tech & Gadgets',
      readTime: '3 min read',
      publishedAt: '3 days ago',
      timeAgo: '3d ago',
      heroImageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
      sourceName: 'Hypebeast Tech',
      sourceUrl: 'https://hypebeast.com/tech',
      tags: ['Keyboards', 'EDC', 'Workspace', 'Hypebeast'],
      upvotes: 970,
      author: {
        name: 'Marcus Chen',
        role: 'Gear Specialist',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
      }
    }
  ]
};
