import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="bg-stone py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800">Our Partners</h2>
        <div className="flex justify-center items-center mt-8 space-x-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12 filter grayscale" />
          <div className="h-12 w-px bg-brass"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282021%29.svg" alt="Facebook" className="h-12 filter grayscale" />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
