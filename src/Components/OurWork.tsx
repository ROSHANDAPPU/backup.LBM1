import { useEffect, useRef, useState } from "react";

const OurWork = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Assuming 3 slides for 9 images (3 images per slide)

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.scrollWidth / 2; // Total width of one set of images
    const singleSlideWidth = slideWidth / totalSlides; // Width of one logical slide

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const singleSlideWidth = slider.offsetWidth; // Width of one logical slide

    slider.scrollTo({
      left: currentSlide * singleSlideWidth,
      behavior: "smooth",
    });
  }, [currentSlide, totalSlides, sliderRef]);

  const images = [
    "photo-1556909114-f6e7ad7d3136",
    "photo-1517248135467-4c7edcad34c4",
    "photo-1464366400600-7168b8af9bc3",
    "photo-1506280754576-f6fa8a873550",
    "photo-1544145945-f90425340c7e",
    "photo-1514933651103-005eec06c04b",
    "photo-1414235077428-338989a2e8c0",
    "photo-1504674900247-0877df9cc836",
    "photo-1498837167922-ddd27525d352",
  ];

  return (
    <section className="w-full bg-background-secondary py-8">
      <h2 className="text-center text-3xl font-semibold mb-6">Our Work</h2>
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {/* Group images into slides */}
        {[...images, ...images].reduce((acc: string[][], _, index, array) => {
          if (index % 3 === 0) {
            acc.push(array.slice(index, index + 3));
          }
          return acc;
        }, []).map((slideImages, slideIndex) => (
          <div key={slideIndex} className="flex-shrink-0 w-full snap-start flex justify-around items-center">
            {slideImages.map((src, imageIndex) => (
              <div key={imageIndex} className="w-[350px] h-[350px] flex-shrink-0">
                <img
                  src={`https://images.unsplash.com/${src}?w=350&h=350&fit=crop`}
                  alt={`Gallery ${slideIndex * 3 + imageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWork;
