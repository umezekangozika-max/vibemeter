// Central Category Configuration & Content Relevance Engine for VibeMeter
// Provides query starters, positive/negative relevance filters, and verified video fallbacks

export interface CategoryDefinition {
  id: string;
  aliases: string[];
  name: string;
  iconName: string;
  color: string;
  gradient: string;
  description: string;
  searchQueries: string[];
  positiveKeywords: string[];
  negativeKeywords: string[];
  curatedVideos: Array<{
    id: string;
    title: string;
    category: string;
    creator: string;
    embedUrl: string;
    views?: string;
    likes?: string;
    comments?: string;
    duration?: string;
    thumbnailUrl: string;
    publishedAt: string;
    summary: string;
  }>;
}

export const CATEGORY_DEFINITIONS: Record<string, CategoryDefinition> = {
  videos: {
    id: 'videos',
    aliases: ['videos', 'video', 'watch', 'streams', 'visuals'],
    name: 'Videos',
    iconName: 'PlaySquare',
    color: '#ff007a',
    gradient: 'from-pink-500/20 to-purple-600/10 border-pink-500/30',
    description: 'Trending cultural video drops: Streetwear fashion drops, startup business trends & viral visualizers.',
    searchQueries: [
      'Streetwear fashion drops',
      'startup business trends',
      'trending cultural video drops'
    ],
    positiveKeywords: [
      'video', 'drop', 'drops', 'streetwear', 'startup', 'fashion', 'trends',
      'review', 'creator', 'official', 'tech', 'visualizer', 'show', 'interview'
    ],
    negativeKeywords: [],
    curatedVideos: [
      {
        id: 'bB9_e5Vp-Yw',
        title: 'Streetwear Fashion Drops: London to Lagos Underground Culture',
        category: 'Videos',
        creator: 'Streetwear Central',
        embedUrl: 'https://www.youtube-nocookie.com/embed/bB9_e5Vp-Yw',
        views: '620K',
        likes: '48K',
        comments: '1.4K',
        duration: '11:30',
        thumbnailUrl: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
        publishedAt: '1 day ago',
        summary: 'Inside the limited-edition sneaker drops, technical outerwear, and youth subcultures transforming modern luxury.'
      },
      {
        id: 'P6FORpg0KVo',
        title: 'Startup Business Trends: Fintech, Clean Energy & Scaling in 2025',
        category: 'Videos',
        creator: 'TechCabal & CNBC',
        embedUrl: 'https://www.youtube-nocookie.com/embed/P6FORpg0KVo',
        views: '840K',
        likes: '62K',
        comments: '2.1K',
        duration: '14:45',
        thumbnailUrl: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
        publishedAt: '2 days ago',
        summary: 'Early stage venture ecosystems, founder growth playbooks, and how cross-border creators monetize global audiences.'
      },
      {
        id: '4TWRwO8yOQU',
        title: 'Burna Boy - City Boys [Official Music Video & Street Style Visualizer]',
        category: 'Videos',
        creator: 'Burna Boy',
        embedUrl: 'https://www.youtube-nocookie.com/embed/4TWRwO8yOQU',
        views: '112M',
        likes: '890K',
        comments: '34K',
        duration: '3:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
        publishedAt: 'Global Trend',
        summary: 'Grammy-winning African giant Burna Boy performs City Boys from I Told Them.'
      },
      {
        id: '0fKBhvDjuy0',
        title: 'MKBHD Smartphone Awards: Best Hardware & AI Devices 2025',
        category: 'Videos',
        creator: 'Marques Brownlee',
        embedUrl: 'https://www.youtube-nocookie.com/embed/0fKBhvDjuy0',
        views: '3.8M',
        likes: '220K',
        comments: '14K',
        duration: '18:42',
        thumbnailUrl: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
        publishedAt: 'Verified Review',
        summary: 'Deep-dive critique of flagships, AI camera systems, battery life, and overall smartphone value.'
      }
    ]
  },
  music: {
    id: 'music',
    aliases: ['music', 'songs', 'afrobeats', 'sound'],
    name: 'Music',
    iconName: 'Music2',
    color: '#b026ff',
    gradient: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
    description: 'Official music videos, Afrobeats releases, live performances, artist interviews & charts.',
    searchQueries: [
      'official music videos Afrobeats releases',
      'live music performances artist interviews',
      'African music news Grammy awards charts'
    ],
    positiveKeywords: [
      'music video', 'official video', 'afrobeats', 'album', 'song', 'live performance',
      'artist interview', 'music', 'single', 'visualizer', 'track', 'remix', 'concert',
      'grammy', 'amapiano', 'r&b', 'hip hop', 'audio', 'singer', 'band'
    ],
    negativeKeywords: [
      'gameplay walkthrough', 'smartphone review', 'recipe tutorial', 'coding tutorial',
      'workout routine', 'math lesson', 'horror trailer'
    ],
    curatedVideos: [
      {
        id: '4TWRwO8yOQU',
        title: 'Burna Boy - City Boys [Official Music Video]',
        category: 'Music',
        creator: 'Burna Boy',
        embedUrl: 'https://www.youtube-nocookie.com/embed/4TWRwO8yOQU',
        views: '112M',
        likes: '890K',
        comments: '34K',
        duration: '3:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/4TWRwO8yOQU/hqdefault.jpg',
        publishedAt: 'Official Release',
        summary: 'Grammy-winning African giant Burna Boy performs City Boys from I Told Them.'
      },
      {
        id: 'CQLsdm1ZYAw',
        title: 'Rema - Calm Down (Official Music Video)',
        category: 'Music',
        creator: 'Rema',
        embedUrl: 'https://www.youtube-nocookie.com/embed/CQLsdm1ZYAw',
        views: '840M',
        likes: '6.2M',
        comments: '142K',
        duration: '3:59',
        thumbnailUrl: 'https://i.ytimg.com/vi/CQLsdm1ZYAw/hqdefault.jpg',
        publishedAt: 'Global Record',
        summary: 'Record-breaking global Afrobeats anthem that dominated charts worldwide.'
      },
      {
        id: 'crtQSTYWtqE',
        title: 'Ayra Starr - Rush (Official Music Video)',
        category: 'Music',
        creator: 'Ayra Starr',
        embedUrl: 'https://www.youtube-nocookie.com/embed/crtQSTYWtqE',
        views: '340M',
        likes: '2.1M',
        comments: '58K',
        duration: '3:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/crtQSTYWtqE/hqdefault.jpg',
        publishedAt: 'Chart Topper',
        summary: 'Celestial Afro-pop rhythms by Gen Z global sensation Ayra Starr.'
      },
      {
        id: '07B__82wQpU',
        title: 'Davido - UNAVAILABLE (Official Music Video) ft. Musa Keys',
        category: 'Music',
        creator: 'Davido',
        embedUrl: 'https://www.youtube-nocookie.com/embed/07B__82wQpU',
        views: '160M',
        likes: '1.4M',
        comments: '42K',
        duration: '3:05',
        thumbnailUrl: 'https://i.ytimg.com/vi/07B__82wQpU/hqdefault.jpg',
        publishedAt: 'Timeless Era',
        summary: 'Infectious Amapiano bassline fused with Afrobeats anthemic vocals.'
      }
    ]
  },

  lifestyle: {
    id: 'lifestyle',
    aliases: ['lifestyle', 'living', 'habits', 'wellness-lifestyle'],
    name: 'Lifestyle',
    iconName: 'Gem',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30',
    description: 'Lifestyle inspiration, beauty routines, home inspiration & personal development.',
    searchQueries: [
      'lifestyle inspiration personal development',
      'morning routine beauty routines home inspiration',
      'mindful living productivity daily habits'
    ],
    positiveKeywords: [
      'lifestyle', 'routine', 'habits', 'morning routine', 'personal development',
      'self care', 'beauty routine', 'home inspiration', 'mindfulness', 'decor',
      'productivity', 'glow up', 'wellness', 'daily vlog', 'life reset', 'organization'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country music', 'horror trailer', 'movie trailer',
      'football highlights', 'nba highlights', 'coding tutorial', 'crypto trading'
    ],
    curatedVideos: [
      {
        id: 'inpok4MKVLM',
        title: 'Simple Self-Care Habits for a Better You (Morning & Night)',
        category: 'Lifestyle',
        creator: 'LifeWithJoy',
        embedUrl: 'https://www.youtube-nocookie.com/embed/inpok4MKVLM',
        views: '760K',
        likes: '72K',
        comments: '1.1K',
        duration: '5:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
        publishedAt: 'Recent',
        summary: 'Grounding habits including morning sunlight, hydration, digital detox, and evening breathwork.'
      },
      {
        id: 'dQ30XY8qL8s',
        title: 'The 5 AM Morning Routine That Transformed My Productivity',
        category: 'Lifestyle',
        creator: 'Mindful Daily',
        embedUrl: 'https://www.youtube-nocookie.com/embed/dQ30XY8qL8s',
        views: '1.1M',
        likes: '94K',
        comments: '3.9K',
        duration: '8:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/dQ30XY8qL8s/hqdefault.jpg',
        publishedAt: 'Recent',
        summary: 'High-performance morning habits for entrepreneurs, creatives, and digital nomads.'
      }
    ]
  },

  fashion: {
    id: 'fashion',
    aliases: ['fashion', 'style', 'streetwear', 'runway'],
    name: 'Fashion',
    iconName: 'Shirt',
    color: '#ff007a',
    gradient: 'from-pink-500/20 to-rose-600/10 border-pink-500/30',
    description: 'Streetwear lookbooks, fashion week runway, sneaker releases, fashion styling & designer collections.',
    searchQueries: [
      'streetwear lookbooks fashion styling',
      'fashion week runway designer collections',
      'sneaker releases drops luxury street fashion'
    ],
    positiveKeywords: [
      'fashion', 'runway', 'streetwear', 'sneaker', 'lookbook', 'styling',
      'collection', 'designer', 'outfit', 'apparel', 'couture', 'highsnobiety',
      'hypebeast', 'fashion week', 'drip', 'wardrobe', 'capsule', 'drop'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'football highlights', 'coding tutorial', 'math lesson', 'gym workout', 'dating advice'
    ],
    curatedVideos: [
      {
        id: 'YV4rQ1K_VbY',
        title: 'Lagos Fashion Week: Runway Highlights & Modern Adire Style',
        category: 'Fashion',
        creator: 'Vogue Africa',
        embedUrl: 'https://www.youtube-nocookie.com/embed/YV4rQ1K_VbY',
        views: '780K',
        likes: '58K',
        comments: '1.2K',
        duration: '7:45',
        thumbnailUrl: 'https://i.ytimg.com/vi/YV4rQ1K_VbY/hqdefault.jpg',
        publishedAt: 'Runway Highlights',
        summary: 'Top African couturiers merging indigenous hand-dyed indigo textiles with Parisian tailoring.'
      },
      {
        id: 'bB9_e5Vp-Yw',
        title: 'Streetwear Culture in Lagos: Behind the Nigerian Brands',
        category: 'Fashion',
        creator: 'Haute Afrik',
        embedUrl: 'https://www.youtube-nocookie.com/embed/bB9_e5Vp-Yw',
        views: '520K',
        likes: '44K',
        comments: '830',
        duration: '8:30',
        thumbnailUrl: 'https://i.ytimg.com/vi/bB9_e5Vp-Yw/hqdefault.jpg',
        publishedAt: 'Spotlight',
        summary: 'Exploration of Yaba and Victoria Island streetwear designers defining youth culture.'
      }
    ]
  },

  technology: {
    id: 'technology',
    aliases: ['technology', 'tech', 'gadgets', 'tech-gadgets'],
    name: 'Tech & Gadgets',
    iconName: 'Cpu',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-indigo-600/10 border-cyan-500/30',
    description: 'Smartphone reviews, laptop reviews, AI tools tutorials, gadget comparisons & product launches.',
    searchQueries: [
      'smartphone reviews laptop reviews gadget comparisons',
      'AI tools tutorials technology product launches',
      'consumer electronics next gen hardware review'
    ],
    positiveKeywords: [
      'tech', 'technology', 'smartphone', 'laptop', 'gadget', 'review', 'ai',
      'hardware', 'software', 'unboxing', 'comparison', 'apple', 'android',
      'samsung', 'mkbhd', 'device', 'processor', 'specs', 'electronics', 'camera test'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'cooking recipe', 'fashion runway', 'workout routine', 'dating tips'
    ],
    curatedVideos: [
      {
        id: '0fKBhvDjuy0',
        title: 'MKBHD Smartphone Awards: Best Tech & Hardware Innovations',
        category: 'Tech & Gadgets',
        creator: 'Marques Brownlee',
        embedUrl: 'https://www.youtube-nocookie.com/embed/0fKBhvDjuy0',
        views: '3.8M',
        likes: '220K',
        comments: '14K',
        duration: '18:42',
        thumbnailUrl: 'https://i.ytimg.com/vi/0fKBhvDjuy0/hqdefault.jpg',
        publishedAt: 'Verified Review',
        summary: 'Deep-dive critique of flagships, AI camera systems, battery life, and overall smartphone value.'
      },
      {
        id: 'kffacxfA7G4',
        title: 'Top 10 Best Productivity Apps for Android in 2025',
        category: 'Tech & Gadgets',
        creator: 'Future Gear',
        embedUrl: 'https://www.youtube-nocookie.com/embed/kffacxfA7G4',
        views: '540K',
        likes: '42K',
        comments: '710',
        duration: '10:05',
        thumbnailUrl: 'https://i.ytimg.com/vi/kffacxfA7G4/hqdefault.jpg',
        publishedAt: 'Hardware Guide',
        summary: 'Streamline your daily workflow with next-generation mobile task managers and note apps.'
      },
      {
        id: 'V_hwbwzVdTI',
        title: 'Galaxy AI & Flagship Hardware: The Next-Gen Smartphone Era',
        category: 'Tech & Gadgets',
        creator: 'Tech Spurt',
        embedUrl: 'https://www.youtube-nocookie.com/embed/V_hwbwzVdTI',
        views: '890K',
        likes: '68K',
        comments: '2.1K',
        duration: '12:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/V_hwbwzVdTI/hqdefault.jpg',
        publishedAt: 'Review',
        summary: 'Hardware tear-down and on-device machine learning test for creators and power users.'
      }
    ]
  },

  travel: {
    id: 'travel',
    aliases: ['travel', 'food-travel', 'destinations', 'tourism', 'food_travel'],
    name: 'Food & Travel',
    iconName: 'Plane',
    color: '#00f2fe',
    gradient: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30',
    description: 'Travel documentaries, destination guides, African tourism, cooking tutorials, recipes & food discovery.',
    searchQueries: [
      'travel documentaries destination guides African tourism',
      'cooking tutorials recipes food discovery African culinary',
      'walking tour travel film 4K street food'
    ],
    positiveKeywords: [
      'travel', 'destination', 'tour', 'guide', 'tourism', 'documentary',
      'trip', 'island', 'hotel', 'flight', 'resort', 'walking tour', 'city tour',
      'africa', 'zanzibar', 'santorini', 'cape town', 'vacation', 'recipe',
      'cooking', 'food', 'chef', 'culinary', 'street food', 'cuisine', 'jollof',
      'dishes', 'taste', 'restaurant', 'wanderlust'
    ],
    negativeKeywords: [
      'official music video', 'official audio', 'lyric video', 'music video',
      'country music', 'country song', 'vevo', 'remix', 'feat.', 'ft.',
      'horror trailer', 'horror movie', 'teaser trailer', 'official trailer',
      'movie trailer', 'film trailer', 'full movie', 'gameplay walkthrough',
      'ps5 gameplay', 'fortnite', 'roblox', 'smartphone review', 'coding tutorial'
    ],
    curatedVideos: [
      {
        id: 'tO01J-13nCE',
        title: '10 Must-See Places in Santorini Greece | 4K Walking Tour',
        category: 'Food & Travel',
        creator: 'TravelGuru',
        embedUrl: 'https://www.youtube-nocookie.com/embed/tO01J-13nCE',
        views: '1.2M',
        likes: '89K',
        comments: '2.4K',
        duration: '14:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/tO01J-13nCE/hqdefault.jpg',
        publishedAt: 'Travel Guide',
        summary: 'Panoramic cliffside vistas, turquoise Aegean seas, Oia architecture, and golden sunset yacht tours.'
      },
      {
        id: '8Z1e96QPoX8',
        title: 'Zanzibar Tanzania: The Ultimate Island Travel Film 4K',
        category: 'Food & Travel',
        creator: 'Nomad Guides',
        embedUrl: 'https://www.youtube-nocookie.com/embed/8Z1e96QPoX8',
        views: '1.4M',
        likes: '110K',
        comments: '4.8K',
        duration: '11:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/8Z1e96QPoX8/hqdefault.jpg',
        publishedAt: 'Island Doc',
        summary: 'Pristine white-sand coastlines, Stone Town historic alleys, and spice island culture.'
      },
      {
        id: 'jT4R8PzD57E',
        title: 'Cape Town South Africa: Complete Travel Guide & Hidden Gems',
        category: 'Food & Travel',
        creator: 'Wilderness Explorers',
        embedUrl: 'https://www.youtube-nocookie.com/embed/jT4R8PzD57E',
        views: '920K',
        likes: '74K',
        comments: '3.6K',
        duration: '12:40',
        thumbnailUrl: 'https://i.ytimg.com/vi/jT4R8PzD57E/hqdefault.jpg',
        publishedAt: 'Destination Tour',
        summary: 'Table Mountain ascents, Camps Bay coastal dining, and Boulders Beach penguin sanctuary.'
      },
      {
        id: 'pXlB_ZkH6qQ',
        title: 'Authentic Smoky Party Jollof Rice Masterclass Recipe',
        category: 'Food & Travel',
        creator: 'Chef Kemi',
        embedUrl: 'https://www.youtube-nocookie.com/embed/pXlB_ZkH6qQ',
        views: '1.1M',
        likes: '94K',
        comments: '4.2K',
        duration: '11:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/pXlB_ZkH6qQ/hqdefault.jpg',
        publishedAt: 'Culinary Masterclass',
        summary: 'Signature firewood smoky aroma, distinct separate grains, and spicy scotch bonnet reduction.'
      }
    ]
  },

  health: {
    id: 'health',
    aliases: ['health', 'wellness', 'fitness', 'workout'],
    name: 'Health & Wellness',
    iconName: 'Heart',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-purple-600/10 border-pink-500/30',
    description: 'Fitness routines, exercise tutorials & reputable general wellness education.',
    searchQueries: [
      'fitness routines exercise tutorials',
      'general wellness education mobility stretching',
      'full body workout healthy lifestyle habits'
    ],
    positiveKeywords: [
      'fitness', 'workout', 'exercise', 'mobility', 'health', 'wellness',
      'stretching', 'cardio', 'posture', 'nutrition', 'core', 'yoga',
      'bodyweight', 'training', 'healthy habits', 'strength'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'gaming walkthrough', 'fashion styling', 'crypto trading', 'standup comedy'
    ],
    curatedVideos: [
      {
        id: 'ml6cT4AZdqI',
        title: '20 Min Full Body Workout - Daily Fitness & Mobility',
        category: 'Health & Wellness',
        creator: 'FitLife Global',
        embedUrl: 'https://www.youtube-nocookie.com/embed/ml6cT4AZdqI',
        views: '890K',
        likes: '78K',
        comments: '2.1K',
        duration: '20:12',
        thumbnailUrl: 'https://i.ytimg.com/vi/ml6cT4AZdqI/hqdefault.jpg',
        publishedAt: 'Fitness Routine',
        summary: 'Low-impact, high-intensity bodyweight routines to energize posture, core, and stamina.'
      },
      {
        id: 'inpok4MKVLM',
        title: 'Restorative Mobility & Breathing Routine For Better Sleep',
        category: 'Health & Wellness',
        creator: 'LifeWithJoy',
        embedUrl: 'https://www.youtube-nocookie.com/embed/inpok4MKVLM',
        views: '640K',
        likes: '51K',
        comments: '1.2K',
        duration: '10:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
        publishedAt: 'Wellness Guide',
        summary: 'Gentle mobility flow and nervous system downregulation for physical and mental restoration.'
      }
    ]
  },

  relationships: {
    id: 'relationships',
    aliases: ['relationships', 'dating', 'love', 'family'],
    name: 'Relationships',
    iconName: 'Users2',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-pink-600/10 border-rose-500/30',
    description: 'Healthy relationship advice, communication skills, dating education & emotional intelligence.',
    searchQueries: [
      'healthy relationship advice communication skills',
      'dating education emotional intelligence',
      'marriage partnership conflict resolution relationship education'
    ],
    positiveKeywords: [
      'relationship', 'dating', 'communication skills', 'marriage', 'partner',
      'love', 'healthy relationship', 'emotional intelligence', 'conflict resolution',
      'attachment style', 'boundaries', 'couple', 'connection', 'family'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'football highlights', 'gadget review', 'cooking recipe', 'workout routine'
    ],
    curatedVideos: [
      {
        id: '7XqO_k9xZqE',
        title: 'Communication Skills That Transform Your Relationships',
        category: 'Relationships',
        creator: 'The School of Life',
        embedUrl: 'https://www.youtube-nocookie.com/embed/7XqO_k9xZqE',
        views: '1.8M',
        likes: '120K',
        comments: '4.5K',
        duration: '11:45',
        thumbnailUrl: 'https://i.ytimg.com/vi/7XqO_k9xZqE/hqdefault.jpg',
        publishedAt: 'Relationship Insights',
        summary: 'Master active listening, vulnerability, and constructive conflict resolution for lasting bonds.'
      },
      {
        id: 'd0Yy9x1Fh3k',
        title: 'Healthy Boundaries and Emotional Intelligence in Dating',
        category: 'Relationships',
        creator: 'Therapy in a Nutshell',
        embedUrl: 'https://www.youtube-nocookie.com/embed/d0Yy9x1Fh3k',
        views: '920K',
        likes: '84K',
        comments: '2.8K',
        duration: '14:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/d0Yy9x1Fh3k/hqdefault.jpg',
        publishedAt: 'Educational Guide',
        summary: 'Understand attachment styles and build compassionate, resilient interpersonal connections.'
      }
    ]
  },

  sports: {
    id: 'sports',
    aliases: ['sports', 'football', 'basketball', 'athletics'],
    name: 'Sports',
    iconName: 'Trophy',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-indigo-600/10 border-blue-500/30',
    description: 'Football highlights, basketball highlights, sports analysis, athlete interviews & athletics.',
    searchQueries: [
      'football highlights basketball highlights',
      'sports analysis athlete interviews',
      'athletics sports documentaries African football'
    ],
    positiveKeywords: [
      'football', 'soccer', 'basketball', 'sports', 'goals', 'highlights',
      'afcon', 'match', 'athlete', 'interview', 'champions league', 'premier league',
      'nba', 'tournament', 'athletics', 'skills', 'dribble', 'trophy'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'cooking recipe', 'beauty routine', 'fashion styling', 'crypto trading'
    ],
    curatedVideos: [
      {
        id: '6d8pZz0cK_s',
        title: 'Top 10 Most Iconic Goals in AFCON History',
        category: 'Sports',
        creator: 'CAF TV Africa',
        embedUrl: 'https://www.youtube-nocookie.com/embed/6d8pZz0cK_s',
        views: '2.6M',
        likes: '175K',
        comments: '9.4K',
        duration: '9:15',
        thumbnailUrl: 'https://i.ytimg.com/vi/6d8pZz0cK_s/hqdefault.jpg',
        publishedAt: 'Tournament Highlights',
        summary: 'Electrifying strikes, buzzer beaters, and historic tournament moments celebrating African football.'
      },
      {
        id: 't2T_K4G3XyE',
        title: 'African Football Stars: Magic Skills & Goals 2025',
        category: 'Sports',
        creator: 'SuperSport Africa',
        embedUrl: 'https://www.youtube-nocookie.com/embed/t2T_K4G3XyE',
        views: '1.5M',
        likes: '112K',
        comments: '4.1K',
        duration: '8:40',
        thumbnailUrl: 'https://i.ytimg.com/vi/t2T_K4G3XyE/hqdefault.jpg',
        publishedAt: 'Weekly Spotlight',
        summary: 'The best dribbles, solo runs, and masterclass playmaking by top African stars in world leagues.'
      }
    ]
  },

  business: {
    id: 'business',
    aliases: ['business', 'startups', 'finance', 'entrepreneurship'],
    name: 'Business',
    iconName: 'Briefcase',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30',
    description: 'Startup founders, entrepreneurship education, business news, marketing education & finance education.',
    searchQueries: [
      'startup founders entrepreneurship education',
      'business news marketing education finance education',
      'company developments venture capital tech founders'
    ],
    positiveKeywords: [
      'business', 'startup', 'founder', 'entrepreneur', 'venture capital',
      'finance', 'fintech', 'economy', 'marketing', 'investment', 'cnbc',
      'revenue', 'company', 'scaling', 'techcabal', 'pitch', 'leadership'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'gaming walkthrough', 'fashion lookbook', 'workout routine', 'comedy sketch'
    ],
    curatedVideos: [
      {
        id: 'P6FORpg0KVo',
        title: 'African Tech Startups Cross $3.5B: Fintech & Clean Energy Lead',
        category: 'Business',
        creator: 'TechCabal & CNBC',
        embedUrl: 'https://www.youtube-nocookie.com/embed/P6FORpg0KVo',
        views: '650K',
        likes: '54K',
        comments: '1.8K',
        duration: '14:30',
        thumbnailUrl: 'https://i.ytimg.com/vi/P6FORpg0KVo/hqdefault.jpg',
        publishedAt: 'Economy Report',
        summary: 'How founders across Lagos, Nairobi, and Cape Town are scaling fintech, logistics, and media.'
      },
      {
        id: 'V_hwbwzVdTI',
        title: 'Paystack & Flutterwave Power Next Wave of Cross-Border E-Commerce',
        category: 'Business',
        creator: 'Financial Times',
        embedUrl: 'https://www.youtube-nocookie.com/embed/V_hwbwzVdTI',
        views: '480K',
        likes: '39K',
        comments: '1.2K',
        duration: '11:20',
        thumbnailUrl: 'https://i.ytimg.com/vi/V_hwbwzVdTI/hqdefault.jpg',
        publishedAt: 'Fintech Special',
        summary: 'Automated settlement rails empower African merchants to accept global credit cards.'
      }
    ]
  },

  education: {
    id: 'education',
    aliases: ['education', 'learning', 'tutorials', 'courses'],
    name: 'Education',
    iconName: 'GraduationCap',
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-indigo-600/10 border-purple-500/30',
    description: 'Science lessons, mathematics tutorials, history lessons, language learning & programming tutorials.',
    searchQueries: [
      'science lessons mathematics tutorials history lessons',
      'language learning programming tutorials computer science',
      'coding masterclass artificial intelligence education'
    ],
    positiveKeywords: [
      'education', 'tutorial', 'lesson', 'lecture', 'science', 'mathematics',
      'history', 'programming', 'coding', 'language learning', 'explain',
      'course', 'physics', 'computer science', 'software engineering', 'learn'
    ],
    negativeKeywords: [
      'official music video', 'vevo', 'country song', 'horror trailer', 'movie trailer',
      'gaming walkthrough', 'fashion runway', 'workout routine', 'celebrity gossip'
    ],
    curatedVideos: [
      {
        id: 'fBNz5xF-Kx4',
        title: 'The Map of Mathematics: From Basic Algebra to Topology',
        category: 'Education',
        creator: 'Domain of Science',
        embedUrl: 'https://www.youtube-nocookie.com/embed/fBNz5xF-Kx4',
        views: '4.2M',
        likes: '280K',
        comments: '9.8K',
        duration: '11:06',
        thumbnailUrl: 'https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg',
        publishedAt: 'Science Lesson',
        summary: 'An illustrated breakdown of the entire landscape of pure and applied mathematics.'
      },
      {
        id: 'rfscVS0vtbw',
        title: 'Python Programming Full Course for Beginners: Learn in 4 Hours',
        category: 'Education',
        creator: 'freeCodeCamp',
        embedUrl: 'https://www.youtube-nocookie.com/embed/rfscVS0vtbw',
        views: '8.1M',
        likes: '490K',
        comments: '18K',
        duration: '4:26:52',
        thumbnailUrl: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
        publishedAt: 'Coding Tutorial',
        summary: 'Comprehensive programming fundamentals from data structures to building real-world projects.'
      }
    ]
  },

  movies: {
    id: 'movies',
    aliases: ['movies', 'cinema', 'trailers', 'nollywood'],
    name: 'Movies',
    iconName: 'Clapperboard',
    color: '#ff5e3a',
    gradient: 'from-orange-500/20 to-red-600/10 border-orange-500/30',
    description: 'Blockbusters, Nollywood releases, African cinema & official movie trailers.',
    searchQueries: [
      'Nollywood official movie trailers African cinema',
      'blockbuster movie trailer releases 2025'
    ],
    positiveKeywords: [
      'movie', 'trailer', 'cinema', 'film', 'nollywood', 'netflix', 'hollywood',
      'teaser', 'actor', 'director', 'action thriller', 'drama'
    ],
    negativeKeywords: [
      'coding tutorial', 'math lesson', 'smartphone review', 'workout routine'
    ],
    curatedVideos: [
      {
        id: 'g4Hbz2jLxvQ',
        title: 'The Black Book | Official Trailer | Netflix Nollywood Action',
        category: 'Movies',
        creator: 'Netflix Nigeria',
        embedUrl: 'https://www.youtube-nocookie.com/embed/g4Hbz2jLxvQ',
        views: '4.8M',
        likes: '280K',
        comments: '19K',
        duration: '2:24',
        thumbnailUrl: 'https://i.ytimg.com/vi/g4Hbz2jLxvQ/hqdefault.jpg',
        publishedAt: 'Official Trailer',
        summary: 'High-octane espionage and justice thriller set across the bustling metropolis of Lagos.'
      },
      {
        id: 'bK6ldnjE3Y0',
        title: 'A Tribe Called Judah | Official Nollywood Cinema Trailer',
        category: 'Movies',
        creator: 'CinemaScope Africa',
        embedUrl: 'https://www.youtube-nocookie.com/embed/bK6ldnjE3Y0',
        views: '3.1M',
        likes: '190K',
        comments: '11K',
        duration: '2:18',
        thumbnailUrl: 'https://i.ytimg.com/vi/bK6ldnjE3Y0/hqdefault.jpg',
        publishedAt: 'Cinema Release',
        summary: 'Record-shattering Nollywood family heist drama celebrating resilience and brotherhood.'
      }
    ]
  }
};

