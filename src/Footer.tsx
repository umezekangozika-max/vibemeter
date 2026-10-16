import React from 'react';
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Share2, 
  Heart,
  Globe
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-14 border-t border-white/[0.08] bg-[#0b0c14] py-8 px-4 lg:px-8">
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#ff007a] via-[#8b25ff] to-[#00f2fe] flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-[#0b0c14] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-base font-display">
                V
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-base tracking-tight text-white">
                VibeMeter
              </span>
              <span className="text-[10px] text-[#ff007a] font-bold">TM</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Trends. Vibes. Lifestyle.
            </p>
          </div>
        </div>

        {/* Center: Legal & Essential Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition-colors">
            Privacy
          </button>
          <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">
            Terms
          </button>
          <button onClick={() => onNavigate('/help')} className="hover:text-white transition-colors">
            Help
          </button>
          <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
            Contact
          </button>
          <button onClick={() => onNavigate('/tools')} className="text-[#00f2fe] hover:underline">
            Smart Tools
          </button>
        </nav>

        {/* Social Icons Strip */}
        <div className="flex items-center gap-2">
          {/* YouTube */}
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-red-600/20 hover:bg-red-600 border border-red-600/40 text-red-400 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="YouTube"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-pink-600/20 hover:bg-pink-600 border border-pink-600/40 text-pink-400 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>

          {/* TikTok */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-teal-600/20 hover:bg-teal-600 border border-teal-600/40 text-teal-400 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="TikTok"
          >
            <span className="font-bold text-[10px]">TT</span>
          </a>

          {/* X / Twitter */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-slate-700/40 hover:bg-slate-700 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="X"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-blue-600/20 hover:bg-blue-600 border border-blue-600/40 text-blue-400 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-blue-500/20 hover:bg-blue-500 border border-blue-500/40 text-blue-300 hover:text-white flex items-center justify-center transition-all text-xs"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right: Signature Tagline */}
        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
          <span>Better Content. Better Vibes. Only on</span>
          <span className="text-[#ff007a] font-bold">VibeMeter!</span>
          <Heart className="w-3.5 h-3.5 text-[#ff007a] fill-[#ff007a]" />
        </div>

      </div>
    </footer>
  );
};
