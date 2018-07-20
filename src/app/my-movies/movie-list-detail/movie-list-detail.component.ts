import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MovieList } from '../../shared/movie-list.model';
import { Movie } from '../../shared/movie.model';
import { MyMoviesService } from '../my-movies.service';
import { MovieDetailDialogComponent } from '../../shared/movie-detail-dialog/movie-detail-dialog.component';

@Component({
  selector: 'app-movie-list-detail',
  templateUrl: './movie-list-detail.component.html',
  styleUrls: ['./movie-list-detail.component.scss']
})
export class MovieListDetailComponent {
  @Input() activeList: MovieList;
  @Output() updated = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog,
    private movieService: MyMoviesService
  ) {}

  openDetail(movie: Movie): void {
    this.dialog.open(MovieDetailDialogComponent, {
      width: '650px',
      data: {
        selectedMovie: movie
      },
      autoFocus: false
    });
  }

  removeMovieFromList(movie: Movie) {
    this.movieService.removeMovieFromList(movie, this.activeList);
  }

  updateList(form: NgForm) {
    this.movieService.updateMovieList(this.activeList, form);
    this.updated.emit(true);
  }
}
