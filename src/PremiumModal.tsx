import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgradeSuccess: () => void;
}

export const PremiumModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  onUpgradeSuccess
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onUpgradeSuccess();
      onClose();
    }, 1000);
  };

  const PERKS = [
    'Ad-Free Ultra Pure Experience',
    'High-Fidelity Lossless Audio & 4K Video Previews',
    'VibeMeter AI Infinite Trend Forecasting with Gemini',
    'Exclusive Nollywood & Afrobeats Premiere Access',
    'Verified Gold Creator Badge & Profile Customization',
    'Unlimited Smart Utility Tool Batch Processing'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121323] border border-amber-400/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Crown & Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-400/20">
            <Crown className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white font-display">
            VibeMeter VIP Premium
          </h2>
          <p className="text-xs text-slate-300">
            The ultimate backstage pass to culture, entertainment, and creator utilities.
          </p>
        </div>

        {/* Cycle Toggle */}
        <div className="flex justify-center">
          <div className="p-1 rounded-full bg-[#181a2e] border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-[#ff007a] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly ($4.99/mo)
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                billingCycle === 'annual' ? 'bg-[#ff007a] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual ($39.99/yr)</span>
              <span className="text-[10px] bg-amber-400 text-black px-1.5 py-0.2 rounded-full font-extrabold">Save 35%</span>
            </button>
          </div>
        </div>

        {/* Perks list */}
        <div className="space-y-2.5 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
          {PERKS.map((perk, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-emerald-400" />
              </div>
              <span>{perk}</span>
            </div>
          ))}
        </div>

        {/* Upgrade Button */}
        <button
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full py-3 rounded-full bg-gradient-to-r from-amber-400 via-[#ff007a] to-[#8b25ff] hover:opacity-90 text-white text-sm font-bold shadow-xl shadow-[#ff007a]/30 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>{loading ? 'Activating VIP...' : 'Upgrade Now — Instant Access'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-center text-slate-400">
          Cancel anytime with 1-click. Secure 256-bit encrypted checkout.
        </p>

      </div>
    </div>
  );
};
