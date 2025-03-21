import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Anime } from '../../types';

interface HeroSliderProps {
  animes: Anime[];
  autoplaySpeed?: number;
}

const HeroSlider = ({ animes, autoplaySpeed = 5000 }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<number | null>(null);

  const totalSlides = animes.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset autoplay timer when slide changes manually
  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    
    if (isAutoplay) {
      autoplayTimerRef.current = window.setTimeout(() => {
        nextSlide();
      }, autoplaySpeed);
    }
  };

  // Handle autoplay
  useEffect(() => {
    resetAutoplayTimer();
    
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [currentSlide, isAutoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  return (
    <div 
      className="relative h-[70vh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {animes.map((anime, index) => (
        <div 
          key={anime.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={anime.image} 
              alt={anime.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{anime.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary text-white px-2 py-1 text-sm font-semibold rounded">
                  {anime.type}
                </span>
                <span className="text-white">{anime.releaseYear}</span>
                <span className="text-white">{anime.episodes} Episodes</span>
                <span className={`text-sm font-medium ${anime.status === 'Ongoing' ? 'text-green-500' : 'text-blue-500'}`}>
                  {anime.status}
                </span>
              </div>
              
              <p className="text-[var(--text-secondary)] mb-8 line-clamp-3 md:line-clamp-4">
                {anime.synopsis}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/anime/${anime.id}/watch`}
                  className="btn-primary flex items-center"
                >
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Start Watching
                </Link>
                <button 
                  className="btn-outline flex items-center"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={() => {
          prevSlide();
          resetAutoplayTimer();
        }}
        className="anime-slider-nav left-4"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button 
        onClick={() => {
          nextSlide();
          resetAutoplayTimer();
        }}
        className="anime-slider-nav right-4"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {animes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              resetAutoplayTimer();
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 