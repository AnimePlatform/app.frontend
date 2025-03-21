import { Link } from 'react-router-dom';
import { genres } from '../../services/animeService';

const GenresSection = () => {
  return (
    <div className="py-10 bg-card">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-white mb-6">Genres</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genres/${genre.name.toLowerCase()}`}
              className="bg-dark hover:bg-primary transition-colors duration-300 text-white rounded-lg p-4 text-center"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenresSection; 