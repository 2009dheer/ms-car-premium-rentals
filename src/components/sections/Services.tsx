import { Plane, Building, Users, Ticket, Map, Mountain } from 'lucide-react';

const services = [
  { icon: <Building />,  title: "Corporate",   desc: "Executive travel & daily transfers." },
  { icon: <Plane />,     title: "Airport",      desc: "Punctual Mumbai Int. drops." },
  { icon: <Ticket />,    title: "Weddings",     desc: "Luxury Baraat transportation." },
  { icon: <Mountain />,  title: "Outstation",   desc: "Lonavala, Pune, Mahabaleshwar." },
  { icon: <Users />,     title: "Employee",     desc: "Safe daily staff pick/drops." },
  { icon: <Map />,       title: "Pilgrimage",   desc: "Ashtavinayak & Shirdi tours." },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── Section Header ─────────────────────────────── */}
        <div className="mb-12 md:mb-20 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
            What We Do
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-orange to-orange-400" />
        </div>

        {/* ── Service Cards ──────────────────────────────── */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                shrink-0 w-[75vw] sm:w-[55vw] md:w-auto snap-start
                bg-white border border-gray-100 rounded-3xl
                p-6 md:p-8
                flex flex-col items-start
                min-h-[160px] md:min-h-[200px]
                group
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/5
                hover:border-orange-100
              "
            >
              {/* Icon */}
              <div className="
                w-12 h-12 rounded-2xl
                bg-gradient-to-br from-orange-50 to-orange-100
                flex items-center justify-center
                mb-5 md:mb-6
                [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-brand-orange
                transition-transform duration-300 group-hover:scale-110
              ">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight mb-1.5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[15px] font-medium text-gray-500 leading-relaxed tracking-tight">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
