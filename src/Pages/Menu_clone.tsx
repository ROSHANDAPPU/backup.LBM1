import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Menu_clone = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold">Our Menu</h1>
        <p className="mt-4">Details about our culinary offerings will be displayed here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Menu_clone;
