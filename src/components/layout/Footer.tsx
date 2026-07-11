import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 pt-14 md:pt-20 pb-8 border-t border-gray-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="space-y-6 md:space-y-8 lg:col-span-1">
            <a href="#" className="flex flex-col relative group w-max">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-0.5">
                MS<span className="text-brand-orange ml-0.5">CAR</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
                Premium Transport
              </span>
            </a>
            <p className="text-gray-500 font-medium text-[13px] leading-relaxed max-w-sm">
              Mumbai's premium direct fleet owner. Setting the standard for reliable, high-end group travel with unparalleled precision.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-gray-400">Explore</h4>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-500">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">Our Story</a></li>
              <li><a href="#fleet" className="hover:text-brand-orange transition-colors">The Fleet</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-brand-orange transition-colors">Reserve</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-gray-400">Class</h4>
            <ul className="space-y-3.5 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Force Urbania VIP</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Tempo Traveller 13S</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Tempo Traveller 17S</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Tempo Traveller 26S</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Premium Coach Bus</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold mb-6 md:mb-8 uppercase tracking-[0.2em] text-gray-400">Connect</h4>
            <ul className="space-y-5 text-[13px] font-medium text-gray-500">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Malad West SV Road<br/>Mumbai, Maharashtra</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed"><a href="tel:+919029011224" className="hover:text-brand-orange transition-colors">+91 90290 11224</a><br/><span className="text-gray-400 font-bold text-[11px]">Available 24/7</span></span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@mscar.in" className="hover:text-brand-orange transition-colors">contact@mscar.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Huge abstract logo background text */}
        <div className="absolute -bottom-6 md:-bottom-12 left-0 right-0 text-[18vw] font-black text-gray-900/[0.03] text-center pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap">
          MS CAR
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-widest uppercase text-gray-400 relative z-10 text-center md:text-left">
          <p>© {new Date().getFullYear()} MS CAR PREMIER RENTALS.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
