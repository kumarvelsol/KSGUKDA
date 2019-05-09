import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Attendencemodel } from 'src/app/shared/attendencemodel';
import { JsResponse } from 'src/app/shared/jsresponse';

@Component({
  selector: 'app-postattendence',
  templateUrl: './postattendence.component.html',
  styleUrls: ['./postattendence.component.css']
})
export class PostattendenceComponent implements OnInit {
  clsdata :  Data[];
  subjdata : Data[];
  buttoncontent:string="";
  dataSource;
  displayedColumns: string[] = ["attendence_id","student_roll_no","first_name","admissionno","remarks","checkall"];
  class_id  : number; sub_allocation_id:number; Date:number;attendence_status:string;student_roll_no:number;time_table_id:number;
  first_name:string; admissionno:number;subject_id:number; remarks:string;checkall:boolean=true; Year :number;Month:number;student_id:number;
  attdata : Apiresponse;
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.gettingclasses();
    this.gettingsubjects();
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  gettingsubjects()
  {
    this.service.subjectlist(1,1).subscribe(data=>{
      this.subjdata = data.Data;
    });
  }
  selectOption(value) 
  {
    this.class_id =value;
  }
  post:any[];
  public onclearclick()
  {
    this.class_id =null;
    this.subject_id=null;
    this.Date=null;
    this.dataSource = null;
  }
  public getdetails()
  {
    this.service.getclassattendencelist(1,1,this.class_id ).subscribe(data=>{
      this.attdata = data;
      this.dataSource=new MatTableDataSource(this.attdata.Data); 
    });
  }
  public onsaveclick()
  {
    let attend : Attendencemodel =
    {
      institution_id : 1,
      academic_id : 1,
      class_id : this.class_id ,
      sub_allocation_id : this.sub_allocation_id,
      Year : this.Year,
      Month : this.Month,
      Date : this.Date,
      Attendence_status : this.attendence_status,
      student_id : this.student_id,
      time_table_id : this.time_table_id
    }
    

    this.service.createattendence(attend).subscribe((res:JsResponse)=>{
      if(res.code == 200)
      {
        alert("Created Attendence successfully");
      }
      else
      {
        alert(""+res.message);
      }
    });
  }
}
