import React, { useState } from 'react';
import { Sparkles, Check, Heart, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface UnityCeremonySectionProps {
  unityProduct: Product;
  onAddToCart: (product: Product, quantity: number, notes?: string) => void;
}

const FRIT_COLORS = [
  { name: 'Cobalt Sapphire', hex: '#1e40af', desc: 'Devotion & Clarity' },
  { name: 'Amber Solstice', hex: '#d97706', desc: 'Warmth & Vitality' },
  { name: 'Ruby Carmine', hex: '#991b1b', desc: 'Passion & Strength' },
  { name: 'Emerald Pine', hex: '#065f46', desc: 'Abundance & Growth' },
  { name: 'Amethyst Twilight', hex: '#6b21a8', desc: 'Harmony & Peace' },
  { name: 'Pure Optic Quartz', hex: '#e2e8f0', desc: 'Truth & Simplicity' }
];

const VASE_SILHOUETTES = [
  { id: 'solstice', name: 'Solstice Ribbed Sphere Vase (10")', image: '/assets/products/vase_ribbed_amber.jpg' },
  { id: 'wave', name: 'Cascadia Organic Wave Bowl (16")', image: '/assets/products/bowl_aurora_centerpiece.jpg' },
  { id: 'amphora', name: 'Nirvana Fluted Flared Urn (14")', image: '/assets/products/vase_alpine_azure.jpg' }
];

export const UnityCeremonySection: React.FC<UnityCeremonySectionProps> = ({
  unityProduct,
  onAddToCart
}) => {
  const [partner1Color, setPartner1Color] = useState(FRIT_COLORS[0]);
  const [partner2Color, setPartner2Color] = useState(FRIT_COLORS[1]);
  const [selectedSilhouette, setSelectedSilhouette] = useState(VASE_SILHOUETTES[0]);
  const [coupleNames, setCoupleNames] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [added, setAdded] = useState(false);

  const handleOrder = () => {
    const customNotes = `Unity Custom: ${partner1Color.name} + ${partner2Color.name} | Vessel: ${selectedSilhouette.name} | Names: ${coupleNames || 'Not specified'} | Date: ${weddingDate || 'TBD'}`;
    onAddToCart(unityProduct, 1, customNotes);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <section id="unity" className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-800 font-medium">
            Ceremonial Traditions & Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-950 font-serif-luxury tracking-tight">
            The Bespoke Unity Glass Experience
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
            Replace perishable sand or candles with eternal hand-blown crystal. 
            Blend colored crystal frits during your ceremony, and our Estes Park atelier will melt your combined glass into a signed custom heirloom vase.
          </p>
        </div>

        {/* 2-Column Interactive Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Presentation Kit & Silhouette Preview */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="relative aspect-[4/3] bg-neutral-50 border border-neutral-200 overflow-hidden p-6 flex items-center justify-center">
              <img
                src="/assets/products/unity_frit_presentation.jpg"
                alt="Bespoke Unity Glass Crystal Frit Presentation Suite"
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[11px] uppercase tracking-wider text-neutral-800 font-medium border border-neutral-100 shadow-xs">
                Keepsake Presentation Vault Included
              </div>
            </div>

            {/* Selected Vessel Preview */}
            <div className="p-5 bg-neutral-50 border border-neutral-200 flex items-center gap-4">
              <img
                src={selectedSilhouette.image}
                alt={selectedSilhouette.name}
                className="w-16 h-16 object-contain bg-white border border-neutral-200 p-1 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-neutral-400">Chosen Finished Vessel</div>
                <div className="text-sm font-medium text-neutral-900 font-serif-luxury">{selectedSilhouette.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: partner1Color.hex }} />
                  <span>{partner1Color.name}</span>
                  <span>+</span>
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: partner2Color.hex }} />
                  <span>{partner2Color.name}</span>
                </div>
              </div>
            </div>

            {/* How it Works 4-Step Flow */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white border border-neutral-100">
                <span className="font-semibold text-neutral-900 block mb-1">1. We Ship Your Kit</span>
                <span className="text-neutral-500">Receive your crystal frits in corked glass vials with velvet presentation box.</span>
              </div>
              <div className="p-3 bg-white border border-neutral-100">
                <span className="font-semibold text-neutral-900 block mb-1">2. Blend at Ceremony</span>
                <span className="text-neutral-500">Pour the crystals together during vows or unity ceremony moment.</span>
              </div>
              <div className="p-3 bg-white border border-neutral-100">
                <span className="font-semibold text-neutral-900 block mb-1">3. Return Prepaid Box</span>
                <span className="text-neutral-500">Use the included insured shipping label to send blended frits to Estes Park.</span>
              </div>
              <div className="p-3 bg-white border border-neutral-100">
                <span className="font-semibold text-neutral-900 block mb-1">4. Custom Heirloom Blown</span>
                <span className="text-neutral-500">Our master gaffer melts your frits into your chosen signed vase.</span>
              </div>
            </div>

          </div>

          {/* Right: Customization Controls */}
          <div className="lg:col-span-6 space-y-8 bg-white p-6 sm:p-8 border border-neutral-200 shadow-sm">
            
            {/* Step 1: Partner 1 Hue */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-800 font-medium block">
                01. Partner 1 Crystal Frit Hue: <span className="text-neutral-500 font-normal">{partner1Color.name} ({partner1Color.desc})</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {FRIT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setPartner1Color(c)}
                    className={`p-2 text-center border cursor-pointer transition-all ${
                      partner1Color.name === c.name
                        ? 'border-neutral-900 ring-2 ring-neutral-900/10 bg-neutral-50 font-medium'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full mx-auto mb-1 border border-black/10" style={{ backgroundColor: c.hex }} />
                    <div className="text-[10px] text-neutral-700 truncate">{c.name.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Partner 2 Hue */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-800 font-medium block">
                02. Partner 2 Crystal Frit Hue: <span className="text-neutral-500 font-normal">{partner2Color.name} ({partner2Color.desc})</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {FRIT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setPartner2Color(c)}
                    className={`p-2 text-center border cursor-pointer transition-all ${
                      partner2Color.name === c.name
                        ? 'border-neutral-900 ring-2 ring-neutral-900/10 bg-neutral-50 font-medium'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full mx-auto mb-1 border border-black/10" style={{ backgroundColor: c.hex }} />
                    <div className="text-[10px] text-neutral-700 truncate">{c.name.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Finished Vessel Silhouette */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-neutral-800 font-medium block">
                03. Select Commemorative Vessel Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {VASE_SILHOUETTES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSilhouette(s)}
                    className={`p-3 text-left border cursor-pointer transition-all flex flex-col justify-between ${
                      selectedSilhouette.id === s.id
                        ? 'border-neutral-900 bg-neutral-50 font-medium ring-1 ring-neutral-900'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <span className="text-xs text-neutral-900 font-serif-luxury">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Inscription info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Couple / Family Names
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julian & Clara"
                  value={coupleNames}
                  onChange={(e) => setCoupleNames(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Ceremony Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. September 18, 2026"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Price & Order Action */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-2xl font-light text-neutral-950 font-serif-luxury tabular-nums">
                  ${unityProduct.price.toLocaleString()} <span className="text-xs font-sans tracking-normal uppercase text-neutral-400">USD</span>
                </div>
                <div className="text-[11px] text-neutral-500">
                  Includes Presentation Vault, Return Shipping & Final Blown Vase
                </div>
              </div>

              <button
                onClick={handleOrder}
                className={`w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-emerald-800 text-white'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-white shadow-sm'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Unity Suite Added
                  </>
                ) : (
                  'Order Complete Unity Suite'
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
