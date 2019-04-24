import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService, Parsing} from '../../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Employeemodel } from 'src/app/shared/employeemodel';
import { Data } from 'src/app/shared/data';
import { Apiresponse } from 'src/app/shared/apiresponse';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  emplist : Apiresponse;
  buttoncontent:string;
  isLinear = false;
  blood : Data[];
  designation : Data[];
  users : Data[];
  statess : Data[];
  department : Data[];
  constructor(private service:AdminServiceService) {}
  id:number;
  ngOnInit() {
    this.gettingbloodgroup();
    this.gettingdesignation();
    this.gettingdepartments();
    this.gettingaccesstype();
    this.gettingstates();
    let myItem = localStorage.getItem('key');
    if(myItem == "" || myItem == null)
    {
      this.buttoncontent = "Save Employee Details";
    }
    else
    {
      this.buttoncontent = "Update";
      this.service.getparticularemployee(1,1,myItem).subscribe((data : Apiresponse) =>
      {
        this.emplist=data;
        console.log(this.emplist.Data);
        this.employee_code = data.Data[0].employee_code;
        this.first_name = data.Data[0].first_name;
        this.last_name = data.Data[0].last_name;
        this.date_of_birth= data.Data[0].date_of_birth;
        this.gender=data.Data[0].gender;
        this.phone_no=data.Data[0].phone_no;
        this.alternate_phone_no = data.Data[0].alternate_phone_no;
        this.email=data.Data[0].email;
        this.user_type=data.Data[0].user_type;
        this.designation_id=data.Data[0].designation_id;
        this.joining_date=data.Data[0].joining_date;
        this.qualification=data.Data[0].qualification;
        this.experience=data.Data[0].experience;
        this.departmant_id=data.Data[0].departmant_id;
        this.blood_group_id=data.Data[0].blood_group_id;
        this.present_address=data.Data[0].present_address;
        this.perminent_address=data.Data[0].perminent_address;
        this.state_id=data.Data[0].state_id;
        this.city=data.Data[0].city;
        this.pin_code=data.Data[0].pin_code;
        this.departmant_name=data.Data[0].departmant_name;
        this.designation_name=data.Data[0].designation_name;
        this.states=data.Data[0].states;
      });
      localStorage.removeItem('key');
    }
  }
  gettingbloodgroup()
  {
    let institute = {
      institution_id : 1,
      academic_id :1
    }
    this.service.getbloodgroup(institute).subscribe((data : Apiresponse) =>{
      this.blood = data.Data;
    });
  }
  gettingdepartments()
  {
    this.service.getdepartment(1,1).subscribe(data =>{
      this.department = data.Data;
    });
  }
  gettingdesignation()
  {
    let parsing : Parsing = {
      institution_id : 1,
      academic_id : 1
    }
    this.service.getdesignation(parsing).subscribe((data : Apiresponse) =>{
      this.designation = data.Data;
    });
  }
  gettingaccesstype()
  {
    this.service.getusers(1,1).subscribe((data : Apiresponse) =>{
      this.users = data.Data;
    });
  }
  gettingstates()
  {
    this.service.getStatesList().subscribe((data : Apiresponse) =>{
      this.statess = data.Data;
    });
  }
  employee_code:string=""; first_name:string="";      last_name:string="";          date_of_birth:Date;
  gender:string="";        phone_no:string="";        alternate_phone_no:string=""; email:string="";
  user_type:string="";     academic_id:1;             institution_id:1;             designation_id :Number;
  joining_date:Date;       qualification:string="";   experience:string="";         departmant_id:Number;
  blood_group_id:string;   present_address :string="";perminent_address:string="";  state_id:string=null; states:string="";
  city :string="";         pin_code:string="";        departmant_name:string="";    designation_name:string="";

  
  public OnSaveclick()
  {
    if(this.employee_code=="" || this.first_name=="" || this.last_name=="" || this.date_of_birth==null ||this.gender=="" || this.phone_no== "" || this.alternate_phone_no=="" || this.email=="" || this.blood_group_id==null ||
    this.user_type=="" || this.designation_id==null || this.joining_date==null || this.qualification=="" || this.experience=="" || this.departmant_id==null || this.blood_group_id==null ||
    this.present_address=="" || this.perminent_address=="" || this.state_id==null || this.city=="" || this.pin_code=="")
    {alert("Please fill all fields");}
    else
    {
      if(this.buttoncontent == "Save Employee Details")
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
          state_id:this.state_id,
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
      }
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
          state_id:this.state_id,
          city:this.city,
          pin_code:this.pin_code
        }
        this.service.updateemployee(insti).subscribe((res : JsResponse)=>{
          if(res.code == 200){
            alert("Updated Employee successfully");
          }else{
            alert(""+res.message);
          }
          console.log(res);
        });
      }
      this.employee_code=""; this.first_name=""; this.last_name=""; this.date_of_birth=null;
      this.gender=""; this.phone_no=""; this.alternate_phone_no=""; this.email="";
      this.user_type="";this.academic_id=null; this.institution_id=null; this.designation_id =null;
      this.joining_date=null; this.qualification=""; this.experience=""; this.departmant_id=null;
      this.blood_group_id=null; this.present_address =""; this.perminent_address=""; this.state_id=null;
      this.city =""; this.pin_code="";
    }
  }
}
