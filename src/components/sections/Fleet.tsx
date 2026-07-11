import { useRef } from 'react';
import { Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import carImage from '../../assets/images/regenerated_image_1779992661786.jpg';
import tempoImage from '../../assets/images/tempo-traveler-new.jpg';
import busImage from '../../assets/images/regenerated_image_1779993043666.jpg';
import urbaniaImage from '../../assets/images/urbania-1.jpg';

const fleetData = [
  {
    id: 'tempos',
    name: 'Tempo Traveller Hire',
    path: '/fleet/tempos',
    image: tempoImage,
    capacity: '12 to 20 Seater',
    tagline: 'Versatile & Comfortable',
    description: 'Our most popular choice for family trips and outstation travel. Custom-built luxurious interiors with ample legroom.',
    features: ['Maharaja Seats', 'Ample Legroom', 'Surround Sound']
  },
  {
    id: 'urbania',
    name: 'Force Urbania Hire',
    path: '/fleet/urbania',
    image: urbaniaImage,
    capacity: '17 Seater',
    tagline: 'Unmatched Luxury Van',
    description: 'Elevate your group travel with the most advanced and luxurious van in its class. Unparalleled comfort and modern features.',
    features: ['Panoramic Windows', 'Premium Seats', 'Aerodynamic']
  },
  {
    id: 'buses',
    name: 'Bus & Coach Hire',
    path: '/fleet/buses',
    image: busImage,
    capacity: '30 to 49 Seater',
    tagline: 'Mass Transit, Premium Feel',
    description: 'Air-conditioned luxury coaches built for large group movements. Features comfortable seating, huge luggage holds, and incredibly smooth ride quality.',
    features: ['Air Suspension', 'Large Holds', 'Reclining Seats']
  },
  {
    id: 'cars',
    name: 'Car & SUV Hire',
    path: '/fleet/cars',
    image: carImage,
    capacity: '4 to 7 Seater',
    tagline: 'Perfect for Small Groups',
    description: 'Premium sedans and completely feature-loaded MUVs. Ideal for corporate travel, airport transfers, and small families.',
    features: ['Plush Seating', 'Premium AC', 'Smooth Ride']
  }
];

export function Fleet() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-12 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-14 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter">
            Signature <span className="text-gray-300">Fleet.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-2xl px-2">
            Maintained to absolute perfection. Engineered for comfort. Explore our premium direct-owned vehicles.
          </p>
        </div>

        {/* Mobile Horizontal Scroll to Desktop Stack layout */}
        <div ref={scrollContainerRef} className="flex flex-nowrap overflow-x-auto lg:overflow-visible lg:flex-col gap-6 md:gap-10 w-full pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 scroll-smooth">
          {fleetData.map((vehicle, idx) => (
            <div 
              key={vehicle.id}
              className={`group flex flex-col items-stretch bg-white rounded-3xl md:rounded-[48px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 shrink-0 w-[78vw] sm:w-[70vw] lg:w-full snap-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image handling for mobile and desktop */}
              <div className="w-full lg:w-1/2 h-[160px] sm:h-[260px] lg:h-auto lg:min-h-[380px] overflow-hidden relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s] ease-out"
                />
              </div>
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-10 xl:p-12 relative bg-white">
                <div className="bg-gray-50 border border-gray-100 w-max px-2.5 py-1 md:px-5 md:py-2 rounded-full flex items-center gap-1 md:gap-2 mb-3 md:mb-8 shadow-sm">
                  <Users className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-brand-orange" />
                  <span className="text-[7.5px] md:text-[11px] font-bold text-gray-800 tracking-[0.2em] uppercase">{vehicle.capacity}</span>
                </div>
                
                <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-1 md:mb-3 tracking-tighter">
                  {vehicle.name}
                </h3>
                <p className="text-brand-orange font-bold tracking-widest uppercase text-[8.5px] md:text-xs mb-2 md:mb-8">{vehicle.tagline}</p>
                <p className="text-gray-500 font-medium text-[11px] sm:text-sm md:text-sm lg:text-base mb-4 md:mb-6 leading-relaxed max-w-md">
                  {vehicle.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2.5 mb-5 md:mb-8 max-w-md">
                  {vehicle.features.map((feature, i) => (
                    <span key={i} className="px-2 py-0.5 md:px-4 md:py-2 rounded-full bg-gray-50 border border-gray-100 text-[7.5px] md:text-[11px] font-bold tracking-widest uppercase text-gray-600">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-gray-100">
                  <Link to={vehicle.path} className="inline-flex items-center gap-1.5 md:gap-3 text-gray-700 hover:text-brand-orange transition-colors font-bold tracking-[0.2em] uppercase text-[8.5px] md:text-xs w-max group/btn">
                    <span className="border-b border-transparent group-hover/btn:border-brand-orange pb-0.5 transition-colors">Details & Pricing</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-orange transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-2 mb-8">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-brand-orange hover:border-brand-orange hover:shadow-md transition-all active:scale-95"
            aria-label="Previous vehicle"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-brand-orange hover:border-brand-orange hover:shadow-md transition-all active:scale-95"
            aria-label="Next vehicle"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
