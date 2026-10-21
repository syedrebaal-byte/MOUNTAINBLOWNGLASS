import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
  onScrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, categoryId?: string) => {
    if (categoryId) {
      onSelectCategory(categoryId);
    }
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-neutral-100' : 'border-b border-neutral-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4 sm:gap-8">
          
          {/* ZONE 1: Navigation Links (Desktop) & Mobile Drawer Trigger */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-neutral-800 hover:text-black transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.16em] uppercase text-neutral-600 font-medium">
              <button
                onClick={() => handleNavClick('gallery', 'vases')}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer hover:underline underline-offset-8 decoration-neutral-300"
              >
                Vases
              </button>
              <button
                onClick={() => handleNavClick('gallery', 'bowls')}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer hover:underline underline-offset-8 decoration-neutral-300"
              >
                Bowls
              </button>
              <button
                onClick={() => handleNavClick('gallery', 'lighting')}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer hover:underline underline-offset-8 decoration-neutral-300"
              >
                Lighting
              </button>
              <button
                onClick={() => handleNavClick('unity', 'ceremony')}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer hover:underline underline-offset-8 decoration-neutral-300"
              >
                Unity Glass
              </button>
              <button
                onClick={() => handleNavClick('atelier')}
                className="hover:text-neutral-900 transition-colors whitespace-nowrap cursor-pointer hover:underline underline-offset-8 decoration-neutral-300"
              >
                Atelier
              </button>
            </nav>
          </div>

          {/* ZONE 2: Brand Lockup Wordmark (Centered, Premium & Attractive) */}
          <div className="flex-1 flex justify-center text-center px-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex flex-col items-center justify-center select-none"
            >
              {/* Refined blown glass flame/sphere crest */}
              <div className="flex items-center justify-center gap-2 mb-0.5 sm:mb-1">
                <span className="h-[1px] w-4 sm:w-6 bg-neutral-300 group-hover:w-8 transition-all duration-300"></span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-serif italic">Estes Park</span>
                <span className="h-[1px] w-4 sm:w-6 bg-neutral-300 group-hover:w-8 transition-all duration-300"></span>
              </div>

              {/* The Iconic Brand Wordmark Title */}
              <h1 className="text-lg sm:text-2xl md:text-[26px] tracking-[0.24em] font-normal uppercase text-neutral-950 font-display transition-colors whitespace-nowrap">
                MOUNTAIN BLOWN GLASS
              </h1>

              <div className="text-[9px] sm:text-[10px] tracking-[0.32em] uppercase text-neutral-500 font-light mt-0.5">
                Colorado Atelier · Est. 2002
              </div>
            </a>
          </div>

          {/* ZONE 3: Action Icons (Search, Wishlist, Shopping Bag) */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-50 cursor-pointer flex items-center gap-1.5"
              title="Search art glass collection"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
              <span className="hidden xl:inline text-xs tracking-wider uppercase text-neutral-500">Search</span>
            </button>

            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-50 cursor-pointer"
              title="Saved artworks"
            >
              <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-neutral-900 text-white text-[10px] font-medium rounded-full flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 text-neutral-900 hover:text-amber-800 transition-colors rounded-full hover:bg-neutral-50 cursor-pointer flex items-center gap-2"
              title="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium">Bag</span>
              <span className="w-5 h-5 bg-neutral-900 text-white text-[11px] font-medium rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white/98 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm tracking-[0.18em] uppercase text-neutral-800">
            <button
              onClick={() => handleNavClick('gallery', 'all')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              All Artworks
            </button>
            <button
              onClick={() => handleNavClick('gallery', 'vases')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              Sculptural Vases
            </button>
            <button
              onClick={() => handleNavClick('gallery', 'bowls')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              Centerpiece Bowls
            </button>
            <button
              onClick={() => handleNavClick('gallery', 'lighting')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              Luminous Oil Lamps
            </button>
            <button
              onClick={() => handleNavClick('gallery', 'sets')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              Matching Suites
            </button>
            <button
              onClick={() => handleNavClick('unity', 'ceremony')}
              className="text-left py-2 border-b border-neutral-100 hover:text-black font-medium"
            >
              Unity & Memorial Glass
            </button>
            <button
              onClick={() => handleNavClick('atelier')}
              className="text-left py-2 hover:text-black font-medium"
            >
              Atelier & Demonstrations
            </button>
          </nav>

          <div className="mt-6 pt-6 border-t border-neutral-100 text-xs text-neutral-500 flex flex-col gap-2">
            <div>101 W Elkhorn Ave, Estes Park, Colorado 80517</div>
            <div>Atelier Hours: Mon–Sun 10:00 AM – 6:00 PM MT</div>
            <div>Inquiries: studio@mountainblownglass.net</div>
          </div>
        </div>
      )}
    </header>
  );
};
