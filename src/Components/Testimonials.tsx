import { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    year: '2024',
    quote: '“I honestly don’t know how I can ever thank you for making our wedding day the best and most magical day of our lives, it surpassed all of my expectations. Everything looked like a fairy tale and the food was incredible.”',
    author: '– Millbridge Court',
  },
  {
    year: '2023',
    quote: '“You really went the extra mile for us. Everyone was complimenting the team on their friendly approach, and all the food was delicious and as beautifully presented as we could have imagined.”',
    author: '– J+S',
  },
  {
    year: '2024',
    quote: '“Thank you from the bottom of our hearts for helping us create our perfect day. You made us feel like our wedding was the most important event, and the service you provide is truly personal. We had the best day ever!”',
    author: '– Micklefield Hall',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only fade when the section is scrolling past the top
      if (rect.top > 0) {
        // Section hasn't started scrolling past yet
        setBackgroundOpacity(1);
      } else {
        // Section is scrolling past the top, fade out
        const opacity = Math.max(0, 1 - (-rect.top / windowHeight)); // Fade over full viewport height
        setBackgroundOpacity(opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20"
      style={{
        background: `rgba(245, 245, 220, ${backgroundOpacity})`, // Stone/cream background with opacity
      }}
    >
      <div className="container mx-auto text-center">
        <div className="relative h-64">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {testimonial.year}
              </span>
              <blockquote className="mt-4 text-2xl font-light italic text-gray-800 max-w-2xl mx-auto font-serif">
                {testimonial.quote}
              </blockquote>
              <p className="mt-4 text-base font-medium text-gray-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
