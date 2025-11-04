import { useState } from "react";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import Partners from "@/Components/Partners";
import Testimonials from "@/Components/Testimonials";
import GalleryGrid from "@/Components/GalleryGrid";
import CTAPanel from "@/Components/CTAPanel";
import Lightbox from "yet-another-react-lightbox";
import ScrollIndicator from "@/Components/ScrollIndicator";
import "yet-another-react-lightbox/styles.css";

const teamMembers = [
   {
     name: "Chef Isabella Romano",
     title: "Founder & Executive Chef",
     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
     bio: "With over two decades of culinary artistry, Chef Isabella brings Italian heritage and modern innovation to every La Bella Mesa experience. Her philosophy of effortless elegance guides our approach to both cuisine and hospitality.",
   },
   {
     name: "Marcus Chen",
     title: "Operations Director",
     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
     bio: "Marcus ensures that every detail, from initial consultation to final presentation, unfolds with seamless precision. His background in luxury hospitality brings the sophistication that defines our service.",
   },
   {
     name: "Elena Vasquez",
     title: "Hospitality Curator",
     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
     bio: "Elena crafts the perfect atmosphere for each gathering, blending aesthetics with genuine care. Her intuitive approach to guest experience creates the calm, welcoming spaces that make our events unforgettable.",
   },
 ];

const About = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentMemberIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Our Story, Quietly Told"
        subtitle="chef-led menus with discreet hospitality"
        cta1={<Button size="lg" className="mt-8">Book a Tasting</Button>}
      />
      <ScrollIndicator />

      {/* Our Story Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16" style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Our elegant dining setup showcasing effortless hospitality" className="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h3 className="text-3xl font-light text-foreground mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Effortless Elegance</h3>
              <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                At La Bella Mesa, we believe that true hospitality is found in the quiet moments—the perfectly timed service, the thoughtfully curated menu, the subtle attention to detail that creates an atmosphere of effortless elegance. Our chef-led approach combines culinary artistry with discreet, unobtrusive service, ensuring every gathering unfolds with grace and tranquility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                From intimate dinners to grand celebrations, we craft experiences that allow you to focus on what matters most: the connections, the conversations, the memories being made. Quiet luxury, simply served.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16" style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Values</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="brass-accent mr-6 mt-1">
                    <div className="gold-flair w-2 h-2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>Craft</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>Every dish tells a story of meticulous attention to detail, from seasonal ingredient selection to artistic presentation. Our craft is rooted in tradition yet embraces innovation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="brass-accent mr-6 mt-1">
                    <div className="gold-flair w-2 h-2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>Calm Aesthetics</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our spaces are designed for tranquility—soft lighting, natural materials, and thoughtful arrangements that create an atmosphere of quiet sophistication and comfort.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="brass-accent mr-6 mt-1">
                    <div className="gold-flair w-2 h-2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>Hospitality</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>True hospitality is anticipating needs before they're expressed, creating seamless experiences that allow guests to focus on connection rather than coordination.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="brass-accent mr-6 mt-1">
                    <div className="gold-flair w-2 h-2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>Reliability</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>From the first consultation to the final farewell, every promise is kept. Our reliability builds trust that becomes the foundation of lasting relationships.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop" alt="Our commitment to craft, calm aesthetics, hospitality, and reliability" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16" style={{ fontFamily: 'Libre Baskerville, serif' }}>Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center cursor-pointer group" onClick={() => openLightbox(index)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-auto filter grayscale transition-all duration-500 transform group-hover:scale-105 group-hover:filter-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <h3 className="mt-6 text-xl font-light text-foreground" style={{ fontFamily: 'Libre Baskerville, serif' }}>{member.name}</h3>
                <p className="text-lg text-muted-foreground mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[
          {
            src: teamMembers[currentMemberIndex].image,
            alt: teamMembers[currentMemberIndex].name,
            title: teamMembers[currentMemberIndex].name,
            description: teamMembers[currentMemberIndex].bio,
          },
        ]}
        render={{ 
          slide: ({ slide, rect }) => (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="bg-cream p-8 rounded-lg max-w-3xl w-full mx-4 flex items-center space-x-8">
                <img src={slide.src} alt={slide.alt} className="w-1/2 filter grayscale rounded-lg" />
                <div>
                  <h3 className="text-3xl font-bold font-serif text-navy">{slide.title}</h3>
                  <p className="text-lg text-gray-600 font-sans mt-2">{teamMembers[currentMemberIndex].title}</p>
                  <p className="text-gray-700 font-sans mt-4">{slide.description}</p>
                </div>
              </div>
            </div>
          )
        }}
      />

      <Testimonials />
      <Partners />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16" style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Gallery</h2>
        <GalleryGrid />
      </div>
      <CTAPanel
        title="Inspired by our story?"
        primaryButtonText="Request a Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/gallery"
      />
      <Footer />
    </div>
  );
};

export default About;