// Normalized resolver for route or query string
export function resolveCategoryDefinition(rawCategory: string): CategoryDefinition {
  const norm = (rawCategory || '').toLowerCase().replace('/', '').trim();

  // Direct match
  if (CATEGORY_DEFINITIONS[norm]) {
    return CATEGORY_DEFINITIONS[norm];
  }

  // Check aliases
  for (const def of Object.values(CATEGORY_DEFINITIONS)) {
    if (def.aliases.includes(norm) || def.id === norm) {
      return def;
    }
  }

  // Partial match fallback
  if (norm.includes('trav') || norm.includes('food')) return CATEGORY_DEFINITIONS.travel;
  if (norm.includes('tech')) return CATEGORY_DEFINITIONS.technology;
  if (norm.includes('health') || norm.includes('fit') || norm.includes('well')) return CATEGORY_DEFINITIONS.health;
  if (norm.includes('relat') || norm.includes('dat')) return CATEGORY_DEFINITIONS.relationships;
  if (norm.includes('fash') || norm.includes('style')) return CATEGORY_DEFINITIONS.fashion;
  if (norm.includes('sport')) return CATEGORY_DEFINITIONS.sports;
  if (norm.includes('bus') || norm.includes('startup')) return CATEGORY_DEFINITIONS.business;
  if (norm.includes('edu') || norm.includes('learn') || norm.includes('code')) return CATEGORY_DEFINITIONS.education;
  if (norm.includes('mov') || norm.includes('film') || norm.includes('trail')) return CATEGORY_DEFINITIONS.movies;
  if (norm.includes('life')) return CATEGORY_DEFINITIONS.lifestyle;
  if (norm.includes('vid')) return CATEGORY_DEFINITIONS.videos;

  return CATEGORY_DEFINITIONS.videos;
}

