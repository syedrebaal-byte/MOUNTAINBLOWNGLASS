import React from 'react';
import { Flame, Compass, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface AtelierCraftSectionProps {
  onOpenDemoBooking: () => void;
}

export const AtelierCraftSection: React.FC<AtelierCraftSectionProps> = ({ onOpenDemoBooking }) => {
  return (
    <section id="atelier" className="py-20 lg:py-28 bg-neutral-50/70 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-neutral-400 font-medium">
            Estes Park, Colorado · Founded 2002
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-950 font-serif-luxury tracking-tight">
            The Art of the Off-Hand Blowpipe
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
            Every piece is shaped directly from molten 2,140°F batch silica at our hot shop in Estes Park. 
            No commercial automation, no synthetic presses—only raw breath, centrifugal spin, and cherrywood tools.
          </p>
        </div>

        {/* 2-Column Story Grid with High-End Studio Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 relative group overflow-hidden border border-neutral-200">
            <img
              src="/assets/products/hero_atelier.jpg"
              alt="Master Glassblower shaping glowing molten crystal at Estes Park atelier"
              className="w-full h-full aspect-[16/10] object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white space-y-1">
                <div className="text-xs uppercase tracking-[0.22em] text-amber-300 font-medium">
                  The Estes Park Hot Shop
                </div>
                <div className="text-lg sm:text-xl font-light font-serif-luxury">
                  Where molten quartz transforms into generational art glass
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-medium">
                01. The Crucible Gather
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-neutral-950 font-serif-luxury">
                2,140°F Pure Silica Batch
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Our optical batch is melted overnight in continuous ceramic crucibles. 
                The master gaffer gathers incandescent molten glass onto the stainless blowpipe tip, maintaining constant rotation to balance liquid gravity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-medium">
                02. Optic Ribs & Hand Spinning
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-neutral-950 font-serif-luxury">
                Centrifugal Wave & Fire Polish
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Using bronze optic molds, concentric ribs are pressed into the gathering while hot. 
                Centrifugal acceleration flares the rims, creating the fluid handkerchief folds and rib spirals inspired by historic Venetian masters.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.24em] text-neutral-400 font-medium">
                03. The Annealing Vault
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-neutral-950 font-serif-luxury">
                48-Hour Thermal Equilibrium
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                To eliminate internal tension, each piece rests in our digital annealing ovens, cooling slowly across two days from 920°F to room temperature for permanent structural integrity.
              </p>
            </div>

          </div>

        </div>

        {/* Live Studio Demonstration Banner */}
        <div className="bg-white border border-neutral-200 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.24em] text-amber-800 font-medium">
              Visitor Experience in Estes Park
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 font-serif-luxury">
              Witness the Magic of Live Glassblowing
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              We welcome collectors, families, and travelers to watch live glassblowing demonstrations daily. 
              Feel the furnace heat and ask questions directly to our resident artisans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenDemoBooking}
              className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer whitespace-nowrap shadow-sm"
            >
              Reserve Viewing Seat
            </button>
            <a
              href="tel:9705770880"
              className="px-6 py-3.5 border border-neutral-200 hover:border-neutral-900 text-neutral-800 text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Call Studio: (970) 577-0880
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
