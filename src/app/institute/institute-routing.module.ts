import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InstitutedetailsComponent} from './institutedetails/institutedetails.component';

const routes: Routes = [
  {path:'',
pathMatch:'full',
component:DashboardComponent},
{path:'institutedetails',pathMatch:'full',component:InstitutedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
