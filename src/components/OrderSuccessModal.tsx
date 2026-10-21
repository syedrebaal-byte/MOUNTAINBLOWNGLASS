import React from 'react';
import { Check, ShieldCheck, Download, Printer, X, Sparkles, MapPin } from 'lucide-react';
import { OrderDetails } from '../types/cart';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white shadow-2xl z-10 border border-neutral-200 p-6 sm:p-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2 pb-6 border-b border-neutral-100">
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-amber-300" />
            </div>
            <span className="text-xs uppercase tracking-[0.26em] text-neutral-400 font-medium">
              Acquisition Confirmed
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 font-serif-luxury">
              Order {order.orderId}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-light">
              Thank you, {order.customerName}. Your collection has been registered in the Estes Park studio archive.
            </p>
          </div>

          {/* Certificate of Authenticity Card */}
          <div className="p-6 bg-neutral-50 border border-neutral-200/80 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-200/60 pb-3">
              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-neutral-400 font-display block">
                  Studio Provenance
                </span>
                <span className="text-sm font-light font-serif-luxury text-neutral-900">
                  Certificate of Authenticity
                </span>
              </div>
              <ShieldCheck className="w-6 h-6 text-neutral-700" />
            </div>

            <div className="space-y-2 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span className="text-neutral-400">Date of Creation & Registry:</span>
                <span className="font-medium text-neutral-800">{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Delivery Address:</span>
                <span className="font-medium text-neutral-800 text-right">{order.address}, {order.city}, {order.state} {order.postalCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Dispatch Studio:</span>
                <span className="font-medium text-neutral-800">Mountain Blown Glass Atelier (Estes Park, CO)</span>
              </div>
            </div>

            {/* Artworks Purchased */}
            <div className="pt-3 border-t border-neutral-200/60 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium block">
                Acquired Works:
              </span>
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-neutral-800">
                    {item.quantity}× {item.product.name}
                    {item.engraving && <span className="text-[10px] text-amber-700 block italic">"{item.engraving}"</span>}
                  </span>
                  <span className="font-mono text-neutral-900 tabular-nums">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200/60 flex justify-between items-center text-sm font-semibold text-neutral-950">
              <span className="font-serif-luxury">Total Value Settled</span>
              <span className="font-serif-luxury tabular-nums">${order.total.toLocaleString()} USD</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Print Studio Certificate
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer text-center"
            >
              Return to Gallery
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
