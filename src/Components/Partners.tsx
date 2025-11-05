import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-8 text-center bg-[#C9C3BA]">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 font-serif">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center mt-8 gap-x-8 gap-y-4">
          <span className="logo-text-large font-serif">TATLER</span>
          <span className="logo-text-large font-serif">ROCK MY WEDDING</span>
          <span className="logo-text-large font-serif">BRIDES</span>
          <span className="logo-text-large font-serif">SO YOU'RE GETTING MARRIED</span>
          <span className="logo-text-large font-serif">WHIMSICAL WONDERLAND WEDDINGS</span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
