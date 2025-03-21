import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimeCard from './AnimeCard';
import { Anime } from '../../types';

interface AnimeRowProps {
  title: string;
  animes: Anime[];
  viewAllLink?: string;
}

const AnimeRow = ({ title, animes, viewAllLink }: AnimeRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    const scrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {viewAllLink && (
            <Link 
              to={viewAllLink} 
              className="text-primary hover:underline font-medium"
            >
              View All
            </Link>
          )}
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="horizontal-scroll"
          >
            {animes.map((anime) => (
              <div key={anime.id} className="min-w-[220px] max-w-[220px]">
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="anime-slider-nav left-0 -translate-x-1/2"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="anime-slider-nav right-0 translate-x-1/2"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeRow; 