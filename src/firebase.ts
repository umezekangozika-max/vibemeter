import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  addDoc, 
  query, 
  orderBy, 
  getDocs, 
  serverTimestamp 
} from 'firebase/firestore';

// Environment variable configuration for Firebase Spark Free Tier
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let db: any = null;

if (isFirebaseConfigured) {
  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (err) {
    console.warn('Firebase initialization warning, falling back to local vault:', err);
  }
}

// Local storage fallback cache keys
const UPVOTE_CACHE_KEY = 'vibemeter_fire_upvotes';
const COMMENTS_CACHE_KEY = 'vibemeter_fire_comments';
const SPONSORED_POSTS_KEY = 'vibemeter_sponsored_posts';

function getLocalUpvotes(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(UPVOTE_CACHE_KEY) || '{}');
  } catch {
    return {};
  }
}

function setLocalUpvotes(data: Record<string, number>) {
  try {
    localStorage.setItem(UPVOTE_CACHE_KEY, JSON.stringify(data));
  } catch {}
}

function getLocalComments(): Record<string, any[]> {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_CACHE_KEY) || '{}');
  } catch {
    return {};
  }
}

function setLocalComments(data: Record<string, any[]>) {
  try {
    localStorage.setItem(COMMENTS_CACHE_KEY, JSON.stringify(data));
  } catch {}
}

export async function upvoteEditorial(itemId: string, initialCount: number = 0): Promise<number> {
  // Always update local state first for instant UI response
  const local = getLocalUpvotes();
  const newCount = (local[itemId] !== undefined ? local[itemId] : initialCount) + 1;
  local[itemId] = newCount;
  setLocalUpvotes(local);

  // Synchronize with Firebase Firestore if configured
  if (db) {
    try {
      const docRef = doc(db, 'upvotes', itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, { count: increment(1), lastUpvoted: serverTimestamp() });
        return (docSnap.data().count || 0) + 1;
      } else {
        await setDoc(docRef, { count: newCount, itemId, createdAt: serverTimestamp() });
        return newCount;
      }
    } catch (err) {
      console.warn('Firestore upvote sync notice:', err);
    }
  }

  // Also notify server endpoint
  try {
    await fetch('/api/editorial/upvote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId })
    });
  } catch {}

  return newCount;
}

export async function fetchEditorialUpvotes(itemId: string, defaultCount: number = 0): Promise<number> {
  if (db) {
    try {
      const docRef = doc(db, 'upvotes', itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().count !== undefined) {
        return docSnap.data().count;
      }
    } catch {}
  }
  const local = getLocalUpvotes();
  return local[itemId] !== undefined ? local[itemId] : defaultCount;
}

export async function fetchEditorialComments(itemId: string, defaultComments: any[] = []): Promise<any[]> {
  if (db) {
    try {
      const commentsRef = collection(db, 'articles', itemId, 'comments');
      const q = query(commentsRef, orderBy('createdAt', 'desc'));
      const querySnap = await getDocs(q);
      if (!querySnap.empty) {
        return querySnap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    } catch (err) {
      console.warn('Firestore comments fetch notice:', err);
    }
  }

  const local = getLocalComments();
  return local[itemId] || defaultComments;
}

export async function postEditorialComment(itemId: string, commentData: { author: string; text: string; avatar?: string }): Promise<any> {
  const newComment = {
    id: `comm_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...commentData,
    createdAt: new Date().toISOString(),
    timeAgo: 'Just now'
  };

  // Local state update
  const local = getLocalComments();
  local[itemId] = [newComment, ...(local[itemId] || [])];
  setLocalComments(local);

  // Firestore update
  if (db) {
    try {
      const commentsRef = collection(db, 'articles', itemId, 'comments');
      await addDoc(commentsRef, {
        ...newComment,
        serverTime: serverTimestamp()
      });
    } catch (err) {
      console.warn('Firestore add comment notice:', err);
    }
  }

  // Server endpoint sync
  try {
    await fetch('/api/editorial/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, comment: newComment })
    });
  } catch {}

  return newComment;
}

export async function saveSponsoredPost(post: {
  title: string;
  category: string;
  mediaUrl: string;
  creator: string;
  description: string;
  linkUrl?: string;
  amountPaid: number;
  paymentReference: string;
}): Promise<any> {
  const postItem = {
    id: `promo_${Date.now()}`,
    ...post,
    featured: true,
    publishedAt: 'Sponsored Feature',
    createdAt: new Date().toISOString(),
    views: '1.5K',
    likes: '120',
    comments: '18'
  };

  // Local storage save
  try {
    const existing = JSON.parse(localStorage.getItem(SPONSORED_POSTS_KEY) || '[]');
    localStorage.setItem(SPONSORED_POSTS_KEY, JSON.stringify([postItem, ...existing]));
  } catch {}

  // Firestore save
  if (db) {
    try {
      const docRef = doc(db, 'sponsored_posts', postItem.id);
      await setDoc(docRef, {
        ...postItem,
        serverTime: serverTimestamp()
      });
    } catch (err) {
      console.warn('Firestore save sponsored post notice:', err);
    }
  }

  // Server sync
  try {
    await fetch('/api/promote/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postItem)
    });
  } catch {}

  return postItem;
}

export async function getSponsoredPosts(category?: string): Promise<any[]> {
  if (db) {
    try {
      const q = collection(db, 'sponsored_posts');
      const snap = await getDocs(q);
      if (!snap.empty) {
        const posts: any[] = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (category) {
          return posts.filter(p => p.category?.toLowerCase() === category.toLowerCase());
        }
        return posts;
      }
    } catch {}
  }

  try {
    const local = JSON.parse(localStorage.getItem(SPONSORED_POSTS_KEY) || '[]');
    if (category) {
      return local.filter((p: any) => p.category?.toLowerCase() === category.toLowerCase());
    }
    return local;
  } catch {
    return [];
  }
}
