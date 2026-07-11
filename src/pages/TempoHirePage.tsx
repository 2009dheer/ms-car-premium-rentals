import { Info, Settings, ArrowLeft } from 'lucide-react';
import { BookingForm } from '../components/sections/BookingForm';
import { useNavigate } from 'react-router-dom';

import tempo13_1 from '../assets/images/tempo-traveler-1.jpg';
import tempo13_2 from '../assets/images/tempo-traveler-2.jpg';
import tempo13_3 from '../assets/images/tempo-traveler-3.jpg';
import tempo17_1 from '../assets/images/tempo-traveler-17-1.jpg';
import tempo17_2 from '../assets/images/tempo-traveler-17-2.jpg';
import tempo17_3 from '../assets/images/tempo-traveler-17-3.jpg';
import tempo17_4 from '../assets/images/tempo-traveler-17-4.jpg';
import tempo20_1 from '../assets/images/tempo-traveler-20-1.jpg';
import tempo20_2 from '../assets/images/tempo-traveler-20-2.jpg';
import tempo20_3 from '../assets/images/tempo-traveler-20-3.jpg';
import tempo26_1 from '../assets/images/tempo-traveler-26-1.jpg';
import tempo26_2 from '../assets/images/tempo-traveler-26-2.jpg';
import tempo26_3 from '../assets/images/tempo-traveler-26-3.jpg';

const vehicles = [
  { 
    name: '13-Seater Tempo Traveler',
    capacity: '13 Seater', 
    price: '₹25', 
    unit: 'per km',
    images: [tempo13_1, tempo13_2, tempo13_3],
    description: 'Perfect for small families and friend groups. A highly comfortable, fully air-conditioned Tempo Traveler with premium push-back seating, ambient interior lighting, and great suspension for long road trips.',
    features: ['Premium Interiors', 'Air Conditioning', 'Push-back Seats']
  },
  { 
    name: '17-Seater Tempo Traveler',
    capacity: '17 Seater', 
    price: '₹30', 
    unit: 'per km',
    images: [tempo17_1, tempo17_2, tempo17_3, tempo17_4],
    description: 'An extended Tempo Traveler offering more space and luxury seating for medium-sized groups. Features customized premium interior seating with excellent legroom and dedicated luggage space.',
    features: ['Luxury Seating', 'Ambient Lighting', 'Extra Luggage Space']
  },
  { 
    name: '20-Seater Tempo Traveler',
    capacity: '20 Seater', 
    price: '₹32', 
    unit: 'per km',
    images: [tempo20_1, tempo20_2, tempo20_3],
    description: 'The largest in the Tempo Traveler segment, perfect for corporate outings and large family trips. Features premium leatherette seating, modern interiors, and high-capacity air conditioning.',
    features: ['Leatherette Seats', 'Modern Interiors', 'High-Capacity AC']
  },
  { 
    name: '26-Seater Tempo Traveler',
    capacity: '26 Seater', 
    price: '₹34', 
    unit: 'per km',
    images: [tempo26_1, tempo26_2, tempo26_3],
    description: 'A super-extended configuration providing maximum seating capacity in the Tempo Traveler format. Ideal for school groups, budget corporate travel, and large gatherings. Features comfortable seating and colorful ambient lighting.',
    features: ['Maximum Seating', 'Ambient Lighting', 'Air Conditioning']
  }
];

export function TempoHirePage() {
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
          <span className="text-brand-orange text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Premium Fleet</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
            Tempo <span className="text-gray-300">Traveller Hire.</span>
          </h1>
          <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10">
            Our most popular choice for family trips and outstation travel. Custom-built luxurious interiors with ample legroom and luggage space.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 mb-24">
          {vehicles.map((v, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow liquid-glass">
              {/* Image Carousel */}
              <div className="w-full md:w-1/2 lg:w-5/12 h-[250px] md:h-[300px] rounded-2xl overflow-hidden relative isolate group/slider">
                <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                  {v.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="w-full h-full flex-shrink-0 snap-center relative overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${v.name} - view ${imgIdx + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover/slider:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                </div>
                {v.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-none">
                    {v.images.map((_, dotIdx) => (
                      <div key={dotIdx} className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-sm" />
                    ))}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex gap-2 pointer-events-none z-10">
                  <span className="liquid-glass-light px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm backdrop-blur-md bg-white/20 border border-white/30 truncate">
                    {v.capacity}
                  </span>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight">{v.name}</h3>
                  <div className="text-left sm:text-right">
                    <p className="font-black text-brand-orange text-3xl">{v.price}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{v.unit}</p>
                  </div>
                </div>
                
                <p className="text-gray-500 font-medium text-base leading-relaxed mb-8 max-w-lg">
                  {v.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {v.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] font-bold tracking-widest uppercase text-gray-600">
                      <Settings className="w-3 h-3 text-brand-orange" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 md:p-6 rounded-2xl liquid-glass mb-24 max-w-3xl mx-auto">
          <Info className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
          <p className="text-sm md:text-base font-semibold text-gray-600 leading-relaxed">
              <span className="text-gray-900 font-bold block mb-1">Important Notes</span>
              Tolls & Parking are extra. Daily KM limit is 300. Outstation taxes as applicable. Driver allowance extra for night journeys.
          </p>
        </div>

        <BookingForm 
          title="Reserve a <br/><span class='text-gray-400'>Tempo Traveller.</span>"
          vehicleOptions={[
            { value: "Tempo Traveler 13S", label: "Tempo Traveler (13S)" },
            { value: "Tempo Traveler 17S", label: "Tempo Traveler (17S)" },
            { value: "Tempo Traveler 20S", label: "Tempo Traveler (20S)" },
            { value: "Tempo Traveler 26S", label: "Tempo Traveler (26S)" }
          ]} 
        />
      </div>
    </div>
  );
}
