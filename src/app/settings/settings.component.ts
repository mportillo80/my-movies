import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MyMoviesService } from '../my-movies/my-movies.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(
    private movieService: MyMoviesService,
    public snackBar: MatSnackBar
  ) {}

  loadSampleLists() {
    this.movieService.loadSampleLists();
    this.snackBar.open('Sample lists added!', 'OK', {
      duration: 2000
    });
  }

}
