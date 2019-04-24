import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupServceService } from '../shared/signup-servce.service';
import { Classresponse } from '../class/classresponse';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  serRes:Classresponse;
  constructor(private signupService:SignupServceService) { }

  ngOnInit() 
  {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.signupService.signUpModelRef={
        institution_name         :'',
        institution_password:'',
        institution_address     : '',
        institution_email         :'',
        institution_phone_no  : null, 
        institution_mobile_no : null,
        contact_person_name:'',
        contact_person_mobile_no :null,
        institution_image:'',
        institution_code :''
        }
  }

  onSubmit(ss:NgForm)
  {

    console.log(ss.value);

    this.signupService.loginAdmin(ss.value.institution_code,ss.value.institution_password).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {        
        alert(this.serRes.message);
      }
      else
      {        
        alert(this.serRes.message);        
      }
    })
  }
}
