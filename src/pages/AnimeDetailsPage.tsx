import { useParams, Link } from 'react-router-dom';
import { StarIcon, PlayIcon, ClockIcon, CalendarIcon, FilmIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { getAnimeById, getEpisodesByAnimeId, getCommentsByAnimeId } from '../services/animeService';

const AnimeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const animeId = parseInt(id || '0');
  
  const anime = getAnimeById(animeId);
  const episodes = getEpisodesByAnimeId(animeId);
  const comments = getCommentsByAnimeId(animeId);

  if (!anime) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Anime Not Found</h1>
        <p className="text-[var(--text-secondary)] mb-8">The anime you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={anime.image} 
            alt={anime.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] to-transparent"></div>
        </div>
      </div>

      <div className="container-custom -mt-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster and Actions */}
          <div className="md:col-span-1">
            <div className="card overflow-hidden">
              <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-full h-auto"
              />
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">{anime.rating.toFixed(1)}</span>
                  </div>
                  <span className={`text-sm font-medium ${anime.status === 'Ongoing' ? 'text-green-500' : 'text-blue-500'}`}>
                    {anime.status}
                  </span>
                </div>
                
                <button className="btn-primary w-full flex items-center justify-center">
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Watch Now
                </button>
                
                <button className="btn-outline w-full flex items-center justify-center">
                  <BookmarkIcon className="h-5 w-5 mr-2" />
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{anime.title}</h1>
            
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-[var(--primary-color)] mr-2" />
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">Year</p>
                  <p className="text-white">{anime.releaseYear}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FilmIcon className="h-5 w-5 text-[var(--primary-color)] mr-2" />
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">Type</p>
                  <p className="text-white">{anime.type}</p>
                </div>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-[var(--primary-color)] mr-2" />
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">Episodes</p>
                  <p className="text-white">{anime.episodes}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Synopsis</h2>
              <p className="text-[var(--text-secondary)]">{anime.synopsis}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Episodes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {episodes.map((episode) => (
                  <div key={episode.id} className="card flex overflow-hidden">
                    <img 
                      src={episode.thumbnail} 
                      alt={episode.title} 
                      className="w-24 h-auto object-cover"
                    />
                    <div className="p-3 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-medium">Episode {episode.number}</h3>
                        <span className="text-[var(--text-secondary)] text-xs">{episode.duration}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm truncate">{episode.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Comments ({comments.length})</h2>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="card p-4">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={comment.avatar || 'https://via.placeholder.com/40x40'} 
                        alt={comment.username} 
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-white font-medium">{comment.username}</h4>
                          <span className="text-[var(--text-secondary)] text-xs">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-[var(--text-secondary)]">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsPage; 