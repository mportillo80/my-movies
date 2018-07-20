import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MyMoviesService } from '../my-movies.service';
import { Subscription } from 'rxjs';
import { MovieList } from '../../shared/movie-list.model';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.scss']
})
export class MovieListsComponent implements OnInit {
  lists = [];
  listSubscription: Subscription;
  activeList: MovieList;

  constructor(
    public snackBar: MatSnackBar,
    private movieService: MyMoviesService
  ) {}

  ngOnInit() {
    this.listSubscription = this.movieService.listsChanged
      .subscribe(
        (movieLists: MovieList[]) => {
          this.lists = movieLists;
        }
      );
    this.lists = this.movieService.getMovieLists();
  }

  // after making a list addition, clear the active selection
  onUpdate(update: boolean) {
    if (update) {
      this.snackBar.open('List updated!', 'OK', {
        duration: 2000
      });
      this.activeList = null;
    }
  }

  removeList(list: MovieList) {
    this.movieService.removeMovieList(list);
    this.snackBar.open('List removed!', 'OK', {
      duration: 2000
    });
    this.activeList = null;
  }

  viewList(list: MovieList) {
    this.activeList = list;
  }

}
