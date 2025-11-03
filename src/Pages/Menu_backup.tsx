import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/UI/button";
import { Link, useNavigate } from 'react-router-dom';

// import businessCardCream from 'figma:asset/6b400490cc61dbc71522459ab83bafbe29d05aea.png';
const businessCardCream = ''; // Placeholder for figma asset

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: string;
  sides?: string;
  index: number;
}

function MenuItemCard({ name, description, price, sides, index }: MenuItemCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-[#C9C3BA] p-8 hover:shadow-xl transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="h-[2px] w-12 bg-[#C4A46A] mb-4" />
      <h3 className="text-[#36394C] mb-3">{name}</h3>
      {description && (
        <p className="text-[#36394C]/85 mb-3" style={{ fontSize: '16px', lineHeight: '1.5' }}>
          {description}
        </p>
      )}
      {sides && (
        <p className="text-[#36394C]/70 mb-3" style={{ fontSize: '14px', fontStyle: 'italic' }}>
          Served with: {sides}
        </p>
      )}
      <p className="text-[#5B2E34]" style={{ fontWeight: 600, fontSize: '16px' }}>
        {price}
      </p>
    </div>
  );
}

interface PricingTierProps {
  tier: string;
  priceRange: string;
  items: string[];
  index: number;
}

function PricingTier({ tier, priceRange, items, index }: PricingTierProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-[#C9C3BA] p-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="bg-[#5B2E34] text-white px-4 py-2 rounded-full" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.03em' }}>
          {tier}
        </div>
        <p className="text-[#5B2E34]" style={{ fontWeight: 600 }}>{priceRange}</p>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: `${index * 0.15 + i * 0.05}s`,
            }}
          >
            <span className="text-[#C4A46A] mr-3" style={{ fontSize: '18px' }}>•</span>
            <span className="text-[#36394C]" style={{ fontSize: '16px', lineHeight: '1.6' }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatterCard({ name, description, price, imageUrl, index, bgColor }: { name: string; description: string; price: string; imageUrl: string; index: number; bgColor?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isBurgundy = bgColor === '#5B2E34';
  const textColor = isBurgundy ? '#EFE3D7' : '#36394C';
  const priceColor = isBurgundy ? '#C4A46A' : '#5B2E34';

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden border border-[#C9C3BA] shadow-md hover:shadow-xl transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
        transitionDelay: `${index * 0.2}s`,
      }}
    >
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="h-[2px] w-12 bg-[#C4A46A] mb-3" />
        <h3 className="mb-3" style={{ color: textColor }}>{name}</h3>
        <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.5', color: `${textColor}dd` }}>
          {description}
        </p>
        <p style={{ fontWeight: 600, color: priceColor }}>{price}</p>
      </div>
    </div>
  );
}

