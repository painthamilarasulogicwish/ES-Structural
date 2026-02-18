import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'fade-up';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const animations = {
    fade: {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: '',
    },
    'slide-up': {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    },
    'slide-left': {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
    },
    'slide-right': {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
    },
    zoom: {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    },
    'fade-up': {
      initial: 'opacity-0',
      animate: 'opacity-100',
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? selectedAnimation.animate : selectedAnimation.initial
      } ${className}`}
      style={{
        transform: selectedAnimation.transform,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
