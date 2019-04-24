import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';

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
  displayedColumns: string[] = ["sno","studentrollno","studentname","admissionno","remarks","checkall"];
  class_id:string;
  subject_id:string;
  date:Date;
  sno:string;
  studentrollno:string;
  studentname:string;
  admissionno:string;
  remarks:string;
  checkall:boolean;
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
  post:any[];
  public onclearclick()
  {
    this.class_id=null;
    this.subject_id=null;
    this.date=null;
  }
  public getdetails()
  {
    this.sno="1";
    this.studentrollno="101";
    this.studentname="Ram";
    this.admissionno="201";
    this.remarks="Good";
    this.checkall=true;
    this.post.push(this.sno,this.studentrollno,this.studentname,this.admissionno,this.remarks,this.checkall);
    this.dataSource = new MatTableDataSource(this.post);
    console.log(this.post);
  }
}
