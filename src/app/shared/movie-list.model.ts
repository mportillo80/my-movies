import { Movie } from './movie.model';

export class MovieList {
  public name: string;
  public description: string;
  public movies: Movie[];

  constructor(name: string, description: string, movies: Movie[]) {
    this.name = name;
    this.description = description;
    this.movies = movies;
  }
}
