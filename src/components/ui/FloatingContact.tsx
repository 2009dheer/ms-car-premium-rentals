import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-20 right-3 md:bottom-12 md:right-6 z-[100] flex flex-col gap-2.5 md:gap-3 pointer-events-none select-none">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        href="tel:+919029011224"
        className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-900 border border-gray-800 text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-brand-orange hover:border-brand-orange hover:shadow-[0_8px_25px_rgba(255,77,0,0.35)] transition-all duration-300 pointer-events-auto active:scale-90"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 duration-300" />
        
        {/* Minimal Tooltip */}
        <span className="absolute right-12 md:right-14 px-2.5 py-1 md:px-3 md:py-1 bg-gray-900 text-white text-[10px] md:text-xs font-medium rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg border border-gray-800 whitespace-nowrap">
          Call Now
        </span>
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        href="https://wa.me/919029011224"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.2)] md:shadow-[0_8px_30px_rgba(37,211,102,0.25)] hover:bg-[#20ba59] hover:shadow-[0_8px_25px_rgba(32,186,89,0.35)] transition-all duration-300 pointer-events-auto active:scale-90"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current transition-transform group-hover:scale-110 duration-300" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        
        {/* Minimal Tooltip */}
        <span className="absolute right-12 md:right-14 px-2.5 py-1 md:px-3 md:py-1 bg-gray-900 text-white text-[10px] md:text-xs font-medium rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg border border-gray-800 whitespace-nowrap">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
