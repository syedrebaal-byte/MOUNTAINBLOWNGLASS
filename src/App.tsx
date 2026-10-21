import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS, Product } from './data/products';
import { CartItem, OrderDetails } from './types/cart';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GalleryFilter } from './components/GalleryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AtelierCraftSection } from './components/AtelierCraftSection';
import { UnityCeremonySection } from './components/UnityCeremonySection';
import { StudioDemoModal } from './components/StudioDemoModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { Footer } from './components/Footer';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mbg_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('mbg_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('All Hues');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Modal & Drawer states
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  // Quick Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('mbg_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('mbg_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, engraving?: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.engraving === engraving);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, engraving }];
    });
    showToast(`"${product.name}" added to shopping bag`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from shopping bag');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some(p => p.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(p => p.id !== product.id));
      showToast(`Removed from saved works`);
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Saved "${product.name}" to wishlist`);
    }
  };

  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product, 1);
    setWishlist(prev => prev.filter(p => p.id !== product.id));
    setIsCartOpen(true);
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedColor !== 'All Hues') {
      result = result.filter(p => p.colorway === selectedColor);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Featured: items marked featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedColor, sortBy]);

  const heroProduct = PRODUCTS[0]; // Solstice Rigadin Sferico Vase
  const unityProduct = PRODUCTS.find(p => p.id === 'bespoke-unity-ceremony-kit') || PRODUCTS[PRODUCTS.length - 1];

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Banner with announcements and demo booking trigger */}
      <TopBanner onOpenDemoBooking={() => setIsDemoModalOpen(true)} />

      {/* Main Luxury Header with the elevated Brand Title */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Showcase (Solstice Collection & Ribbed Amber Vase) */}
      <HeroSection
        heroProduct={heroProduct}
        onSelectProduct={(p) => setActiveProductModal(p)}
        onExploreCollection={() => scrollToSection('gallery')}
        onViewAtelier={() => scrollToSection('atelier')}
      />

      {/* Primary Art Glass Gallery Section */}
      <main id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Lead-in */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.28em] text-neutral-400 font-medium">
            Permanent & Signed Editions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-950 font-serif-luxury tracking-tight">
            The Atelier Collection
          </h2>
          <p className="text-sm text-neutral-500 font-light leading-relaxed">
            Each individual piece is created off-hand without molds. Dimensions and subtle optical refractions vary slightly, celebrating the unique breath of the glassblower.
          </p>
        </div>

        {/* Filter Bar */}
        <GalleryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          sortBy={sortBy}
          onSelectSort={setSortBy}
          totalCount={filteredProducts.length}
        />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.some(p => p.id === product.id)}
              onSelectProduct={(p) => setActiveProductModal(p)}
              onToggleWishlist={handleToggleWishlist}
              onQuickAdd={(p) => handleAddToCart(p, 1)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-neutral-500 text-sm font-light">
              No artworks found for this category and color combination.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedColor('All Hues');
              }}
              className="text-xs uppercase tracking-widest text-neutral-900 underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* The Art of the Off-Hand Blowpipe (Heritage & Hot Shop Studio Section) */}
      <AtelierCraftSection onOpenDemoBooking={() => setIsDemoModalOpen(true)} />

      {/* Unity Ceremony & Memorial Glass Infusions Section */}
      <UnityCeremonySection
        unityProduct={unityProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Collector Assurance Banner */}
      <section className="bg-white border-t border-b border-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-4 border-b md:border-b-0 md:border-r border-neutral-100">
              <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-1">
                01. Insured Crated Dispatch
              </span>
              <h4 className="text-base font-normal text-neutral-900 font-serif-luxury mb-1">
                Zero-Breakage Guarantee
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Custom foam-injected suspension crating designed specifically for hand-blown glass. Fully insured against transit damage.
              </p>
            </div>

            <div className="p-4 border-b md:border-b-0 md:border-r border-neutral-100">
              <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-1">
                02. Certified Provenance
              </span>
              <h4 className="text-base font-normal text-neutral-900 font-serif-luxury mb-1">
                Master Signed & Numbered
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Diamond wheel foot signature and individual studio archive registration certificate included with every vessel.
              </p>
            </div>

            <div className="p-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-medium block mb-1">
                03. Heritage Atelier
              </span>
              <h4 className="text-base font-normal text-neutral-900 font-serif-luxury mb-1">
                Hand-Crafted in Colorado
              </h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Continuous family-owned artisan studio since 2002. Welcoming collectors to our Estes Park hot shop 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Museum Footer */}
      <Footer
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenDemoBooking={() => setIsDemoModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* MODALS & DRAWERS */}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductModal}
        isWishlisted={activeProductModal ? wishlist.some(p => p.id === activeProductModal.id) : false}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCompleteOrder={(order) => {
          setCartItems([]);
          setIsCartOpen(false);
          setCompletedOrder(order);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemove={(p) => handleToggleWishlist(p)}
        onSelectProduct={(p) => setActiveProductModal(p)}
        onMoveToCart={handleMoveWishlistToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        products={PRODUCTS}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setActiveProductModal(p)}
      />

      {/* Studio Demonstration Reservation Modal */}
      <StudioDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Order Success Receipt & Certificate Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      {/* Floating Quiet Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white text-xs px-4 py-3 shadow-2xl flex items-center gap-2 border border-neutral-800 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
