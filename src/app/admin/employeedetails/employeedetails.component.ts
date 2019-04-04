import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { User} from 'src/app/shared/user';
import { MatTableDataSource} from '@angular/material';
import { Bloodgroup } from 'src/app/shared/bloodgroup';
import { BloodgroupList,BloodgroupData,PassInstituteID } from '../bloodgroup/bloodgroup.component';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  blood:BloodgroupData[];
  constructor(private _formBuilder: FormBuilder,private service:AdminServiceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.gettingbloodgroup();
  }
  gettingbloodgroup()
  {
    let institute : PassInstituteID= {
      institution_id : 1
    }
    this.service.getbloodgroup(institute).subscribe((data : BloodgroupList) =>{
      this.blood = data.Data;
    });
  }
  gettingdepartments()
  {
    
  }
  gettingdesignation()
  {

  }
}
