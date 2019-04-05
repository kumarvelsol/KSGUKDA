import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatDialogModule,MatButtonModule, MatSelectModule,MatSidenavModule, MatIconModule, MatTabsModule,MatListModule,MatTableModule,MatInputModule } from '@angular/material';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MaterialModule } from '../shared/material.module';
import { AdminServiceService } from './admin-service.service';
import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';
import { DepartmentComponent } from './department/department.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { AcademicdetailsComponent } from './academicdetails/academicdetails.component';
import { DesignationComponent } from './designation/designation.component';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';
import { from } from 'rxjs';
import { BloodgroupComponent } from './bloodgroup/bloodgroup.component';
import { ReligionComponent } from './religion/religion.component';
import { SettingsComponent } from './settings/settings.component';
import { ClassteacherdetailsComponent } from '../admin/classteacherdetails/classteacherdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { SubjectTabBarComponent } from './subject/subject-tab-bar/subject-tab-bar.component';
import { SubjectsComponent } from './subject/subjects/subjects.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TimeandPeriodComponent } from '../timeand-period/timeand-period.component';
import { TimetableComponent } from '../timetable/timetable.component';
import { TimetableupdateComponent } from '../timetableupdate/timetableupdate.component';
import { SubjectAllocationComponent } from './subject/subject-allocation/subject-allocation.component';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent, 
    DepartmentComponent,
    CastDetailsComponent, ReligionComponent,DesignationComponent,ClassesRelatedComponent,
     UsertypeComponent, AcademicdetailsComponent, SettingsComponent, 
    BloodgroupComponent,ReligionComponent,UsertypeComponent,AcademicdetailsComponent,
    SubjectTabBarComponent,SubjectsComponent,SubjectAllocationComponent,
  TimeperiodsComponent,
  TimeandPeriodComponent,
  TimetableComponent,ClassteacherdetailsComponent,TimetableupdateComponent,EmployeedetailsComponent],

imports: [

    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,

    MatIconModule,MatDialogModule,
    AmazingTimePickerModule,
    MatListModule,MatTableModule,
    MaterialModule,FormsModule,MatInputModule,ReactiveFormsModule,
    MaterialModule,FormsModule,
    MatInputModule,ReactiveFormsModule,
    MatSelectModule,MatTabsModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[DashboardComponent,AdminToolbarComponent,ClassesRelatedComponent,TimeperiodsComponent,SubjectsComponent,TimetableupdateComponent],
  providers:[AdminServiceService],
  entryComponents: [TimetableupdateComponent]
})
export class AdminModule { }
