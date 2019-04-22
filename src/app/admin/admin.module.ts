import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ClassteacherdetailsComponent } from '../admin/classteacherdetails/classteacherdetails.component';
import { SubjectTabBarComponent } from './subject/subject-tab-bar/subject-tab-bar.component';
import { SubjectsComponent } from './subject/subjects/subjects.component';
import { SubjectAllocationComponent } from './subject/subject-allocation/subject-allocation.component';
import { TimeandPeriodComponent } from '../timeand-period/timeand-period.component';
import { TimetableComponent } from '../timetable/timetable.component';
import { TimetableupdateComponent } from '../timetableupdate/timetableupdate.component';
import { MothertongueComponent } from './mothertongue/mothertongue.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ClassTabBarComponent } from './class-tab-bar/class-tab-bar.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { ClassexamComponent } from './classexam/classexam.component';
import { FeeTypeComponent } from './fee/fee-type/fee-type.component';
import { FeeModeComponent } from './fee/fee-mode/fee-mode.component';
import { SchoolexamComponent } from './schoolexam/schoolexam.component';
import { ClassFeeDeclarationsComponent } from './fee/class-fee-declarations/class-fee-declarations.component';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent, 
    DepartmentComponent,ClassesRelatedComponent,BloodgroupComponent,
    CastDetailsComponent, ReligionComponent,DesignationComponent,
    UsertypeComponent, AcademicdetailsComponent, SettingsComponent, 
    SubjectTabBarComponent,SubjectsComponent,SubjectAllocationComponent,
    TimeperiodsComponent,TimeandPeriodComponent,TimetableComponent,FeeTypeComponent,FeeModeComponent,
    ClassTabBarComponent,TimetableupdateComponent,EmployeedetailsComponent,
    EmployeelistComponent,ClassteacherdetailsComponent, MothertongueComponent,
    AddStudentComponent,StudentListComponent,StudentComponent, 
    ClassexamComponent, SchoolexamComponent, ClassFeeDeclarationsComponent],
 imports: [
    CommonModule, AdminRoutingModule, LayoutModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule,MaterialModule, FormsModule,
    MatInputModule, ReactiveFormsModule, MatDialogModule,
    MatListModule, MatTableModule,MatSelectModule,
    MatTabsModule,CommonModule,AmazingTimePickerModule,
  ],
  exports:[DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent, 
    DepartmentComponent,ClassesRelatedComponent,BloodgroupComponent,
    CastDetailsComponent, ReligionComponent,DesignationComponent,
    UsertypeComponent, AcademicdetailsComponent, SettingsComponent, 
    SubjectTabBarComponent,SubjectsComponent,SubjectAllocationComponent,
    TimeperiodsComponent,TimeandPeriodComponent,TimetableComponent,FeeTypeComponent,FeeModeComponent,
    ClassTabBarComponent,TimetableupdateComponent,EmployeedetailsComponent,
    EmployeelistComponent,ClassteacherdetailsComponent, MothertongueComponent,
    AddStudentComponent,StudentListComponent,StudentComponent, 
    ClassexamComponent, SchoolexamComponent, ClassFeeDeclarationsComponent],
  entryComponents: [TimetableupdateComponent]
})
export class AdminModule { }