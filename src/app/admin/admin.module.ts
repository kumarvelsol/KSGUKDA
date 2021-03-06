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
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
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
import { SignupRequestFormComponent } from '../signup-request-form/signup-request-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ContactAdminComponent } from '../contact-admin/contact-admin.component';
import { ClassexamComponent } from './classexam/classexam.component';
import { FeeTypeComponent } from './fee/fee-type/fee-type.component';
import { FeeModeComponent } from './fee/fee-mode/fee-mode.component';
import { SchoolexamComponent } from './schoolexam/schoolexam.component';
import { PostattendenceComponent } from './attendence/postattendence/postattendence.component';
import { ViewattendenceComponent } from './attendence/viewattendence/viewattendence.component';
import { AttendenceTabBarComponent } from './attendence/attendence-tab-bar/attendence-tab-bar.component';
import { SubjectexamComponent } from './subjectexam/subjectexam.component';
import { ClassFeeDeclarationsComponent } from './fee/class-fee-declarations/class-fee-declarations.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { AddHolidaysComponent } from '../add-holidays/add-holidays.component';
import { MondayComponent } from '../monday/monday.component';
import { DatePipe } from '@angular/common';
import { ClassexamresultsComponent } from './classexamresults/classexamresults.component';
import { StudentexamresultComponent } from './studentexamresult/studentexamresult.component';
import { MarqueeTagComponent } from './marquee-tag/marquee-tag.component';
import { RegularfeeComponent } from './regularfee/regularfee.component';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { FeepaymentpreviewComponent } from './feepaymentpreview/feepaymentpreview.component';
import { PurchaseFeeComponent } from '../purchase-fee/purchase-fee.component';
import { PurchasefeeconfirmationComponent } from './purchasefeeconfirmation/purchasefeeconfirmation.component';
import { PurchasefeepaymentpreviewComponent } from './purchasefeepaymentpreview/purchasefeepaymentpreview.component';
@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent, 
    DepartmentComponent,ClassesRelatedComponent,BloodgroupComponent,
    CastDetailsComponent, ReligionComponent,DesignationComponent,
    UsertypeComponent, AcademicdetailsComponent, SettingsComponent, 
    SubjectTabBarComponent, SubjectsComponent,SubjectAllocationComponent,
    SignupRequestFormComponent, LoginFormComponent, ViewattendenceComponent,
    ContactAdminComponent, SubjectexamComponent,ClassFeeDeclarationsComponent,
    TimeperiodsComponent, TimeandPeriodComponent, PostattendenceComponent,
    TimetableComponent, AddNoticeComponent, AddeventsComponent,
    ClassTabBarComponent, AddHolidaysComponent, StudentexamresultComponent,
    TimetableupdateComponent, EmployeedetailsComponent, EmployeelistComponent,
    MothertongueComponent,  AddStudentComponent, StudentListComponent,
    StudentComponent, FeeTypeComponent, FeeModeComponent,
    ClassexamComponent, SchoolexamComponent, ClassteacherdetailsComponent,
    ClassexamresultsComponent, AttendenceTabBarComponent,
    MarqueeTagComponent, MondayComponent, RegularfeeComponent, FeepaymentComponent,  FeepaymentpreviewComponent,PurchaseFeeComponent, PurchasefeeconfirmationComponent, PurchasefeepaymentpreviewComponent],

  imports: [
    CommonModule, AdminRoutingModule,
    LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule,
    MatListModule, MatTableModule,
    MaterialModule, FormsModule,
    MatInputModule, ReactiveFormsModule,
    MatIconModule, MatDialogModule,
    MatSelectModule, MatTabsModule,
    AmazingTimePickerModule,
  ],
  exports:[DashboardComponent,AdminToolbarComponent,
    ClassesRelatedComponent,TimeperiodsComponent,
    SubjectsComponent,TimetableupdateComponent],
  entryComponents: [TimetableupdateComponent , ContactAdminComponent],
  providers: [DatePipe,AdminServiceService]
})
export class AdminModule { }