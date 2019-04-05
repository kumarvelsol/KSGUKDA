import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminServiceService, Parsing} from '../admin-service.service';
import { DesignationList,DesignationData } from '../designation/designation.component';
import { BloodgroupList,BloodgroupData,PassInstituteID } from '../bloodgroup/bloodgroup.component';
import { Userlist,Userdata } from '../usertype/usertype.component';
import { DepartmentList } from 'src/app/shared/DepartmentModels/departmentlist';
import { DepartmentData } from 'src/app/shared/DepartmentModels/departmentdata';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Employeemodel } from 'src/app/shared/employeemodel';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  isLinear = false;
  blood:BloodgroupData[];
  designation:DesignationData[];
  users:Userdata[];
  department:DepartmentData[];
  constructor(private service:AdminServiceService) {}

  ngOnInit() {
    this.gettingbloodgroup();
    this.gettingdesignation();
    this.gettingdepartments();
    this.gettingaccesstype();
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
    let parsing : Parsing = {
      institution_id : 1,
      academic_id : 1
    }
    this.service.getdepartment(parsing).subscribe((data : DepartmentList) =>{
      this.department = data.Data;
    });
  }
  gettingdesignation()
  {
    this.service.getdesignation().subscribe((data : DesignationList) =>{
      this.designation = data.Data;
    });
  }
  gettingaccesstype()
  {
    let passing_institute = 
    {
      institution_id:1,
      Academic_id:1
    }
    this.service.getusers(passing_institute).subscribe((data : Userlist) =>{
      this.users = data.Data;
    });
  }
  employee_code:string=""; first_name:string="";      last_name:string="";          date_of_birth:Date;
  gender:string="";        phone_no:string="";        alternate_phone_no:string=""; email:string="";
  user_type:string="";     academic_id:1;             institution_id:1;             designation_id :Number;
  joining_date:Date;       qualification:string="";   experience:string="";         departmant_id:Number;
  blood_group_id:Number;   present_address :string="";perminent_address:string="";  state:string="";
  city :string="";         pin_code:string="";

  
  public OnSaveclick()
  {
    if(this.employee_code=="" || this.first_name=="" || this.last_name=="" || this.date_of_birth==null ||this.gender=="" || this.phone_no== "" || this.alternate_phone_no=="" || this.email=="" || this.blood_group_id==null ||
    this.user_type=="" || this.designation_id==null || this.joining_date==null || this.qualification=="" || this.experience=="" || this.departmant_id==null || this.blood_group_id==null ||
    this.present_address=="" || this.perminent_address=="" || this.state=="" || this.city=="" || this.pin_code=="")
    {alert("Please fill all fields");}
    else
    {
      let insti: Employeemodel = 
      {
        employee_code:this.employee_code,
        first_name:this.first_name,
        last_name:this.last_name,
        date_of_birth:this.date_of_birth,
        gender:this.gender,
        phone_no:this.phone_no,
        alternate_phone_no:this.alternate_phone_no,
        email:this.email,
        user_type:this.user_type,
        academic_id:1,
        institution_id:1,
        designation_id:this.designation_id,
        joining_date:this.joining_date,
        qualification:this.qualification,
        experience:this.experience,
        departmant_id:this.departmant_id,
        blood_group_id:this.blood_group_id,
        present_address:this.present_address,
        perminent_address:this.perminent_address,
        state:this.state,
        city:this.city,
        pin_code:this.pin_code
      }
      this.service.createemployee(insti).subscribe((res : JsResponse)=>{
        if(res.code == 200){
          alert("Created Employee successfully");
        }else{
          alert(""+res.message);
        }
        console.log(res);
      });
      this.employee_code=""; this.first_name=""; this.last_name=""; this.date_of_birth=null;
      this.gender=""; this.phone_no=""; this.alternate_phone_no=""; this.email="";
      this.user_type="";this.academic_id=null; this.institution_id=null; this.designation_id =null;
      this.joining_date=null; this.qualification=""; this.experience=""; this.departmant_id=null;
      this.blood_group_id=null; this.present_address =""; this.perminent_address=""; this.state="";
      this.city =""; this.pin_code="";
    }
  }
}
