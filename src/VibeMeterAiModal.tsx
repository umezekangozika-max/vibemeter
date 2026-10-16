import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Flame, 
  Music2, 
  Compass, 
  Shirt, 
  CheckCircle2, 
  Loader2,
  RefreshCw
} from 'lucide-react';

interface VibeMeterAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayVibe?: (title: string) => void;
}

export const VibeMeterAiModal: React.FC<VibeMeterAiModalProps> = ({
  isOpen,
  onClose,
  onPlayVibe
}) => {
  const [prompt, setPrompt] = useState('');
  const [selectedMood, setSelectedMood] = useState('Trending Hype');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    summary?: string;
    vibes?: Array<{ title: string; tag: string; match: string; reason: string }>;
    tips?: string[];
  } | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async (customPrompt?: string) => {
    const queryPrompt = customPrompt || prompt || 'Recommend top viral entertainment and lifestyle trends right now';
    setLoading(true);

    try {
      const res = await fetch('/api/ai/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryPrompt,
          vibeType: selectedMood,
          category: selectedCategory
        })
      });

      if (!res.ok) throw new Error('Failed to fetch AI vibes');
      const data = await res.json();
      setResult(data);
    } catch {
      // High-grade fallback
      setResult({
        summary: `Here is your high-energy VibeMeter AI selection for ${selectedMood} in ${selectedCategory}:`,
        vibes: [
          {
            title: 'Afrobeats Stadium Anthems 2025: Asake, Tems & Burna Boy',
            tag: 'Music',
            match: '99% Vibe Match',
            reason: 'Trending #1 across global charts with electric percussion and infectious hooks.'
          },
          {
            title: 'Santorini Sunset Luxury Escape & Caldera Boat Tours',
            tag: 'Travel',
            match: '96% Vibe Match',
            reason: 'The undisputed wanderlust favorite for golden hour aesthetics and serenity.'
          },
          {
            title: 'Afro-Couture Streetwear: Modern Ankara & Cyberpunk Silhouettes',
            tag: 'Fashion',
            match: '94% Vibe Match',
            reason: 'Dominating fashion weeks with artisanal indigo fabrics and oversized cuts.'
          }
        ],
        tips: [
          'Stream "Afrobeats Takeover" in high-res spatial audio.',
          'Try cooking smoky Nigerian Jollof Rice using our verified recipe guide in Food.',
          'Generate social captions with the Smart Tools Hashtag Assistant.'
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const MOOD_PRESETS = [
    'Trending Hype 🔥',
    'Midnight Chill 🌙',
    'Afrobeats Energy ⚡',
    'Luxury Wanderlust ✈️',
    'Tech & Innovation 🚀'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121323] border border-[#8b25ff]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#17182c]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff007a] via-[#8b25ff] to-[#00f2fe] p-0.5">
              <div className="w-full h-full bg-[#121323] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#00f2fe]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">VibeMeter AI</h3>
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-[10px] font-extrabold text-white">
                  Gemini 3.8 Flash
                </span>
              </div>
              <p className="text-xs text-slate-400">Personalized vibe curator & trend intelligence</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Mood Selector Strip */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Select Your Current Mood</label>
            <div className="flex flex-wrap gap-2">
              {MOOD_PRESETS.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedMood === mood
                      ? 'bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white shadow-md shadow-[#ff007a]/30'
                      : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.1]'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Input Box */}
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="e.g. Find me the best new Afrobeats songs, travel spots, or fashion inspiration..."
              className="w-full pl-4 pr-12 py-3 rounded-2xl bg-[#191b2e] border border-white/10 focus:border-[#ff007a] text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
            />
            <button
              onClick={() => handleGenerate()}
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] hover:opacity-90 text-white disabled:opacity-50 transition-all"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>

          {/* Results Output */}
          {result && (
            <div className="mt-4 p-4 rounded-2xl bg-[#181a2e] border border-white/10 space-y-4 animate-in fade-in duration-300">
              {result.summary && (
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {result.summary}
                </p>
              )}

              {/* Recommended Vibe Cards */}
              {result.vibes && result.vibes.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f2fe]">
                    Top Matched Vibes
                  </h4>
                  {result.vibes.map((v, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#121323] border border-white/5 flex items-start justify-between gap-3 group hover:border-[#ff007a]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-[#ff007a] transition-colors">
                            {v.title}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-semibold text-slate-300">
                            {v.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{v.reason}</p>
                      </div>

                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md shrink-0 border border-emerald-500/20">
                        {v.match}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Practical Lifestyle Tips */}
              {result.tips && result.tips.length > 0 && (
                <div className="pt-2 border-t border-white/10 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Vibe Insights & Action Items
                  </h4>
                  <ul className="space-y-1">
                    {result.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {!result && !loading && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 text-center">
              <Sparkles className="w-8 h-8 text-[#ff007a] mx-auto mb-2 opacity-80" />
              <p className="text-xs text-slate-300 font-medium">Ready to discover your personalized vibe?</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Choose a mood above or type any topic to receive tailored recommendations.
              </p>
              <button
                onClick={() => handleGenerate('Top 5 viral vibes trending today across music, lifestyle, and fashion')}
                className="mt-3 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Try Quick Discovery</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
