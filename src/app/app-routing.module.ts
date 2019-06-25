import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './institute/institute.module'
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'admin'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }