import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Ethos from "@/Components/Ethos";
import Services from "@/Components/Services";
import Values from "@/Components/Values";
import Transformation from "@/Components/Transformation";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import SocialProof from "@/Components/SocialProof";
import Testimonials from "@/Components/Testimonials";
import { Button } from "@/Components/UI/button";
import Masonry from 'react-masonry-css';
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect, useRef } from "react";
import ScrollIndicator from '@/Components/ScrollIndicator';
import { useFadeInUp, useSlideInLeft, useSlideInRight, useScaleIn, useBounceIn, useStaggerReveal, useRotateIn } from '@/Hooks/useScrollAnimation';
import { useRandomFlowAnimation } from '@/Hooks/useRandomFlowAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom hook for alternating direction autoplay
const useAlternatingAutoplay = (swiperRef, delay = 3000, isEnabled = true) => {
  useEffect(() => {
    if (!swiperRef.current || !isEnabled) return;

    let direction = 'forward';
    let interval;

    const startAlternatingAutoplay = () => {
      interval = setInterval(() => {
        if (swiperRef.current && isEnabled) {
          if (direction === 'forward') {
            swiperRef.current.slideNext();
          } else {
            swiperRef.current.slidePrev();
          }
          direction = direction === 'forward' ? 'reverse' : 'forward';
        }
      }, delay);
    };

    startAlternatingAutoplay();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [swiperRef, delay, isEnabled]);
};

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Scroll animation hooks
  const { elementRef: trustedByRef, isVisible: trustedByVisible } = useFadeInUp();
  const { elementRef: logosRef, isVisible: logosVisible } = useSlideInLeft();
  const { elementRef: ethosRef, isVisible: ethosVisible } = useScaleIn();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useStaggerReveal();
  const { containerRef: randomFlowRef, isVisible: randomFlowVisible } = useRandomFlowAnimation();
  const { elementRef: ourWorkRef, isVisible: ourWorkVisible } = useSlideInRight();
  const { elementRef: socialProofRef, isVisible: socialProofVisible } = useFadeInUp();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useRotateIn();

  // Built-in autoplay now handles timing

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Generate 10 square gallery images (Google Images placeholders)
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop', alt: 'Elegant wedding reception setup', caption: 'Wedding Reception Setup' },
    { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=400&fit=crop', alt: 'Corporate event table setting', caption: 'Corporate Event Table' },
    { src: 'https://images.unsplash.com/photo-1559329007-40df7a6c9b0f?w=400&h=400&fit=crop', alt: 'Business lunch catering service', caption: 'Business Lunch Service' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop', alt: 'Fine dining experience', caption: 'Fine Dining Experience' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop', alt: 'Seasonal menu presentation', caption: 'Seasonal Menu Highlight' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop', alt: 'Romantic dinner setup', caption: 'Intimate Dinner for Two' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop', alt: 'Luxury event decor', caption: 'Special Occasion Decor' },
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Executive catering service', caption: 'Executive Catering' },
    { src: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=400&fit=crop', alt: 'Chef signature dish preparation', caption: 'Chef\'s Signature Dish' },
    { src: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=400&h=400&fit=crop', alt: 'Artistic culinary presentation', caption: 'Culinary Artistry' }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="min-h-screen">
      <Header />

      <Hero 
        title="Effortless Elegance for Your Event"
        subtitle="QUIET, ACCESSIBLE LUXURY FOR EVERY OCCASION."
        cta1={<Button size="lg" className="text-base font-normal tracking-wide">REQUEST A PROPOSAL</Button>}
        cta2={<Button size="lg" variant="outline" className="text-base font-normal tracking-wide">VIEW MENU</Button>}
      />
      <ScrollIndicator />

      {/* Trusted By Section */}
      <section
        ref={trustedByRef}
        className={`trusted-by-section py-8 text-center ${trustedByVisible ? 'animate-fade-in-up animate-visible' : 'animate-fade-in-up'}`}
      >
        <h2 className="section-title mb-4">
          Trusted By
        </h2>
      </section>

      {/* Logos Slider Section */}
      <section
        ref={logosRef}
        className={`flx flx-logos ${logosVisible ? 'animate-slide-in-left animate-visible' : 'animate-slide-in-left'}`}
      >
        <div className="logos-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper" id="swiper-wrapper-68e2710a4619c8a5e" aria-live="off">
            <div className="swiper-slide">
              <span className="logo-text-large">TATLER</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">ROCK MY WEDDING</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">BRIDES</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">SO YOU'RE GETTING MARRIED</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">WHIMSICAL WONDERLAND WEDDINGS</span>
            </div>
            {/* Duplicate for continuous loop */}
            <div className="swiper-slide">
              <span className="logo-text-large">TATLER</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">ROCK MY WEDDING</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">BRIDES</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">SO YOU'RE GETTING MARRIED</span>
            </div>
            <div className="swiper-slide">
              <span className="logo-text-large">WHIMSICAL WONDERLAND WEDDINGS</span>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </section>

      <div
        ref={ethosRef}
        className={`${ethosVisible ? 'animate-scale-in animate-visible' : 'animate-scale-in'}`}
      >
        <Ethos />
      </div>

      <div
        ref={servicesRef}
        className={`${servicesVisible ? 'animate-stagger-reveal animate-visible' : 'animate-stagger-reveal'}`}
      >
        <Services />
      </div>

      {/* Gold separator line */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-px bg-accent"></div>
      </div>

      <SocialProof />

      {/* Signature Experiences Section */}
      <div
        ref={randomFlowRef}
        className="signature-experiences-section py-16 w-full bg-background"
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="section-title">Signature Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Weddings */}
            <div className={`card p-6 rounded-lg shadow-lg bg-card flex flex-col items-center relative gold-flair-container overflow-hidden animate-random-flow ${randomFlowVisible ? 'animate-visible' : ''}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-lg z-10"></div>
              <h3 className="mb-4 text-foreground" style={{ fontFamily: 'Libre Baskerville, serif' }}>Weddings</h3>
              <p className="mb-6 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Crafting unforgettable culinary journeys for your special day.</p>
              <Button
                size="lg"
                className="text-base font-normal tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
              >
                Explore service
              </Button>
            </div>

            {/* Card 2: Corporate */}
            <div className={`card p-6 rounded-lg shadow-lg bg-card flex flex-col items-center relative gold-flair-container overflow-hidden animate-random-flow ${randomFlowVisible ? 'animate-visible' : ''}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-lg z-10"></div>
              <h3 className="mb-4 text-foreground" style={{ fontFamily: 'Libre Baskerville, serif' }}>Corporate</h3>
              <p className="mb-6 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Elevating business events with sophisticated and seamless catering.</p>
              <Button
                size="lg"
                className="text-base font-normal tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
              >
                Explore service
              </Button>
            </div>

            {/* Card 3: Intimate Gatherings */}
            <div className={`card p-6 rounded-lg shadow-lg bg-card flex flex-col items-center relative gold-flair-container overflow-hidden animate-random-flow ${randomFlowVisible ? 'animate-visible' : ''}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-lg z-10"></div>
              <h3 className="mb-4 text-foreground" style={{ fontFamily: 'Libre Baskerville, serif' }}>Intimate Gatherings</h3>
              <p className="mb-6 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Personalized dining experiences for cherished moments with loved ones.</p>
              <Button
                size="lg"
                className="text-base font-normal tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
              >
                Explore service
              </Button>
            </div>

            {/* Card 4: Special Occasions */}
            <div className={`card p-6 rounded-lg shadow-lg bg-card flex flex-col items-center relative gold-flair-container overflow-hidden animate-random-flow ${randomFlowVisible ? 'animate-visible' : ''}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-lg z-10"></div>
              <h3 className="mb-4 text-foreground" style={{ fontFamily: 'Libre Baskerville, serif' }}>Special Occasions</h3>
              <p className="mb-6 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Celebrating life's milestones with exquisite food and impeccable service.</p>
              <Button
                size="lg"
                className="text-base font-normal tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
              >
                Explore service
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work (Event Highlights Gallery) */}
      <section
        ref={ourWorkRef}
        className={`event-highlights ${ourWorkVisible ? 'animate-slide-in-right animate-visible' : 'animate-slide-in-right'}`}
      >
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            speed={12000}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'; // Fallback image
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination container */}
          <div className="swiper-pagination-custom mt-8 flex justify-center"></div>

        </div>
      </section>

      <div
        ref={testimonialsRef}
        className={`${testimonialsVisible ? 'animate-rotate-in animate-visible' : 'animate-rotate-in'}`}
      >
        <Testimonials />
      </div>

      {/* Gold separator line */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-px bg-accent"></div>
      </div>

      {/* CTA Band */}
      <div className="cta-band py-16 w-full bg-background text-foreground group hover:bg-primary transition-colors duration-500">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl p-12 shadow-lg border border-border/50 group-hover:border-primary/20 transition-colors duration-500">
            <div className="text-center">
              <h3 className="mb-8 text-foreground group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Ready to Begin?
              </h3>
              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-white hover:text-primary hover:border-primary border border-transparent uppercase tracking-wide transition-all duration-500"
                >
                  Request a Proposal
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary border-primary hover:bg-primary hover:text-white uppercase tracking-wide transition-all duration-500"
                >
                  Book a Tasting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </div>
  );
};

export default Index;
