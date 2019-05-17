import { Component, OnInit } from '@angular/core';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Classexamresults } from 'src/app/shared/classexamresults';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-classexamresults',
  templateUrl: './classexamresults.component.html',
  styleUrls: ['./classexamresults.component.css']
})
export class ClassexamresultsComponent implements OnInit {
  dataSource; jsRes : JsResponse;
  clsexamreslist: Apiresponse;
  clsexamresdata : Data[];  clsdata :  Data[];
  examList :Apiresponse; examData :Data[];
  class_name : string = null ; exam_type :string = null; first_name : string;student_roll_no : number;
  exam_class_end_date = new Date(); ; exam_class_start_date = new Date();class_id:number; student_id : number;
  total_percetage : string; status : string; exam_id : number;
  displayedColumns: string[] = ['StdId','RollNo','Name','Pass/Fail','Percentage','Change'];
  
  constructor(private service1Service: AdminServiceService,private router: Router,private datePipe: DatePipe) { }

  ngOnInit() {
   this.gettingclasses();
  }
  public onclschanged(val){
    this.Getclasslist(val);
  }
  public Getclasslist(id : number){
    this.service1Service.getexamslist(1,1,id).subscribe((data : Apiresponse) =>{
      this.examData = data.Data;
    })
  }
  gettingclasses()
  {
    this.service1Service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  public onsaveclick()
  { 
    if(this.exam_id != null)
    {
      let a : Classexamresults = {
        institution_id : 1,
        academic_id : 1,
        class_name : this.class_name,
        exam_type :this.exam_type,
        student_id: this.student_id,
        student_roll_no: this.student_roll_no,
        first_name: this.first_name,
        class_id: this.class_id,
        status: this.status,
        total_percetage: this.total_percetage,
        exam_class_start_date:this.datePipe.transform(this.exam_class_start_date,"yyyy-MM-dd"), 
        exam_class_end_date: this.datePipe.transform(this.exam_class_end_date,"yyyy-MM-dd"),
        exam_id: this.exam_id,
      }
      this.service1Service.getexamclslist(a).subscribe((data: Apiresponse) => 
     {
       this.clsexamreslist = data;
       console.log(this.clsexamreslist);
       this.dataSource = new MatTableDataSource(this.clsexamreslist.Data);
      });
    }
    else {}
  }
  public OnChange(j:number,first_name:string,student_id: number,student_roll_no:number,class_name:string,exam_type:string,exam_class_start_date:Date,exam_class_end_date:Date,class_id:number,status:string,exam_id : number)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "clsname":this.class_name = class_name,
          "examtype":this.exam_type = exam_type,
          "name":this.first_name= first_name,
          "rollno":this.student_roll_no = student_roll_no,
          "fromdate" : this.exam_class_start_date = exam_class_start_date,
          "todate" : this.exam_class_end_date = exam_class_end_date,
          "clsid" : this.class_id = class_id,
          "stdid" : this.student_id = student_id,
          "st" : this.status = status,
          "examid" : this.exam_id = exam_id,
      }
    };
    console.log(this.class_name);console.log(this.status);
    this.router.navigate(['/StudentResult'],navigationExtras);
  } 
}
