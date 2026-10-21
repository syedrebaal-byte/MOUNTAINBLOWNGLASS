import React, { useState } from 'react';
import { Mail, ShieldCheck, MapPin, Phone, Clock, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenDemoBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenDemoBooking,
  onScrollToSection
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-16 sm:pt-20 pb-12 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Atelier Mission Lockup */}
        <div className="pb-12 border-b border-neutral-100 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.34em] uppercase text-neutral-400 font-display">
              Estes Park · Colorado Rocky Mountains
            </span>
            <h2 className="text-2xl sm:text-3xl tracking-[0.24em] font-normal uppercase text-neutral-950 font-display">
              MOUNTAIN BLOWN GLASS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg font-light leading-relaxed">
              Preserving the timeless heritage of off-hand Italian and American furnace art glass since 2002. 
              Each vessel is individually blown, shaped, annealed, and signed by our master artisans.
            </p>
          </div>

          {/* Studio Newsletter */}
          <div className="w-full md:w-auto min-w-[300px] space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-800 font-medium block">
              Private Studio Gazettes & Crucible Releases
            </span>
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                required
                placeholder="Enter collector email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest transition-colors cursor-pointer shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : 'Join'}
              </button>
            </form>
            {subscribed && (
              <div className="text-[11px] text-emerald-700">
                Welcome to the Mountain Blown Glass collector circle.
              </div>
            )}
          </div>
        </div>

        {/* 4 Editorial Navigation Columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <span className="font-semibold text-neutral-900 uppercase tracking-widest text-[11px] block">
              Permanent Collections
            </span>
            <ul className="space-y-2 font-light text-neutral-500">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('vases');
                    onScrollToSection('gallery');
                  }}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Sculptural Ribbed Vases
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('bowls');
                    onScrollToSection('gallery');
                  }}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Flared Centerpiece Bowls
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('lighting');
                    onScrollToSection('gallery');
                  }}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Effervescent Oil Lamps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('sets');
                    onScrollToSection('gallery');
                  }}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Atelier Matching Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('sculptures');
                    onScrollToSection('gallery');
                  }}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Solid Mountain Peak Crystals
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-semibold text-neutral-900 uppercase tracking-widest text-[11px] block">
              Bespoke Services
            </span>
            <ul className="space-y-2 font-light text-neutral-500">
              <li>
                <button
                  onClick={() => onScrollToSection('unity')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  Wedding Unity Glass Ceremony
                </button>
              </li>
              <li>
                <a
                  href="#unity"
                  onClick={() => onScrollToSection('unity')}
                  className="hover:text-black transition-colors"
                >
                  Memorial / Memory Glass Infusions
                </a>
              </li>
              <li>
                <span className="text-neutral-400">Architectural Chandeliers & Installations</span>
              </li>
              <li>
                <span className="text-neutral-400">Corporate & Milestone Recognition Awards</span>
              </li>
              <li>
                <span className="text-neutral-400">Archival Diamond Engraving</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-semibold text-neutral-900 uppercase tracking-widest text-[11px] block">
              Estes Park Atelier
            </span>
            <div className="space-y-2 text-neutral-500 font-light leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-700 shrink-0 mt-0.5" />
                <span>101 W Elkhorn Ave, Estes Park, Colorado 80517</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                <span>Open Daily: 10:00 AM – 6:00 PM MT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                <span>(970) 577-0880</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenDemoBooking}
                  className="text-neutral-900 font-medium underline underline-offset-4 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  Reserve Live Hot Shop Demo →
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-semibold text-neutral-900 uppercase tracking-widest text-[11px] block">
              Collector Assurance
            </span>
            <ul className="space-y-2 font-light text-neutral-500">
              <li>Complimentary Crated Shipping ($300+)</li>
              <li>Museum-Grade Transit Insurance</li>
              <li>Certificate of Authenticity with Every Piece</li>
              <li>Hand-Ground Pontil Mark Guarantee</li>
              <li>Care & Washing Guide for Art Glass</li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-light">
          <div>
            © 2002–2026 Mountain Blown Glass LLC · Estes Park, Colorado. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Fine Hand-Blown Art Glass</span>
            <span aria-hidden="true">·</span>
            <span>Estes Park Studio</span>
            <span aria-hidden="true">·</span>
            <span>Dollywood Craftsman Atelier</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
