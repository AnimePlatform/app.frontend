import { Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';
import { Anime } from '../../types';

interface HeroSectionProps {
  anime: Anime;
}

const HeroSection = ({ anime }: HeroSectionProps) => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={anime.image} 
          alt={anime.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)] via-[rgba(11,14,20,0.8)] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{anime.title}</h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-[var(--primary-color)] text-white px-2 py-1 text-sm font-semibold rounded">
              {anime.type}
            </span>
            <span className="text-white">{anime.releaseYear}</span>
            <span className="text-white">{anime.episodes} Episodes</span>
            <span className={`text-sm font-medium ${anime.status === 'Ongoing' ? 'text-green-500' : 'text-blue-500'}`}>
              {anime.status}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {anime.genres.map((genre, index) => (
              <Link 
                key={index} 
                to={`/genres/${genre.toLowerCase()}`}
                className="text-sm bg-[rgba(255,255,255,0.1)] text-white px-3 py-1 rounded-full hover:bg-[var(--primary-color)] transition-colors"
              >
                {genre}
              </Link>
            ))}
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
              Watch Now
            </Link>
            <Link 
              to={`/anime/${anime.id}`}
              className="btn-outline"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 