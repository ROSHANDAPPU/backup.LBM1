import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import GalleryGrid from "@/Components/GalleryGrid";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/UI/button";
import { Link } from "react-router-dom";
import CTAPanel from "@/Components/CTAPanel";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Moments We’ve Crafted"
        subtitle="A calm, timeless look at the events"
        cta1={
          <Button asChild size="lg">
            <Link to="/contact">Start Your Event Plan</Link>
          </Button>
        }
      />
      <div className="flex flex-col items-center animate-bounce mt-3">
        <span className="text-sm tracking-widest text-foreground">SCROLL</span>
        <div className="w-px h-16 bg-foreground mt-2"></div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16" style={{ marginTop: '27px', fontFamily: 'Libre Baskerville, serif' }}>Our Gallery</h1>
        <GalleryGrid />
      </div>
      <CTAPanel
        title="Loved the look? Let’s design yours."
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default Gallery;
