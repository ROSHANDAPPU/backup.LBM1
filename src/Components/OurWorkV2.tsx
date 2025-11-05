import React, { useState, useEffect, useRef } from 'react';

const OurWorkV2 = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0); // Tracks actual scroll position
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'pause'>('left');
  const [slideSpeed, setSlideSpeed] = useState<'slow' | 'fast'>('slow');

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

  // Duplicate images for infinite loop effect
  const allImages = [...images, ...images, ...images];

  const getImagesPerSlide = () => {
    if (window.innerWidth < 768) {
      return 1; // Mobile
    } else if (window.innerWidth < 1024) {
      return 2; // Tablet
    } else {
      return 3; // Desktop
    }
  };

  const totalDots = 5; // User requested 5 dots for control

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || slideDirection === 'pause') return;

    let animationFrameId: number;
    let lastTimestamp: DOMHighResTimeStamp = 0;

    const scrollStep = (timestamp: DOMHighResTimeStamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const speedFactor = slideSpeed === 'fast' ? 2 : 1; // Adjust speed
      const scrollAmount = (deltaTime / 1000) * 50 * speedFactor; // Pixels per second

      let newScrollPosition = slider.scrollLeft;

      if (slideDirection === 'left') {
        newScrollPosition += scrollAmount;
        // Loop from beginning if scrolled past the duplicated section
        if (newScrollPosition >= slider.scrollWidth / 3) {
          newScrollPosition = newScrollPosition - slider.scrollWidth / 3;
        }
      } else if (slideDirection === 'right') {
        newScrollPosition -= scrollAmount;
        // Loop from end if scrolled before the duplicated section
        if (newScrollPosition <= 0) {
          newScrollPosition = newScrollPosition + slider.scrollWidth / 3;
        }
      }

      slider.scrollLeft = newScrollPosition;
      setCurrentScrollPosition(newScrollPosition);

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [slideDirection, slideSpeed, currentScrollPosition]);

  const handleDotClick = (index: number) => {
    switch (index) {
      case 0: // 1st dot: Slide towards left (slow pace)
        setSlideDirection('left');
        setSlideSpeed('slow');
        break;
      case 1: // 2nd dot: Slide towards left (faster pace)
        setSlideDirection('left');
        setSlideSpeed('fast');
        break;
      case 2: // 3rd dot: Pause the flow
        setSlideDirection('pause');
        break;
      case 3: // 4th dot: Slide towards right (slow pace)
        setSlideDirection('right');
        setSlideSpeed('slow');
        break;
      case 4: // 5th dot: Slide towards right (faster pace)
        setSlideDirection('right');
        setSlideSpeed('fast');
        break;
      default:
        setSlideDirection('pause');
        break;
    }
  };

  return (
    <section
      className="w-full py-8"
    >
      <div className="h-px w-12 bg-accent/40 mx-auto mb-8" />
      <h2 className="text-center section-title mb-4 font-serif">
        Our Work
      </h2>
      <p className="text-base text-muted-foreground max-w-lg mx-auto font-light mb-8">
        Showcasing our signature style — elevated, modern & timeless.
      </p>
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scrollbar-hide scroll-smooth"
      >
        {allImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: `${100 / getImagesPerSlide()}%`,
            }}
          >
            <img
              src={`https://images.unsplash.com/${src}?w=1200&h=750&fit=crop&q=80&fm=webp`}
              alt={`Gallery ${i + 1}`}
              className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalDots)].map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${(
              (index === 0 && slideDirection === 'left' && slideSpeed === 'slow') ||
              (index === 1 && slideDirection === 'left' && slideSpeed === 'fast') ||
              (index === 2 && slideDirection === 'pause') ||
              (index === 3 && slideDirection === 'right' && slideSpeed === 'slow') ||
              (index === 4 && slideDirection === 'right' && slideSpeed === 'fast')
            ) ? 'bg-[#1C1C1C]' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="text-center mt-4 text-ink-navy font-serif text-lg">
        <a href="https://www.instagram.com/la_bella_mesa/" target="_blank" rel="noopener noreferrer">
          <span className="mr-2">[Instagram Icon]</span>@la_bella_mesa
        </a>
      </div>
    </section>
  );
};

export default OurWorkV2;
