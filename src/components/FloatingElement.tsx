import { ReactNode, useEffect, useState } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}

const FloatingElement = ({
  children,
  duration = 3,
  delay = 0,
  distance = 10,
  className = '',
}: FloatingElementProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      const y = Math.sin((elapsed + delay) * (2 * Math.PI) / duration) * distance;
      setOffset(y);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, delay, distance]);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
