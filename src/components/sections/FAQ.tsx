import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "What vehicles do you rent?",
      a: "We offer a variety of cars, buses, and tempo travelers to suit your needs."
    },
    {
      q: "Do you offer one-way rentals?",
      a: "This depends on the rental location and vehicle type. Please inquire at the time of booking."
    },
    {
      q: "How far in advance should I book?",
      a: "For the best selection, especially during peak seasons, booking at least a week in advance is recommended."
    },
    {
      q: "Are you a broker or a direct fleet owner?",
      a: "We are a direct fleet owner based in Mumbai. We own and maintain our fleet, allowing us to offer you the best pricing without middlemen."
    },
    {
      q: "Can I inspect the vehicle before booking?",
      a: "Absolutely. Since we are the owners, you are welcome to visit our garage in Malad West, Mumbai, to inspect the exact vehicle you wish to hire."
    }
  ];

  return (
    <section className="py-12 md:py-24 relative z-10 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-gray-900 tracking-tighter">
            Common <span className="text-gray-400">Queries.</span>
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: { q: string; a: string };
  key?: React.Key;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 sm:py-6 md:py-8 flex items-center justify-between focus:outline-none"
      >
        <span className={`font-semibold text-sm sm:text-base md:text-xl tracking-tight transition-colors pr-6 md:pr-8 ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'}`}>
          {faq.q}
        </span>
        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-colors">
          {isOpen ? <Minus className="w-3 h-3 md:w-4 md:h-4 text-gray-900" /> : <Plus className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-8 text-gray-600 font-medium leading-relaxed text-sm md:text-base max-w-3xl">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
