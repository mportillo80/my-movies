import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMoviesComponent } from './my-movies.component';
import { MyMoviesRoutingModule } from './my-movies-routing.module';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { SharedModule } from '../shared/shared.module';
import { MovieListDetailComponent } from './movie-list-detail/movie-list-detail.component';

@NgModule({
  declarations: [
    MyMoviesComponent,
    MovieListsComponent,
    MovieListDetailComponent
  ],
  imports: [
    CommonModule,
    MyMoviesRoutingModule,
    SharedModule
  ]
})
export class MyMoviesModule { }
