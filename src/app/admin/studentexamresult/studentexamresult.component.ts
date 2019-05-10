import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Data } from 'src/app/shared/data';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { AdminServiceService } from '../admin-service.service';
import { Studentexamresult } from 'src/app/shared/studentexamresult';

@Component({
  selector: 'app-studentexamresult',
  templateUrl: './studentexamresult.component.html',
  styleUrls: ['./studentexamresult.component.css']
})
export class StudentexamresultComponent implements OnInit 
{
  dataSource;
  studentid:number;
  studentmarkslist : Apiresponse; studentmarksdata : Data[];
  displayedColumns : string[] = ['Subject Name','ExamType','Exam Date','OutofMarks','Marks Gained','Percentage'];
  student_roll_no:number; first_name : string; exam_type : string; class_name : string;
  class_id : number; student_id : number; status : string; percentage : string;
  exam_class_start_date = new Date();exam_class_end_date = new Date();
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
  });
  console.log(this.class_id);console.log(this.exam_type);
  console.log(this.first_name);console.log(this.student_roll_no);   
  console.log(this.studentid);
   }
  ngOnInit() {
    // let a : Studentexamresult = {
    //   institution_id : 1,
    //   academic_id : 1 ,
    //   class_id : this.class_id,
    //   student_id  : this.student_id,
    //   class_name : this.class_name,
    //   exam_type :this.exam_type,
    //   student_roll_no: this.student_roll_no,
    //   first_name: this.first_name,
    //   status: this.status,
    //   percentage: this.percentage,
    // };
    this.service1Service.getstudentmarks(1,1,this.class_id,this.studentid).subscribe((data: Apiresponse) => 
   {
     this.studentmarkslist = data;
     console.log(this.studentmarkslist);
     this.dataSource = new MatTableDataSource(this.studentmarkslist.Data);
    });
  }
}
