import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { MyMoviesService } from '../../my-movies/my-movies.service';
import { MovieList } from '../movie-list.model';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: 'add-list-dialog.component.html',
  styleUrls: ['add-list-dialog.component.scss']
})
export class AddListDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddListDialogComponent>,
    private movieService: MyMoviesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveList(form: NgForm) {
    const list = new MovieList(form.value.name, form.value.description, []);
    this.movieService.addMovieList(list);
    this.dialogRef.close(list);
  }

}
