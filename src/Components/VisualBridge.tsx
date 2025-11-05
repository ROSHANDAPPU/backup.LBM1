import React from 'react';
import { useFadeIn } from '@/Hooks/useFadeIn';

interface ParallaxImageProps {
  src: string;
  alt: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt }) => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`parallax-image ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
    ></div>
  );
};

const VisualBridge: React.FC = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Delicious food spread' },
    { src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Elegant dining setup' },
    { src: 'https://images.unsplash.com/photo-1504754528070-dd0352c80873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Chef preparing a dish' },
  ];

  return (
    <section className="image-transition">
      {images.map((image, index) => (
        <ParallaxImage key={index} src={image.src} alt={image.alt} />
      ))}
    </section>
  );
};

export default VisualBridge;
