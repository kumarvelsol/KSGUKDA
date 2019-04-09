import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Bloodgroup } from 'src/app/shared/bloodgroup';
import { AdminServiceService } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Data } from 'src/app/shared/data';
import { Apiresponse } from 'src/app/shared/apiresponse';

export interface PassInstituteID{
  institution_id : number;
}

@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.component.html',
  styleUrls: ['./bloodgroup.component.css']
})
export class BloodgroupComponent implements OnInit {
  jsRes : JsResponse;
  blood_group_id : string;
  blood_group_code : string;
  blood_group_name : string;
  bloodgrouplist: Apiresponse;
  bloodgroupdata : Data[];
  abDataSource; 
  displayedColumns: string[] = ['blood_group_id','blood_group_code','blood_group_name'];
  buttoncontent: string = 'Save';
  constructor(private service1Service: AdminServiceService) { }

  ngOnInit() {
    let passing_institute: PassInstituteID = 
    {
        institution_id :1
    }
   this.service1Service.getbloodgroup(passing_institute).subscribe((data: Apiresponse) => 
   {
     this.bloodgrouplist = data;
     console.log(this.bloodgrouplist);
     this.abDataSource = new MatTableDataSource(this.bloodgrouplist.Data);
    });
  }
 public onsubmitclick()
 {
   if(this.buttoncontent == 'Save')
   {
    let a:Bloodgroup = {
      blood_group_id : this.blood_group_id,
      blood_group_name :this.blood_group_name,
      blood_group_code :this.blood_group_code,
      institution_id :1,
      academic_id : 1
      }
      this.service1Service.createbloodgroup(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("BloodGroup Added Succesfully.!");
          console.log("success");
        }else{ }
      });
      this.service1Service.getbloodgroup(a).subscribe((data: Apiresponse) => 
      {
        this.bloodgrouplist = data;
        console.log(this.bloodgrouplist);
        this.abDataSource = new MatTableDataSource(this.bloodgrouplist.Data);
      });
      this.blood_group_name ='';this.blood_group_code =null;
  }
   else if(this.buttoncontent == 'Update')
   {
    let a:Bloodgroup = {
      blood_group_id : this.blood_group_id,
      blood_group_name :this.blood_group_name,
      blood_group_code :this.blood_group_code,
      institution_id :1,
      academic_id : 1
      }
      this.service1Service.updatebloodgroup(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("BloodGroup Updated Succesfully.!");
        }else{ }
      });
      this.service1Service.getbloodgroup(a).subscribe((data: Apiresponse) => 
      {
        this.bloodgrouplist = data;
        console.log(this.bloodgrouplist);
        this.abDataSource = new MatTableDataSource(this.bloodgrouplist.Data);
      });
      this.buttoncontent = 'Save';
  }
  this.blood_group_name =''; this.blood_group_code =null;
}
public RowSelected(row)
 {
   this.blood_group_id = row.blood_group_id;
   this.blood_group_name = row.blood_group_name;
   this.blood_group_code = row.blood_group_code;
   this.buttoncontent = 'Update';
   console.log("row clicked",row);
 }
  }
