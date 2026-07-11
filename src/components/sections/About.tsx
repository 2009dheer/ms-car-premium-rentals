import { ShieldCheck, UserCheck, Settings, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main big box */}
          <div className="md:col-span-2 liquid-glass rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[auto] md:min-h-[340px] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-brand-orange text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-6 block">Our Identity</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight text-gray-900 mb-3 md:mb-4">
                Not an aggregator.<br/>
                <span className="text-gray-400">A true fleet owner.</span>
              </h2>
              <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                By eliminating third-party commissions, we provide unmatched pricing without compromising on the luxury, comfort, or absolute reliability of your journey.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-6 md:gap-12 relative z-10">
              <div>
                <p className="text-3xl lg:text-4xl font-medium tracking-tighter">
                  <span className="hero-gradient-text inline-block">10</span>
                  <span className="text-brand-orange text-2xl lg:text-3xl">+</span>
                </p>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1 md:mt-2">Years Exp</p>
              </div>
              <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
              <div>
                <p className="text-3xl lg:text-4xl font-medium tracking-tighter">
                  <span className="hero-gradient-text inline-block">5k</span>
                  <span className="text-brand-orange text-2xl lg:text-3xl">+</span>
                </p>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1 md:mt-2">Trips Done</p>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-[28px] p-6 md:p-8 flex flex-col justify-center items-center text-center group py-8 md:py-8">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full liquid-glass-light flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-700 shadow-xl">
              <Award className="w-7 h-7 md:w-10 md:h-10 text-brand-orange" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Verified Trust</h3>
            <p className="text-gray-500 font-medium text-sm md:text-base max-w-[200px] leading-relaxed">Trusted by top corporates and families in Mumbai.</p>
          </div>

          <div className="liquid-glass rounded-[28px] p-6 md:p-8 group min-h-[auto] md:min-h-[260px] flex flex-col justify-end relative overflow-hidden py-8 md:py-8">
             <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent z-0"></div>
             <UserCheck className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mb-4 md:mb-8 relative z-10 group-hover:text-brand-orange transition-colors duration-500" strokeWidth={1.5} />
             <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight relative z-10">Pro Chauffeurs</h3>
             <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed relative z-10">Background-verified, rigorously trained in luxury hospitality.</p>
          </div>

          <div className="md:col-span-2 liquid-glass rounded-[28px] p-6 md:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[auto] md:min-h-[260px] py-8 md:py-10">
             <div className="absolute right-[-20%] top-[-30%] opacity-5 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
               <Settings className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] text-gray-900" />
             </div>
             <Settings className="w-10 h-10 md:w-12 md:h-12 text-gray-400 mb-6 md:mb-8 relative z-10 group-hover:text-brand-orange transition-colors" strokeWidth={1.5} />
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight relative z-10">Impeccable Maintenance</h3>
             <p className="text-gray-500 font-medium text-sm md:text-lg max-w-2xl relative z-10 leading-relaxed">Our in-house service team ensures every vehicle is sanitised, mechanically sound, and luxuriously clean before every single trip.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
