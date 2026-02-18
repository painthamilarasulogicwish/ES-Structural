import { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: number;
}

const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  scale = 1.2
}: ParallaxImageProps) => {
  const [offset, setOffset] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        const movement = (scrollPercent - 0.5) * 100 * speed;
        setOffset(movement);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={imageRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offset}px) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;
