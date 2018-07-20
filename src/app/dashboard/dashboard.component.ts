import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AddMovieDialogComponent } from '../shared/add-movie-dialog/add-movie-dialog.component';
import { MovieDetailDialogComponent } from '../shared/movie-detail-dialog/movie-detail-dialog.component';
import { MyMoviesService } from '../my-movies/my-movies.service';
import { DashboardService } from './dashboard.service';
import { Movie } from '../shared/movie.model';
import { MovieList } from '../shared/movie-list.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    DashboardService
  ]
})
export class DashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private moviesService: MyMoviesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  movies: any[];
  movieLists: MovieList[];
  topMovies: any[];

  ngOnInit() {
    this.dashboardService
      .getLatestTheaterMovies()
      .subscribe(res => {
        this.movies = res['results'];
      });

    this.dashboardService
      .getHighestRatedMovies()
      .subscribe(res => {
        this.topMovies = res['results'];
      });

    this.movieLists = this.moviesService.getMovieLists();
  }

  addMovieToList(movie: Movie): void {
    const dialogRef = this.dialog.open(AddMovieDialogComponent, {
      width: '550px',
      data: {
        selectedMovie: movie,
        lists: this.movieLists
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response === 'saved') {
        this.snackBar.open('Movie added!', 'OK', {
          duration: 2000
        });
      }
    });
  }

  openDetail(movie: Movie): void {
    this.dialog.open(MovieDetailDialogComponent, {
      width: '650px',
      data: {
        selectedMovie: movie
      },
      autoFocus: false
    });
  }

}
