import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'minibus',
    title: 'Bus Hire',
    path: '/fleet/buses',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200',
    description: 'MiniBus & Coach rental for large groups of 30 to 49 passengers.'
  },
  {
    id: 'tempo',
    title: 'Tempo Traveller Hire',
    path: '/fleet/tempos',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    description: 'Premium Tempo Travellers for outstation trips and family vacations.'
  },
  {
    id: 'sedan',
    title: 'Car Hire',
    path: '/fleet/cars',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
    description: 'Sedans and MUVs for corporate, airport transfers and small trips.'
  }
];

export function FleetPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-28 md:pt-40 pb-20 relative bg-gray-50 flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow">
        
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors font-bold tracking-widest text-[10px] md:text-xs uppercase mb-8 md:mb-12 group"
        >
          <div className="p-2 md:p-2.5 rounded-full bg-white border border-gray-200 shadow-sm group-hover:border-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
          Go Back
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-brand-orange text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Select Category</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-6">
            Our <span className="text-gray-300">Fleet.</span>
          </h1>
          <p className="text-gray-600 font-medium text-lg leading-relaxed">
            Choose a vehicle category to proceed with detailed pricing and bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative block liquid-glass rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[400px]">
              <div className="absolute inset-x-0 top-0 h-2/3 overflow-hidden">
                <img src={cat.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3s] ease-out" alt={cat.title} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gray-50 h-1/2">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-brand-orange transition-colors">{cat.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">{cat.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-orange transition-colors">
                  View Vehicles & Pricing <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
