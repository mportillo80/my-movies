import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'my-movies', loadChildren: './my-movies/my-movies.module#MyMoviesModule' },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
