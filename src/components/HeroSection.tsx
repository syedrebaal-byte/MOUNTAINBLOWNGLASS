import React, { useState } from 'react';
import { ArrowRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

interface HeroSectionProps {
  heroProduct: Product;
  onSelectProduct: (product: Product) => void;
  onExploreCollection: () => void;
  onViewAtelier: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroProduct,
  onSelectProduct,
  onExploreCollection,
  onViewAtelier
}) => {
  const [activeLighting, setActiveLighting] = useState<'warm' | 'cool' | 'gallery'>('warm');

  return (
    <section className="relative bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        
        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-100">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-neutral-400 font-medium">
              Featured 2026 Collection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-950 font-serif-luxury mt-2">
              The Solstice Rigadin Edition
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-light leading-relaxed">
            Concentric optic ribs hand-blown at 2,140°F in Estes Park, Colorado. 
            Designed to capture and diffuse ambient sunlight in continuous luminous rings.
          </p>
        </div>

        {/* Hero 2-Column Split: Editorial Presentation & Product Focal Point */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase on Pure Gallery White */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
            
            {/* Ambient Refraction Glow based on selected lighting */}
            <div
              className={`absolute inset-0 rounded-full filter blur-3xl opacity-40 transition-colors duration-700 pointer-events-none ${
                activeLighting === 'warm'
                  ? 'bg-amber-100/80'
                  : activeLighting === 'cool'
                  ? 'bg-sky-50'
                  : 'bg-neutral-100'
              }`}
            />

            {/* Main Hero Vase Container */}
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square flex items-center justify-center p-4 group">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="max-h-full max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Floating Quick Action Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                <button
                  onClick={() => onSelectProduct(heroProduct)}
                  className="px-5 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-[0.2em] font-medium shadow-xl hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Inspect Artwork
                </button>
              </div>
            </div>

            {/* Interactive Lighting Simulation Switcher */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500 bg-neutral-50/80 p-1.5 rounded-full border border-neutral-100">
              <span className="text-[11px] uppercase tracking-wider px-2 font-medium text-neutral-400">Light Simulator:</span>
              <button
                onClick={() => setActiveLighting('warm')}
                className={`px-3 py-1 rounded-full transition-all text-xs cursor-pointer ${
                  activeLighting === 'warm' ? 'bg-white text-neutral-900 shadow-sm font-medium' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Morning Sun
              </button>
              <button
                onClick={() => setActiveLighting('gallery')}
                className={`px-3 py-1 rounded-full transition-all text-xs cursor-pointer ${
                  activeLighting === 'gallery' ? 'bg-white text-neutral-900 shadow-sm font-medium' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Gallery Neutral
              </button>
              <button
                onClick={() => setActiveLighting('cool')}
                className={`px-3 py-1 rounded-full transition-all text-xs cursor-pointer ${
                  activeLighting === 'cool' ? 'bg-white text-neutral-900 shadow-sm font-medium' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Twilight Cool
              </button>
            </div>
          </div>

          {/* Right Column: Acquisition Dossier & Craft Details */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6">
            
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.24em] text-amber-800/80 font-medium">
                {heroProduct.italianTechnique}
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 font-serif-luxury tracking-tight">
                {heroProduct.name}
              </h3>
              <p className="text-xs tracking-wider uppercase text-neutral-400 font-mono">
                {heroProduct.edition}
              </p>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              Crafted without molds using freehand punty spinning and traditional wooden shaping jacks. 
              Each amber spherical vessel weighs over 7 lbs of pure annealed optical crystal, signed and dated by hand at the foot.
            </p>

            {/* Artwork Specifications Table */}
            <div className="border-t border-b border-neutral-100 py-4 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Dimensions</span>
                <span className="font-medium text-neutral-800 tabular-nums">{heroProduct.dimensions}</span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Annealing Schedule</span>
                <span className="font-medium text-neutral-800">{heroProduct.annealingTime}</span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Weight</span>
                <span className="font-medium text-neutral-800 tabular-nums">{heroProduct.weight}</span>
              </div>
              <div>
                <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Studio Provenance</span>
                <span className="font-medium text-neutral-800">Estes Park, Colorado</span>
              </div>
            </div>

            {/* Price & Primary Call to Action */}
            <div className="space-y-4 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-light text-neutral-950 tabular-nums tracking-tight font-serif-luxury">
                  ${heroProduct.price.toLocaleString()}
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">
                  USD · Complimentary Insured Crated Shipping
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onSelectProduct(heroProduct)}
                  className="flex-1 px-8 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.24em] font-medium transition-colors text-center cursor-pointer shadow-sm"
                >
                  Acquire Solstice Artwork
                </button>
                <button
                  onClick={onExploreCollection}
                  className="px-6 py-3.5 border border-neutral-200 hover:border-neutral-900 text-neutral-800 hover:text-neutral-950 text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center cursor-pointer"
                >
                  View All Works
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-neutral-700" />
                <span>Includes embossed certificate of authenticity & archival diamond foot signature</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
