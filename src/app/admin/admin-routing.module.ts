import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../admin/dashboard/dashboard.component'
import {AdminToolbarComponent} from '../admin/admin-toolbar/admin-toolbar.component';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { AcademicdetailsComponent } from './academicdetails/academicdetails.component';
import {DesignationComponent} from './designation/designation.component';
import { SettingsComponent } from './settings/settings.component';
import {BloodgroupComponent} from './bloodgroup/bloodgroup.component';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';
import { SubjectTabBarComponent } from './subject/subject-tab-bar/subject-tab-bar.component';
import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { TimeandPeriodComponent } from '../timeand-period/timeand-period.component';
import { TimetableComponent } from '../timetable/timetable.component';
import { ClassTabBarComponent } from './class-tab-bar/class-tab-bar.component';
// import { ClassteacherdetailsComponent } from './classteacherdetails/classteacherdetails.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'instituteDetails',component:InstitutedetailsComponent},
  {path:'usertype',component:UsertypeComponent},
  {path:'academicdetails',component:AcademicdetailsComponent},
  {path:'designationDetails',component:DesignationComponent},
  {path:'settings',component:SettingsComponent},
  {path:'bloodgroupDetails',component:BloodgroupComponent},
  {path:'classdetails',component:ClassTabBarComponent},
  {path:'TimePeriod',component:TimeperiodsComponent},
  {path:'TimePeriod',component:TimeandPeriodComponent},  
  {path:'TimePeriod/time',component:TimeperiodsComponent},
  {path:'TimePeriod/ttable',component:TimetableComponent},
  {path:'TimePeriod',component:TimeperiodsComponent},
  {path:'EmployeeDetails',component:EmployeedetailsComponent},
  {path:'TimePeriod/time',component:TimeperiodsComponent},
  {path:'TimePeriod/ttable',component:TimetableComponent},
  {path:'subjectdetails',component:SubjectTabBarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
