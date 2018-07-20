import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MyMoviesService } from '../../my-movies/my-movies.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: 'add-movie-dialog.component.html',
  styleUrls: ['add-movie-dialog.component.scss']
})
export class AddMovieDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddMovieDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private movieService: MyMoviesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveMovieToLists(lists) {
    const selectedOptions = lists.selectedOptions.selected.map(list => list.value);
    this.movieService.addMovieToLists(selectedOptions, this.data.selectedMovie);
    this.dialogRef.close('saved');
  }

}
