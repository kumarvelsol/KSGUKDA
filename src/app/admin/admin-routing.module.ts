import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../admin/dashboard/dashboard.component'
import {AdminToolbarComponent} from '../admin/admin-toolbar/admin-toolbar.component';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { AcademicdetailsComponent } from './academicdetails/academicdetails.component';
import {DesignationComponent} from './designation/designation.component';
import { SettingsComponent } from './settings/settings.component';
import {BloodgroupComponent} from './bloodgroup/bloodgroup.component';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';
import { StudentComponent } from './student/student.component';
import { SubjectTabBarComponent } from './subject/subject-tab-bar/subject-tab-bar.component';
import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { TimeandPeriodComponent } from '../timeand-period/timeand-period.component';
import { TimetableComponent } from '../timetable/timetable.component';

import { ClassTabBarComponent } from './class-tab-bar/class-tab-bar.component';
import { SchoolexamComponent } from './schoolexam/schoolexam.component';
// import { ClassteacherdetailsComponent } from './classteacherdetails/classteacherdetails.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'instituteDetails',component:InstitutedetailsComponent},
  {path:'academicdetails',component:AcademicdetailsComponent},
  {path:'settings',component:SettingsComponent},
  {path:'studentDetails',component:StudentComponent},
  {path:'TimePeriod',component:TimeperiodsComponent},


  {path:'classdetails',component:ClassTabBarComponent},
  
  {path:'TimePeriod',component:TimeandPeriodComponent},  

  {path:'EmployeeDetails',component:EmployeedetailsComponent},
 
  {path:'subjectdetails',component:SubjectTabBarComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'schoolexam',component:SchoolexamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
