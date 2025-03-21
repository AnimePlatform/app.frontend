import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { comments } from '../../services/animeService';

// Mock user avatar images


const CommentSection = () => {
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
          <h2 className="text-2xl font-bold text-white">Comments</h2>
          <Link to="/comments" className="text-primary hover:underline font-medium">
            View All
          </Link>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="horizontal-scroll"
          >
            {comments.map((comment) => (
              <div 
                key={comment.id} 
                className="min-w-[300px] max-w-[300px] bg-card rounded-lg p-4 flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <img 
                    src={comment.avatar} 
                    alt={comment.username} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <h4 className="text-primary font-medium text-sm">{comment.username}</h4>
                    <span className="text-[var(--text-secondary)] text-xs">{Math.floor(Math.random() * 60) + 1} minutes ago</span>
                  </div>
                </div>
                
                <p className="text-white text-sm mb-3">{comment.text}</p>
                
                <div className="mt-auto">
                  <p className="text-[var(--text-secondary)] text-xs">
                    <span className="text-primary">Anime name</span> commented on
                  </p>
                </div>
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

export default CommentSection; 