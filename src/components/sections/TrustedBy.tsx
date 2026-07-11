import React from 'react';

function BrandLogo({ children, className = '' }: { children: React.ReactNode; className?: string; key?: React.Key }) {
  return (
    <div className={`flex items-center justify-center flex-shrink-0 h-6 md:h-7 grayscale opacity-[0.35] hover:grayscale-0 hover:opacity-100 transition-all duration-500 select-none ${className}`}>
      {children}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 272 92" className="h-full w-auto">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="#4285F4"/>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 23 23" className="h-full w-auto">
      <path fill="#f35325" d="M1 1h10v10H1z"/>
      <path fill="#81bc06" d="M12 1h10v10H12z"/>
      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
      <path fill="#ffba08" d="M12 12h10v10H12z"/>
    </svg>
  );
}

function AmazonLogo() {
  return (
    <svg viewBox="0 0 603 182" className="h-full w-auto">
      <path fill="#FF9900" d="M374.00 142.06c-34.53 25.49-84.63 39.07-127.78 39.07c-60.47 0-114.93-22.37-156.15-59.56c-3.24-2.93-0.34-6.91 3.54-4.64c44.47 25.87 99.41 41.44 156.21 41.44c38.3 0 80.42-7.93 119.18-24.39c5.85-2.48 10.75 3.84 5.00 8.08z"/>
      <path fill="#FF9900" d="M388.32 125.89c-4.41-5.65-29.22-2.67-40.35-1.35c-3.39 0.41-3.91-2.54-0.85-4.67c19.75-13.89 52.14-9.88 55.92-5.23c3.78 4.67-0.99 37.02-19.53 52.46c-2.85 2.38-5.57 1.11-4.3-2.04c4.18-10.43 13.53-33.53 9.11-39.17z"/>
      <path fill="#221F1F" d="M349.14 20.34V6.3c0-2.13 1.61-3.55 3.55-3.55h62.87c2.02 0 3.63 1.45 3.63 3.55v12.01c-0.02 2.04-1.73 4.7-4.77 8.94l-32.56 46.49c12.1-0.3 24.89 1.51 35.87 7.7c2.48 1.4 3.15 3.45 3.34 5.47v14.98c0 2.06-2.27 4.46-4.65 3.21c-19.46-10.2-45.32-11.31-66.82 0.12c-2.19 1.18-4.49-1.18-4.49-3.24V87.85c0-2.3 0.03-6.24 2.33-9.74l37.72-54.1h-32.83c-2.02 0-3.63-1.42-3.63-3.55l-0.03-0.12z"/>
      <path fill="#221F1F" d="M124.59 105.22h-19.12c-1.83-0.13-3.28-1.51-3.42-3.26V6.55c0-1.97 1.64-3.54 3.67-3.54h17.82c1.86 0.09 3.35 1.52 3.49 3.3v13.88h0.36c4.67-13.23 13.45-19.39 25.28-19.39c12.02 0 19.54 6.16 24.93 19.39c4.64-13.23 15.19-19.39 26.52-19.39c8.05 0 16.85 3.32 22.22 10.78c6.07 8.28 4.84 20.32 4.84 30.87l-0.02 59.13c0 1.97-1.64 3.57-3.67 3.57h-19.1c-1.9-0.14-3.42-1.67-3.42-3.57V51.82c0-4.15 0.36-14.51-0.54-18.42c-1.43-6.61-5.72-8.47-11.27-8.47c-4.64 0-9.49 3.11-11.48 8.07c-1.99 4.97-1.81 13.27-1.81 18.82v50.14c0 1.97-1.64 3.57-3.67 3.57h-19.1c-1.92-0.14-3.42-1.67-3.42-3.57l-0.02-50.14c0-10.98 1.81-27.16-11.81-27.16c-13.81 0-13.27 15.77-13.27 27.16v50.14c0 1.97-1.64 3.57-3.67 3.57l0.04-0.04z"/>
      <path fill="#221F1F" d="M465.45 0.8c28.38 0 43.75 24.37 43.75 55.34c0 29.94-16.98 53.67-43.75 53.67c-27.86 0-43.01-24.37-43.01-54.71c0-30.53 15.33-54.3 43.01-54.3zm0.18 20.03c-14.09 0-14.99 19.21-14.99 31.18c0 11.99-0.18 37.59 14.81 37.59c14.81 0 15.51-20.65 15.51-33.24c0-8.28-0.36-18.19-2.89-26.06c-2.17-6.84-6.49-9.47-12.44-9.47z"/>
      <path fill="#221F1F" d="M554.14 105.22h-19.04c-1.9-0.14-3.42-1.67-3.42-3.57l-0.04-95.08c0.16-1.79 1.72-3.19 3.63-3.19h17.72c1.67 0.08 3.03 1.2 3.42 2.76v14.55h0.36c5.38-13.06 12.92-19.22 26.91-19.22c8.59 0 16.98 3.11 22.37 11.62c5.02 7.89 5.02 21.14 5.02 30.68v59.31c-0.22 1.72-1.79 3.1-3.63 3.1h-19.2c-1.71-0.14-3.12-1.44-3.34-3.1V50.58c0-10.77 1.25-26.53-12-26.53c-4.66 0-8.95 3.11-11.08 7.86c-2.71 6.02-3.07 12-3.07 18.67v51.07c-0.04 1.97-1.7 3.57-3.71 3.57h0.1z"/>
      <path fill="#221F1F" d="M292.44 59.83c0 7.47 0.18 13.71-3.59 20.35c-3.06 5.42-7.91 8.75-13.3 8.75c-7.37 0-11.69-5.62-11.69-13.91c0-16.37 14.67-19.35 28.58-19.35v4.16zm19.37 46.83c-1.27 1.13-3.1 1.21-4.54 0.45c-6.38-5.3-7.53-7.76-11.02-12.82c-10.53 10.74-17.99 13.95-31.63 13.95c-16.15 0-28.7-9.96-28.7-29.91c0-15.58 8.44-26.16 20.48-31.34c10.43-4.57 24.98-5.38 36.13-6.64v-2.48c0-4.57 0.36-9.96-2.33-13.91c-2.35-3.54-6.84-5.02-10.81-5.02c-7.35 0-13.89 3.77-15.5 11.58c-0.33 1.74-1.6 3.45-3.35 3.54l-18.52-1.99c-1.58-0.35-3.33-1.63-2.88-4.04C243.43 6.56 264.87 0 284.14 0c9.85 0 22.72 2.62 30.49 10.08c9.85 9.16 8.91 21.38 8.91 34.68v31.4c0 9.44 3.92 13.57 7.6 18.67c1.29 1.82 1.58 4.01-0.07 5.37c-4.12 3.44-11.44 9.83-15.47 13.41l0.21 0.04z"/>
    </svg>
  );
}