function DessertCard({ name, price, index }: { name: string; price: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl border border-[#C9C3BA] p-6 hover:shadow-lg transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      <div className="h-[2px] w-8 bg-[#C4A46A] mb-3" />
      <h4 className="text-[#36394C] mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>{name}</h4>
      <p className="text-[#5B2E34]" style={{ fontWeight: 600 }}>{price}</p>
    </div>
  );
}

function BeverageItem({ name, price, index }: { name: string; price: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl border border-[#C9C3BA] p-6 flex justify-between items-center hover:shadow-md transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-center">
        <div className="w-[2px] h-6 bg-[#C4A46A] mr-4" />
        <span className="text-[#36394C]" style={{ fontSize: '16px' }}>{name}</span>
      </div>
      <span className="text-[#5B2E34]" style={{ fontWeight: 600 }}>{price}</span>
    </div>
  );
}

function AppetizersMenuSection() {
  const [isBurgundyBg, setIsBurgundyBg] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBurgundyBg(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden transition-all duration-1000"
      style={{
        backgroundColor: isBurgundyBg ? '#5B2E34' : '#EFE3D7',
      }}
    >
      {/* Background image with low opacity */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzU5OTIwMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isBurgundyBg ? 0.08 : 0,
        }}
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <p 
            className="mb-2 transition-colors duration-1000" 
            style={{ 
              fontFamily: "'Libre Baskerville', serif", 
              fontStyle: 'italic', 
              fontSize: '28px',
              color: '#C4A46A'
            }}
          >
            Menu
          </p>
          <h2 
            className="mb-4 transition-colors duration-1000"
            style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
          >
            APPETIZERS
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {/* Column 1 */}
          <div>
            <h4 
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $1.49 PER ITEM (50 MINIMUM)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Fresh Garlic Breadsticks with Marinara</li>
              <li>Salmon Pinwheel</li>
              <li>Ham & Cheese Pinwheel</li>
              <li>Deviled Eggs</li>
              <li>Mexican Street Corn Phyllo Cup</li>
              <li>Bruschetta with Toast Points</li>
            </ul>
            
            <h4 
              className="mb-4 mt-8 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $2.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Petite Quiche</li>
              <li>Pinwheels (turkey, ham, vegetarian)</li>
              <li>Meatballs (Swedish, BBQ, Marinara, Teriyaki)</li>
              <li>Coconut Shrimp</li>
              <li>Chicken Strips or Wings</li>
              <li>Miniature Strudel Americana</li>
              <li>Miniature Spinach Pies</li>
              <li>Arancini</li>
              <li>Chicken Satay</li>
              <li>Miniature Spring Rolls</li>
              <li>Mushroom Cups</li>
              <li>Breaded Ravioli</li>
              <li>Eggplant Roulade</li>
              <li>Wild Mushroom Crustini</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $3.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Antipasto Kabobs</li>
              <li>Caprese Skewers w/ Balsamic Glaze</li>
              <li>Chicken Potstickers</li>
              <li>Pulled Pork Sliders</li>
              <li>Brisket Brie Cheese Puffs</li>
              <li>Crab Stuffed Mushrooms</li>
            </ul>

            <h4 
              className="mb-4 mt-8 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $4.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Asparagus Wrapped in Prosciutto</li>
              <li>Beef Wellington</li>
              <li>Crab Cakes</li>
              <li>Shrimp Cocktail</li>
            </ul>

            <h4 
              className="mb-4 mt-8 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              $5.99 PER ITEM (50 MINIMUM)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Scallops Wrapped in Bacon</li>
              <li>Soy Ginger Steak Kabobs</li>
              <li>Bacon Wrapped Shrimp</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 
              className="mb-4 transition-colors duration-1000"
              style={{ color: isBurgundyBg ? '#EFE3D7' : '#36394C' }}
            >
              PRICE AS SHOWN (FEEDS 25 PEOPLE)
            </h4>
            <ul 
              className="space-y-2 transition-colors duration-1000" 
              style={{ 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: isBurgundyBg ? 'rgba(239, 227, 215, 0.9)' : 'rgba(54, 57, 76, 0.85)'
              }}
            >
              <li>Fruit Tray - $75 (add Fruit Dip ½ Quart $20)</li>
              <li>Fresh Fruit Kabobs - $75</li>
              <li>Cheese Tray - $90 (add Salami $20)</li>
              <li>Vegetable Tray - $70 (add Hummus ½ Quart $20)</li>
              <li>Grilled & Chilled Vegetable Platter - $80</li>
              <li>Charcuterie Platter - $200</li>
              <li>Shrimp Ring - $125</li>
              <li>Boneless Wing Platter - $75</li>
              <li>Spinach & Artichoke Dip w/ Tortilla Chips - $75</li>
              <li>App Store (Bruschetta, hummus, tapenade with toast points) - $75</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [dessertsVisible, setDessertsVisible] = useState(false);
  const [plattersBgTransitioned, setPlattersBgTransitioned] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const dessertsRef = useRef<HTMLDivElement>(null);
  const plattersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const dessertsObserver = new IntersectionObserver(
      ([entry]) => {
        setDessertsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const plattersObserver = new IntersectionObserver(
      ([entry]) => {
        setPlattersBgTransitioned(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    if (dessertsRef.current) {
      dessertsObserver.observe(dessertsRef.current);
    }

    if (plattersRef.current) {
      plattersObserver.observe(plattersRef.current);
    }

    return () => {
      introObserver.disconnect();
      dessertsObserver.disconnect();
      plattersObserver.disconnect();
    };
  }, []);

  const appetizers = [
    {
      tier: 'Classic Selection',
      priceRange: '$2-3 per piece',
      items: [
        'Empanadas de Carne - Hand-folded pastries with spiced beef and chimichurri',
        'Queso Fundido con Chorizo - Melted Oaxaca cheese with house chorizo',
        'Taquitos de Cochinita Pibil - Yucatán-style pork with pickled onions',
        'Guacamole Tradicional - Fresh avocado with house-made chips',
        'Bruschetta con Jitomate - Heirloom tomatoes, basil, balsamic on toast',
      ],
    },
    {
      tier: 'Premium Selection',
      priceRange: '$4-5 per piece',
      items: [
        'Camarones al Ajillo - Garlic shrimp with white wine butter',
        'Carne Asada Skewers - Marinated beef with chimichurri',
        'Chiles Rellenos Bites - Poblano with queso fresco',
        'Ceviche Cups - Fresh fish, lime, cilantro, avocado',
        'Tostadas de Atún - Seared tuna with chipotle aioli',
      ],
    },
    {
      tier: 'Signature Selection',
      priceRange: '$6-8 per piece',
      items: [
        'Aguachile de Camarón - Spicy lime-cured shrimp',
        'Pulpo a la Parrilla - Grilled octopus with paprika',
        'Vieiras con Tocino - Scallops wrapped in bacon',
        'Mini Chiles en Nogada - Poblano with walnut cream',
      ],
    },
  ];

  const mainCourses = [
    {
      name: 'Pollo en Mole Poblano',
      description: 'Slow-braised chicken in rich chocolate-chile sauce',
      sides: 'Mexican rice, refried beans',
      price: '$24 per person',
    },
    {
      name: 'Carne Asada',
      description: 'Marinated grilled beef with chimichurri',
      sides: 'Grilled vegetables, papas bravas',
      price: '$28 per person',
    },
    {
      name: 'Pescado a la Veracruzana',
      description: 'Pan-seared sea bass, tomatoes, olives, capers',
      sides: 'Arroz con azafrán, grilled asparagus',
      price: '$32 per person',
    },
    {
      name: 'Vegetarian Chiles Rellenos',
      description: 'Roasted poblanos stuffed with quinoa, cheese, walnut cream',
      sides: 'Black beans, ensalada fresca',
      price: '$22 per person',
    },
  ];

  const desserts = [
    { name: 'Flan de Cajeta', price: '$4' },
    { name: 'Tres Leches Cake', price: '$5' },
    { name: 'Churros with Chocolate', price: '$3.50' },
    { name: 'Arroz con Leche', price: '$3' },
    { name: 'Conchas Assortment', price: '$2.50' },
    { name: 'Mini Empanadas de Manzana', price: '$3' },
    { name: 'Pastel de Elote', price: '$4.50' },
    { name: 'Full Tres Leches Cake', price: '$45' },
  ];

  const beverages = [
    { name: 'Agua Fresca (Horchata, Jamaica, Tamarindo)', price: '$2.50' },
    { name: 'Café de Olla', price: '$3' },
    { name: 'Mexican Hot Chocolate', price: '$3.50' },
    { name: 'Fresh Limeade', price: '$2' },
    { name: 'Bottled Sodas (Jarritos, Topo Chico)', price: '$2.50' },
    { name: 'Coffee Service (includes cups, cream, sugar)', price: '$2.50 per cup' },
  ];

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleGalleryClick = () => {
    navigate('/');
    setTimeout(() => {
      const gallery = document.getElementById('gallery');
      if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#EFE3D7]">
      <Header />

      <Hero
        title="Seasonal Menus, Thoughtfully Composed"
        subtitle="Refined dishes and service tailored to your guest"
        cta1={
          <Button asChild size="lg" className="uppercase">
            <Link to="/packages">View Packages</Link>
          </Button>
        }
        cta2={
          <Button asChild size="lg" variant="outline" className="uppercase">
            <Link to="/menu.pdf" target="_blank">Download Menu PDF</Link>
          </Button>
        }
      />
      <div className="flex flex-col items-center animate-bounce mt-3">
        <span className="text-sm tracking-widest text-foreground">SCROLL</span>
        <div className="w-px h-16 bg-foreground mt-2"></div>
      </div>

      {/* Intro Section */}
      <div ref={introRef} className="bg-white py-20 px-10">
        <p
          className="text-[#36394C] text-center max-w-4xl mx-auto transition-all duration-800 ease-out"
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            opacity: introVisible ? 1 : 0,
            transform: introVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Our appetizers, desserts, and beverage selections are a perfect addition to your dinner selection. We offer full stations as well as hot and cold options, tailored to your vision and budget.
        </p>
      </div>

      {/* Enhancements Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1718939043990-83078968ae7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3NTk5OTY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant plated food"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#C4A46A] mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '24px' }}>
                Special Touches
              </p>
              <h2 className="text-[#36394C] mb-4">ENHANCEMENTS</h2>
              <div className="w-[60px] h-[1px] bg-[#C4A46A] mb-6" />
              <p className="text-[#36394C]/80 mb-8">
                Our appetizers, desserts and beverage selections are a great addition to your dinner selection and include full stations as well as hot and cold options. <span style={{ fontStyle: 'italic' }}>Please call for custom hors d'oeuvre packages.</span>
              </p>
              <button className="bg-[#C4A46A] text-white px-8 py-3 rounded-[14px] hover:bg-[#B39560] transition-all duration-300 shadow-md hover:shadow-lg">
                Print Enhancements Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Appetizers Menu Section */}
      <AppetizersMenuSection />

      {/* Strolling Appetizers Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Strolling appetizers"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-[#C4A46A] mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '24px' }}>
                Strolling
              </p>
              <h2 className="text-[#36394C] mb-4">APPETIZERS</h2>
              <div className="w-[60px] h-[1px] bg-[#C4A46A] mb-6" />
              <p className="text-[#36394C]/80 mb-4">
                A complete selection of strolling appetizers that are the perfect compliment for your event.
              </p>
              <p className="text-[#36394C]/80 mb-8" style={{ fontStyle: 'italic' }}>
                Please call for custom hors d'oeuvre packages.
              </p>
              <button className="bg-[#C4A46A] text-white px-8 py-3 rounded-[14px] hover:bg-[#B39560] transition-all duration-300 shadow-md hover:shadow-lg">
                Print Strolling Apps Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desserts Menu Section */}
      <div 
        ref={dessertsRef}
        className="py-20 px-6 transition-all duration-1000 ease-out"
        style={{
          backgroundColor: dessertsVisible ? '#EFE3D7' : '#FFFFFF',
        }}
      >
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A46A] mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '24px' }}>
              Menu
            </p>
            <h2 className="text-[#36394C] mb-4">DESSERTS</h2>
            <div className="w-[60px] h-[1px] bg-[#C4A46A] mx-auto mb-8" />
            <p className="text-[#36394C]/80" style={{ fontSize: '14px' }}>
              25 Minimum order on all desserts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>COOKIES</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$2.00</span>
              </div>
              
              <div className="pb-3 border-b border-[#C9C3BA]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#36394C]" style={{ fontSize: '16px' }}>MINI PASTRIES</span>
                  <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$3.00</span>
                </div>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>
                  Cannoli, Cream Puffs, Eclairs.
                </p>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>SPECIALTY CUPCAKE</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$4.00</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>PIE</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$12.00</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>1/2 SHEET CAKE</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$65.00</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>BROWNIES</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$2.50</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>CUPCAKE</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$3.00</span>
              </div>
              
              <div className="pb-3 border-b border-[#C9C3BA]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#36394C]" style={{ fontSize: '16px' }}>CHEESECAKE SQUARES</span>
                  <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$5.00</span>
                </div>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>
                  Cherry, Strawberry, Chocolate Drizzle.
                </p>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>FULL CHEESECAKE W/ FRUIT</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$32.00</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#C9C3BA]">
                <span className="text-[#36394C]" style={{ fontSize: '16px' }}>FULL SHEET CAKE</span>
                <span className="text-[#36394C]" style={{ fontSize: '16px', fontWeight: 600 }}>$95.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appetizers & Bites Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Appetizers & Bites</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appetizers.map((tier, index) => (
              <PricingTier key={tier.tier} {...tier} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Platters Section */}
      <div 
        ref={plattersRef}
        className="py-20 px-6 transition-colors duration-1000 ease-out"
        style={{
          backgroundColor: plattersBgTransitioned ? '#5B2E34' : '#FFFFFF'
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-4 transition-colors duration-1000 ease-out" style={{ color: plattersBgTransitioned ? '#EFE3D7' : '#36394C' }}>Platters & Stations</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PlatterCard
              name="Charcuterie Latina"
              description="Cured meats, artisan cheeses, olives, fig jam, crackers"
              price="$180 (serves 25)"
              imageUrl="https://images.unsplash.com/photo-1542006202-019927e93874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              index={0}
              bgColor={plattersBgTransitioned ? '#5B2E34' : '#FFFFFF'}
            />
            <PlatterCard
              name="Taco Bar Station"
              description="Choice of 3 proteins, fresh toppings, salsas, tortillas"
              price="$18 per person"
              imageUrl="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              index={1}
              bgColor={plattersBgTransitioned ? '#5B2E34' : '#FFFFFF'}
            />
            <PlatterCard
              name="Ceviche Station"
              description="Build-your-own with fresh fish, tostadas, garnishes"
              price="$22 per person"
              imageUrl="https://images.unsplash.com/photo-1628777570991-1c3dc6e5c2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              index={2}
              bgColor={plattersBgTransitioned ? '#5B2E34' : '#FFFFFF'}
            />
          </div>
        </div>
      </div>

      {/* Main Courses Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Main Courses</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainCourses.map((course, index) => (
              <MenuItemCard key={course.name} {...course} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Desserts Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Desserts</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {desserts.map((dessert, index) => (
              <DessertCard key={dessert.name} {...dessert} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Beverages Section */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#36394C] mb-4">Beverages</h2>
            <div className="w-[60px] h-[2px] bg-[#C4A46A] mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {beverages.map((beverage, index) => (
              <BeverageItem key={beverage.name} {...beverage} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Note Section */}
      <div className="py-20 px-6 bg-[#C9C3BA]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#36394C] mb-6">Custom Packages Available</h2>
          <p className="text-[#36394C]/85 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Every menu is tailored to your event, guest count, and dietary needs. Minimum orders apply. Contact us for custom hors d'oeuvre packages and seasonal specialties.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[14px] shadow-lg hover:bg-[#4F272C] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Discuss Your Event
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#36394C] mb-6">Let's Create Your Perfect Menu</h2>
              <p className="text-[#36394C]/70 mb-8" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                From intimate gatherings to grand celebrations, our culinary team crafts exquisite experiences using the finest ingredients.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[14px] shadow-lg hover:bg-[#4F272C] hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Request Quote
                </button>
                <button
                  onClick={handleGalleryClick}
                  className="bg-white text-[#5B2E34] px-8 py-4 rounded-[14px] border-2 border-[#5B2E34] hover:bg-[#5B2E34] hover:text-white transition-all duration-300"
                >
                  View Full Gallery
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1560145725-8cbf9768b73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Table setting"
                className="rounded-lg w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Food plating"
                className="rounded-lg w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section with Business Card */}
      <div className="py-20 px-6 bg-[#EFE3D7]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#36394C] mb-4">Questions About Our Menu?</h2>
            <p className="text-[#36394C]/70">
              Our team is ready to discuss custom options, dietary accommodations, and event planning details.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-[#C9C3BA] shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              {/* Business Card Image */}
              <div className="flex justify-center">
                <img 
                  src={businessCardCream} 
                  alt="La Bella Mesa Business Card" 
                  className="w-full max-w-sm rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#36394C] mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <a 
                      href="tel:+12147169201" 
                      className="flex items-center gap-3 text-[#5B2E34] hover:text-[#4F272C] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#5B2E34]/10 flex items-center justify-center group-hover:bg-[#5B2E34] transition-colors">
                        <Phone size={18} className="group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Call Us</p>
                        <p style={{ fontWeight: 600 }}>(214) 716-9201</p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:contact@labellamesa­events.com" 
                      className="flex items-center gap-3 text-[#5B2E34] hover:text-[#4F272C] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#5B2E34]/10 flex items-center justify-center group-hover:bg-[#5B2E34] transition-colors">
                        <Mail size={18} className="group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Email Us</p>
                        <p style={{ fontWeight: 600, fontSize: '14px' }}>contact@labellamesa­events.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://instagram.com/labellamesa_events" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#5B2E34] hover:text-[#4F272C] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#5B2E34]/10 flex items-center justify-center group-hover:bg-[#5B2E34] transition-colors">
                        <Instagram size={18} className="group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Follow Us</p>
                        <p style={{ fontWeight: 600 }}>@labellamesa_events</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-[#C9C3BA]">
              <p className="text-[#36394C]/60" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                Available Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Menu;