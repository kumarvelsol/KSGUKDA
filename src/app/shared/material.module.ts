import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule,
  MatListModule,MatInputModule,MatCardModule,MatChipsModule,MatTabsModule,
  MatSnackBarModule,MatExpansionModule} from '@angular/material';
  import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule,
  MatListModule,MatInputModule,MatCardModule,MatChipsModule,MatTabsModule,
  MatSnackBarModule,MatExpansionModule,FlexLayoutModule
  ],
  exports:[MatToolbarModule,MatButtonModule,MatSidenavModule,MatIconModule,
    MatListModule,MatInputModule,MatCardModule,MatChipsModule,MatTabsModule,
    MatSnackBarModule,MatExpansionModule,FlexLayoutModule]
})
export class MaterialModule { }
