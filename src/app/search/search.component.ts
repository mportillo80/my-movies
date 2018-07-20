import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Movie } from '../shared/movie.model';
import { MovieList } from '../shared/movie-list.model';
import { AddListDialogComponent } from '../shared/add-list-dialog/add-list-dialog.component';
import { SearchService } from './search.service';
import { MyMoviesService } from '../my-movies/my-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  columnsToDisplay: string[] = ['select', 'position', 'title', 'release date', 'rating', 'vote count'];
  searchResults: Array<Movie> = [];
  movieLists: MovieList[];
  years = [];
  selection;

  constructor(
    private searchService: SearchService,
    private moviesService: MyMoviesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const initialSelection = [];
    const allowMultiSelect = true;

    this.selection = new SelectionModel<Movie>(allowMultiSelect, initialSelection);
    this.populateYearsDropDown();
    this.movieLists = this.moviesService.getMovieLists();
  }

  addToList(list: MovieList) {
    this.moviesService.addMoviesToList(list, this.selection.selected);
    this.snackBar.open('Movies added!', 'OK', {
      duration: 2000
    });
    this.selection.clear();
  }

  clearSelections(): void {
    this.selection.clear();
  }

  createNewList(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newList: MovieList = result;
        this.moviesService.addMoviesToList(newList, this.selection.selected);
        this.snackBar.open('List created and movies added!', 'OK', {
          duration: 2000
        });
        this.selection.clear();
      }
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.searchResults.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.searchResults.forEach(row => this.selection.select(row));
  }

  populateYearsDropDown() {
    const currYear = new Date().getFullYear();
    let calcYear = currYear;

    while (calcYear >= currYear - 99) {
      this.years.push(calcYear);
      calcYear--;
    }
  }

  searchMovies(form: NgForm) {
    this.selection.clear();
    this.searchService
      .searchMovies(form.value.name, form.value.year)
      .subscribe(res => {
        this.searchResults = res['results'];
      });

    form.resetForm();
  }
}
