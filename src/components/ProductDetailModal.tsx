import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Truck, Sparkles, Check, Flame, Clock, Ruler, Scale } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, engraving?: string) => void;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [enableEngraving, setEnableEngraving] = useState<boolean>(false);
  const [engravingText, setEngravingText] = useState<string>('');
  const [lightMode, setLightMode] = useState<'daylight' | 'gallery' | 'evening'>('daylight');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const allImages = [product.image, ...(product.secondaryImages || [])];

  const handleAdd = () => {
    onAddToCart(product, quantity, enableEngraving ? engravingText : undefined);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-white shadow-2xl z-10 border border-neutral-200 overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium">
            <span>Atelier Archive</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-900">{product.edition}</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Visual Gallery on Pure White with Light Refraction */}
            <div className="lg:col-span-7 flex flex-col items-center">
              
              {/* Main Showcase Canvas */}
              <div className={`relative w-full aspect-square bg-white border border-neutral-100 flex items-center justify-center p-8 transition-colors duration-500 ${
                lightMode === 'evening' ? 'bg-amber-50/20' : lightMode === 'gallery' ? 'bg-neutral-50/50' : 'bg-white'
              }`}>
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Light Refraction Simulation Controls */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-neutral-100 text-[11px] text-neutral-500">
                  <span className="uppercase tracking-wider text-[10px] text-neutral-400">Refraction Studio:</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setLightMode('daylight')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${lightMode === 'daylight' ? 'bg-neutral-900 text-white' : 'hover:text-black'}`}
                    >
                      Daylight
                    </button>
                    <button
                      onClick={() => setLightMode('gallery')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${lightMode === 'gallery' ? 'bg-neutral-900 text-white' : 'hover:text-black'}`}
                    >
                      Gallery (3000K)
                    </button>
                    <button
                      onClick={() => setLightMode('evening')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${lightMode === 'evening' ? 'bg-neutral-900 text-white' : 'hover:text-black'}`}
                    >
                      Warm Hearth
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Angle Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-3 mt-4 w-full">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 border p-1 bg-white cursor-pointer transition-all ${
                        activeImage === img ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-neutral-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Angle preview" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Craftsmanship Highlights */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-6 border-t border-neutral-100 text-center">
                <div className="p-2 bg-neutral-50 border border-neutral-100/60">
                  <Flame className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Furnace Temp</div>
                  <div className="text-xs font-semibold text-neutral-800">{product.temperature.split(' ')[0]}</div>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-100/60">
                  <Clock className="w-4 h-4 mx-auto text-neutral-700 mb-1" />
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Anneal Time</div>
                  <div className="text-xs font-semibold text-neutral-800">{product.annealingTime.split(' ')[0]} {product.annealingTime.split(' ')[1]}</div>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-100/60">
                  <Ruler className="w-4 h-4 mx-auto text-neutral-700 mb-1" />
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Height</div>
                  <div className="text-xs font-semibold text-neutral-800">{product.dimensions.split('×')[0]}</div>
                </div>
                <div className="p-2 bg-neutral-50 border border-neutral-100/60">
                  <Scale className="w-4 h-4 mx-auto text-neutral-700 mb-1" />
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Net Weight</div>
                  <div className="text-xs font-semibold text-neutral-800">{product.weight.split('/')[0]}</div>
                </div>
              </div>

            </div>

            {/* Right Column: Acquisition Dossier */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-medium">
                  {product.italianTechnique}
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-neutral-950 font-serif-luxury mt-1">
                  {product.name}
                </h2>
                <p className="text-xs tracking-wider text-neutral-500 font-light mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Price & Availability */}
              <div className="flex items-baseline justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-3xl font-light text-neutral-950 font-serif-luxury tabular-nums">
                    ${(product.price * quantity).toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider ml-2">USD</span>
                </div>
                <span className="text-xs font-mono tracking-wider text-amber-800 bg-amber-50 px-2 py-1 border border-amber-200/60">
                  {product.inStock ? `In Stock (${product.stockCount} Available)` : 'Made to Order'}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Studio Provenance Note */}
              <div className="text-xs text-neutral-500 bg-neutral-50 p-3.5 border-l-2 border-neutral-900 leading-relaxed">
                <span className="font-semibold text-neutral-800 block mb-0.5">Studio Provenance & Signature:</span>
                {product.provenance}
              </div>

              {/* Custom Archival Diamond Engraving Option */}
              <div className="border border-neutral-200 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-neutral-800 font-medium flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enableEngraving}
                      onChange={(e) => setEnableEngraving(e.target.checked)}
                      className="accent-neutral-900 cursor-pointer"
                    />
                    Archival Diamond Engraving (Complimentary)
                  </label>
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                </div>
                {enableEngraving && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <input
                      type="text"
                      placeholder="e.g. S & M · October 2026 · Estes Park"
                      value={engravingText}
                      onChange={(e) => setEngravingText(e.target.value)}
                      maxLength={40}
                      className="w-full text-xs p-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400">
                      <span>Hand-etched by diamond wheel on base of vessel</span>
                      <span>{engravingText.length}/40 chars</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Stepper & Add to Bag */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-neutral-300 h-12">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 text-neutral-500 hover:text-black transition-colors cursor-pointer text-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 text-xs font-semibold tabular-nums text-neutral-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="px-3 text-neutral-500 hover:text-black transition-colors cursor-pointer text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Primary Add Action */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 h-12 text-xs uppercase tracking-[0.22em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      addedSuccess
                        ? 'bg-emerald-800 text-white'
                        : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Shopping Bag
                      </>
                    ) : (
                      'Acquire Masterpiece'
                    )}
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`h-12 w-12 border flex items-center justify-center transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'border-red-200 bg-red-50 text-red-600'
                        : 'border-neutral-300 hover:border-neutral-900 text-neutral-700'
                    }`}
                    title={isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
                  >
                    <Heart className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 flex flex-col gap-1.5 text-[11px] text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                    <span>Free crated foam-suspension shipping with full declared-value transit insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                    <span>Lifetime authenticity guarantee signed by master glassblowers</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
