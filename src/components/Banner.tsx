import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: {
    text: string;
    link: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Engineering Excellence',
      subtitle: 'Structural Design & Construction Management',
      description: 'World-class design solutions for multinational corporations. Serving clients in Norway, Abu Dhabi, and India with 15+ years of distinguished experience.',
      image: '/banner-1.jpg',
      cta: {
        text: 'Explore Our Services',
        link: '/services',
      },
      stats: [
        { label: 'Years Experience', value: '15+' },
        { label: 'Countries', value: '3+' },
        { label: 'Client Satisfaction', value: '100%' },
      ],
    },
    {
      id: 2,
      title: 'Precast Concrete Pioneers',
      subtitle: 'Innovative Solutions in Precast Technology',
      description: 'Specialized expertise in precast design with hollow core slabs spanning up to 14.5m and double-tee systems reaching 25.5m clear spans.',
      image: '/banner-2.jpg',
      cta: {
        text: 'View Our Expertise',
        link: '/expertise',
      },
      stats: [
        { label: 'Hollow Core Span', value: '14.5m' },
        { label: 'Double-Tee Span', value: '25.5m' },
        { label: 'Steel Truss Span', value: '30m' },
      ],
    },
    {
      id: 3,
      title: 'Landmark Projects',
      subtitle: "India's First Glass Bridge & Nalanda University",
      description: 'Our portfolio includes prestigious projects such as Nalanda University iconic dome structure and India\'s first glass bridge in Kanyakumari.',
      image: '/banner-3.jpg',
      cta: {
        text: 'See Our Projects',
        link: '/projects',
      },
      stats: [
        { label: 'Landmark Projects', value: '50+' },
        { label: 'Project Types', value: '8+' },
        { label: 'International', value: 'Yes' },
      ],
    },
    {
      id: 4,
      title: 'BIM & Digital Engineering',
      subtitle: 'Advanced Technology for Seamless Execution',
      description: 'Building Information Modeling with Revit, 3D visualization, clash detection, and fabrication-ready shop drawings for integrated project delivery.',
      image: '/banner-4.jpg',
      cta: {
        text: 'Learn About BIM',
        link: '/services',
      },
      stats: [
        { label: 'Software Tools', value: '5+' },
        { label: 'Design Codes', value: '8+' },
        { label: 'BIM Level', value: 'LOD 400' },
      ],
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative h-[700px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0 scale-100'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full scale-95'
              : 'opacity-0 translate-x-full scale-95'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/95 via-primary-blue/85 to-primary-blue/70"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <div
                  className={`transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-accent-green/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-accent-green/30">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>

                  {slide.stats && (
                    <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl">
                      {slide.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                        >
                          <p className="text-3xl font-heading font-bold text-accent-green mb-1">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-200">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to={slide.cta.link}>
                    <Button variant="accent" size="lg" className="shadow-xl">
                      {slide.cta.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-accent-green'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 border border-white/20"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Banner;
