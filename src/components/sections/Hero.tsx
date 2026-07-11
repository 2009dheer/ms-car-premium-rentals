import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ArrowRight, Shield, Clock, Headphones, Car, Phone } from 'lucide-react';

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const motionValue = useMotionValue(0);

  useEffect(() => {
    // A nice, slow 3-second easeOut animation
    const controls = animate(motionValue, value, {
      duration: 3,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [motionValue, value]);

  const rounded = useTransform(motionValue, (latest) => Math.round(latest) + suffix);

  return <motion.span>{rounded}</motion.span>;
}

const trustStats = [
  { value: <AnimatedNumber value={10} suffix="+" />, label: 'Years', icon: <Shield className="w-3.5 h-3.5" /> },
  { value: <AnimatedNumber value={5} suffix="K+" />, label: 'Trips', icon: <Car className="w-3.5 h-3.5" /> },
  { value: <AnimatedNumber value={24} suffix="/7" />, label: 'Support', icon: <Headphones className="w-3.5 h-3.5" /> },
  { value: <AnimatedNumber value={100} suffix="%" />, label: 'On-Time', icon: <Clock className="w-3.5 h-3.5" /> },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video autoplay prevented:", e));
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col overflow-hidden w-full bg-white"
    >
      {/* ── Cinematic Video ── */}
      <div className="w-full h-[30vh] md:h-[45vh] relative overflow-hidden bg-black shrink-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute w-full h-full object-cover opacity-90"
          src="/youtube-hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* ── Ambient Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[35%] right-[-8%] w-[420px] h-[420px] bg-brand-orange/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-8%] w-[350px] h-[350px] bg-brand-orange/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* ── Background Marquee Text ── */}
      <div className="absolute inset-0 top-[30vh] md:top-[45vh] overflow-hidden pointer-events-none z-0 flex flex-col justify-center opacity-[0.03] sm:opacity-[0.04]">
        <div className="flex animate-marquee whitespace-nowrap mb-4 md:mb-8">
          <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black tracking-tighter uppercase px-4 leading-none">
            PREMIUM FLEET • LUXURY TRAVEL • MS CAR • 
          </span>
          <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black tracking-tighter uppercase px-4 leading-none">
            PREMIUM FLEET • LUXURY TRAVEL • MS CAR • 
          </span>
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black tracking-tighter uppercase px-4 leading-none text-transparent stroke-text" style={{ WebkitTextStroke: '2px #000' }}>
            RENT • RIDE • REPEAT • BEST PRICES • 
          </span>
          <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black tracking-tighter uppercase px-4 leading-none text-transparent stroke-text" style={{ WebkitTextStroke: '2px #000' }}>
            RENT • RIDE • REPEAT • BEST PRICES • 
          </span>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="flex-grow flex flex-col items-center justify-center px-5 sm:px-8 lg:px-12 -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center text-center bg-white/85 backdrop-blur-[24px] rounded-[2rem] p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden"
        >
          {/* Subtle animated sheen inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-transparent opacity-50 animate-pulse pointer-events-none" />

          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-5 md:mb-6"
          >
            <div className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(229,92,17,0.05), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(229,92,17,0.6)]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-800 relative z-10">
                Mumbai's Elite Fleet
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="text-[2rem] sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] whitespace-nowrap"
          >
            <span className="text-gray-900 drop-shadow-sm">Rent · Ride · </span>
            <span className="hero-gradient-text drop-shadow-sm">Repeat.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-3 md:mt-4 text-gray-600 text-[13px] md:text-base max-w-lg leading-relaxed font-semibold px-2"
          >
            Cars, Tempo Travellers &amp; Luxury Buses on rent in Mumbai.
            Direct fleet owner — zero middlemen, unbeatable prices.
          </motion.p>

          {/* ── Trust Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-xl relative z-10"
          >
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.1, ease }}
                className="group flex flex-col items-center justify-center gap-1.5 py-4 md:py-5 rounded-[1.25rem] border border-gray-200/80 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(229,92,17,0.12)] hover:border-brand-orange/40 transition-all duration-300"
              >
                <motion.div 
                  className="text-gray-400 group-hover:text-brand-orange transition-colors duration-300 mb-0.5"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {stat.icon}
                </motion.div>
                <span className="text-lg md:text-xl font-black tracking-tight text-gray-900 group-hover:hero-gradient-text transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-brand-orange/80 transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-6 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-lg relative z-10"
          >
            <a
              href="tel:+919029011224"
              className="group relative flex flex-row items-center justify-center gap-2 py-3 px-4 sm:py-3.5 sm:px-6 rounded-xl sm:rounded-2xl font-black text-[12px] sm:text-sm flex-1 min-w-0 overflow-hidden transition-all duration-300 active:scale-[0.97] bg-gray-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(229,92,17,0.3)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-brand-orange translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 flex flex-row items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                <span>Call Us</span>
              </span>
            </a>

            <a
              href="https://wa.me/919029011224"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-row items-center justify-center gap-2 py-3 px-4 sm:py-3.5 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-[12px] sm:text-sm flex-1 min-w-0 transition-all duration-300 active:scale-[0.97] bg-white text-gray-800 border-2 border-gray-100 hover:border-[#25d366] hover:text-[#25d366] hover:bg-[#25d366]/5 hover:shadow-[0_12px_32px_rgba(37,211,102,0.2)] hover:-translate-y-1"
            >
              <motion.svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 sm:w-4 sm:h-4 fill-[#25d366] shrink-0" 
                aria-hidden="true"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </motion.svg>
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
