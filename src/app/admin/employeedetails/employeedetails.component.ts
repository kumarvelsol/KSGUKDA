import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { User} from 'src/app/shared/user';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  bloodgroup:any=[];
  institute_id=1;
  bloodgroup_name:string;
  constructor(private _formBuilder: FormBuilder,private service:AdminServiceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    let passing_institute = 
    {
      institution_id:1
    };
    this.service.getbloodgroup(passing_institute).subscribe(res => this.bloodgroup=res);
  }

}
