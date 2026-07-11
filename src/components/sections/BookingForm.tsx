import React, { useState } from 'react';
import { Calendar, MapPin, Users, Phone, User, Car, ArrowRight } from 'lucide-react';

export function BookingForm({ 
  title = "Reserve Your<br/>Premium Ride.",
  vehicleOptions = [
    { value: "Force Urbania 17S", label: "Force Urbania (17S)" },
    { value: "Tempo Traveller 9S", label: "Tempo Traveller (9S)" },
    { value: "Tempo Traveller 13S", label: "Tempo Traveller (13S)" },
    { value: "Tempo Traveller 17S", label: "Tempo Traveller (17S)" },
    { value: "Tempo Traveller 26S", label: "Tempo Traveller (26S)" },
    { value: "Mini Bus 35S", label: "Mini Bus (35S)" },
    { value: "Luxury Bus 49S", label: "Luxury Bus (49S)" },
    { value: "Dzire", label: "Dzire" },
    { value: "Ertiga", label: "Ertiga" },
    { value: "Crysta", label: "Crysta" }
  ]
}: { 
  title?: string;
  vehicleOptions?: { value: string; label: string }[];
}) {
  const [formData, setFormData] = useState({
    name: '', phone: '', pickup: '', drop: '', date: '', vehicle: '', passengers: '', purpose: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date:* ${formData.date}%0A*Vehicle:* ${formData.vehicle}%0A*Passengers:* ${formData.passengers}%0A*Purpose:* ${formData.purpose}`;
    window.open(`https://wa.me/919029011224?text=${message}`, '_blank');
  };

  const inputClass = "w-full bg-gray-50/50 border border-gray-200 text-gray-900 md:rounded-xl rounded-xl px-10 md:px-12 py-3.5 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:bg-white transition-all font-medium placeholder:text-gray-400 appearance-none text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] hover:bg-gray-50";
  const iconClass = "absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-colors peer-focus:text-brand-orange";

  return (
    <section id="booking" className="py-12 md:py-20 relative overflow-hidden flex flex-col items-center bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="liquid-glass rounded-3xl md:rounded-[48px] p-2 shadow-2xl overflow-hidden relative">
          
          <div className="grid lg:grid-cols-5 gap-0 items-stretch bg-white rounded-[24px] md:rounded-[40px] overflow-hidden relative z-10">
            
            {/* Dark Luxury Info Side */}
            <div className="lg:col-span-2 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden bg-gray-900 text-white">
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange-light rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brand-orange text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">Instant Quote</span>
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] font-black leading-[1.1] mb-4 tracking-tighter" dangerouslySetInnerHTML={{ __html: title }}></h2>
                  <p className="text-gray-400 font-medium text-sm md:text-base mb-12 leading-relaxed max-w-sm">
                    Get a direct owner quote in under 5 minutes. No hidden fees. Pure luxury and comfort tailored for you.
                  </p>
                </div>
                
                <div className="space-y-8 mt-auto">
                  <div className="flex items-start gap-4 md:gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 transition-all duration-300">
                      <Phone className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-1">24/7 Hotline</p>
                      <p className="font-bold text-lg md:text-2xl tracking-tight hero-gradient-text inline-block">+91 90290 11224</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-md group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-1">Our Garage</p>
                      <p className="font-semibold text-sm md:text-base text-gray-300">Malad West SV Road,<br />Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Light Form Side */}
            <div className="lg:col-span-3 p-6 sm:p-10 lg:p-12 bg-white flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                <div className="relative">
                  <input type="text" name="name" required onChange={handleChange} className={`${inputClass} peer`} placeholder="Full Name" />
                  <User className={iconClass} />
                </div>

                <div className="relative">
                  <input type="tel" name="phone" required onChange={handleChange} className={`${inputClass} peer`} placeholder="Phone Number" />
                  <Phone className={iconClass} />
                </div>

                <div className="relative">
                  <input type="text" name="pickup" required onChange={handleChange} className={`${inputClass} peer`} placeholder="Pickup Location" />
                  <MapPin className={iconClass} />
                </div>

                <div className="relative">
                  <input type="text" name="drop" required onChange={handleChange} className={`${inputClass} peer`} placeholder="Drop Location" />
                  <MapPin className={iconClass} />
                </div>

                <div className="relative">
                  <input type="date" name="date" required onChange={handleChange} className={`${inputClass} peer text-gray-500 focus:text-gray-900`} style={{ colorScheme: 'light' }} />
                  <Calendar className={iconClass} />
                </div>

                <div className="relative">
                  <select name="vehicle" required onChange={handleChange} className={`${inputClass} peer`} defaultValue="">
                    <option value="" disabled className="text-gray-400">Select Vehicle</option>
                    {vehicleOptions.map((opt, i) => (
                      <option key={i} value={opt.value} className="text-gray-900">{opt.label}</option>
                    ))}
                  </select>
                  <Car className={iconClass} />
                </div>

                <div className="relative">
                  <select name="passengers" required onChange={handleChange} className={`${inputClass} peer`} defaultValue="">
                    <option value="" disabled className="text-gray-400">Passengers</option>
                    <option value="1-8" className="text-gray-900">1 to 8</option>
                    <option value="9-15" className="text-gray-900">9 to 15</option>
                    <option value="16-25" className="text-gray-900">16 to 25</option>
                    <option value="26-40" className="text-gray-900">26 to 40</option>
                    <option value="40+" className="text-gray-900">40+</option>
                  </select>
                  <Users className={iconClass} />
                </div>

                <div className="relative">
                  <select name="purpose" onChange={handleChange} className={`${inputClass} peer`} defaultValue="">
                    <option value="" disabled className="text-gray-400">Travel Purpose</option>
                    <option value="Corporate" className="text-gray-900">Corporate / Business</option>
                    <option value="Wedding" className="text-gray-900">Wedding</option>
                    <option value="Outstation" className="text-gray-900">Outstation Trip</option>
                    <option value="Airport" className="text-gray-900">Airport Transfer</option>
                    <option value="Other" className="text-gray-900">Other</option>
                  </select>
                  {/* Invisible icon for spacing to match other fields if needed, or adjust padding */}
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"></div>
                </div>

                <div className="md:col-span-2 pt-4 md:pt-6">
                  <button type="submit" className="w-full flex items-center justify-center gap-3 bg-brand-orange text-white hover:bg-brand-orange-dark rounded-xl md:rounded-xl py-3.5 md:py-4 font-bold text-sm transition-all duration-300 group shadow-[0_8px_25px_rgba(255,77,0,0.25)] hover:shadow-[0_12px_30px_rgba(255,77,0,0.4)] hover:-translate-y-1 active:scale-95">
                    <span className="tracking-wide">Request Detailed Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
