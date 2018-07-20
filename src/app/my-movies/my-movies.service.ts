import { Injectable } from '@angular/core';

import { MovieList } from '../shared/movie-list.model';

import { Subject } from 'rxjs';
import { Movie } from '../shared/movie.model';

@Injectable()
export class MyMoviesService {
  listsChanged = new Subject<MovieList[]>(); // what syntax is this? Specifically the less/greater than symbols

  private movieLists: MovieList[] = [
    new MovieList('Default List', 'This is the default list. Feel free to update.', [])
  ];

  constructor() {}

  addMovieList(movieList: MovieList) {
    this.movieLists.push(movieList);
    this.listsChanged.next(this.movieLists.slice());
  }

  addMovieToLists(movieLists: MovieList[], movie: Movie) {
    movieLists.forEach(list => {
      list.movies.push(movie);
    });

    this.listsChanged.next(this.movieLists.slice());
  }

  addMoviesToList(movieList: MovieList, movies: Movie[]) {
    const matchingList = this.movieLists
      .find(list => list.name === movieList.name);

    matchingList.movies = [...movies];

    this.listsChanged.next(this.movieLists.slice());
  }

  getMovieLists() {
    return this.movieLists.slice();
  }

  loadSampleLists() {
    this.movieLists = this.movieLists.concat(
      new MovieList('My Favorites', 'These are my favorite movies of all time.', []),
      new MovieList('Watch List', 'Need to check these out.', []),
      new MovieList('Best Superhero Movies', 'These are the best superhero movies to date.', [])
    );
  }

  removeMovieList(movieList: MovieList) {
    const matchingListIdx = this.movieLists
      .findIndex(list => list.name === movieList.name);

    this.movieLists.splice(matchingListIdx, 1);

    this.listsChanged.next(this.movieLists.slice());
  }

  removeMovieFromList(movie: Movie, activeList: MovieList) {
    const matchingIdx = activeList.movies
      .findIndex(m => m.title === movie.title);

    activeList.movies.splice(matchingIdx, 1);

    this.listsChanged.next(this.movieLists.slice());
  }

  updateMovieList(movieList: MovieList, updatedForm) {
    const matchingList = this.movieLists
      .find(list => list.name === movieList.name);

    matchingList.name = updatedForm.value.name;
    matchingList.description = updatedForm.value.description;

    this.listsChanged.next(this.movieLists.slice());
  }
}
