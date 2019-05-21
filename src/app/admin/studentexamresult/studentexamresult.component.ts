import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Data } from 'src/app/shared/data';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { AdminServiceService } from '../admin-service.service';
import { Studentexamresult } from 'src/app/shared/studentexamresult';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Classresponse } from 'src/app/class/classresponse';

@Component({
  selector: 'app-studentexamresult',
  templateUrl: './studentexamresult.component.html',
  styleUrls: ['./studentexamresult.component.css']
})
export class StudentexamresultComponent implements OnInit 
{
  dataSource;jsRes : JsResponse;

  serRes:Classresponse;

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
  outofMarks : string; totresult :any = {}; total_percetage : number = 0; tot : number = 0;institution_id :1
  marksGained : string; total_out_of_marks : number = 0; exam_id : number; sub_allocation_id :1;
  Percentages : string; result : any = {}; outmarks : number = 0; totmarks : number = 0;academic_id : 1
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
      this.exam_id = params["examid"];
  });
  console.log(this.exam_class_start_date);
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
      this.total_marks += +this.txtsubmarks[i];
      this.result[i] = data.Data[i].exam_subject_marks;
      this.percent[i] = ((+this.txtsubmarks[i]/this.result[i])*100);
      this.total_percetage = (this.total_marks/this.total_out_of_marks)*100;
      console.log(this.percent[i]);
    }
  });
}
  public onsaveclick()
  {

    if(this.listcount > 0){
      for (let i = 0; i < this.listcount; i++) {
        if(i == 0){
          this.marks = this.txtsubmarks[i];
          this.percentage = this.percent[i];
          this.status = 'Pass';
        }else{
          this.marks = this.marks + "," + this.txtsubmarks[i];
          this.percentage = this.percentage + "," + this.percent[i];
          this.status = 'Pass';
        }
      }
    }
    let a : Studentexamresult = {
      institution_id : 1,
      academic_id : 1,
      student_id: this.studentid,
      total_marks :this.total_marks,
      total_out_of_marks :this.total_out_of_marks,
      total_percetage :this.total_percetage,
      marks :this.marks,
      status: this.status,
      percentage: this.percentage,
      exam_id : this.exam_id,
      sub_allocation_id : 1,
      class_id : this.class_id,
    }
    
    // this.service1Service.addstudentmarks(1,1,this.class_id,this.student_id,this.exam_id,this.total_marks,this.total_out_of_marks,this.total_percetage,this.marks,this.status,this.percentage,1)
    // .subscribe((data : JsResponse) => {
    //   this.jsRes = data;
    //   if(this.jsRes.code==200)
    //   {
    //     console.log(data);
    //     alert("Marks Added Succesfully.!");
    //   }else{ }
    // });



    this.service1Service.addingExams(a).subscribe(data=>{
      this.serRes = data;     
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);     
      }
      else{          
        alert(this.serRes.message);          
      }
  })

    console.log("student_id",this.studentid); console.log("marks",this.marks);console.log("percentage",this.percentage); 
    console.log("total_marks",this.total_marks);console.log("total_out_of_marks",this.total_out_of_marks); console.log("exam_id",this.exam_id);
    console.log("total_percetage",this.total_percetage);console.log("status",this.status);console.log("class_id",this.class_id);
  }
}