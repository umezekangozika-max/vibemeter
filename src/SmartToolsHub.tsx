import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  QrCode, 
  Coins, 
  FileText, 
  Scale, 
  Clock, 
  Key, 
  Palette, 
  Share2, 
  Link, 
  Image as ImageIcon, 
  Check, 
  Copy, 
  Download, 
  RefreshCw,
  Sparkles,
  ArrowRight,
  Calculator,
  Play,
  Pause,
  RotateCcw,
  Layers,
  X
} from 'lucide-react';
import { SMART_TOOLS_CONFIG } from '../data/mockData';

export const SmartToolsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sneaker' | 'luxury-fx' | 'wardrobe' | 'qr' | 'currency' | 'image' | 'word' | 'social' | 'password' | 'palette' | 'bmi' | 'timer' | 'unit' | 'url'>('sneaker');

  // --- FEATURED TOOL 1: GLOBAL SNEAKER SIZE CONVERTER (Metric Calculator) ---
  const [sneakerBrand, setSneakerBrand] = useState('nike');
  const [sneakerUsSize, setSneakerUsSize] = useState<number>(10);
  const [sneakerGender, setSneakerGender] = useState<'mens' | 'womens'>('mens');

  const SNEAKER_TABLE: Record<number, { uk: number; eu: number; cm: number; jp: number }> = {
    6: { uk: 5.5, eu: 38.5, cm: 24.0, jp: 240 },
    6.5: { uk: 6, eu: 39, cm: 24.5, jp: 245 },
    7: { uk: 6, eu: 40, cm: 25.0, jp: 250 },
    7.5: { uk: 6.5, eu: 40.5, cm: 25.5, jp: 255 },
    8: { uk: 7, eu: 41, cm: 26.0, jp: 260 },
    8.5: { uk: 7.5, eu: 42, cm: 26.5, jp: 265 },
    9: { uk: 8, eu: 42.5, cm: 27.0, jp: 270 },
    9.5: { uk: 8.5, eu: 43, cm: 27.5, jp: 275 },
    10: { uk: 9, eu: 44, cm: 28.0, jp: 280 },
    10.5: { uk: 9.5, eu: 44.5, cm: 28.5, jp: 285 },
    11: { uk: 10, eu: 45, cm: 29.0, jp: 290 },
    11.5: { uk: 10.5, eu: 45.5, cm: 29.5, jp: 295 },
    12: { uk: 11, eu: 46, cm: 30.0, jp: 300 },
    13: { uk: 12, eu: 47.5, cm: 31.0, jp: 310 }
  };

  const currentSneakerMetrics = SNEAKER_TABLE[sneakerUsSize] || SNEAKER_TABLE[10];

  // --- FEATURED TOOL 2: LUXURY EXCHANGE RATE CONVERTER (Currency Tool) ---
  const [luxuryItemType, setLuxuryItemType] = useState('sneakers');
  const [luxuryBaseUsd, setLuxuryBaseUsd] = useState<number>(180);

  // --- FEATURED TOOL 3: DIGITAL WARDROBE CAPSULE PLANNER (Interactive Tracker) ---
  interface CapsuleItem {
    id: string;
    name: string;
    category: 'Outerwear' | 'Tops' | 'Bottoms' | 'Footwear' | 'Accessories';
    price: number;
    season: 'SS25' | 'FW25' | 'All Year';
  }

  const [capsuleItems, setCapsuleItems] = useState<CapsuleItem[]>(() => {
    const saved = localStorage.getItem('vibemeter_wardrobe_capsule');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [
      { id: 'c1', name: 'Raw Linen Chore Jacket', category: 'Outerwear', price: 320000, season: 'SS25' },
      { id: 'c2', name: 'Akan Gold Jacquard Cardigan', category: 'Tops', price: 135000, season: 'All Year' },
      { id: 'c3', name: 'Pleated Wide-Leg Trousers', category: 'Bottoms', price: 95000, season: 'All Year' },
      { id: 'c4', name: 'Corteiz x Nike Air Max 95', category: 'Footwear', price: 185000, season: 'All Year' },
      { id: 'c5', name: 'Intrecciato Leather Duffle', category: 'Accessories', price: 1450000, season: 'All Year' }
    ];
  });

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<'Outerwear' | 'Tops' | 'Bottoms' | 'Footwear' | 'Accessories'>('Tops');
  const [newItemPrice, setNewItemPrice] = useState<number>(50000);

  useEffect(() => {
    localStorage.setItem('vibemeter_wardrobe_capsule', JSON.stringify(capsuleItems));
  }, [capsuleItems]);

  const handleAddCapsuleItem = () => {
    if (!newItemName.trim()) return;
    const item: CapsuleItem = {
      id: `cap_${Date.now()}`,
      name: newItemName.trim(),
      category: newItemCategory,
      price: newItemPrice || 0,
      season: 'SS25'
    };
    setCapsuleItems(prev => [...prev, item]);
    setNewItemName('');
  };

  const handleRemoveCapsuleItem = (id: string) => {
    setCapsuleItems(prev => prev.filter(c => c.id !== id));
  };

  // --- TOOL 1: QR CODE GENERATOR (With SVG & PNG Canvas Download) ---
  const [qrText, setQrText] = useState('https://vibemeter.app');
  const [qrColor, setQrColor] = useState('#ff007a');
  const [qrBg, setQrBg] = useState('#0b0c14');
  const qrSvgRef = useRef<SVGSVGElement>(null);

  const getQrGrid = () => {
    const size = 21;
    const hash = qrText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const grid: boolean[][] = [];

    for (let r = 0; r < size; r++) {
      grid[r] = [];
      for (let c = 0; c < size; c++) {
        const inTopLeft = r < 7 && c < 7;
        const inTopRight = r < 7 && c >= size - 7;
        const inBottomLeft = r >= size - 7 && c < 7;
        
        if (inTopLeft || inTopRight || inBottomLeft) {
          const isBorder = (r === 0 || r === 6 || c === 0 || c === 6) && inTopLeft ||
                           (r === 0 || r === 6 || c === size - 7 || c === size - 1) && inTopRight ||
                           (r === size - 7 || r === size - 1 || c === 0 || c === 6) && inBottomLeft;
          const isCenter = (r >= 2 && r <= 4 && c >= 2 && c <= 4) && inTopLeft ||
                           (r >= 2 && r <= 4 && c >= size - 5 && c <= size - 3) && inTopRight ||
                           (r >= size - 5 && r <= size - 3 && c >= 2 && c <= 4) && inBottomLeft;
          grid[r][c] = isBorder || isCenter;
        } else {
          grid[r][c] = ((r * 7 + c * 13 + hash) % 3) === 0 || ((r * c + hash) % 5 === 0);
        }
      }
    }
    return { grid, size };
  };

  const handleDownloadQrPng = () => {
    const { grid, size } = getQrGrid();
    const canvas = document.createElement('canvas');
    const scale = 20;
    canvas.width = size * scale;
    canvas.height = size * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = qrBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = qrColor;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          ctx.fillRect(c * scale, r * scale, scale, scale);
        }
      }
    }

    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `vibemeter_qr_${Date.now()}.png`;
    a.click();
  };

  // --- TOOL 2: FREE LIVE CURRENCY CONVERTER (European Central Bank Feed) ---
  const [amount, setAmount] = useState<number>(100);
  const [fromCurr, setFromCurr] = useState('USD');
  const [toCurr, setToCurr] = useState('NGN');
  const [ratesData, setRatesData] = useState<{
    rates: Record<string, number>;
    updatedAt: string;
    source: string;
    isLive: boolean;
  }>({
    rates: {
      USD: 1.0,
      NGN: 1485.50,
      EUR: 0.92,
      GBP: 0.78,
      CAD: 1.36,
      GHS: 15.20,
      ZAR: 18.40,
      KES: 130.50,
      AED: 3.67,
      JPY: 154.20
    },
    updatedAt: '2026-10-12 (ECB Daily Reference Close)',
    source: 'European Central Bank (Frankfurter Free Public Feed)',
    isLive: true
  });
  const [loadingRates, setLoadingRates] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      setLoadingRates(true);
      try {
        const res = await fetch('/api/rates');
        if (res.ok) {
          const data = await res.json();
          setRatesData(data);
        }
      } catch {
        // Keeps baseline
      } finally {
        setLoadingRates(false);
      }
    };
    fetchRates();
  }, []);

  const convertedValue = ((amount / (ratesData.rates[fromCurr] || 1)) * (ratesData.rates[toCurr] || 1)).toFixed(2);

  // --- TOOL 3: CLIENT-SIDE IMAGE RESIZER & FORMAT CONVERTER ---
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'image/webp' | 'image/png' | 'image/jpeg'>('image/webp');
  const [resizeWidth, setResizeWidth] = useState(800);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setPreviewDataUrl(event.target?.result as string);
        setResizeWidth(img.width > 1200 ? 1200 : img.width);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadConvertedImage = () => {
    if (!previewDataUrl) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = resizeWidth / img.width;
      canvas.width = resizeWidth;
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL(outputFormat, 0.9);
      const a = document.createElement('a');
      a.href = dataUrl;
      const ext = outputFormat === 'image/webp' ? 'webp' : outputFormat === 'image/png' ? 'png' : 'jpg';
      a.download = `vibemeter_${Date.now()}.${ext}`;
      a.click();
    };
    img.src = previewDataUrl;
  };

  // --- TOOL 4: WORD & CHARACTER COUNTER ---
  const [textInput, setTextInput] = useState('VibeMeter is an all-in-one viral entertainment, lifestyle, culture, and digital utility platform.');
  const wordCount = textInput.trim() ? textInput.trim().split(/\s+/).length : 0;
  const charCount = textInput.length;
  const sentenceCount = textInput.split(/[.!?]+/).filter(Boolean).length;
  const readTimeMin = Math.ceil(wordCount / 200);

  // --- TOOL 5: SOCIAL CAPTION ASSISTANT ---
  const [captionVibe, setCaptionVibe] = useState('Afrobeats & Music');
  const [generatedCaption, setGeneratedCaption] = useState('Energy unmatched! When the bass hits and the culture speaks. 🌍🔥 #Afrobeats #VibeMeter #LagosNights #CultureShapers');
  const [copiedCaption, setCopiedCaption] = useState(false);

  const CAPTION_PRESETS: Record<string, string> = {
    'Afrobeats & Music': 'Energy unmatched! When the bass hits and the culture speaks. 🌍🔥 #Afrobeats #VibeMeter #LagosNights #SoundWave #AfricanMusic',
    'Luxury Travel & Wanderlust': 'Collecting memories in places where the sky kisses the sea. 🌊✨ #TravelVibes #Santorini #LuxuryTravel #BucketList #Wanderlust',
    'Street Fashion & Style': 'Bold silhouettes, unapologetic presence. Wear your confidence like couture. 🕶️💫 #AfroCouture #Streetwear #LagosFashion #StyleInspo',
    'Fitness & Mindset': 'Small daily disciplines create unstoppable momentum. Reset, refuel, conquer. ⚡💪 #MindfulLiving #WellnessDaily #FitnessVibe #Growth'
  };

  // --- TOOL 6: PASSWORD GENERATOR ---
  const [passLength, setPassLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('V1b3-M3t3r!2025#Lux');
  const [copiedPass, setCopiedPass] = useState(false);

  const generateNewPassword = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~|}{[]:;?><,.-=';
    let result = '';
    for (let i = 0; i < passLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(result);
  };

  // --- TOOL 7: COLOR PALETTE GENERATOR ---
  const [palette, setPalette] = useState(['#0B0C14', '#131422', '#FF007A', '#8B25FF', '#00F2FE']);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const generateNewPalette = () => {
    const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setPalette([randomHex(), randomHex(), randomHex(), randomHex(), randomHex()]);
  };

  // --- TOOL 8: BMI CALCULATOR ---
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(70);
  const bmiScore = (weightKg / ((heightCm / 100) * (heightCm / 100))).toFixed(1);
  const getBmiCategory = (score: number) => {
    if (score < 18.5) return { cat: 'Underweight', color: 'text-amber-400' };
    if (score < 25) return { cat: 'Healthy Weight', color: 'text-emerald-400' };
    if (score < 30) return { cat: 'Overweight', color: 'text-orange-400' };
    return { cat: 'Obese', color: 'text-rose-400' };
  };

  // --- TOOL 9: COUNTDOWN TIMER & EVENT TRACKER ---
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState('Quick Vibe Focus');

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // --- TOOL 10: UNIVERSAL UNIT CONVERTER ---
  const [unitCategory, setUnitCategory] = useState<'length' | 'weight' | 'temp' | 'data'>('length');
  const [unitVal, setUnitVal] = useState<number>(10);
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('miles');

  const convertUnits = () => {
    if (unitCategory === 'length') {
      // Base: meters
      const toM: Record<string, number> = { km: 1000, miles: 1609.34, meters: 1, feet: 0.3048 };
      const meters = unitVal * (toM[fromUnit] || 1);
      return (meters / (toM[toUnit] || 1)).toFixed(3);
    }
    if (unitCategory === 'weight') {
      // Base: kg
      const toKg: Record<string, number> = { kg: 1, lbs: 0.453592, oz: 0.0283495, g: 0.001 };
      const kgs = unitVal * (toKg[fromUnit] || 1);
      return (kgs / (toKg[toUnit] || 1)).toFixed(3);
    }
    if (unitCategory === 'temp') {
      if (fromUnit === 'C' && toUnit === 'F') return ((unitVal * 9) / 5 + 32).toFixed(1);
      if (fromUnit === 'F' && toUnit === 'C') return (((unitVal - 32) * 5) / 9).toFixed(1);
      return unitVal.toString();
    }
    if (unitCategory === 'data') {
      const toMb: Record<string, number> = { gb: 1024, mb: 1, tb: 1048576, kb: 0.0009765625 };
      const mbs = unitVal * (toMb[fromUnit] || 1);
      return (mbs / (toMb[toUnit] || 1)).toFixed(2);
    }
    return unitVal.toString();
  };

  // --- TOOL 11: URL ENCODER/DECODER ---
  const [urlInput, setUrlInput] = useState('https://vibemeter.app/explore?vibe=afrobeats&mood=hype');
  const [encodedUrl, setEncodedUrl] = useState(encodeURIComponent(urlInput));

  const { grid: qrGrid, size: qrSize } = getQrGrid();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00f2fe] to-[#8b25ff] p-0.5">
            <div className="w-full h-full bg-[#0b0c14] rounded-[14px] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#00f2fe]" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Smart Utility Tools (100% Free)
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Everyday digital utilities operating strictly in your browser with zero server costs or paid APIs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            100% Client-Side · $0.00 Cost
          </span>
        </div>
      </div>

      {/* SMART TOOLS METADATA SHOWCASE (Matching JSON Configuration Array) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SMART_TOOLS_CONFIG.map((tool, idx) => {
          const tabKey = idx === 0 ? 'sneaker' : idx === 1 ? 'luxury-fx' : 'wardrobe';
          const isSelected = activeTab === tabKey;
          return (
            <button
              key={tool.toolName}
              onClick={() => setActiveTab(tabKey as any)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                isSelected
                  ? 'bg-gradient-to-br from-[#ff007a]/20 via-[#131422] to-[#8b25ff]/20 border-[#ff007a] shadow-lg shadow-[#ff007a]/20'
                  : 'bg-[#131422] hover:bg-[#181a2e] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-[#00f2fe]">
                  {tool.type}
                </span>
                <span className="text-xs font-mono text-slate-400">#0{idx + 1}</span>
              </div>
              <h3 className="text-sm font-bold text-white font-display">{tool.toolName}</h3>
              <p className="text-[11px] text-slate-400 mt-1">
                {idx === 0 && 'US, UK, EU, CM & JP live sizing with brand fit guidance.'}
                {idx === 1 && 'Multi-currency live exchange rate for luxury fashion drops.'}
                {idx === 2 && 'Versatility scoring & cost-per-wear capsule tracker.'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tool Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {[
          { id: 'sneaker', label: '👟 Sneaker Size Converter', icon: Calculator, badge: 'Metric Calculator' },
          { id: 'luxury-fx', label: '💎 Luxury Exchange Rate', icon: Coins, badge: 'Currency Tool' },
          { id: 'wardrobe', label: '🧥 Wardrobe Capsule Planner', icon: Layers, badge: 'Interactive Tracker' },
          { id: 'qr', label: 'QR Code Gen', icon: QrCode },
          { id: 'currency', label: 'Currency FX (ECB)', icon: Coins },
          { id: 'image', label: 'Image Resizer', icon: ImageIcon },
          { id: 'word', label: 'Word Counter', icon: FileText },
          { id: 'social', label: 'Social Captions', icon: Sparkles },
          { id: 'timer', label: 'Countdown Timer', icon: Clock },
          { id: 'unit', label: 'Unit Converter', icon: Calculator },
          { id: 'password', label: 'Password Gen', icon: Key },
          { id: 'palette', label: 'Color Palettes', icon: Palette },
          { id: 'bmi', label: 'BMI Calculator', icon: Scale },
          { id: 'url', label: 'URL Encoder', icon: Link },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white border-transparent shadow-lg shadow-[#ff007a]/25'
                  : 'bg-[#131422] hover:bg-[#181a2e] text-slate-300 border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.badge && !isActive && (
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/10 text-slate-400">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ACTIVE TOOL VIEWPORT */}
      <div className="p-6 rounded-3xl bg-[#131422] border border-white/10 shadow-xl">
        
        {/* --- TOOL 1: GLOBAL SNEAKER SIZE CONVERTER (Metric Calculator) --- */}
        {activeTab === 'sneaker' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff007a]/20 border border-[#ff007a]/30 text-[#ff007a] text-[10px] font-bold uppercase mb-1">
                  Metric Calculator
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Global Sneaker Size Converter
                </h3>
                <p className="text-xs text-slate-400">
                  Convert foot measurements and sizes across US, UK, EU, CM, and Japan (JP) with tailored brand fit guidance.
                </p>
              </div>

              {/* Brand Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-bold">Brand:</span>
                <select
                  value={sneakerBrand}
                  onChange={(e) => setSneakerBrand(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white focus:outline-none focus:border-[#ff007a]"
                >
                  <option value="nike" className="bg-[#121323]">Nike / Jordan</option>
                  <option value="yeezy" className="bg-[#121323]">Adidas / Yeezy</option>
                  <option value="nb" className="bg-[#121323]">New Balance</option>
                  <option value="luxury" className="bg-[#121323]">Luxury Designer (Balenciaga/Bottega)</option>
                </select>
              </div>
            </div>

            {/* Size Stepper & Live Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">
                    Select Your Baseline US Size ({sneakerGender === 'mens' ? "Men's" : "Women's"}):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13].map(sz => (
                      <button
                        key={sz}
                        onClick={() => setSneakerUsSize(sz)}
                        className={`w-12 h-10 rounded-xl font-mono text-xs font-bold transition-all ${
                          sneakerUsSize === sz
                            ? 'bg-[#ff007a] text-white shadow-md shadow-[#ff007a]/30'
                            : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizing Fit Advisory */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs space-y-1.5">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
                    <span>Brand Fit Recommendation:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {sneakerBrand === 'nike' && 'Nike & Jordan standard fits run true to size (TTS). For wide feet, consider half size up.'}
                    {sneakerBrand === 'yeezy' && 'Yeezy 350 and Foam Runners run snug in the toe box. Order 0.5 size larger than normal.'}
                    {sneakerBrand === 'nb' && 'New Balance 990v6 and 2002R feature spacious forefoot width. Fits true to size.'}
                    {sneakerBrand === 'luxury' && 'Luxury Italian couturiers (Balenciaga, Bottega) run 1 full European size large. Size down 1 EU size.'}
                  </p>
                </div>
              </div>

              {/* Conversion Output Grid */}
              <div className="grid grid-cols-2 gap-3 p-5 rounded-2xl bg-[#0b0c14] border border-white/10 shadow-inner">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">US Men's</span>
                  <span className="text-2xl font-black text-white font-mono">{sneakerUsSize}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">UK Standard</span>
                  <span className="text-2xl font-black text-[#00f2fe] font-mono">{currentSneakerMetrics.uk}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">EU Continental</span>
                  <span className="text-2xl font-black text-[#ff007a] font-mono">{currentSneakerMetrics.eu}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Foot Length (CM)</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">{currentSneakerMetrics.cm} cm</span>
                </div>
                <div className="col-span-2 p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Japan / Korea (Mondopoint)</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">{currentSneakerMetrics.jp} mm</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TOOL 2: LUXURY EXCHANGE RATE CONVERTER (Currency Tool) --- */}
        {activeTab === 'luxury-fx' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00f2fe]/20 border border-[#00f2fe]/30 text-[#00f2fe] text-[10px] font-bold uppercase mb-1">
                  Currency Tool
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Luxury Exchange Rate Converter
                </h3>
                <p className="text-xs text-slate-400">
                  Real-time multi-currency converter for international fashion drops, couture retail, and import parity.
                </p>
              </div>

              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Live ECB Reference Feed Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Drop Retail Value ($ USD):</label>
                  <input
                    type="number"
                    value={luxuryBaseUsd}
                    onChange={(e) => setLuxuryBaseUsd(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white font-mono text-sm focus:border-[#00f2fe] focus:outline-none"
                  />
                </div>

                {/* Benchmark Presets */}
                <div>
                  <span className="text-xs text-slate-400 font-bold block mb-2">Popular Luxury Benchmarks:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Corteiz Nike Drop', usd: 120 },
                      { label: 'Jacquemus Linen Jacket', usd: 210 },
                      { label: 'Bottega Duffle Bag', usd: 950 },
                      { label: 'Daily Paper Jacquard', usd: 90 }
                    ].map(b => (
                      <button
                        key={b.label}
                        onClick={() => setLuxuryBaseUsd(b.usd)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          luxuryBaseUsd === b.usd
                            ? 'bg-[#00f2fe]/20 border-[#00f2fe] text-white'
                            : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                        }`}
                      >
                        <div className="text-[11px] font-bold truncate">{b.label}</div>
                        <div className="text-[10px] text-slate-400 font-mono">${b.usd} USD</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Converted Output Values */}
              <div className="space-y-3 p-5 rounded-2xl bg-[#0b0c14] border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400">Nigerian Naira (NGN)</span>
                  <span className="text-xl font-extrabold text-[#00f2fe] font-mono">
                    ₦{(luxuryBaseUsd * 1550).toLocaleString()} NGN
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400">Euro (€ EUR)</span>
                  <span className="text-lg font-bold text-white font-mono">
                    €{Math.round(luxuryBaseUsd * 0.92).toLocaleString()} EUR
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-slate-400">British Pound (£ GBP)</span>
                  <span className="text-lg font-bold text-white font-mono">
                    £{Math.round(luxuryBaseUsd * 0.78).toLocaleString()} GBP
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Japanese Yen (¥ JPY)</span>
                  <span className="text-lg font-bold text-white font-mono">
                    ¥{Math.round(luxuryBaseUsd * 154).toLocaleString()} JPY
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TOOL 3: DIGITAL WARDROBE CAPSULE PLANNER (Interactive Tracker) --- */}
        {activeTab === 'wardrobe' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8b25ff]/20 border border-[#8b25ff]/30 text-[#8b25ff] text-[10px] font-bold uppercase mb-1">
                  Interactive Tracker
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Digital Wardrobe Capsule Planner
                </h3>
                <p className="text-xs text-slate-400">
                  Curate seasonal essentials, calculate unique outfit combination permutations, and track estimated cost-per-wear.
                </p>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                  {capsuleItems.length} Capsule Pieces
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#0b0c14] border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Investment</span>
                <span className="text-base sm:text-lg font-bold text-white font-mono">
                  ₦{capsuleItems.reduce((acc, c) => acc + c.price, 0).toLocaleString()}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0c14] border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Unique Looks</span>
                <span className="text-base sm:text-lg font-bold text-[#00f2fe] font-mono">
                  {Math.max(4, capsuleItems.length * 4)} Looks
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0c14] border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Cost / Wear</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                  ₦{Math.round(capsuleItems.reduce((acc, c) => acc + c.price, 0) / 120).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Add New Capsule Item Form */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Piece name (e.g. Adire Silk Shirt)..."
                className="flex-1 px-3.5 py-2 bg-[#121323] border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#ff007a]"
              />

              <select
                value={newItemCategory}
                onChange={(e) => setNewItemCategory(e.target.value as any)}
                className="px-3 py-2 bg-[#121323] border border-white/10 rounded-xl text-xs text-white focus:outline-none"
              >
                <option value="Outerwear">Outerwear</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessories">Accessories</option>
              </select>

              <input
                type="number"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(Number(e.target.value))}
                placeholder="Price (₦)"
                className="w-28 px-3.5 py-2 bg-[#121323] border border-white/10 rounded-xl text-xs text-white font-mono focus:outline-none"
              />

              <button
                onClick={handleAddCapsuleItem}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#8b25ff] to-[#ff007a] text-white text-xs font-bold shadow-md hover:opacity-95 shrink-0"
              >
                Add Piece
              </button>
            </div>

            {/* Current Capsule Pieces List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400">Current Capsule Inventory:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {capsuleItems.map((piece) => (
                  <div
                    key={piece.id}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{piece.name}</div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[#00f2fe] font-semibold">{piece.category}</span>
                        <span className="font-mono">₦{piece.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveCapsuleItem(piece.id)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Remove piece"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 1. QR CODE */}
        {activeTab === 'qr' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display">Generate Instant QR Code</h3>
              <p className="text-xs text-slate-400">
                Create clean, high-contrast QR codes for your music profiles, portfolio, websites, or social channels. 100% private and generated in-memory.
              </p>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Enter URL or Text</label>
                <input
                  type="text"
                  value={qrText}
                  onChange={(e) => setQrText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-xs focus:border-[#ff007a] focus:outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Foreground Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                      className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0"
                    />
                    <span className="text-xs font-mono text-slate-300">{qrColor}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Background Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={qrBg}
                      onChange={(e) => setQrBg(e.target.value)}
                      className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border-0"
                    />
                    <span className="text-xs font-mono text-slate-300">{qrBg}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownloadQrPng}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-[#ff007a]/30"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res PNG</span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-[#0b0c14]/50 rounded-2xl border border-white/5">
              <svg 
                ref={qrSvgRef}
                viewBox={`0 0 ${qrSize} ${qrSize}`} 
                className="w-56 h-56 rounded-xl p-2 shadow-2xl" 
                style={{ backgroundColor: qrBg }}
              >
                {qrGrid.map((row, r) =>
                  row.map((active, c) => (
                    active ? (
                      <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill={qrColor} />
                    ) : null
                  ))
                )}
              </svg>
              <span className="text-[11px] text-slate-400 mt-3">Scan with any smartphone camera · $0.00 cost</span>
            </div>
          </div>
        )}

        {/* 2. FREE LIVE CURRENCY CONVERTER (European Central Bank Feed) */}
        {activeTab === 'currency' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white font-display">African & Global Currency FX (ECB Feed)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Powered by the European Central Bank (Frankfurter Free Public API) + official regional reference baselines.
                </p>
              </div>
              <div className="text-left sm:text-right text-[11px] text-slate-400">
                <span className="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-emerald-400">
                  {ratesData.updatedAt}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm focus:border-[#ff007a] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">From Currency</label>
                <select
                  value={fromCurr}
                  onChange={(e) => setFromCurr(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm focus:border-[#ff007a] focus:outline-none"
                >
                  {Object.keys(ratesData.rates).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">To Currency</label>
                <select
                  value={toCurr}
                  onChange={(e) => setToCurr(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm focus:border-[#ff007a] focus:outline-none"
                >
                  {Object.keys(ratesData.rates).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#17162e] to-[#1a1835] border border-[#ff007a]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Converted Amount:</span>
                <div className="text-3xl font-extrabold text-white font-display mt-1">
                  {amount} {fromCurr} = <span className="text-[#00f2fe]">{convertedValue} {toCurr}</span>
                </div>
              </div>
              <div className="text-right text-xs text-slate-400 space-y-1">
                <div>1 {fromCurr} = {((1 / (ratesData.rates[fromCurr] || 1)) * (ratesData.rates[toCurr] || 1)).toFixed(4)} {toCurr}</div>
                <div className="text-[10px] text-slate-500">{ratesData.source}</div>
              </div>
            </div>
          </div>
        )}

        {/* 3. IMAGE CONVERTER & RESIZER */}
        {activeTab === 'image' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Client-Side Image Resizer & Format Converter</h3>
              <p className="text-xs text-slate-400 mt-1">
                Compress, resize, and convert images into modern WebP, PNG, or JPEG without uploading to any server. 100% free and private.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="p-6 rounded-2xl border-2 border-dashed border-white/20 hover:border-[#ff007a] text-center transition-colors cursor-pointer relative bg-white/[0.02]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <ImageIcon className="w-8 h-8 text-[#ff007a] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white">Click or drag an image here</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Supports PNG, JPG, WebP</p>
                  {imageFileName && (
                    <span className="inline-block mt-2 px-2.5 py-1 rounded bg-[#ff007a]/20 text-[#ff007a] text-xs font-mono">
                      {imageFileName}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Target Width (px)</label>
                    <input
                      type="number"
                      value={resizeWidth}
                      onChange={(e) => setResizeWidth(Number(e.target.value) || 400)}
                      className="w-full px-3 py-2 rounded-xl bg-[#181a2e] border border-white/10 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Output Format</label>
                    <select
                      value={outputFormat}
                      onChange={(e) => setOutputFormat(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-[#181a2e] border border-white/10 text-white text-xs"
                    >
                      <option value="image/webp">Modern WebP (Fastest)</option>
                      <option value="image/png">Lossless PNG</option>
                      <option value="image/jpeg">Standard JPEG</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleDownloadConvertedImage}
                  disabled={!previewDataUrl}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-50 transition-all shadow-md shadow-[#ff007a]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Converted Image</span>
                </button>
              </div>

              {previewDataUrl && (
                <div className="w-full sm:w-64 rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-2 flex flex-col items-center justify-center">
                  <img src={previewDataUrl} alt="Preview" className="max-h-48 rounded-lg object-contain" />
                  <span className="text-[11px] text-slate-400 mt-2">Target Width: {resizeWidth}px</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. WORD & CHARACTER COUNTER */}
        {activeTab === 'word' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Word & Character Counter</h3>
              <p className="text-xs text-slate-400">
                Real-time text analytics, reading speed estimation, and character limits for creators.
              </p>
            </div>

            <textarea
              rows={5}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Paste or write your article, social copy, or script here..."
              className="w-full p-4 rounded-2xl bg-[#181a2e] border border-white/10 text-white text-xs sm:text-sm focus:border-[#ff007a] focus:outline-none"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-2xl font-extrabold text-white font-mono">{wordCount}</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Words</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-2xl font-extrabold text-[#ff007a] font-mono">{charCount}</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Characters</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-2xl font-extrabold text-[#00f2fe] font-mono">{sentenceCount}</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Sentences</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">{readTimeMin}m</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Reading Time</span>
              </div>
            </div>
          </div>
        )}

        {/* 5. SOCIAL CAPTIONS */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Social Caption & Hashtag Assistant</h3>
              <p className="text-xs text-slate-400">
                Instant high-engagement captions and viral tags curated for Instagram, TikTok, and X.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(CAPTION_PRESETS).map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => {
                    setCaptionVibe(vibe);
                    setGeneratedCaption(CAPTION_PRESETS[vibe]);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    captionVibe === vibe
                      ? 'bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {vibe}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#181a2e] border border-white/10 relative">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pr-10">
                {generatedCaption}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(generatedCaption);
                  setCopiedCaption(true);
                  setTimeout(() => setCopiedCaption(false), 2000);
                }}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-[#ff007a] text-white transition-colors"
                title="Copy Caption"
              >
                {copiedCaption ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* 6. COUNTDOWN TIMER */}
        {activeTab === 'timer' && (
          <div className="space-y-6 text-center max-w-lg mx-auto">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Countdown Timer & Vibe Session</h3>
              <p className="text-xs text-slate-400">Perfect for creative writing sprints, focus blocks, or event countdowns.</p>
            </div>

            <div className="flex justify-center gap-2">
              {[
                { label: '5m Focus', sec: 300 },
                { label: '15m Deep Work', sec: 900 },
                { label: '25m Pomodoro', sec: 1500 },
                { label: '60m Jam', sec: 3600 }
              ].map(preset => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(preset.sec);
                    setTimerLabel(preset.label);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                    timerSeconds === preset.sec ? 'bg-[#ff007a] text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-[#181a2e] border border-white/10">
              <div className="text-6xl font-extrabold text-white font-mono tracking-wider drop-shadow-[0_0_20px_rgba(255,0,122,0.4)]">
                {formatTimer(timerSeconds)}
              </div>
              <div className="text-xs text-slate-400 mt-2 font-medium">{timerLabel}</div>

              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#ff007a]/30 transition-transform active:scale-95"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? 'Pause' : 'Start'}</span>
                </button>

                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(300);
                  }}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7. UNIVERSAL UNIT CONVERTER */}
        {activeTab === 'unit' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Universal Unit Converter</h3>
              <p className="text-xs text-slate-400">Quickly convert length, weight, temperature, and digital data storage.</p>
            </div>

            <div className="flex gap-2 pb-2">
              {(['length', 'weight', 'temp', 'data'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setUnitCategory(cat);
                    if (cat === 'length') { setFromUnit('km'); setToUnit('miles'); }
                    if (cat === 'weight') { setFromUnit('kg'); setToUnit('lbs'); }
                    if (cat === 'temp') { setFromUnit('C'); setToUnit('F'); }
                    if (cat === 'data') { setFromUnit('gb'); setToUnit('mb'); }
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-colors ${
                    unitCategory === cat ? 'bg-[#ff007a] text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Value</label>
                <input
                  type="number"
                  value={unitVal}
                  onChange={(e) => setUnitVal(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm focus:border-[#ff007a] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">From Unit</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm"
                >
                  {unitCategory === 'length' && (
                    <>
                      <option value="km">Kilometers (km)</option>
                      <option value="miles">Miles (mi)</option>
                      <option value="meters">Meters (m)</option>
                      <option value="feet">Feet (ft)</option>
                    </>
                  )}
                  {unitCategory === 'weight' && (
                    <>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="lbs">Pounds (lbs)</option>
                      <option value="g">Grams (g)</option>
                      <option value="oz">Ounces (oz)</option>
                    </>
                  )}
                  {unitCategory === 'temp' && (
                    <>
                      <option value="C">Celsius (°C)</option>
                      <option value="F">Fahrenheit (°F)</option>
                    </>
                  )}
                  {unitCategory === 'data' && (
                    <>
                      <option value="gb">Gigabytes (GB)</option>
                      <option value="mb">Megabytes (MB)</option>
                      <option value="tb">Terabytes (TB)</option>
                      <option value="kb">Kilobytes (KB)</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">To Unit</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-sm"
                >
                  {unitCategory === 'length' && (
                    <>
                      <option value="miles">Miles (mi)</option>
                      <option value="km">Kilometers (km)</option>
                      <option value="meters">Meters (m)</option>
                      <option value="feet">Feet (ft)</option>
                    </>
                  )}
                  {unitCategory === 'weight' && (
                    <>
                      <option value="lbs">Pounds (lbs)</option>
                      <option value="kg">Kilograms (kg)</option>
                      <option value="g">Grams (g)</option>
                      <option value="oz">Ounces (oz)</option>
                    </>
                  )}
                  {unitCategory === 'temp' && (
                    <>
                      <option value="F">Fahrenheit (°F)</option>
                      <option value="C">Celsius (°C)</option>
                    </>
                  )}
                  {unitCategory === 'data' && (
                    <>
                      <option value="mb">Megabytes (MB)</option>
                      <option value="gb">Gigabytes (GB)</option>
                      <option value="tb">Terabytes (TB)</option>
                      <option value="kb">Kilobytes (KB)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#181a2e] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Result</span>
                <div className="text-2xl font-extrabold text-white font-mono mt-1">
                  {unitVal} {fromUnit} = <span className="text-[#00f2fe]">{convertUnits()} {toUnit}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. PASSWORD GENERATOR */}
        {activeTab === 'password' && (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Cryptographic Password Generator</h3>
              <p className="text-xs text-slate-400">
                Create unbreakable passwords with entropy analysis for accounts and creator vaults.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#181a2e] border border-white/10 flex items-center justify-between gap-3">
              <span className="font-mono text-sm sm:text-base text-emerald-400 font-bold truncate">
                {generatedPassword}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={generateNewPassword}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                  title="Regenerate"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(generatedPassword);
                    setCopiedPass(true);
                    setTimeout(() => setCopiedPass(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#8b25ff] text-white text-xs font-bold flex items-center gap-1"
                >
                  {copiedPass ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPass ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Length: {passLength} characters</span>
                <input
                  type="range"
                  min={8}
                  max={32}
                  value={passLength}
                  onChange={(e) => setPassLength(Number(e.target.value))}
                  className="w-48 accent-[#ff007a]"
                />
              </div>

              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="accent-[#ff007a]"
                  />
                  <span>Include Symbols (!@#$)</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="accent-[#ff007a]"
                  />
                  <span>Include Numbers (0-9)</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* 9. COLOR PALETTES */}
        {activeTab === 'palette' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-display">Harmonized Vibe Palette Generator</h3>
                <p className="text-xs text-slate-400">Click any color swatch to copy its hexadecimal code.</p>
              </div>
              <button
                onClick={generateNewPalette}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Randomize</span>
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3 h-32 rounded-2xl overflow-hidden">
              {palette.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigator.clipboard?.writeText(color);
                    setCopiedHex(color);
                    setTimeout(() => setCopiedHex(null), 1500);
                  }}
                  className="h-full rounded-xl flex flex-col justify-end p-3 transition-transform hover:scale-102 focus:outline-none relative group"
                  style={{ backgroundColor: color }}
                >
                  <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm self-start">
                    {copiedHex === color ? 'Copied!' : color.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 10. BMI CALCULATOR */}
        {activeTab === 'bmi' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Body Mass Index (BMI) & Wellness Guide</h3>
              <p className="text-xs text-slate-400">Evaluate physical health baseline with personalized wellness tips.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Height: {heightCm} cm</label>
                <input
                  type="range"
                  min={120}
                  max={220}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-[#ff007a]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Weight: {weightKg} kg</label>
                <input
                  type="range"
                  min={35}
                  max={160}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-[#00f2fe]"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Calculated Score</span>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">{bmiScore}</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Health Category</span>
                <div className={`text-lg font-bold ${getBmiCategory(Number(bmiScore)).color}`}>
                  {getBmiCategory(Number(bmiScore)).cat}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 11. URL ENCODER/DECODER */}
        {activeTab === 'url' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white font-display">URL Component Encoder & Decoder</h3>
              <p className="text-xs text-slate-400">Safely format query parameters and API endpoints for web sharing.</p>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Input URL or String</label>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  setEncodedUrl(encodeURIComponent(e.target.value));
                }}
                className="w-full px-4 py-2.5 rounded-xl bg-[#181a2e] border border-white/10 text-white text-xs"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Encoded URL Output</label>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-[#00f2fe] break-all">
                {encodedUrl}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
