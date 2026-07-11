import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import msCarLogo from '../../assets/images/new-logo.png';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // When route changes, force transparent if at top
    setIsScrolled(window.scrollY > 20);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isDarkForeground = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Fleet', href: '/#fleet' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3 px-5 md:px-6 border border-gray-100' 
            : 'bg-transparent py-4 px-6 border border-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10 transition-transform hover:scale-105">
          <img 
            src={msCarLogo} 
            alt="MS CAR - Car & Bus Rental" 
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-[13px] font-semibold transition-colors tracking-wide ${isDarkForeground ? 'text-gray-600 hover:text-brand-orange' : 'text-white/90 hover:text-white drop-shadow-md'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA / Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <a 
            href="tel:+919029011224" 
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold overflow-hidden relative transition-all duration-300 ${isDarkForeground ? 'bg-gray-900 text-white hover:bg-brand-orange' : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-gray-900'}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
          <button 
            className={`md:hidden p-2 rounded-full shadow-sm flex items-center justify-center border transition-all ${isDarkForeground ? 'bg-white border-gray-100' : 'bg-black/30 backdrop-blur-md border-white/30'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-4 h-4 ${isDarkForeground ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-4 h-4 ${isDarkForeground ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute top-[70px] left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-6 pointer-events-auto md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-900 py-3 border-b border-gray-100 tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="tel:+919029011224" 
                className="flex items-center justify-center gap-2 px-5 py-4 mt-6 rounded-[20px] font-bold text-sm bg-gray-900 text-white"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
