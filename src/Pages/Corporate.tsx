import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import corporateImage from "@/assets/service-corporate.jpg";

const Corporate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${corporateImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4">Corporate Events</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
            Elevate your corporate gatherings with La Bella Mesa's sophisticated event planning and catering services. From executive luncheons to grand galas, we ensure every detail reflects your brand's excellence.
          </p>
        </div>
      </div>

      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-8">Seamless Corporate Experiences</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            La Bella Mesa specializes in creating professional and memorable corporate events. We understand the importance of precision, presentation, and seamless execution when it comess to your business functions. Our team works diligently to manage all aspects, from menu design and dietary accommodations to venue selection and logistical coordination.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're planning a product launch, a client appreciation dinner, an annual conference, or an intimate team-building retreat, we provide tailored solutions that align with your objectives and budget. Impress your guests and foster meaningful connections with an event designed for success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
