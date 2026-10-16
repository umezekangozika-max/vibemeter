export type ContentType = 
  | 'video' 
  | 'music' 
  | 'movie' 
  | 'lifestyle' 
  | 'fashion' 
  | 'travel' 
  | 'food' 
  | 'tech' 
  | 'health' 
  | 'article' 
  | 'tool';

export interface Creator {
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
  role?: string;
  followers?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  contentType: ContentType;
  duration?: string;
  views: string;
  likes: string;
  comments: string;
  creator: Creator;
  publishedAt: string;
  thumbnailUrl: string;
  mediaEmbedUrl?: string; // YouTube embed or audio embed
  tags: string[];
  rating?: number;
  featured?: boolean;
  trendingRank?: number;
  isLive?: boolean;
  affiliateUrl?: string;
  price?: string;
  readTime?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  count: string;
  iconName: string;
  color: string;
  gradient: string;
  description: string;
}

export interface TrendingItem {
  rank: number;
  title: string;
  category: string;
  views: string;
  likes: string;
  thumbnailUrl: string;
  creator: string;
  duration?: string;
  change?: 'up' | 'down' | 'steady';
}

export interface UserAccount {
  name: string;
  handle: string;
  email: string;
  avatar: string;
  isPremium: boolean;
  savedItemIds: string[];
  likedItemIds: string[];
  followingCreators: string[];
  notificationsCount: number;
  messagesCount: number;
}

export interface EditorialCardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  readTime?: string;
  publishedAt: string;
  timeAgo?: string;
  heroImageUrl: string;
  sourceName: string;
  sourceUrl: string;
  tags?: string[];
  markdownContent?: string;
  upvotes?: number;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
}
