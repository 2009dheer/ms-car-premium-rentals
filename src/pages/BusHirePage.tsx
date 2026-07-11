import { Users, Info, Settings, ShieldCheck, ArrowLeft } from 'lucide-react';
import { BookingForm } from '../components/sections/BookingForm';
import { useNavigate } from 'react-router-dom';
import bus1 from '../assets/images/bus-1.jpg';
import bus2 from '../assets/images/bus-2.jpg';
import bus3 from '../assets/images/bus-3.jpg';
import bus4 from '../assets/images/bus-4.jpg';
import miniBus1 from '../assets/images/mini-bus-1.jpg';
import miniBus2 from '../assets/images/mini-bus-2.jpg';
import miniBus3 from '../assets/images/mini-bus-3.jpg';
import miniBus4 from '../assets/images/mini-bus-4.jpg';
import miniBus30_1 from '../assets/images/mini-bus-30-1.jpg';
import miniBus30_2 from '../assets/images/mini-bus-30-2.jpg';
import miniBus30_3 from '../assets/images/mini-bus-30-3.jpg';
import miniBus30_4 from '../assets/images/mini-bus-30-4.jpg';
import miniBus27_1 from '../assets/images/bus-27-seater-1.jpg';
import miniBus27_2 from '../assets/images/bus-27-seater-2.jpg';
import miniBus27_3 from '../assets/images/bus-27-seater-3.jpg';

const vehicles = [
  { 
    name: '27-Seater Mini Bus',
    capacity: '27 Seater', 
    price: '₹35', 
    unit: 'per km',
    images: [miniBus27_1, miniBus27_2, miniBus27_3],
    description: 'A compact and efficient air-conditioned coach perfect for small to mid-sized groups, family trips, or local sightseeing. Offers comfortable push-back seating and ample legroom.',
    features: ['Push-back Seats', 'Air Conditioning', 'Music System']
  },
  { 
    name: '30-Seater Mini Bus',
    capacity: '30 Seater', 
    price: '₹40', 
    unit: 'per km',
    images: [miniBus30_1, miniBus30_2, miniBus30_3, miniBus30_4],
    description: 'A compact air-conditioned coach perfect for mid-sized groups, school excursions, or short corporate retreats. Comfortable seating with essential amenities.',
    features: ['Comfort Seating', 'Air Conditioning', 'Music System']
  },
  { 
    name: '35-Seater Mini Bus',
    capacity: '35 Seater', 
    price: '₹45', 
    unit: 'per km',
    images: [miniBus1, miniBus2, miniBus3, miniBus4],
    description: 'An upgraded mini bus offering extended legroom and better parcel storage for weekend getaways and medium corporate events.',
    features: ['Extended Legroom', 'Reclining Seats', 'Reading Lights']
  },
  { 
    name: '49-Seater Luxury Bus',
    capacity: '49 Seater', 
    price: '₹55', 
    unit: 'per km',
    images: [bus2, bus3, bus4, bus1],
    description: 'The ultimate mass transit solution. Fully air-conditioned luxury coach with air suspension, huge luggage holds, and premium push-back seating for long journeys.',
    features: ['Air Suspension', 'Large Holds', 'Push-back Seats']
  }
];

export function BusHirePage() {
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
            Bus & <span className="text-gray-300">Coach Hire.</span>
          </h1>
          <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10">
            Air-conditioned luxury coaches built for large group movements. Features comfortable seating, huge luggage holds, and incredibly smooth ride quality.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 mb-24">
          {vehicles.map((v, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow liquid-glass">
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
          title="Reserve a <br/><span class='text-gray-400'>Bus / Coach.</span>"
          vehicleOptions={[
            { value: "Mini Bus 27S", label: "Mini Bus (27S)" },
            { value: "Mini Bus 30S", label: "Mini Bus (30S)" },
            { value: "Mini Bus 35S", label: "Mini Bus (35S)" },
            { value: "Luxury Bus 49S", label: "Luxury Premium Bus (49S)" }
          ]} 
        />
      </div>
    </div>
  );
}
