import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">Anime</span>
            <span className="text-white font-bold text-2xl">Flux</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Anime
            </Link>
            <Link to="/manga" className="text-white hover:text-primary transition-colors">
              Manga
            </Link>
            <Link to="/manhwa" className="text-white hover:text-primary transition-colors">
              Manhwa
            </Link>
            <Link to="/news" className="text-white hover:text-primary transition-colors">
              News
            </Link>
            <Link to="/merchandise" className="text-white hover:text-primary transition-colors">
              Merchandise
            </Link>
          </nav>

          {/* Search and User */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-card text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3" />
            </form>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center text-white hover:text-primary transition-colors focus:outline-none"
              >
                <UserCircleIcon className="h-8 w-8" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 z-10">
                  <Link to="/login" className="block px-4 py-2 text-sm text-white hover:bg-dark hover:text-primary">
                    Login
                  </Link>
                  <Link to="/register" className="block px-4 py-2 text-sm text-white hover:bg-dark hover:text-primary">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-primary transition-colors">
                Anime
              </Link>
              <Link to="/manga" className="text-white hover:text-primary transition-colors">
                Manga
              </Link>
              <Link to="/manhwa" className="text-white hover:text-primary transition-colors">
                Manhwa
              </Link>
              <Link to="/news" className="text-white hover:text-primary transition-colors">
                News
              </Link>
              <Link to="/merchandise" className="text-white hover:text-primary transition-colors">
                Merchandise
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="mt-4 flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-card text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3" />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 