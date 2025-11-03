import { Sparkles, Heart, DollarSign, Users, Smile } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Quality",
    description: "Artisanal craft in every detail",
  },
  {
    icon: Heart,
    title: "Taste",
    description: "Flavors that honor tradition",
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly",
    description: "Elegance within reach",
  },
  {
    icon: Smile,
    title: "Fun",
    description: "Joyful celebrations",
  },
  {
    icon: Users,
    title: "Community",
    description: "Trusted local vendors",
  },
];

const Values = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-24 space-y-6">
          <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
            What We Stand For
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto font-light">
            Quality. Taste. Care. In every event we create.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group space-y-4"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 text-accent/70 mb-2 transition-all duration-300">
                <value.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-normal text-foreground tracking-wide">
                {value.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
