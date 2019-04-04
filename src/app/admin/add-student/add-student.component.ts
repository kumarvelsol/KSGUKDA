import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, Form} from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Religion } from 'src/app/shared/religion';
import { ReligionList, ReligionData, PassInstitute } from '../religion/religion.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  isLinear = false;
  basicdetailsFormGroup: FormGroup;
  addressCommunicationForm: FormGroup;
  academicForm:FormGroup;
  parentsDetailsForm:FormGroup;
  guaradianDetails:FormGroup;
  religion:Religion[];
  religionlist:ReligionList;
  religiondata :ReligionData[];
  constructor(private _formBuilder: FormBuilder,public service:AdminServiceService) { }
  ngOnInit() {
    let passing_institute: PassInstitute = {
      institution_id : 1,
  }
    this.basicdetailsFormGroup = this._formBuilder.group({
      basicCtrl: ['', Validators.required]
    });
    this.addressCommunicationForm = this._formBuilder.group({
      addressCommunicationCtrl: ['', Validators.required]
    });
    this.academicForm=this._formBuilder.group({
      academicCtrl: ['', Validators.required]
    });
    this.parentsDetailsForm=this._formBuilder.group({
      parentsCtrl: ['', Validators.required]
    });
    this.guaradianDetails=this._formBuilder.group({
      guardianCtrl: ['', Validators.required]
    });
    this.service.getreligion(passing_institute).subscribe((data: ReligionList) => 
    {
      this.religionlist = data;
      console.log(this.religionlist);
     });
    }
  

}
