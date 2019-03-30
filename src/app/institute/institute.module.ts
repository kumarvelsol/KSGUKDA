import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';

@NgModule({
  declarations: [DashboardComponent, InstitutedetailsComponent],exports: [DashboardComponent],
  imports: [
    CommonModule,
    InstituteRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class InstituteModule { }
