import { TGenre } from './TGenre';

export interface IFilm {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: TGenre;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
}
