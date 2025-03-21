import { Link } from 'react-router-dom';

// Mock merchandise data
const merchandiseItems = [
  {
    id: 1,
    title: 'Demon Slayer Tanjiro Figure',
    image: '/Merchnadise Section.png',
    price: 49.99,
    category: 'Figures',
  },
  {
    id: 2,
    title: 'Attack on Titan Hoodie',
    image: '/Merchnadise Section.png',
    price: 39.99,
    category: 'Clothing',
  },
  {
    id: 3,
    title: 'My Hero Academia Poster Set',
    image: '/Merchnadise Section.png',
    price: 24.99,
    category: 'Posters',
  },
  {
    id: 4,
    title: 'One Piece Manga Box Set',
    image: '/Merchnadise Section.png',
    price: 129.99,
    category: 'Manga',
  },
];

const MerchandiseSection = () => {
  return (
    <div className="py-10 bg-card">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Merchandise</h2>
          <Link to="/merchandise" className="text-primary hover:underline font-medium">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {merchandiseItems.map((item) => (
            <Link key={item.id} to={`/merchandise/${item.id}`} className="group">
              <div className="bg-dark rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-primary font-bold">${item.price}</span>
                    <button className="bg-primary text-white text-sm px-3 py-1 rounded hover:opacity-90 transition-opacity">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchandiseSection; 