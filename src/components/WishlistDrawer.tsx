import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlist: Product[];
  onClose: () => void;
  onRemove: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlist,
  onClose,
  onRemove,
  onSelectProduct,
  onMoveToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-medium">
                Curated Wishlist
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-xs text-neutral-900 font-semibold font-mono">
                {wishlist.length} Saved
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <Heart className="w-8 h-8 text-neutral-300 mx-auto" />
                <h4 className="text-lg font-light text-neutral-800 font-serif-luxury">
                  No Artworks Saved Yet
                </h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto font-light leading-relaxed">
                  Tap the heart icon on any hand-blown vase or bowl to save it to your personal gallery registry.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
                >
                  Browse Gallery
                </button>
              </div>
            ) : (
              wishlist.map(product => (
                <div key={product.id} className="p-3 border border-neutral-100 flex gap-4 hover:border-neutral-200 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain bg-neutral-50 border border-neutral-100 p-1 shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="text-sm font-normal text-neutral-950 font-serif-luxury hover:text-amber-800 transition-colors cursor-pointer"
                        >
                          {product.name}
                        </h5>
                        <button
                          onClick={() => onRemove(product)}
                          className="text-neutral-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {product.colorway} · {product.weight.split('/')[0]}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-50">
                      <span className="text-sm font-light text-neutral-950 font-serif-luxury tabular-nums">
                        ${product.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => {
                          onMoveToCart(product);
                        }}
                        className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] uppercase tracking-wider font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
