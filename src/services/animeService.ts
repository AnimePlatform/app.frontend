import { Anime, Genre, Episode, Comment } from '../types';

// Mock Genres
export const genres: Genre[] = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 3, name: 'Comedy' },
  { id: 4, name: 'Drama' },
  { id: 5, name: 'Fantasy' },
  { id: 6, name: 'Horror' },
  { id: 7, name: 'Mystery' },
  { id: 8, name: 'Romance' },
  { id: 9, name: 'Sci-Fi' },
  { id: 10, name: 'Slice of Life' },
  { id: 11, name: 'Sports' },
  { id: 12, name: 'Supernatural' },
  { id: 13, name: 'Thriller' },
];

// Mock Anime Data
export const animes: Anime[] = [
  {
    id: 1,
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    rating: 8.7,
    episodes: 26,
    status: 'Completed',
    genres: ['Action', 'Fantasy', 'Supernatural'],
    synopsis: 'Tanjiro Kamado, a kind-hearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a "demon slayer" so that he can turn his sister back into a human and kill the demon that massacred his family.',
    releaseYear: 2019,
    type: 'TV',
  },
  {
    id: 2,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    rating: 9.0,
    episodes: 75,
    status: 'Completed',
    genres: ['Action', 'Drama', 'Fantasy'],
    synopsis: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.',
    releaseYear: 2013,
    type: 'TV',
  },
  {
    id: 3,
    title: 'My Hero Academia',
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    rating: 8.3,
    episodes: 113,
    status: 'Ongoing',
    genres: ['Action', 'Comedy', 'Supernatural'],
    synopsis: 'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
    releaseYear: 2016,
    type: 'TV',
  },
  {
    id: 4,
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    rating: 8.8,
    episodes: 24,
    status: 'Completed',
    genres: ['Action', 'Fantasy', 'Supernatural'],
    synopsis: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',
    releaseYear: 2020,
    type: 'TV',
  },
  {
    id: 5,
    title: 'One Piece',
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    rating: 8.7,
    episodes: 1000,
    status: 'Ongoing',
    genres: ['Action', 'Adventure', 'Comedy', 'Fantasy'],
    synopsis: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece.',
    releaseYear: 1999,
    type: 'TV',
  },
  {
    id: 6,
    title: 'Naruto',
    image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    rating: 8.3,
    episodes: 220,
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Moments prior to Naruto Uzumaki\'s birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi\'s rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.',
    releaseYear: 2002,
    type: 'TV',
  },
  {
    id: 7,
    title: 'Fullmetal Alchemist: Brotherhood',
    image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
    rating: 9.1,
    episodes: 64,
    status: 'Completed',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    synopsis: 'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life.',
    releaseYear: 2009,
    type: 'TV',
  },
  {
    id: 8,
    title: 'Death Note',
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    rating: 8.6,
    episodes: 37,
    status: 'Completed',
    genres: ['Mystery', 'Psychological', 'Supernatural', 'Thriller'],
    synopsis: 'A shinigami, as a god of death, can kill any person—provided they see their victim\'s face and write their victim\'s name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.',
    releaseYear: 2006,
    type: 'TV',
  },
];

// Mock Episodes
export const episodes: Episode[] = [
  {
    id: 1,
    animeId: 1,
    number: 1,
    title: 'Cruelty',
    thumbnail: 'https://via.placeholder.com/300x169',
    duration: '23:39',
    releaseDate: '2019-04-06',
  },
  {
    id: 2,
    animeId: 1,
    number: 2,
    title: 'Trainer Sakonji Urokodaki',
    thumbnail: 'https://via.placeholder.com/300x169',
    duration: '23:39',
    releaseDate: '2019-04-13',
  },
  {
    id: 3,
    animeId: 1,
    number: 3,
    title: 'Sabito and Makomo',
    thumbnail: 'https://via.placeholder.com/300x169',
    duration: '23:39',
    releaseDate: '2019-04-20',
  },
  {
    id: 4,
    animeId: 2,
    number: 1,
    title: 'To You, 2000 Years Later',
    thumbnail: 'https://via.placeholder.com/300x169',
    duration: '24:12',
    releaseDate: '2013-04-07',
  },
  {
    id: 5,
    animeId: 2,
    number: 2,
    title: 'That Day',
    thumbnail: 'https://via.placeholder.com/300x169',
    duration: '24:12',
    releaseDate: '2013-04-14',
  },
];

// Mock Comments
export const comments: Comment[] = [
  {
    id: 1,
    userId: 1,
    animeId: 1,
    text: "At this point the anime is tourism not romcom.",
    createdAt: '2023-01-15T12:30:00Z',
    username: 'Gaurav',
    avatar: '/Rectangle 11.png',
  },
  {
    id: 2,
    userId: 2,
    animeId: 1,
    text: "The fight scenes are so well choreographed! I can't believe how fluid the animation is.",
    createdAt: '2023-01-16T10:15:00Z',
    username: 'sakura_fan',
    avatar: '/Rectangle 11.png',
  },
  {
    id: 3,
    userId: 3,
    animeId: 2,
    text: "At this point the anime is tourism not romcom.",
    createdAt: '2023-01-17T14:45:00Z',
    username: 'Gaurav',
    avatar: '/Rectangle 11.png',
  },
  {
    id: 4,
    userId: 4,
    animeId: 3,
    text: "At this point the anime is tourism not romcom.",
    createdAt: '2023-01-18T09:20:00Z',
    username: 'Gaurav',
    avatar: '/Rectangle 11.png',
  },
  {
    id: 5,
    userId: 5,
    animeId: 4,
    text: "At this point the anime is tourism not romcom.",
    createdAt: '2023-01-19T16:30:00Z',
    username: 'Gaurav',
    avatar: '/Rectangle 11.png',
  },
];

// Service functions
export const getAnimes = (): Anime[] => {
  return animes;
};

export const getAnimeById = (id: number): Anime | undefined => {
  return animes.find(anime => anime.id === id);
};

export const getAnimesByGenre = (genreName: string): Anime[] => {
  return animes.filter(anime => anime.genres.includes(genreName));
};

export const getEpisodesByAnimeId = (animeId: number): Episode[] => {
  return episodes.filter(episode => episode.animeId === animeId);
};

export const getCommentsByAnimeId = (animeId: number): Comment[] => {
  return comments.filter(comment => comment.animeId === animeId);
};

export const getTrendingAnimes = (): Anime[] => {
  // In a real app, this would be based on view counts or other metrics
  return animes.slice(0, 5);
};

export const getRecentlyAddedAnimes = (): Anime[] => {
  // In a real app, this would be based on release date
  return [...animes].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, 5);
};

export const getPopularAnimes = (): Anime[] => {
  // In a real app, this would be based on popularity metrics
  return [...animes].sort((a, b) => b.rating - a.rating).slice(0, 5);
}; 