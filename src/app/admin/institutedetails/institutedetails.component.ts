import { Component, OnInit } from '@angular/core';
import { debug } from 'util';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Response} from 'src/app/shared/response';
import { AdminServiceService } from '../admin-service.service';
import { InstituteInsert } from 'src/app/shared/instituteinsert';

export interface ParseInstituteId {
  institution_id : number;
}

@Component({
  selector: 'app-institutedetails',
  templateUrl: './institutedetails.component.html',
  styleUrls: ['./institutedetails.component.css']
})
export class InstitutedetailsComponent implements OnInit {
  Res : Response;
  institute : InstituteInsert[];
  constructor(public service:AdminServiceService) { }
  ngOnInit() {
    this.GetInstituteDetails();
  }
  In_name : string = "";
  In_code : string = "";
  In_email : string = "";
  In_phone : number;
  In_mobile : number;
  In_address : string = "";
  ad_name : string = "";
  ad_mobile : number;
  buttoncontent : string = "Add";
  public imagePath;
  imgURL: string;
  imageUrl : string = "/assets/images/uploadIcon.png";
  FileToUpload : File = null;
  public message: string;

  public onaddclick()
  {
    if(this.In_name == '' || this.In_code == '' || this.In_email == '' || this.In_phone == null || this.In_mobile == null || this.In_address == '' || this.ad_name == '' || this.ad_mobile == null)
    {
      alert("Please fill all fields");
    }
    else
    {
      if(this.buttoncontent == "Add")
      {
        let insti: InstituteInsert = {
          institution_name : this.In_name,
          institution_address : this.In_address,
          institution_email : this.In_email,
          institution_phone_no : this.In_phone,
          institution_mobile_no : this.In_mobile,
          contact_person_name : this.ad_name,
          contact_person_mobile_no : this.ad_mobile,
          institution_image : 'srikar.png',
          institution_code : this.In_code
        }
        this.service.createinstitute(insti).subscribe((res : JsResponse)=>{
          if(res.code == 200){
            alert("Created institute successfully");
          }else{
            alert(""+res.message);
          }
        });
        // this.service.getdepartment().subscribe((data: DepartmentData[]) => {this.departData = data;});
        this.In_name = null;this.In_code = null;this.In_address = null;this.In_email = null;
        this.In_phone = null;this.In_mobile = null;this.ad_mobile = null;this.ad_name = null;
      }
      else if(this.buttoncontent == "Update")
      {
        let insti_up: InstituteUpdate = {
          institution_address : this.In_address,
          institution_email : this.In_email,
          institution_phone_no : this.In_phone, 
          institution_mobile_no : this.In_mobile,
          contact_person_name : this.ad_name,
          contact_person_mobile_no : this.ad_mobile,
          institution_image : 'defaultimage.png',
          institution_code : this.In_code,
          institution_password : '',
          institution_id : 8,
        }
        this.service.updateinstitute(insti_up).subscribe((data : JsResponse) => {
          //this.respons=data;
          //this.jsRes = data;
          if(data.code==200)
          {
            alert("Institute Updated Succesfully.!");
          }else
          {
            alert(""+data.message);
          }
        });
      }
    }
  }
  public GetInstituteDetails(){
    this.service.getinstitute(1).subscribe(data =>{
      if(data.code == 200)
      {
        this.buttoncontent = "Update";
        this.In_name = data.Data[0].institution_name;
        this.In_code = data.Data[0].institution_code;
        this.In_address = data.Data[0].institution_address;
        this.In_email = data.Data[0].institution_email;
        this.In_mobile = data.Data[0].institution_mobile_no;
        this.In_phone = data.Data[0].institution_phone_no;
        this.ad_name = data.Data[0].contact_person_name;
        this.ad_mobile = data.Data[0].contact_person_mobile_no;
      }else{
        this.buttoncontent = "Add";
      }
    });
  }
  handleFileInput(file : FileList){
    this.FileToUpload = file.item(0);
    //show image preview
    var reader = new FileReader();
    reader.onload = (event:any)=> {
      this.imageUrl = event.target.result;
      this.imgURL = btoa(event.target.result);
    }
    reader.readAsDataURL(this.FileToUpload);
    alert(""+this.imgURL);
    this.message = this.imgURL;
  }
}