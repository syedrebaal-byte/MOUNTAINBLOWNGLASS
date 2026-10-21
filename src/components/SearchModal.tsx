import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  products: Product[];
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  products,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? products.slice(0, 4)
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.italianTechnique.toLowerCase().includes(query.toLowerCase()) ||
        p.colorway.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white shadow-2xl z-10 border border-neutral-200 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search by vase style, color (Amber, Azure, Crimson), or technique..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg font-light text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Suggestion Chips */}
        <div className="px-6 py-2.5 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2 overflow-x-auto text-[11px] text-neutral-500">
          <span className="uppercase tracking-wider text-neutral-400">Popular:</span>
          {['Amber Ribbed', 'Solstice', 'Fazzoletto Fold', 'Amethyst Bowl', 'Oil Lamp', 'Unity Suite'].map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2 py-0.5 bg-white border border-neutral-200 hover:border-neutral-900 text-neutral-700 transition-colors cursor-pointer rounded-xs"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-neutral-100">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-sm font-light">
              No glassworks match "{query}". Try searching "Amber", "Vase", or "Bowl".
            </div>
          ) : (
            filtered.map(product => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 sm:py-4 flex items-center justify-between gap-4 hover:bg-neutral-50 px-2 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-contain bg-white border border-neutral-100 p-1 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-serif italic">
                      {product.italianTechnique}
                    </div>
                    <div className="text-sm font-normal text-neutral-900 font-serif-luxury group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </div>
                    <div className="text-xs text-neutral-500 font-light">
                      {product.colorway} · {product.edition}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-light text-neutral-900 font-serif-luxury tabular-nums">
                    ${product.price.toLocaleString()}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
