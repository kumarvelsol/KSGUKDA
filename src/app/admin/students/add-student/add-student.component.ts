import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, Form} from '@angular/forms';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Religion } from 'src/app/shared/ReligionModels/religion';
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
  mothertongue:Data[];
  stateData:Data[];
  datava:string;
  buttoncontent:string;
  studentlist:Apiresponse;

  constructor(private _formBuilder: FormBuilder,public service:AdminServiceService) { }
  ngOnInit() {
    this.getClasses();
    this.gettingbloodgroup();
    this.getMothertongue();
    this.getCaste();
    this.getReligion();
    this.getStates();
    console.log(this.datava);
    let myItem = localStorage.getItem('key');
    if(myItem == "" || myItem == null)
    {
      this.buttoncontent = "Save Student Details";
    }
    else
    {
      this.buttoncontent = "Update";
      this.service.getparticularstudent(1,1,myItem).subscribe((data : Apiresponse) =>
      {
        this.studentlist=data;
        console.log(this.studentlist.Data);
        this.admission_number=data.Data[0].admission_number;
        this.admission_date = data.Data[0].admission_date;
        this.first_name = data.Data[0].first_name;
        this.last_name = data.Data[0].last_name;
        this.date_of_birth = data.Data[0].date_of_birth;
        this.gender=data.Data[0].gender;
        this.mobile_no = data.Data[0].mobile_no;
        this.alternate_mobile_no = data.Data[0].alternate_mobile_no;
        this.email=data.Data[0].email;
        this.student_roll_no = data.Data[0].student_roll_no;
        this.blood_group_id=data.Data[0].blood_group_id;
        this.religion_id = data.Data[0].religion_id;
        this.cast_id = data.Data[0].cast_id;
        this.class_id = data.Data[0].class_id;
        this.nationality = data.Data[0].nationality;
        this.mother_tongue_id = data.Data[0].mother_tongue_id;
        this.present_address=data.Data[0].present_address;
        this.perminent_address=data.Data[0].perminent_address;
        this.state = data.Data[0].state;
        this.city=data.Data[0].city;
        this.pin_code=data.Data[0].pin_code;
        this.father_name = data.Data[0].father_name;
        this.father_mobile_no = data.Data[0].father_mobile_no;
        this.father_designation = data.Data[0].father_designation;
        this.mather_name = data.Data[0].mather_name;
        this.mother_mobile_no = data.Data[0].mother_mobile_no;
        this.mother_designation = data.Data[0].mother_designation;
        this.guardian_name = data.Data[0].guardian_name;
        this.guardian_mobile_no = data.Data[0].guardian_mobile_no;
        this.guardian_designation = data.Data[0].guardian_designation;
        this.guardian_address = data.Data[0].guardian_address;
        this.relation = data.Data[0].relation;
      });
      localStorage.removeItem('key');
    }
  }

  gettingbloodgroup()
  {
    this.service.getBloodGroupsLists('1').subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.bloodGroupData = data.Data;
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }
  get string():string
  {
    return this.datava;
  }
  getMothertongue()
  {
    this.service.getmothertongue(1,1).subscribe((data : Apiresponse) =>{
      if(data.code==200)
      {
      this.mothertongue = data.Data;
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
      }
      else{
        console.log("Error While Retrieving the response")
      }
    });
  }

  
    admission_number:string="";admission_date:string="";first_name:string="";last_name:string="";
    birth_place:string="";date_of_birth:Date=null;gender:string="";mobile_no:string="";
    alternate_mobile_no:string="";email:string="";photo:string="";student_roll_no:string="";
    institution_id:string="";academic_id:string="";blood_group_id:string="";religion_id:number=null;
    cast_id:number=null;class_id:number=null;nationality:string="";mother_tongue_id:number=null;
    present_address:string="";perminent_address:string="";state :string="";city:string="";
    pin_code:string="";father_name:string="";father_mobile_no :string="";father_designation:string="";
    mather_name:string="";mother_mobile_no:string="";mother_designation:string="";guardian_type:"";
    guardian_name:string="";guardian_mobile_no:string="";guardian_second_mobile_no:string="";
    guardian_address:string="";guardian_email:string="";relation:string="";guardian_designation:string="";
    guardian_state:string="";guardian_city:string="";guardian_pincode:string="";student_id:string="";

    public onAddStudentClick()
    {
      if(this.buttoncontent == "Save Student Details")
      {
        let std:Student={
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
          mother_tongue_id:Number(this.mother_tongue_id),
          class_id:Number(this.class_id),
        }
        console.log(std);
        this.service.addStudent(std).subscribe((res:Apiresponse)=>{
          if(res.code == 200){
            alert("Created Student successfully");
          }else{
            alert(""+res.message);
          }
          console.log(res);
          this.admission_number="";this.admission_date="";this.first_name="";this.last_name="";
          this.birth_place="";this.date_of_birth=null;this.gender="";this.mobile_no="";
          this.alternate_mobile_no="";this.email="";this.photo="";this.student_roll_no="";
          this.institution_id="";this.academic_id="";this.blood_group_id="";this.religion_id=null;
          this.cast_id=null;this.class_id=null;this.nationality="";this.mother_tongue_id=null;
          this.present_address="";this.perminent_address="";this.state ="";this.city="";
          this.pin_code="";this.father_name="";this.father_mobile_no ="";this.father_designation="";
          this.mather_name="";this.mother_mobile_no="";this.mother_designation="";this.guardian_type="";
          this.guardian_name="";this.guardian_mobile_no="";this.guardian_second_mobile_no="";
          this.guardian_address="";this.guardian_email="";this.relation="";this.guardian_designation="";
          this.guardian_state="";this.guardian_city="";this.guardian_pincode="";this.student_id="";
        });
      }
      else
      {
        let std:Student={
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
          mother_tongue_id:Number(this.mother_tongue_id),
          class_id:Number(this.class_id),
        }
        console.log(std);
        this.service.updatestudent(std).subscribe((res:Apiresponse)=>{
          if(res.code == 200){
            alert("Updated Student successfully");
          }else{
            alert(""+res.message);
          }
          console.log(res);
          this.admission_number="";this.admission_date="";this.first_name="";this.last_name="";
          this.birth_place="";this.date_of_birth=null;this.gender="";this.mobile_no="";
          this.alternate_mobile_no="";this.email="";this.photo="";this.student_roll_no="";
          this.institution_id="";this.academic_id="";this.blood_group_id="";this.religion_id=null;
          this.cast_id=null;this.class_id=null;this.nationality="";this.mother_tongue_id=null;
          this.present_address="";this.perminent_address="";this.state ="";this.city="";
          this.pin_code="";this.father_name="";this.father_mobile_no ="";this.father_designation="";
          this.mather_name="";this.mother_mobile_no="";this.mother_designation="";this.guardian_type="";
          this.guardian_name="";this.guardian_mobile_no="";this.guardian_second_mobile_no="";
          this.guardian_address="";this.guardian_email="";this.relation="";this.guardian_designation="";
          this.guardian_state="";this.guardian_city="";this.guardian_pincode="";this.student_id="";
        });
      } 
    }
    private checkValidations() :any
    {
     let  validation:boolean =false;
      if(this.first_name==""||this.last_name==""||this.date_of_birth==null||this.birth_place==""
      ||this.admission_number==""||this.admission_date==""||this.blood_group_id==""||this.nationality==""||
      this.mother_tongue_id==null||this.religion_id==null||this.cast_id==null||this.class_id==null||this.student_roll_no==""||
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