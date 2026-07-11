import { About } from '../components/sections/About';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 md:pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
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
      <About />
    </div>
  );
}
