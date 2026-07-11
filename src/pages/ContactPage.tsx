import { BookingForm } from '../components/sections/BookingForm';
import { FAQ } from '../components/sections/FAQ';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 md:pt-32 pb-20 flex flex-col gap-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors font-bold tracking-widest text-[10px] md:text-xs uppercase group"
        >
          <div className="p-2 md:p-2.5 rounded-full bg-white border border-gray-200 shadow-sm group-hover:border-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
          Go Back
        </button>
      </div>
      <div className="text-center max-w-2xl mx-auto px-4">
        <span className="text-brand-orange text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
          Contact <span className="text-gray-300">Us.</span>
        </h1>
        <p className="text-gray-500 font-medium text-sm md:text-lg">
          Reach out for instant quotes, corporate tie-ups, or any questions. We are here 24/7.
        </p>
      </div>
      <BookingForm />
      <FAQ />
    </div>
  );
}
