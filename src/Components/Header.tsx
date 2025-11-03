import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-component') as HTMLElement;
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > heroHeight);
    };

    // Reset scroll position and navbar state when route changes
    window.scrollTo(0, 0);
    setIsScrolled(false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-background shadow-soft'
          : 'bg-transparent'
      }`}
      style={{
        position: isScrolled ? 'fixed' : 'absolute'
      }}
    >
      <nav className="container mx-auto px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-32' : 'h-40'
        }`}>
          {/* Left navigation */}
          <div className="flex items-center space-x-8 nav-left">
            <a href="#services" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              SERVICES
            </a>
            <Link to="/menu" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              MENU
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              ABOUT
            </Link>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 logo-center">
            <img
              src={isScrolled ? "/src/Design/01_Logo/PNG/SQUARE_TRANSPARENT_INK_NAVY.png" : "/src/Design/01_Logo/PNG/WIDE_ASPECTRATIO_NO_BACKGROUND_INK_NAVY.png"}
              alt="La Bella Mesa"
              className={`transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'w-[58px] h-auto'
                  : 'h-16 w-auto min-w-[120px]'
              }`}
              style={{
                objectFit: 'contain',
                maxHeight: isScrolled ? '58px' : '64px'
              }}
            />
          </div>

          {/* Right navigation */}
          <div className="flex items-center space-x-8 nav-right">
            <Link to="/gallery" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              GALLERY
            </Link>
            <a href="#contact" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              CONTACT
            </a>
            <a href="#book" className={`text-sm font-medium transition-colors nav-link ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              BOOK EVENT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;