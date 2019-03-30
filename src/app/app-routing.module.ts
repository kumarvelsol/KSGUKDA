import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './institute/institute.module'
import { InstitutedetailsComponent } from './institute/institutedetails/institutedetails.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'institutehome'},
  {path:'institutehome',loadChildren:'./institute/institute.module#InstituteModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
