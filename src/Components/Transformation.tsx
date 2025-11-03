const Transformation = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-20">
          <div className="text-center space-y-6">
            <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
              Your Journey With Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-right space-y-4 px-6 py-8">
              <h3 className="text-xl font-normal text-foreground/60 tracking-wide">Before</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Stressed. Overwhelmed. Every detail weighing on you.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-px h-16 bg-accent/30 md:w-16 md:h-px" />
            </div>
            
            <div className="text-center md:text-left space-y-4 px-6 py-8">
              <h3 className="text-xl font-normal text-foreground tracking-wide">After</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Confident. Elegant table. Zero stress. Ready for your guests.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6 pt-12">
            <p className="text-lg text-foreground font-light italic">
              We handle the details. You focus on your guests.
            </p>
            <p className="text-sm text-muted-foreground font-light">
              La mesa, sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
