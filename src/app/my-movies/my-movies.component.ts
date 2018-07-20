import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AddListDialogComponent } from '../shared/add-list-dialog/add-list-dialog.component';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent {

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.snackBar.open('List added!', 'OK', {
        duration: 2000
      });
    });
  }
}
