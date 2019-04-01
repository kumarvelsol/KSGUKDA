import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { MaterialModule } from '../shared/material.module';
import { AdminServiceService } from './admin-service.service';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule
  ],
  exports:[DashboardComponent,AdminToolbarComponent],
  providers:[AdminServiceService]
})
export class AdminModule { }
