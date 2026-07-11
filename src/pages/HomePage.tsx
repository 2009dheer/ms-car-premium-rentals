import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Fleet } from '../components/sections/Fleet';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { BookingForm } from '../components/sections/BookingForm';
import { TrustedBy } from '../components/sections/TrustedBy';
import { ShortsShowcase } from '../components/sections/ShortsShowcase';


export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#fleet') {
      const element = document.getElementById('fleet');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <Hero />
      <Fleet />
      <ShortsShowcase />
      <TrustedBy />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <BookingForm />
    </div>
  );
}
