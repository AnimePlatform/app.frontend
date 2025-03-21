import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { Anime } from '../../types';

interface AnimeCardProps {
  anime: Anime;
  className?: string;
}

const AnimeCard = ({ anime, className = '' }: AnimeCardProps) => {
  return (
    <div className={`group relative transition-transform duration-300 hover:-translate-y-2 ${className}`}>
      <Link to={`/anime/${anime.id}`}>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={anime.image} 
            alt={anime.title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Static content (always visible) */}
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-xs font-semibold rounded">
            {anime.type === 'TV' ? 'SUB | DUB' : anime.type}
          </div>
          
          {/* Hover content */}
          <div className="anime-card-hover">
            <div className="flex items-center mb-1">
              <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm">{anime.rating.toFixed(1)}</span>
            </div>
            
            <h3 className="text-white font-semibold text-lg mb-1">{anime.title}</h3>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {anime.genres.slice(0, 3).map((genre, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-black/50 text-white px-2 py-1 rounded-md"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="text-white/80 text-sm line-clamp-2">
              {anime.synopsis}
            </p>
          </div>
        </div>
        
        {/* Title below image (always visible) */}
        <div className="mt-2">
          <h3 className="text-white font-medium text-base truncate">{anime.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--text-secondary)]">{anime.releaseYear}</span>
            <span className={`text-xs font-medium ${anime.status === 'Ongoing' ? 'text-green-500' : 'text-blue-500'}`}>
              {anime.status}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard; 