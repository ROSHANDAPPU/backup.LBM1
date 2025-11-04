import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/UI/button";
import Timeline from "@/Components/Timeline";
import { useFadeIn } from "@/Hooks/useFadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/UI/accordion";
import { ChevronRight } from "lucide-react";
import ScrollIndicator from "@/Components/ScrollIndicator";

const OurProcess = () => {
  const [ref1, isVisible1] = useFadeIn<HTMLDivElement>();
  const [ref2, isVisible2] = useFadeIn<HTMLDivElement>();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        title="Seamless From First Hello"
        subtitle="from inquiry to event day"
        cta1={<Button size="lg" className="mt-8">Start Your Proposal</Button>}
      />
      <ScrollIndicator />

      {/* Timeline Section */}
      <div className="py-16 bg-light-cream">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Process</h2>
          <p className="text-lg text-muted-foreground text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Your celebration's delicious food & drink planning journey</p>
          <p className="text-md text-muted-foreground text-center italic mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tu viaje hacia una fiesta inolvidable</p>
          <div className="w-16 h-px bg-brass mx-auto mb-16"></div>
          <Timeline />
        </div>
      </div>

      {/* What's Included Section */}
      <div ref={ref1} className={`py-16 bg-light-cream transition-opacity duration-1000 ease-in-out ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-foreground mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>What’s Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-4">✓</span>
                  <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Custom menu design tailored to your event</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4">✓</span>
                  <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Dietary and allergen accommodation planning</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4">✓</span>
                  <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Professional culinary and service staffing</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4">✓</span>
                  <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Complete setup and breakdown of culinary areas</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4">✓</span>
                  <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Regular coordination touchpoints to ensure alignment</p>
                </li>
              </ul>
            </div>
            <div className="border-l border-brass pl-12">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" alt="What’s Included" className="rounded-lg shadow-lg w-full transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      {/* Budget & Minimums Section */}
      <div ref={ref2} className={`py-16 bg-light-cream transition-opacity duration-1000 ease-in-out ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-r border-brass pr-12">
              <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=600&h=400&fit=crop" alt="Budget & Minimums" className="rounded-lg shadow-lg w-full transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <div>
              <h3 className="text-3xl font-light text-foreground mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Budget & Minimums</h3>
              <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our pricing is transparent and tailored to your event’s scale and complexity. We work with you to create a memorable experience that respects your budget. Minimums may apply depending on the event type and guest count.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                To optimize your budget, consider a buffet-style service or focusing on a curated selection of signature dishes. We are happy to provide guidance on how to achieve your vision effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process FAQ Section */}
      <div className="py-16 bg-light-cream">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Intro and CTA */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-navy" style={{ fontFamily: 'Montserrat, sans-serif' }}>Kalm Queries</h2>
              <p className="text-lg text-ink-navy mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                There's no such thing as a "silly" question!<br />
                Our team is here to answer any you may have, but here are a few that we often hear.
              </p>
              <a href="#contact" className="inline-flex items-center text-ink-navy font-semibold text-lg border border-ink-navy px-6 py-3 rounded-full hover:bg-ink-navy hover:text-white transition-colors duration-300 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ask us a question
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div>
              <h3 className="text-xl font-semibold uppercase text-ink-navy mb-4 pb-2 border-b border-brass" style={{ fontFamily: 'Montserrat, sans-serif' }}>Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="payment" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Payment Schedule
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We require a 50% non-refundable deposit to secure your booking and date. The remaining 50% is due 30 days prior to your event to cover final preparations and costs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cancellations" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Cancellations
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Cancellations made 60+ days before the event receive a full refund minus a 10% administrative fee. Between 30-60 days, 50% is refundable. Cancellations less than 30 days before the event are non-refundable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rentals" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Rentals
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We offer rentals for tables, linens, glassware, and other event essentials. Prices vary based on the items and duration. Contact us for a custom quote tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tastings" className="border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold text-ink-navy hover:text-brass py-4 border-b border-stone-300 hover:border-brass transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Tastings
                    <span className="ml-auto">+</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-ink-navy leading-relaxed pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We provide complimentary tastings for weddings and events over £5,000. For smaller events, there's a £200 tasting fee that can be applied towards your total. Tastings include your proposed menu items and are conducted at our Surrey location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="py-16 bg-reserved-burgundy text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>Ready to Get Started?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-white text-reserved-burgundy hover:bg-stone hover:text-reserved-burgundy font-semibold px-8 py-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Request a Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-reserved-burgundy font-semibold px-8 py-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProcess;
