import { Link } from 'react-router-dom';
import { PlayIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Anime } from '../../types';

interface AnnouncementSectionProps {
  anime: Anime;
}

const AnnouncementSection = ({ anime }: AnnouncementSectionProps) => {
  return (
    <div className="py-10 bg-black">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-white mb-6">Featured Announcement</h2>
        
        <div className="bg-[#111] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Anime Image */}
            <div className="w-[90%] md:w-3/5 relative">
              <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-[90%] object-cover"
                style={{ maxHeight: '400px', minHeight: '400px' }}
              />
              <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 text-sm font-medium rounded">
                SUB | DUB
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-[#111]">
              <h3 className="text-3xl font-bold text-white mb-6">{anime.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genres.slice(0, 3).map((genre, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-black text-white px-4 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-10 line-clamp-4 text-base">
                {anime.synopsis}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link 
                  to={`/anime/${anime.id}/watch`}
                  className="flex items-center justify-center bg-[#E50914] text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
                >
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Start Watching
                </Link>
                <button 
                  className="flex items-center justify-center bg-black border border-[#E50914] text-[#E50914] font-semibold py-3 px-6 rounded-md hover:bg-[#E50914] hover:text-white transition-colors"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection; 