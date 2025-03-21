import { Link } from 'react-router-dom';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'Demon Slayer Season 4 Announced',
    image: '/Popular Anime-1.png',
    date: '2023-12-15',
    excerpt: 'The highly anticipated fourth season of Demon Slayer has been officially announced with a new trailer.',
  },
  {
    id: 2,
    title: 'One Piece Celebrates 1000 Episodes',
    image: '/Popular Anime-2.png',
    date: '2023-11-20',
    excerpt: 'The legendary anime One Piece has reached a milestone of 1000 episodes, with special events planned worldwide.',
  },
  {
    id: 3,
    title: 'Attack on Titan Final Season Part 3 Release Date',
    image: '/Top Trending Anime.png',
    date: '2023-10-05',
    excerpt: 'The final part of Attack on Titan\'s concluding season has received an official release date.',
  },
];

const NewsSection = () => {
  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Platform News</h2>
          <Link to="/news" className="text-primary hover:underline font-medium">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link key={news.id} to={`/news/${news.id}`} className="group">
              <div className="card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <span className="text-primary text-sm">{news.date}</span>
                  <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mt-2 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection; 