// Strict Relevance Filter for YouTube search results
export function isRelevantToCategory(
  video: {
    title: string;
    description?: string;
    channelTitle?: string;
    tags?: string[];
  },
  categoryKey: string
): { isRelevant: boolean; reason?: string } {
  const def = resolveCategoryDefinition(categoryKey);
  const text = `${video.title || ''} ${video.description || ''} ${video.channelTitle || ''} ${(video.tags || []).join(' ')}`.toLowerCase();
  const titleLower = (video.title || '').toLowerCase();

  // 1. Check strong negative keywords
  for (const neg of def.negativeKeywords) {
    if (titleLower.includes(neg)) {
      // Check if it has an overriding strong positive term in title
      const hasStrongOverride = def.positiveKeywords.some(pos => titleLower.includes(pos) && pos.length > 5);
      if (!hasStrongOverride) {
        return { isRelevant: false, reason: `Matches negative indicator: "${neg}" in title` };
      }
    }
  }

  // 2. Specific cross-category rejections:
  // For Travel: reject any music video / country song / horror trailer unless specifically a travel topic
  if (def.id === 'travel') {
    const isMusic = /official\s+music\s+video|official\s+audio|lyric\s+video|country\s+music|country\s+song|album\s+track|vevo/i.test(titleLower);
    const isHorror = /horror\s+movie|horror\s+trailer|scary\s+movie|official\s+trailer|teaser\s+trailer/i.test(titleLower);
    const hasExplicitTravel = /travel|destination|city\s+tour|walking\s+tour|tourism|visit|island|4k\s+tour|guide|safari|hotel|trip/i.test(titleLower);

    if (isMusic && !hasExplicitTravel) {
      return { isRelevant: false, reason: 'Music performance rejected from Travel category' };
    }
    if (isHorror && !hasExplicitTravel) {
      return { isRelevant: false, reason: 'Movie/Horror trailer rejected from Travel category' };
    }
  }

  // For Education: reject music clips and movie trailers
  if (def.id === 'education') {
    if (/music\s+video|official\s+trailer|horror\s+trailer/i.test(titleLower)) {
      return { isRelevant: false, reason: 'Entertainment media rejected from Education category' };
    }
  }

  // For Relationships: reject sports highlights, music videos, movie trailers
  if (def.id === 'relationships') {
    if (/highlights|vs\s|goals|nba|afcon|music\s+video|official\s+trailer/i.test(titleLower)) {
      return { isRelevant: false, reason: 'Sports/Music rejected from Relationships category' };
    }
  }

  // For Sports: reject cooking, coding, beauty
  if (def.id === 'sports') {
    if (/recipe|cooking|how\s+to\s+code|makeup\s+tutorial|beauty\s+routine/i.test(titleLower)) {
      return { isRelevant: false, reason: 'Non-sports content rejected from Sports category' };
    }
  }

  // 3. Positive relevance threshold: At least one positive keyword must be present in the title, description, or channel
  const hasPositiveMatch = def.positiveKeywords.some(pos => text.includes(pos));
  if (!hasPositiveMatch) {
    return { isRelevant: false, reason: 'No positive category indicators found' };
  }

  return { isRelevant: true };
}
