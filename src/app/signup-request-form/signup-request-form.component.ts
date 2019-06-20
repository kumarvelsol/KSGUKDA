import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupServceService } from '../shared/signup-servce.service';
import { Classresponse } from '../class/classresponse';
import { MatDialog } from '@angular/material';
import { ContactAdminComponent } from '../contact-admin/contact-admin.component';

@Component({
  selector: 'app-signup-request-form',
  templateUrl: './signup-request-form.component.html',
  styleUrls: ['./signup-request-form.component.css']
})
export class SignupRequestFormComponent implements OnInit 
{
  serRes:Classresponse;
  constructor(public signupService:SignupServceService , public dialog: MatDialog) { }

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
        institution_address     : '',
        institution_email         :'',
        institution_phone_no  : null, 
        institution_mobile_no : null,
        contact_person_name:'',
        contact_person_mobile_no :null,
        institution_password:'',
        institution_image:'',
        institution_code :''
        }
  }
  onSubmit(signupRequest:NgForm)
  {
    if(signupRequest.value.institution_email == '' || signupRequest.value.institution_name == '' || 
      signupRequest.value.institution_address == '' ||
       signupRequest.value.institution_phone_no == null || 
       signupRequest.value.institution_mobile_no == null ||
        signupRequest.value.contact_person_mobile_no == null )
    {
      alert("please enter all values");      
    }
    else
    {
      this.signupService.addSignUp(signupRequest.value).subscribe(data=>{
        this.serRes=data;
        if(this.serRes.code==200)
        {
          //console.log(signupRequest.value);
          //alert(this.serRes.message);
  
          this.dialog.open(ContactAdminComponent);
        }
        else
        {        
          alert(this.serRes.message);    
        }
      })
    }
    
    
  }
}
