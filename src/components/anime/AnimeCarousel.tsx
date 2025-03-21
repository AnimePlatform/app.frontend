import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import AnimeCard from './AnimeCard';
import { Anime } from '../../types';

// Import Swiper styles


interface AnimeCarouselProps {
  title: string;
  animes: Anime[];
  viewAllLink?: string;
}

const AnimeCarousel = ({ title, animes, viewAllLink }: AnimeCarouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">{title}</h2>
          {viewAllLink && (
            <a 
              href={viewAllLink} 
              className="text-[var(--primary-color)] hover:underline font-medium"
            >
              View All
            </a>
          )}
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="anime-carousel"
          >
            {animes.map((anime) => (
              <SwiperSlide key={anime.id}>
                <AnimeCard anime={anime} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-[var(--card-bg)] text-white p-2 rounded-full shadow-lg hover:bg-[var(--primary-color)] transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-[var(--card-bg)] text-white p-2 rounded-full shadow-lg hover:bg-[var(--primary-color)] transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCarousel; 