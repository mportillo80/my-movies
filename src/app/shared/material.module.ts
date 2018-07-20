import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatChipsModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
