import culinaryImage from "@/assets/service-culinary.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import { Button } from "./UI/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Elevated Catering",
    description: "Quality ingredients. Artisanal presentation. From intimate dinners to celebrations, we bring excellence to your table.",
    image: culinaryImage,
    slug: "/catering",
  },
  {
    title: "Corporate Events",
    description: "Professional gatherings that impress. We handle the details. You focus on your guests.",
    image: corporateImage,
    slug: "/corporate",
  },
  {
    title: "Event Planning",
    description: "Seamless coordination. Trusted local vendors. We manage logistics. You enjoy the moment.",
    image: culinaryImage,
    slug: "/events",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 space-y-6">
          <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto font-light">
            Intimate gatherings. Corporate celebrations. Elegance, handled.
          </p>
        </div>
        
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 w-full">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full space-y-6">
                <h3 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight brass-bullet">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-light max-w-prose">
                  {service.description}
                </p>
                <Link to={service.slug}>
                  <Button variant="outline" size="lg" className="text-base font-normal tracking-wide uppercase">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
