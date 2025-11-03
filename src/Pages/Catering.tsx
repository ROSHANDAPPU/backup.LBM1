import Header from "@/components/Header";
import Footer from "@/components/Footer";
import culinaryImage from "@/assets/service-culinary.jpg";

const Catering = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${culinaryImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4">Elevated Catering</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
            From intimate dinners to grand celebrations, La Bella Mesa crafts bespoke culinary experiences that delight the senses and leave a lasting impression. Our commitment to fresh, seasonal ingredients and impeccable presentation ensures every dish is a work of art.
          </p>
        </div>
      </div>

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-8">Our Culinary Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At La Bella Mesa, we believe that exceptional food is the heart of every memorable event. We meticulously source the finest local and seasonal ingredients, transforming them into exquisite dishes that tell a story. Our chefs are artists, dedicated to creating flavors that linger and presentations that captivate. Whether you envision a rustic family-style feast or a sophisticated multi-course tasting menu, we work closely with you to bring your culinary dreams to life.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond the plate, our service is defined by warmth and professionalism. Our team ensures every detail is flawlessly executed, allowing you to relax and savor every moment with your guests. Experience the difference of catering that is truly elevated.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
