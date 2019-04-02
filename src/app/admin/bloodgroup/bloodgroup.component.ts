import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Bloodgroup } from 'src/app/shared/bloodgroup';
import { AdminServiceService } from '../admin-service.service';

export interface Bloodgroupdetails {
  institution_id : number;
  blood_group_code : number;
  blood_group_id : number;
  blood_group_name: string;
  academic_id : 1;
}
export interface PassInstituteID{
  institution_id : number;
}
export interface BloodgroupData {
 blood_group_code : number;
  blood_group_id : number;
  blood_group_name: string;
}

export interface BloodgroupList {
  code: number;
  message: string;
  Data: BloodgroupData[];
}


@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.component.html',
  styleUrls: ['./bloodgroup.component.css']
})
export class BloodgroupComponent implements OnInit {

  blood_group_id : number;
  blood_group_code : number;
  blood_group_name : string;
  bloodgrouplist:BloodgroupList;
  bloodgroupdata :BloodgroupData[];
  ab :Bloodgroup[] = []; 
  abDataSource; 
  displayedColumns: string[] = ['blood_group_id','blood_group_code','blood_group_name'];
  buttoncontent: string = 'Save';
  constructor(private service1Service: AdminServiceService) { }

  ngOnInit() {
    let passing_institute: PassInstituteID = 
    {
        institution_id :1
    }
   this.service1Service.getbloodgroup(passing_institute).subscribe((data: BloodgroupList) => 
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
      this.service1Service.createbloodgroup(a).subscribe((res)=>{
      console.log("res");
      this.service1Service.getbloodgroup(a).subscribe((data: BloodgroupList) => 
      {
        this.bloodgrouplist = data;
        console.log(this.bloodgrouplist);
        this.abDataSource = new MatTableDataSource(this.bloodgrouplist.Data);
      });
      this.blood_group_name ='';
   });
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
      this.service1Service.updatebloodgroup(a).subscribe((res)=>{
        console.log(res);
      this.service1Service.getbloodgroup(a).subscribe((data: BloodgroupList) => 
      {
        this.bloodgrouplist = data;
        console.log(this.bloodgrouplist);
        this.abDataSource = new MatTableDataSource(this.bloodgrouplist.Data);
      });
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
