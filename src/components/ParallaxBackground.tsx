import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useSpring(0, { damping: 20, stiffness: 80 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 80 });

  const layer1X = useTransform(mouseX, (value) => value * -0.6);
  const layer1Y = useTransform(mouseY, (value) => value * -0.6);

  const layer2X = useTransform(mouseX, (value) => value * 0.4);
  const layer2Y = useTransform(mouseY, (value) => value * 0.4);

  const layer3X = useTransform(mouseX, (value) => value * -0.3);
  const layer3Y = useTransform(mouseY, (value) => value * -0.3);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        mouseX.set(x * 40);
        mouseY.set(y * 40);

        rafId = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"
        style={{
          x: mouseX,
          y: mouseY,
          scale: 1.15,
        }}
      />
      <motion.div
        className="absolute -top-32 -right-32 w-[800px] h-[800px] bg-primary-blue/8 rounded-full blur-3xl"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-accent-green/10 rounded-full blur-3xl"
        style={{
          x: layer1X,
          y: layer1Y,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary-blue/6 rounded-full blur-3xl"
        style={{
          x: layer2X,
          y: layer2Y,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent-green/8 rounded-full blur-3xl"
        style={{
          x: layer3X,
          y: layer3Y,
        }}
      />
    </div>
  );
}
