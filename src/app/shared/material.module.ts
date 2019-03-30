import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,
  MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
  MatExpansionModule} from '@angular/material';
  import {FlexLayoutModule} from '@angular/flex-layout';
  import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,
  MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
  MatExpansionModule,FlexLayoutModule,LayoutModule
  ],
  exports:[ MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,FlexLayoutModule,LayoutModule]
})
export class MaterialModule { }
