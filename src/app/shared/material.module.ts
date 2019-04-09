import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,MatStepperModule,
  MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
  MatExpansionModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,
  MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule, MatGridListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,FlexLayoutModule,LayoutModule,MatFormFieldModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule
  ],
  exports:[ MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,FlexLayoutModule,LayoutModule, MatFormFieldModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule]
})
export class MaterialModule { }