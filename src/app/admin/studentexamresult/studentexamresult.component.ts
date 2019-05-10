import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Data } from 'src/app/shared/data';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { AdminServiceService } from '../admin-service.service';
import { Studentexamresult } from 'src/app/shared/studentexamresult';
import { JsResponse } from 'src/app/shared/jsresponse';

@Component({
  selector: 'app-studentexamresult',
  templateUrl: './studentexamresult.component.html',
  styleUrls: ['./studentexamresult.component.css']
})
export class StudentexamresultComponent implements OnInit 
{
  dataSource;jsRes : JsResponse;
  studentid:number;
  studentmarkslist : Apiresponse; studentmarksdata : Data[];
  displayedColumns : string[] = ['SubjectName','ExamType','ExamDate','OutofMarks','MarksGained','Percentage'];
  student_roll_no:number; first_name : string; exam_type : string; class_name : string;
  class_id : number; student_id : number; status : string; percentage : string;
  exam_class_start_date = new Date();exam_class_end_date = new Date();
  listcount : number;
  subjectName : string;
  examType : string; 
  examDate : string;
  txtsubmarks : any = {}; outofmarks : any = {};
   percent :any = {};
  outofMarks : string; totresult :any = {}; total_percetage : number = 0; tot : number = 0;
  marksGained : string; total_out_of_marks : number = 0; 
  Percentages : string; result : any = {}; outmarks : number = 0; totmarks : number = 0;
  total_marks : number; marks :string; 
  constructor(private service1Service: AdminServiceService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.class_name = params["clsname"];
      this.exam_type = params["examtype"];
      this.first_name = params["name"];
      this.student_roll_no = params["rollno"];
      this.exam_class_start_date = params["fromdate"];
      this.exam_class_end_date = params["todate"];
      this.class_id = params["clsid"];
      this.studentid=params["stdid"];
      this.status = params["st"];
  });
   }
  ngOnInit() {

    this.service1Service.getstudentmarks(1,1,this.class_id,this.studentid).subscribe((data: Apiresponse)=>{
      this.dataSource = new MatTableDataSource(data.Data);
      this.listcount = data.Data.length;
      for (let i = 0; i < data.Data.length; i++) {
        if(i == 0){   
          this.subjectName = data.Data[i].subject_name+"";
          this.examType = data.Data[i].exam_type+"";
          this.examDate = data.Data[i].exam_subject_date+"";
          this.outofMarks = data.Data[i].exam_subject_marks+"";
          this.marksGained = data.Data[i].marks+"";
          this.Percentages = data.Data[i].percentage+"";
        }else{
          this.subjectName = this.subjectName + "," + data.Data[i].subject_name;
          this.examType = this.examType + "," + data.Data[i].exam_type;
          this.examDate = this.examDate + "," + data.Data[i].exam_subject_date;
          this.outofMarks = this.outofMarks + "," + data.Data[i].exam_subject_marks;
          this.marksGained = this.marksGained + "," + data.Data[i].marks;
          this.Percentages = this.Percentages + "," + data.Data[i].percentage;
        }
        this.result[i] = data.Data[i].exam_subject_marks;
        console.log(i+" : "+this.result[i]);
        this.outmarks += data.Data[i].exam_subject_marks;
        this.txtsubmarks[i] = 0;this.percent[i]=0; this.outofmarks[i] = 0;
      }
      this.total_out_of_marks = this.outmarks;
      console.log(this.total_out_of_marks);
    });
    this.outmarks = 0;this.total_marks = 0;
    this.service1Service.getstudentmarks(1,1,this.class_id,this.studentid).subscribe((data: Apiresponse) => 
   {
     this.studentmarkslist = data;
     console.log(this.studentmarkslist);
     this.dataSource = new MatTableDataSource(this.studentmarkslist.Data);
    });
  }
  public onChange(event: number){
    console.log(this.txtsubmarks);
    this.total_marks = 0;
    this.service1Service.getstudentmarks(1,1,this.class_id,this.studentid).subscribe((data: Apiresponse)=>{
    this.dataSource = new MatTableDataSource(data.Data);
    for(let i = 0;i<this.listcount;i++)
    {
      this.tot = this.txtsubmarks[i];
      //console.log("tot",+this.txtsubmarks[i]);
      this.total_marks += +this.txtsubmarks[i];
      this.result[i] = data.Data[i].exam_subject_marks;
      this.percent[i] = (+this.txtsubmarks[i]/this.result[i])*100;
      //console.log(this.txtsubmarks[i]);console.log(this.result[i]);
      this.total_percetage = (this.total_marks/this.total_out_of_marks)*100;
      console.log(this.percent[i]);
    }
  });
}
  public onsaveclick()
  {
    let a : Studentexamresult = {

      institution_id : 1,
      academic_id : 1,
      student_id: this.studentid,
      total_marks :this.total_marks,
      total_out_of_marks :this.total_out_of_marks,
      total_percetage :this.total_percetage,
      marks :this.marks,
      status: this.status,
      percentage: this.percentage
    }
    if(this.listcount > 0){
      for (let i = 0; i < this.listcount; i++) {
        if(i == 0){
          this.marks = this.txtsubmarks[i];
          this.percentage = this.percent[i];
        }else{
          this.marks = this.marks + "," + this.txtsubmarks[i];
          this.percentage = this.percentage + "," + this.percent[i];
        }
      }
    }
    this.service1Service.addstudentmarks(a).subscribe((data : JsResponse) => {
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        console.log(data);
        alert("Marks Added Succesfully.!");
      }else{ }
    });
    console.log("stdid",this.studentid); console.log("marks",this.marks);console.log("percentage",this.percentage); 
    console.log("totmarks",this.total_marks);
    console.log("outmarks",this.total_out_of_marks); console.log("totper",this.total_percetage);
    console.log("status",this.status);
  }
}
