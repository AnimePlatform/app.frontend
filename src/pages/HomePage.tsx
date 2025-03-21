import HeroSlider from '../components/anime/HeroSlider';
import AnimeRow from '../components/anime/AnimeRow';
import GenresSection from '../components/anime/GenresSection';
import NewsSection from '../components/anime/NewsSection';
import MerchandiseSection from '../components/anime/MerchandiseSection';
import CommentSection from '../components/anime/CommentSection';
import AnnouncementSection from '../components/anime/AnnouncementSection';
import { getTrendingAnimes, getPopularAnimes, getAnimes } from '../services/animeService';

const HomePage = () => {
  const trendingAnimes = getTrendingAnimes();
  const popularAnimes = getPopularAnimes();
  const allAnimes = getAnimes();

  // Get featured animes for the hero slider (first 5 trending animes)
  const featuredAnimes = trendingAnimes.slice(0, 5);

  // Get top upcoming animes (using all animes for now)
  const upcomingAnimes = allAnimes.slice(0, 6);

  // Get wishlist animes (using popular animes for now)
  const wishlistAnimes = popularAnimes.slice(0, 6);

  // Get a featured anime for the announcement section
  const featuredAnnouncement = allAnimes.find(anime => anime.title === "Fullmetal Alchemist: Brotherhood") || allAnimes[6];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider animes={featuredAnimes} />
      
      {/* Top Trending Anime */}
      <AnimeRow 
        title="Top Trending Anime" 
        animes={trendingAnimes} 
        viewAllLink="/trending"
      />
      
      {/* Featured Announcement */}
      <div className="bg-black">
        <AnnouncementSection anime={featuredAnnouncement} />
      </div>
      
      {/* Genres Section */}
      <GenresSection />
      
      {/* Popular Anime */}
      <AnimeRow 
        title="Popular Anime" 
        animes={popularAnimes} 
        viewAllLink="/popular"
      />
      
      {/* Top Upcoming Anime */}
      <div className="py-10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Top Upcoming Anime</h2>
            <a href="/upcoming" className="text-primary hover:underline font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingAnimes.map((anime) => (
              <div key={anime.id} className="relative h-48 rounded-lg overflow-hidden group">
                <img 
                  src={anime.image} 
                  alt={anime.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
                    {anime.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-white text-sm">{anime.releaseYear}</span>
                    <span className="mx-2 text-white text-sm">•</span>
                    <span className="text-white text-sm">{anime.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Comment Section */}
      <CommentSection />
      
      {/* News Section */}
      <NewsSection />
      
      {/* Your Wishlist */}
      <div className="py-10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Your Wishlist</h2>
            <a href="/wishlist" className="text-primary hover:underline font-medium">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {wishlistAnimes.map((anime) => (
              <div key={anime.id} className="relative rounded-lg overflow-hidden group">
                <img 
                  src={anime.image} 
                  alt={anime.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-medium text-sm truncate">{anime.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Merchandise Section */}
      <MerchandiseSection />
      
      {/* For More Section */}
      <div className="py-10">
        <div className="container-custom">
          <div className="bg-card rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src="/For More.png" 
                alt="For More" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-white mb-4">For More Anime Content</h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                      Subscribe to our newsletter to get updates on the latest anime releases, news, and exclusive content.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-dark text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
                      />
                      <button className="btn-primary whitespace-nowrap">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 