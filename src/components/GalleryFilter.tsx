import React from 'react';
import { CATEGORIES, COLORWAYS } from '../data/products';

interface GalleryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  totalCount: number;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedColor,
  onSelectColor,
  sortBy,
  onSelectSort,
  totalCount
}) => {
  return (
    <div className="space-y-6 pb-8 border-b border-neutral-100">
      
      {/* Primary Category Selector Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'border-b-2 border-neutral-950 text-neutral-950 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="text-xs text-neutral-400 font-mono tracking-wider whitespace-nowrap hidden sm:block">
          Showing <span className="text-neutral-900 font-semibold">{totalCount}</span> Studio Works
        </div>
      </div>

      {/* Secondary Sub-Filters: Glass Colorway & Sorter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 text-xs">
        
        {/* Colorway Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-neutral-400 uppercase tracking-widest text-[11px] mr-1">Color Palette:</span>
          {COLORWAYS.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={() => onSelectColor(color)}
                className={`px-2.5 py-1 text-[11px] tracking-wide transition-colors cursor-pointer rounded-sm ${
                  isSelected
                    ? 'bg-neutral-900 text-white font-medium'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
                }`}
              >
                {color}
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-neutral-400 uppercase tracking-widest text-[11px]">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => onSelectSort(e.target.value)}
            className="bg-transparent border border-neutral-200 text-neutral-800 text-xs py-1.5 px-3 rounded-none focus:outline-none focus:border-neutral-900 cursor-pointer font-light"
          >
            <option value="featured">Curated & Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Artwork Title (A-Z)</option>
          </select>
        </div>

      </div>

    </div>
  );
};
