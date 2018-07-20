import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddListDialogComponent } from './add-list-dialog/add-list-dialog.component';
import { AddMovieDialogComponent } from './add-movie-dialog/add-movie-dialog.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MovieDetailDialogComponent } from './movie-detail-dialog/movie-detail-dialog.component';

@NgModule({
  declarations: [
    AddListDialogComponent,
    AddMovieDialogComponent,
    MovieDetailDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  entryComponents: [
    AddListDialogComponent,
    AddMovieDialogComponent,
    MovieDetailDialogComponent
  ]
})
export class SharedModule {}
