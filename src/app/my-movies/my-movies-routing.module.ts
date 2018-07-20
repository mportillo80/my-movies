import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyMoviesComponent } from './my-movies.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';

const myMoviesRoutes: Routes = [
  {
    path: 'my-movies',
    component: MyMoviesComponent,
    children: [
      { path: '', component: MovieListsComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myMoviesRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MyMoviesRoutingModule { }