const TextLogo = ({ text, className = '' }: { text: string; className?: string }) => (
  <span className={`font-black text-sm md:text-base tracking-tight text-gray-900 whitespace-nowrap ${className}`}>
    {text}
  </span>
);

const row1Logos = [
  { id: 'google', el: <GoogleLogo /> },
  { id: 'microsoft', el: <><MicrosoftLogo /><span className="ml-1.5 font-semibold text-xs md:text-sm text-gray-700 tracking-tight">Microsoft</span></> },
  { id: 'meta', el: <TextLogo text="Meta" className="text-base md:text-lg" /> },
  { id: 'netflix', el: <TextLogo text="NETFLIX" className="tracking-[0.15em] text-[#E50914] font-black text-base md:text-lg" /> },
  { id: 'adobe', el: <TextLogo text="Adobe" className="text-base md:text-lg" /> },
  { id: 'salesforce', el: <TextLogo text="salesforce" className="text-[#00A1E0] font-bold italic text-base md:text-lg" /> },
  { id: 'spotify', el: <TextLogo text="Spotify" className="text-[#1DB954] font-bold text-base md:text-lg" /> },
  { id: 'tata', el: <TextLogo text="TATA" className="tracking-[0.2em] text-[#486AAE] font-black text-base md:text-lg" /> },
];

const row2Logos = [
  { id: 'mahindra', el: <TextLogo text="MAHINDRA" className="tracking-[0.15em] text-[#E31837] font-black text-sm md:text-base" /> },
  { id: 'infosys', el: <TextLogo text="Infosys" className="text-[#007CC3] font-bold text-base md:text-lg" /> },
  { id: 'wipro', el: <TextLogo text="Wipro" className="text-[#44107A] font-bold text-base md:text-lg" /> },
  { id: 'hcltech', el: <TextLogo text="HCLTech" className="text-[#0073E6] font-bold text-base md:text-lg" /> },
  { id: 'cred', el: <TextLogo text="CRED" className="tracking-[0.2em] font-black text-base md:text-lg" /> },
  { id: 'razorpay', el: <TextLogo text="Razorpay" className="text-[#072654] font-bold text-base md:text-lg" /> },
  { id: 'zepto', el: <TextLogo text="zepto" className="text-[#8025DF] font-extrabold text-base md:text-lg" /> },
  { id: 'meesho', el: <TextLogo text="meesho" className="text-[#570E4E] font-bold text-base md:text-lg" /> },
  { id: 'pw', el: <TextLogo text="PW" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-black text-base md:text-lg" /> },
];

export function TrustedBy() {
  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden border-b border-gray-100">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
          Trusted by teams at
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="flex items-center gap-10 md:gap-14 animate-marquee mb-5 md:mb-6">
          {[...row1Logos, ...row1Logos].map((logo, idx) => (
            <BrandLogo key={`r1-${idx}`}>{logo.el}</BrandLogo>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex items-center gap-10 md:gap-14 animate-marquee-reverse">
          {[...row2Logos, ...row2Logos].map((logo, idx) => (
            <BrandLogo key={`r2-${idx}`}>{logo.el}</BrandLogo>
          ))}
        </div>
      </div>
    </section>
  );
}
