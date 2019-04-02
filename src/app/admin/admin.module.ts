import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatTableModule,MatInputModule } from '@angular/material';
import { InstitutedetailsComponent } from './institutedetails/institutedetails.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MaterialModule } from '../shared/material.module';
import { AdminServiceService } from './admin-service.service';
<<<<<<< HEAD
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';
import { from } from 'rxjs';
import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent,
    ClassesRelatedComponent,DepartmentComponent, TimeperiodsComponent],

=======
import { DepartmentComponent } from './department/department.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { AcademicdetailsComponent } from './academicdetails/academicdetails.component';
import { DesignationComponent } from './designation/designation.component';
import { ClassesRelatedComponent } from './class/classes-related/classes-related.component';
import { from } from 'rxjs';
import { BloodgroupComponent } from './bloodgroup/bloodgroup.component';
import { ReligionComponent } from './religion/religion.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [DashboardComponent, AdminToolbarComponent, InstitutedetailsComponent, DepartmentComponent,CastDetailsComponent, ReligionComponent,DesignationComponent,ClassesRelatedComponent, UsertypeComponent, AcademicdetailsComponent, SettingsComponent, BloodgroupComponent,ReligionComponent,UsertypeComponent,AcademicdetailsComponent],
>>>>>>> 7ff424b9ca77e9536c74bdbb31997f264757d408

 imports: [

    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    AmazingTimePickerModule,
    MatListModule,MatTableModule,
    MaterialModule,FormsModule,MatInputModule,ReactiveFormsModule,

    MatListModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[DashboardComponent,AdminToolbarComponent,ClassesRelatedComponent,TimeperiodsComponent],
  providers:[AdminServiceService]
})
export class AdminModule { }
