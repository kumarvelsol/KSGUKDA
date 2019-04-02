import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatTableModule,MatInputModule } from '@angular/material';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { MaterialModule } from '../shared/material.module';
import { AdminServiceService } from './admin-service.service';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent,
    ClassesRelatedComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,MatTableModule,
    MaterialModule,FormsModule,MatInputModule,ReactiveFormsModule
  ],
  exports:[DashboardComponent,AdminToolbarComponent,ClassesRelatedComponent],
  providers:[AdminServiceService]
})
export class AdminModule { }
