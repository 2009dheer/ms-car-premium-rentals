import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { FleetPage } from './pages/FleetPage';
import { CarHirePage } from './pages/CarHirePage';
import { TempoHirePage } from './pages/TempoHirePage';
import { BusHirePage } from './pages/BusHirePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { UrbaniaHirePage } from './pages/UrbaniaHirePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { blogs } from './data/blogs';

const routeMeta: Record<string, { title: string, description: string }> = {
  '/': { title: 'MS CAR | Premium Transport in Mumbai', description: 'Book premium cars, SUVs, Tempo Travellers, and luxury buses for outstation and local transit.' },
  '/fleet': { title: 'Signature Fleet | MS CAR', description: 'Explore our diverse fleet of premium vehicles including sedans, SUVs, luxury coaches, and Tempo Travellers.' },
  '/fleet/cars': { title: 'Car & SUV Hire | MS CAR', description: 'Premium Car and SUV hire services in Mumbai. Perfect for airport transfers, corporate travel, and outstation trips.' },
  '/fleet/tempos': { title: 'Tempo Traveller Hire | MS CAR', description: 'Luxury 12 to 20 seater Tempo Travellers for group travel, family trips, and outstation journeys.' },
  '/fleet/buses': { title: 'Bus & Coach Hire | MS CAR', description: 'Luxury 30 to 49 seater buses and coaches for mass transit, corporate events, and large group movements.' },
  '/services': { title: 'Our Services | MS CAR', description: 'Comprehensive transport solutions including customized tour packages, corporate transport, and event logistics.' },
  '/about': { title: 'About Us | MS CAR', description: 'Learn more about MS CAR, Mumbai\'s premier premium transport service with a legacy of reliability and comfort.' },
  '/contact': { title: 'Contact Us | MS CAR', description: 'Get in touch with MS CAR for bookings, inquiries, and custom transport solutions in Mumbai.' },
  '/blog': { title: 'Blog | MS CAR', description: 'Read the latest updates, tips, and news on premium car and bus rentals in Mumbai.' },
};

// Add blog posts to routeMeta dynamically
blogs.forEach(blog => {
  routeMeta[`/blog/${blog.slug}`] = {
    title: blog.metaTitle,
    description: blog.metaDescription
  };
});

function RouteMetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update SEO Meta tags for sitelinks
    const meta = routeMeta[pathname] || routeMeta['/'];
    document.title = meta.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteMetaManager />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow relative z-0 w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fleet/cars" element={<CarHirePage />} />
            <Route path="/fleet/tempos" element={<TempoHirePage />} />
            <Route path="/fleet/buses" element={<BusHirePage />} />
            <Route path="/fleet/urbania" element={<UrbaniaHirePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
