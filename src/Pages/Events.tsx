import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollIndicator from "@/Components/ScrollIndicator";
import culinaryImage from "@/assets/service-culinary.jpg";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${culinaryImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4">Event Planning</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
            From concept to flawless execution, La Bella Mesa offers comprehensive event planning services. We partner with trusted local vendors to bring your vision to life, ensuring every detail is handled with care and creativity.
          </p>
        </div>
      </div>
      <ScrollIndicator />

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-8">Your Vision, Our Expertise</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At La Bella Mesa, we transform your event aspirations into stunning realities. Our dedicated event planning team provides end-to-end support, meticulously managing every aspect from initial concept development to post-event wrap-up. We pride ourselves on our extensive network of trusted local vendors, ensuring access to the best venues, florists, entertainment, and more.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's a milestone birthday, an anniversary celebration, a holiday party, or any special occasion, we handle the complexities so you can immerse yourself in the joy of the moment. Let us craft an unforgettable experience that reflects your unique style and leaves a lasting impression on your guests.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
