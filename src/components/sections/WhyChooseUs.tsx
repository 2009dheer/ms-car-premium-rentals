import { ShieldCheck, Banknote, BadgeCheck, Sparkles, Star, Droplets, ThumbsUp, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import driverVerifiedImg from '../../assets/images/driver-verified.jpg';

const reasons = [
  { text: "Direct Fleet Owner", subtext: "Zero Middlemen", icon: <ShieldCheck className="w-6 h-6" /> },
  { text: "Transparent Pricing", subtext: "No hidden costs", icon: <Banknote className="w-6 h-6" /> },
  { text: "Verified Drivers", subtext: "Professional & trained", icon: <BadgeCheck className="w-6 h-6" /> },
  { text: "Maintained Fleet", subtext: "Always in top condition", icon: <Sparkles className="w-6 h-6" /> },
  { text: "Luxury Seating", subtext: "Push-back comfort", icon: <Star className="w-6 h-6" /> },
  { text: "Sanitized Vehicles", subtext: "Clean & hygienic", icon: <Droplets className="w-6 h-6" /> },
  { text: "100% Reliable", subtext: "Always on time", icon: <ThumbsUp className="w-6 h-6" /> },
  { text: "24/7 Support", subtext: "On-trip assistance", icon: <Headphones className="w-6 h-6" /> },
];


export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#FAFAFA]">
      {/* ── Liquid Animated Orbs (Background) ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[10%] -top-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-brand-orange/[0.08] to-rose-400/[0.08] blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -left-[10%] top-[40%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-blue-400/[0.06] to-purple-400/[0.06] blur-[100px] md:blur-[120px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-800">The MS Car Standard</span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tighter text-gray-900 mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-rose-500 drop-shadow-sm">Us.</span>
          </h2>
          
          <p 
            className="text-gray-500 font-medium text-base md:text-lg lg:text-xl leading-relaxed"
          >
            Experience the perfection of direct-fleet ownership. No middlemen, uncompromising quality, and transparent pricing wrapped in absolute luxury.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left column: Liquid Glass Image Container ───────────── */}
          <div 
            className="lg:col-span-5 relative group"
          >
            {/* Outer Glass Frame */}
            <div className="relative rounded-[2.5rem] p-4 md:p-6 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_24px_64px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Animated Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative rounded-[1.75rem] overflow-hidden bg-gray-200 aspect-[4/5]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={driverVerifiedImg} 
                  alt="Verified MS Car Professional Driver" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Floating Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 bg-white/85 backdrop-blur-xl p-4 rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.12)] border border-white">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-rose-500 flex items-center justify-center flex-shrink-0 shadow-[0_8px_16px_rgba(229,92,17,0.3)]">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-base text-gray-900 tracking-tight">Vetted Drivers</p>
                      <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mt-0.5">100% Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column: Liquid Glass Grid ──────────────── */}
          <div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          >
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-white/50 hover:bg-white/80 backdrop-blur-xl border border-white/60 hover:border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] rounded-[1.5rem] p-5 md:p-6 transition-all duration-400 ease-out overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/0 via-brand-orange/[0.05] to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <div className="text-gray-400 group-hover:text-brand-orange transition-colors duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px] md:text-base leading-tight mb-1">
                      {reason.text}
                    </h3>
                    <p className="text-gray-500 text-[13px] font-medium leading-snug">
                      {reason.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
