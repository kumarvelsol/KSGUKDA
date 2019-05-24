import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { MatTableDataSource } from '@angular/material';
import { Data } from 'src/app/shared/data';

export interface Months {
  id: number;
  month: string;
}
@Component({
  selector: 'app-viewattendence',
  templateUrl: './viewattendence.component.html',
  styleUrls: ['./viewattendence.component.css']
})
export class ViewattendenceComponent implements OnInit {

  buttoncontent:string="";
  viewattend : Apiresponse;
  months: Months[] = [
    {id: 1, month: 'January'},{id: 2, month: 'February'},
    {id: 3, month: 'March'},{id: 4, month: 'April'},
    {id: 5, month: 'May'},{id: 6, month: 'June'},
    {id: 7, month: 'July'},{id: 8, month: 'August'},
    {id: 9, month: 'September'},{id: 10, month: 'October'},
    {id: 11, month: 'November'},{id: 12, month: 'December'}
  ];
  clsdata :  Data[];
  subjdata : Data[];
  class_id:number;subject_id:number;
  dataSource;
  displayedColumns: string[] = ["attendence_id", "student_roll_no","first_name","class_name","Attendence_status","session"];
  first_name : string;
  attendence_id : number;
  constructor(public service:AdminServiceService) { }

  ngOnInit() 
  {
    this.buttoncontent = "Save";
    // this.service.getattendencelist(1,1).subscribe((data : Apiresponse) =>
    // {
    //   this.viewattend=data;
    //   this.dataSource = new MatTableDataSource(this.viewattend.Data);
    // });
    this.gettingclasses();
    //this.gettingsubjects();
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  
  // gettingsubjects()
  // {
  //   this.service.subjectlist(1,1).subscribe(data=>{
  //     this.subjdata = data.Data;
  //   });
  // }

  // onclearclick()
  // {
  //   this.class_id = null;
  //   this.subject_id = null;
  // }
  selectOption(value)
  {
    //console.log(value.class_id);
    this.class_id=value;
    this.service.getAttendenceList(1,1,this.class_id).subscribe((data : Apiresponse) =>
    {
      this.viewattend=data;
      this.dataSource = new MatTableDataSource(this.viewattend.Data);
    });
  }
}