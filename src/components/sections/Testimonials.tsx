import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Corporate Event Manager",
      text: "We booked 5 Force Urbania for a corporate offsite in Lonavala. The vehicles were pristine, drivers were extremely professional, and the whole experience felt like a VIP service. Best direct fleet service in Mumbai.",
      rating: 5
    },
    {
      name: "Priya Desai",
      role: "Wedding Planner",
      text: "MS CAR handles all my Baraat transportations. Their Luxury Buses are immaculate, AC works perfectly, and there are never any delays. Being directly connected to the owner makes coordination a breeze.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Family Trip",
      text: "Booked a 13-seater Tempo Traveller for an Ashtavinayak tour. The Maharaja seats were incredibly comfortable for the elders. Driver was polite and drove safely. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Tech Executive",
      text: "Booked the new Force Urbania for our team outing. The panoramic windows and premium seats were a massive hit. Seamless booking and exceptional service.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Tour Operator",
      text: "MS Car has been my transport partner for 5 years. Their Luxury Coaches never break down, and my foreign clients always praise the cleanliness and comfort.",
      rating: 5
    },
    {
      name: "Rohan Mehta",
      role: "Business Traveler",
      text: "Using their SUV hire for weekly airport runs. The drivers are incredibly punctual and the cars are always spotless. I never have to worry about missing a flight.",
      rating: 5
    },
    {
      name: "Anjali Kapoor",
      role: "Pilgrimage Tour",
      text: "Took a Tempo Traveller for Shirdi. The push-back seats made the journey so relaxing. No hidden charges, completely transparent billing. Will book again.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#FAFAFA]">
      {/* ── Liquid Animated Orbs (Background) ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-tr from-brand-orange/[0.06] to-amber-300/[0.06] blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[-10%] bottom-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-bl from-blue-400/[0.05] to-emerald-400/[0.05] blur-[100px] md:blur-[120px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-5 sm:px-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-800">5-Star Experiences</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tighter text-gray-900 mb-6"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 drop-shadow-sm">Stories.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 font-medium text-base md:text-lg lg:text-xl leading-relaxed"
          >
            Don't just take our word for it. See why Mumbai's top event managers, families, and corporations trust MS Car with their journeys.
          </motion.p>
        </div>

        {/* ── Auto-Moving Liquid Glass Marquee ──────────────── */}
        <div className="relative flex overflow-hidden w-full group py-4">
          
          {/* Subtle gradient masks for smooth fade at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-6 md:gap-8 w-max px-4 hover:[animation-play-state:paused] animate-marquee"
            style={{ animationDuration: '45s' }}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="relative bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 md:p-8 w-[85vw] sm:w-[400px] md:w-[450px] flex-shrink-0 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group/card overflow-hidden cursor-default"
              >
                {/* Animated inner sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-300">
                      <Quote className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" stroke="none" />
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-brand-orange text-brand-orange drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-medium leading-relaxed mb-8 md:mb-10 text-[15px] md:text-[17px]">"{t.text}"</p>
                </div>
                
                <div className="relative z-10 pt-5 md:pt-6 border-t border-gray-300/50 flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-900 tracking-tight text-base md:text-lg mb-0.5">{t.name}</p>
                    <p className="text-[10px] md:text-xs font-bold tracking-widest text-brand-orange uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
