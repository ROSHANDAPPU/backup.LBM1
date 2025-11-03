import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="bg-stone py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800">Our Partners</h2>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <img src="https://via.placeholder.com/150x50.png?text=Partner+1" alt="Partner 1" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://via.placeholder.com/150x50.png?text=Partner+2" alt="Partner 2" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://via.placeholder.com/150x50.png?text=Partner+3" alt="Partner 3" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://via.placeholder.com/150x50.png?text=Partner+4" alt="Partner 4" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://via.placeholder.com/150x50.png?text=Partner+5" alt="Partner 5" className="h-12 filter grayscale" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
