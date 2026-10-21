import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Truck, Sparkles, Check } from 'lucide-react';
import { CartItem, OrderDetails } from '../types/cart';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCompleteOrder: (order: OrderDetails) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCompleteOrder
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout'>('cart');
  
  // Checkout form fields
  const [name, setName] = useState('Eleanor Vance');
  const [email, setEmail] = useState('eleanor.vance@example.com');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Denver');
  const [state, setState] = useState('CO');
  const [postalCode, setPostalCode] = useState('80202');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 300;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 35;
  const tax = Math.round(subtotal * 0.065);
  const total = subtotal + shipping + tax;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const order: OrderDetails = {
        orderId: `MBG-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        customerName: name,
        email,
        address,
        city,
        state,
        postalCode,
        items,
        subtotal,
        shipping,
        tax,
        total,
        deliveryMethod: 'White-Glove Insured Crated Freight'
      };
      setIsSubmitting(false);
      setCheckoutStep('cart');
      onCompleteOrder(order);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-medium">
                {checkoutStep === 'cart' ? 'Shopping Bag' : 'Checkout & Commission'}
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-xs text-neutral-900 font-semibold font-mono">
                {items.length} {items.length === 1 ? 'Artwork' : 'Artworks'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Free Shipping Progress Bar */}
            {items.length > 0 && (
              <div className="p-3 bg-neutral-50 border border-neutral-100 text-xs">
                {amountToFreeShipping > 0 ? (
                  <div>
                    <div className="text-neutral-600 mb-1.5">
                      Add <strong className="text-neutral-900 font-semibold tabular-nums">${amountToFreeShipping}</strong> more for Complimentary Insured Crated Shipping
                    </div>
                    <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-600 transition-all duration-500"
                        style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Qualified for Complimentary Insured Crated Shipping</span>
                  </div>
                )}
              </div>
            )}

            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="text-neutral-300 font-serif-luxury text-4xl">MBG</div>
                <h4 className="text-lg font-light text-neutral-800 font-serif-luxury">
                  Your Shopping Bag is Empty
                </h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto font-light leading-relaxed">
                  Explore our Estes Park atelier collection of hand-blown vases, centerpiece bowls, and oil lamps.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : checkoutStep === 'cart' ? (
              
              /* Items List */
              <div className="space-y-4 divide-y divide-neutral-100">
                {items.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain bg-neutral-50 border border-neutral-100 p-1 shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h5 className="text-sm font-normal text-neutral-950 font-serif-luxury leading-tight">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-neutral-400 hover:text-red-600 p-1 cursor-pointer transition-colors"
                            title="Remove artwork"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          {item.product.colorway} · {item.product.dimensions.split('×')[0]}
                        </p>
                        {item.engraving && (
                          <div className="mt-1 text-[10px] text-amber-800 bg-amber-50 p-1 border border-amber-200/50">
                            Engraving: "{item.engraving}"
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-neutral-200 h-7 text-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 text-neutral-500 hover:text-black cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 tabular-nums font-medium text-neutral-800">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 text-neutral-500 hover:text-black cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-sm font-light text-neutral-950 font-serif-luxury tabular-nums">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            ) : (

              /* Seamless Luxury Checkout Form */
              <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm uppercase tracking-[0.18em] font-medium text-neutral-900">
                    Client & Delivery Dossier
                  </h4>
                  <p className="text-xs text-neutral-500 font-light">
                    Every order is insured and shipped directly from our Estes Park studio.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                      Email for Insured Tracking & Provenance Certificate
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Payment Preference */}
                  <div className="pt-2">
                    <label className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-1.5">
                      Payment Gateway (Simulated Luxury Sandbox)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-2.5 text-center border cursor-pointer text-xs ${
                          paymentMethod === 'card' ? 'border-neutral-900 bg-neutral-50 font-medium' : 'border-neutral-200'
                        }`}
                      >
                        Credit Card / Amex
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-2.5 text-center border cursor-pointer text-xs ${
                          paymentMethod === 'bank' ? 'border-neutral-900 bg-neutral-50 font-medium' : 'border-neutral-200'
                        }`}
                      >
                        Atelier Direct Wire
                      </button>
                    </div>
                  </div>

                </div>
              </form>

            )}

          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-100 bg-neutral-50 space-y-4">
              
              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-neutral-900">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Insured Crated Shipping</span>
                  <span className="tabular-nums font-medium text-neutral-900">
                    {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Estimated Tax (6.5%)</span>
                  <span className="tabular-nums font-medium text-neutral-900">${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-neutral-950 pt-2 border-t border-neutral-200">
                  <span className="font-serif-luxury text-base">Total Investment</span>
                  <span className="font-serif-luxury text-lg tabular-nums">${total.toLocaleString()} USD</span>
                </div>
              </div>

              {/* Action Buttons */}
              {checkoutStep === 'cart' ? (
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.24em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.24em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? 'Securing Atelier Order...' : `Confirm & Acquire ($${total.toLocaleString()})`}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full py-2 text-neutral-500 hover:text-black text-xs uppercase tracking-wider cursor-pointer"
                  >
                    ← Return to Bag
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-bit Encrypted · Includes Certificate of Authenticity</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
