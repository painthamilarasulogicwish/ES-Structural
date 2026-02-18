import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoBannerProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl?: string;
  fallbackImage: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const VideoBanner = ({
  title,
  subtitle,
  description,
  videoUrl,
  fallbackImage,
  stats,
}: VideoBannerProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoElement) {
      if (isPlaying) {
        videoElement.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying, videoElement]);

  useEffect(() => {
    if (videoElement) {
      videoElement.muted = isMuted;
    }
  }, [isMuted, videoElement]);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        const movement = (scrollPercent - 0.5) * 50;
        setScrollOffset(movement);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div ref={bannerRef} className="relative h-[600px] overflow-hidden">
      {videoUrl ? (
        <video
          ref={setVideoElement}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollOffset}px) scale(1.1)` }}
          autoPlay
          loop
          muted
          playsInline
          poster={fallbackImage}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 ease-out"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            transform: `translateY(${scrollOffset}px) scale(1.1)`
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/95 via-primary-blue/80 to-primary-blue/60"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="px-5 py-2 bg-accent-green/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-accent-green/40 shadow-lg">
                {subtitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-slide-up">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl animate-slide-up-delay">
              {description}
            </p>

            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl animate-fade-in-delay">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-accent-green/50"
                  >
                    <p className="text-3xl md:text-4xl font-heading font-bold text-accent-green mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-200 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {videoUrl && (
        <div className="absolute bottom-8 right-8 flex gap-3 z-10">
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 group"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause size={20} className="text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play size={20} className="text-white group-hover:scale-110 transition-transform ml-1" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 group"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 size={20} className="text-white group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-32 w-2 h-2 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-accent-green rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default VideoBanner;
