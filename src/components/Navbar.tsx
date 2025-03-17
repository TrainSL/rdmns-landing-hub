
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "glass-effect shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold tracking-tight text-rdmns-dark">
              RDMNS.LK
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-rdmns-dark/90 hover:text-rdmns-blue transition-colors">
              Features
            </a>
            <a href="#showcase" className="font-medium text-rdmns-dark/90 hover:text-rdmns-blue transition-colors">
              App Showcase
            </a>
            <a href="#download" className="font-medium text-rdmns-dark/90 hover:text-rdmns-blue transition-colors">
              Download
            </a>
          </nav>
          
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              className="p-2 text-rdmns-dark rounded-md focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-[var(--navbar-height)] glass-effect shadow-md transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
      style={{ '--navbar-height': scrolled ? '60px' : '76px' } as React.CSSProperties}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <a 
            href="#features" 
            className="block py-2 font-medium text-rdmns-dark/90 hover:text-rdmns-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#showcase" 
            className="block py-2 font-medium text-rdmns-dark/90 hover:text-rdmns-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            App Showcase
          </a>
          <a 
            href="#download" 
            className="block py-2 font-medium text-rdmns-dark/90 hover:text-rdmns-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
