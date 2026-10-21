import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onSelectProduct,
  onToggleWishlist,
  onQuickAdd
}) => {
  return (
    <article className="group relative flex flex-col bg-white border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
      
      {/* Product Image Canvas on Pure White Background */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-white p-6 sm:p-8 flex items-center justify-center cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges: Clean Text Only (No bulky pills) */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {product.isNew && (
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-amber-800 bg-amber-50/90 px-2 py-0.5 border border-amber-200/50">
              New Atelier Work
            </span>
          )}
          {product.stockCount <= 3 && (
            <span className="text-[10px] tracking-[0.16em] uppercase text-neutral-500 font-mono">
              Only {product.stockCount} Created
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all cursor-pointer ${
            isWishlisted
              ? 'text-red-600 bg-white shadow-sm'
              : 'text-neutral-400 hover:text-neutral-900 bg-white/80 hover:bg-white'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>

        {/* Hover Quick Actions */}
        <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="flex-1 py-2.5 px-3 bg-neutral-950/95 hover:bg-neutral-900 text-white text-[11px] uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Inspect
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="p-2.5 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-md transition-colors cursor-pointer"
            title="Quick Add to Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-1 border-t border-neutral-100 justify-between bg-white">
        <div className="space-y-1.5">
          {/* Subtle Italian Glassblowing Technique Kicker */}
          <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-serif italic truncate">
            {product.italianTechnique}
          </div>

          {/* Product Name */}
          <h4
            onClick={() => onSelectProduct(product)}
            className="text-base font-normal text-neutral-900 font-serif-luxury hover:text-amber-800 transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h4>

          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-light pt-0.5">
            <span>{product.colorway}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{product.weight.split('/')[0]}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-[11px] text-neutral-400">Estes Park</span>
          </div>
        </div>

        {/* Pricing & Edition Baseline */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="text-base font-light text-neutral-950 font-serif-luxury tabular-nums">
            ${product.price.toLocaleString()} <span className="text-[10px] text-neutral-400 font-sans tracking-normal uppercase">USD</span>
          </div>
          
          <span className="text-[11px] text-neutral-400 tracking-wider font-mono">
            {product.inStock ? 'Ready to Ship' : 'Made to Order'}
          </span>
        </div>
      </div>

    </article>
  );
};
