export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: 'Ongoing' | 'Completed';
  genres: string[];
  synopsis: string;
  releaseYear: number;
  type: 'TV' | 'Movie' | 'OVA' | 'Special';
}

export interface Genre {
  id: number;
  name: string;
}

export interface Season {
  id: number;
  name: string;
  year: number;
  animes: Anime[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  watchlist: number[]; // Anime IDs
  favorites: number[]; // Anime IDs
}

export interface Comment {
  id: number;
  userId: number;
  animeId: number;
  text: string;
  createdAt: string;
  username: string;
  avatar?: string;
}

export interface Episode {
  id: number;
  animeId: number;
  number: number;
  title: string;
  thumbnail: string;
  duration: string;
  releaseDate: string;
} 