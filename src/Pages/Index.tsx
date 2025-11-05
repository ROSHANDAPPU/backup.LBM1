import OurWorkV2 from "@/Components/OurWorkV2";
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
import ScrollIndicator from '@/Components/ScrollIndicator';
import StarRating from '@/Components/UI/StarRating';

// Custom hook for alternating direction autoplay

const Index = () => {

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
        className="trusted-by-section py-8 text-center"
      >
        <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
        <h2 className="section-title mb-4">
          Trusted By
        </h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto font-light">
          Endorsed by experts, loved by hosts, and cherished by guests.
        </p>
      </section>

      {/* Logos Slider Section */}
      <section
        className="flx flx-logos"
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

      {/* Star Rating */}
      <div className="text-center mt-4 mb-8">
        <StarRating rating={5} size={24} color="text-yellow-500" />
        <p className="text-sm text-gray-600 mt-2">Based on 100+ reviews</p>
      </div>

      <div>
        <Ethos />
      </div>

      <div>
        <Services />
      </div>

      <OurWorkV2 />

      <div>
        <Testimonials />
      </div>

      {/* Gold separator line */}
      <div className="flex justify-center py-8">
        <div className="w-24 h-px bg-accent"></div>
      </div>

      <SocialProof />



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


    </div>
  );
};

export default Index;
