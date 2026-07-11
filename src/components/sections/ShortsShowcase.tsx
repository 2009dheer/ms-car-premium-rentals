import React from 'react';

const SHORTS_IDS = [
  'vrcDr0OTy40',
  'ZJ3AdC_n73s',
  'RSKEP9uvx-Y',
  'wlbnx4qKL7s'
];

export function ShortsShowcase() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience the Premium Ride</h2>
          <p className="text-gray-400">See our cars in action</p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 sm:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {SHORTS_IDS.map((id) => (
            <div 
              key={id} 
              className="shrink-0 w-[50vw] sm:w-[35vw] md:w-[28vw] lg:w-auto snap-center relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300 bg-gray-900"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title="YouTube Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
