// angular

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// feature components and modules

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { MyMoviesModule } from './my-movies/my-movies.module';

// routing

import { AppRoutingModule } from './app-routing.module';

// services

import { MyMoviesService } from './my-movies/my-movies.service';
import { CoreModule } from './core/core.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    MyMoviesModule
  ],
  providers: [MyMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
