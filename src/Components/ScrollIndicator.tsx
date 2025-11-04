const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center animate-bounce mt-3">
      <span className="text-sm tracking-widest text-foreground">SCROLL</span>
      <div className="w-px h-16 bg-foreground mt-2"></div>
    </div>
  );
};

export default ScrollIndicator;
