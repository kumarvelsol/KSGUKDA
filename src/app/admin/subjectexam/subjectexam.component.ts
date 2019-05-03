import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { JsResponse } from 'src/app/shared/jsresponse';
import { DatePipe } from '@angular/common';
import { Subjectexam } from 'src/app/shared/subjectexam';
import { Classexammodel } from 'src/app/shared/classexammodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjectexam',
  templateUrl: './subjectexam.component.html',
  styleUrls: ['./subjectexam.component.css']
})
export class SubjectexamComponent implements OnInit {
  abDatasource; jsRes : JsResponse;
  displayedColumns: string[] = ['exam_subject_type','exam_subject_marks','exam_subject_date','exam_subject_id','actions'];
  startDate = new Date(2019, 0, 1);
  clsdata :  Data[];
  examdata:Data[];
  examclassdata : Data[];subdata :Data[];
  subexamslist: Apiresponse;
  subexamsdata : Data[];
  buttoncontent : string = 'Save';
    exam_subject_type : string ; 
    exam_subject_marks : string; 
    exam_subject_date = new Date(); 
    exam_subject_start_time : string; 
    exam_subject_end_time : string;
    class_id : number;
    exam_id : string;
    exam_class_id : number; 
    subject_id : number;
    exam_subject_id : string;
    class_name : string = ""; exam_type :string="";
  constructor(private service1Service: AdminServiceService,private datePipe: DatePipe,private router: Router,private route: ActivatedRoute) {
    
    this.route.queryParams.subscribe(params => {
      this.class_id = params["clsid"];
      this.exam_id = params["exmid"];
      this.exam_class_id = params["clsexamid"];
      this.class_name = params["clsname"];
      this.exam_type = params["examtype"];
  });
}
  ngOnInit() {
    
    this.getsubjects();
    this.exam_subject_date = null; 
    var date = new Date();
   console.log(this.datePipe.transform(date,"yyyy-MM-dd")); 
    let passing_institute: Parsing = 
    {
        institution_id :1,
        academic_id :1
    }
   this.service1Service.getsubjectexams(passing_institute).subscribe((data: Apiresponse) => 
   {
     this.subexamslist = data;
     console.log(this.subexamslist);
     this.abDatasource = new MatTableDataSource(this.subexamslist.Data);
    });
  }
  getsubjects()
  {
    this.service1Service.subjectlist(1,1).subscribe((data:Apiresponse)=>{
      this.subdata = data.Data;
    });
  }
  public onsubmitclick(exam_subject_start_time:string,exam_subject_end_time:string)
  {
   if(this.buttoncontent == 'Save')
   {
      let a : Subjectexam =
      {
        exam_subject_type : this.exam_subject_type ,
        exam_subject_marks : this.exam_subject_marks,  
        exam_subject_date : this.datePipe.transform(this.exam_subject_date,"yyyy-MM-dd"),
        exam_subject_start_time : this.exam_subject_start_time,
        exam_subject_end_time : this.exam_subject_end_time,
        class_id : this.class_id,
        exam_id : this.exam_id,
        exam_class_id : this.exam_class_id, 
        institution_id : 1,
        academic_id : 1,
        subject_id : this.subject_id,
        exam_subject_id :this.exam_subject_id
      }
      this.service1Service.createsubjectexam(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          console.log(data);
          alert("SubjectExams Added Succesfully.!");
        }else{ }
      });
      console.log(this.exam_class_id);
      console.log(this.class_id);
      console.log(this.exam_id);console.log(this.exam_subject_date);console.log(this.exam_subject_end_time);console.log(this.exam_subject_marks);console.log(this.exam_subject_start_time);
      console.log(this.exam_subject_type);console.log(this.subject_id);
   }
   else if(this.buttoncontent == 'Update')
   {
    let b : Subjectexam =
    {
        exam_subject_type : this.exam_subject_type ,
        exam_subject_marks : this.exam_subject_marks,  
        exam_subject_date : this.datePipe.transform(this.exam_subject_date,"yyyy-MM-dd"),
        exam_subject_start_time : this.exam_subject_start_time,
        exam_subject_end_time : this.exam_subject_end_time,
        class_id : this.class_id,
        exam_id : this.exam_id,
        exam_class_id : this.exam_class_id, 
        institution_id : 1,
        academic_id : 1,
        subject_id : this.subject_id,
        exam_subject_id : this.exam_subject_id
    }
    this.service1Service.updatesubjectexam(b).subscribe((data:JsResponse)=>{
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        alert("SubjectExams Updated Succesfully.!");
      }else{ }
    });
    console.log(this.exam_class_id);
      console.log(this.class_id);
      console.log(this.exam_id);console.log(this.exam_subject_date);console.log(this.exam_subject_end_time);console.log(this.exam_subject_marks);console.log(this.exam_subject_start_time);
      console.log(this.exam_subject_type);console.log(this.subject_id);console.log("Examsubjectid",this.exam_subject_id);
    this.buttoncontent = 'Save';
   }
   else if(this.exam_subject_type == "" || this.exam_subject_marks == null|| this.exam_subject_date == null)
   {
    alert("Please fill all Fields!");
   }
   this.exam_subject_type = "";this.exam_subject_date = null; this.exam_subject_marks = null;this.class_id=null;this.exam_id="";this.subject_id=null;
   this.exam_subject_start_time = ""; this.exam_subject_end_time = "";
 }
 public RowSelected(row)
  {
    this.buttoncontent = 'Update';
    this.exam_subject_type = row.exam_subject_type ;
    this.exam_subject_marks = row.exam_subject_marks;  
    this.exam_subject_date = row.exam_subject_date;
    this.exam_subject_start_time =row.exam_subject_start_time;
    this.exam_subject_end_time = row.exam_subject_end_time;
    this.class_id = row.class_id;
    this.exam_id = row.exam_id;
    this.class_name = row.class_name;
    this.exam_type = row.exam_type;
    this.exam_class_id = row.exam_class_id;
    this.subject_id = row.subject_id;
    console.log("row clicked",row);
  }
  public RowSelectedd(j:number,class_id:number,exam_id:string,exam_subject_id:string,exam_class_id:number,class_name:string,exam_type:string,subject_id:number,exam_subject_type:string,exam_subject_marks:string,exam_subject_date:Date,exam_subject_start_time:string,exam_subject_end_time:string)
  {
    this.buttoncontent = 'Update';
    this.exam_subject_type = exam_subject_type ;
    this.exam_subject_marks = exam_subject_marks;
    this.exam_subject_date = exam_subject_date;
    this.exam_subject_start_time =exam_subject_start_time;
    this.exam_subject_end_time = exam_subject_end_time;
    this.class_id = class_id;
    this.exam_id = exam_id;
    this.class_name = class_name;
    this.exam_type = exam_type;
    this.exam_class_id = exam_class_id; 
    this.subject_id = subject_id;
    this.exam_subject_id = exam_subject_id;
    console.log("row clicked",j);
  }
}
