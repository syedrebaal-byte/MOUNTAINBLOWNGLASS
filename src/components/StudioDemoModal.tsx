import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Check, Flame, MapPin } from 'lucide-react';

interface StudioDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioDemoModal: React.FC<StudioDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [date, setDate] = useState('2026-10-24');
  const [timeSlot, setTimeSlot] = useState('1:30 PM (Molten Crystal Gather & Ribbing)');
  const [guestCount, setGuestCount] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white shadow-2xl z-10 border border-neutral-200 p-6 sm:p-10 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mx-auto border border-amber-200">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-light text-neutral-950 font-serif-luxury">
              Hot Shop Demonstration Reserved
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
              We look forward to hosting you at our Estes Park studio on <strong className="font-semibold text-neutral-900">{date}</strong> at <strong className="font-semibold text-neutral-900">{timeSlot.split(' ')[0]} {timeSlot.split(' ')[1]}</strong> for {guestCount} guest(s).
            </p>
            <div className="text-xs text-neutral-500 bg-neutral-50 p-4 border border-neutral-100 max-w-md mx-auto text-left">
              <div className="flex items-center gap-2 font-medium text-neutral-900 mb-1">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Mountain Blown Glass Atelier</span>
              </div>
              <div>101 W Elkhorn Ave, Estes Park, Colorado 80517</div>
              <div className="mt-1 text-[11px] text-neutral-400">Complimentary admission. Please arrive 10 minutes prior for front-row safety briefing.</div>
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-amber-800 font-medium">
                <Flame className="w-3.5 h-3.5" />
                Estes Park Live Studio Experience
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 font-serif-luxury">
                Reserve Front-Row Hot Shop Seats
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-light">
                Observe off-hand master glassblowers gather, blow, and sculpt 2,140°F molten art glass in person.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Desired Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Number of Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none bg-white cursor-pointer"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>Private Group (5-8 Guests)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                Daily Demonstration Session
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none bg-white cursor-pointer"
              >
                <option value="11:00 AM (Optic Ribbed Amphora & Vases)">11:00 AM — Optic Ribbed Amphora & Vases</option>
                <option value="1:30 PM (Molten Crystal Gather & Ribbing)">1:30 PM — Molten Crystal Gather & Fazzoletto Folds</option>
                <option value="3:30 PM (Luminous Oil Lamps & Sculptures)">3:30 PM — Luminous Oil Lamps & Alpine Sculptures</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Catherine Reed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(970) 555-0192"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                Email Address for Confirmation
              </label>
              <input
                type="email"
                required
                placeholder="catherine@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs p-2.5 border border-neutral-200 focus:border-neutral-900 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.24em] font-medium transition-colors cursor-pointer shadow-sm"
            >
              Confirm Complimentary Reservation
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
