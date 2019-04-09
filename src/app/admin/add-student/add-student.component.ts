import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, Form} from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Religion } from 'src/app/shared/Religion/religion';
import { PassInstitute } from '../religion/religion.component';
import { CastData } from 'src/app/shared/Cast/castdata';
import { CastList } from 'src/app/shared/Cast/castlist';
import { ReligionList } from 'src/app/shared/Religion/religionlist';
import { ReligionData } from 'src/app/shared/Religion/religiondata';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { Student } from 'src/app/shared/student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  isLinear = false;
  classData:Data[];
  bloodGroupData:Data[];
  casteData:Data[];
  religionData:Data[];
  stateData:Data[];

  constructor(private _formBuilder: FormBuilder,public service:AdminServiceService) { }
  ngOnInit() {
    let passing_institute: PassInstitute = {
      institution_id : 1,
    }
    this.getClasses();
    this.gettingbloodgroup();
    this.getCaste();
    this.getReligion();
    this.getStates();
  }
  gettingbloodgroup()
  {
    this.service.getBloodGroupsLists('1').subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.bloodGroupData = data.Data;
      console.log(this.bloodGroupData);
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }

  getReligion()
  {
    this.service.getReligionsLists('1').subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.religionData = data.Data;
      console.log(this.religionData);
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }
  getCaste()
  {
    this.service.getCastesLists('1').subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.casteData = data.Data;
      console.log(this.casteData);
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }

  getClasses()
  {
    this.service.getClassesList('1','1').subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.classData = data.Data;
      console.log(this.classData);
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }
  getStates()
  {
    this.service.getStatesList().subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.stateData = data.Data;
      console.log(this.stateData);
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }

  
  admission_number:string="";
    admission_date:string="";first_name:string="";last_name:string="";birth_place:string="";
    date_of_birth:string="";gender:string="";mobile_no:string="";alternate_mobile_no:string="";
    email:string="";photo:string="";student_roll_no:string="";institution_id:string="";
    academic_id:string="";blood_group_id:string="";religion_id:string="";
    cast_id:string="";class_id:string="";nationality:string="";mother_tongue:string="";present_address:string="";
    perminent_address:string="";state :string="";city:string="";pin_code:string="";
    father_name:string="";father_mobile_no :string="";father_designation:string="";
    mather_name:string="";mother_mobile_no:string="";mother_designation:string="";
    guardian_type:"";
    guardian_name:string="";guardian_mobile_no:string="";guardian_second_mobile_no:string="";
    guardian_address:string="";guardian_email:string="";relation:string="";guardian_designation:string="";
    guardian_state:string="";guardian_city:string="";guardian_pincode:string="";
    student_id:string="";

    private onAddStudentClick(){
      // if(this.checkValidations()==true)
      // {
        let std:Student={
          // admission_number:this.admission_number,
          // admission_date:new Date(this.admission_date),
          // first_name:this.first_name,
          // last_name:this.last_name,
          // date_of_birth:new Date(this.date_of_birth),
          // gender:this.gender,
          // nationality:this.nationality,
          // present_address:this.present_address,
          // perminent_address:this.perminent_address,
          // city:this.city,
          // state:this.state,
          // pin_code:this.pin_code,
          // mobile_no:this.mobile_no,
          // alternate_mobile_no:this.alternate_mobile_no,
          // email:this.email,
          // student_roll_no:this.student_roll_no,
          // father_name:this.father_name,
          // father_mobile_no:this.father_mobile_no,
          // father_designation:this.father_designation,
          // mather_name:this.mather_name,
          // mother_designation:this.mother_designation,
          // mother_mobile_no:this.mother_mobile_no,
          // guardian_name:this.guardian_name,
          // guardian_mobile_no:this.guardian_mobile_no,
          // guardian_designation:this.guardian_designation,
          // guardian_second_mobile_no:this.guardian_second_mobile_no,
          // relation:this.relation,
          // guardian_address:this.guardian_address,
          // institution_id:1,
          // academic_id:1,
          // religion_id:Number(this.religion_id),
          // cast_id:Number(this.cast_id),
          // blood_group_id:Number(this.blood_group_id),
          // class_id:Number(this.class_id),
          // mother_tongue_id:Number(this.mother_tongue),
          
          academic_id:1,
          institution_id:1,
          present_address:this.present_address,
          perminent_address:this.perminent_address,
          state:this.state,
          city:this.city,
          pin_code:this.pin_code,
          admission_number:Number(this.admission_number),
          admission_date:new Date(this.admission_date),
          first_name:this.first_name,
          last_name:this.last_name,
          date_of_birth:new Date(this.date_of_birth),
          gender:this.gender,
          mobile_no:this.mobile_no,
          alternate_mobile_no:this.alternate_mobile_no,
          email:this.email,
          student_roll_no:this.student_roll_no,
          nationality:this.nationality,
          father_name:this.father_name,
          father_mobile_no:this.father_mobile_no,
          father_designation:this.father_designation,
          mather_name:this.mather_name,
          mother_mobile_no:this.mother_mobile_no,
          mother_designation:this.mother_designation,
          guardian_name:this.guardian_name,
          guardian_mobile_no:this.guardian_mobile_no,
          guardian_second_mobile_no:this.guardian_second_mobile_no,
          guardian_address:this.guardian_address,
          guardian_email:this.guardian_email,
          relation:this.relation,
          guardian_designation:this.guardian_designation,
          blood_group_id:Number(this.blood_group_id),
          religion_id:Number(this.religion_id),
          cast_id:Number(this.cast_id),
          mother_tongue_id:Number(this.mother_tongue),
          class_id:Number(this.class_id),
        }
          console.log(std);
        this.service.addStudent(std).subscribe((data:Apiresponse)=>{
          console.log(data);
        })
      // }
      // else
      // {
      //   alert("Please Eter all the Required Values");
      // }
    }
    private checkValidations() :any
    {
     let  validation:boolean =false;
      if(this.first_name==""||this.last_name==""||this.date_of_birth==""||this.birth_place==""
      ||this.admission_number==""||this.admission_date==""||this.blood_group_id==""||this.nationality==""||
      this.mother_tongue==""||this.religion_id==""||this.cast_id==""||this.class_id==""||this.student_roll_no==""||
      this.present_address==""||this.perminent_address==""||this.city==""||this.state==""||this.pin_code==""||
      this.mobile_no==""||this.email==""||this.father_name==""||this.father_mobile_no==""||this.mather_name==""||
      this.mother_mobile_no==""||this.guardian_name==""||this.guardian_mobile_no==""||this.guardian_mobile_no==""||this.guardian_address==""
      )
      {
          validation=true;
      }
     return validation;
    }
}