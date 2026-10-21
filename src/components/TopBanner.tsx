import React from 'react';

interface TopBannerProps {
  onOpenDemoBooking: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenDemoBooking }) => {
  return (
    <div className="bg-neutral-900 text-neutral-300 text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 tracking-wider uppercase">
        <div className="flex items-center gap-3 text-neutral-400">
          <span>Estes Park Atelier & Gallery, CO</span>
          <span className="hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline text-neutral-300">Live Demonstrations Daily</span>
        </div>

        <div className="text-center font-medium text-amber-200/90 tracking-widest text-[10px] sm:text-[11px]">
          Complimentary Insured White-Glove Crated Delivery Worldwide
        </div>

        <div className="flex items-center gap-4 text-neutral-400">
          <button
            onClick={onOpenDemoBooking}
            className="hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-amber-400/50"
          >
            Reserve Hot Shop Demo
          </button>
          <span aria-hidden="true">·</span>
          <span>USD ($)</span>
        </div>
      </div>
    </div>
  );
};
