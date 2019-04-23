import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { Data} from 'src/app/shared/data';
import { AdminServiceService,Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Classexammodel } from 'src/app/shared/classexammodel';
import { DatePipe } from '@angular/common';
import { Router,NavigationExtras } from '@angular/router';
import { Subjectexam } from 'src/app/shared/subjectexam';

@Component({
  selector: 'app-classexam',
  templateUrl: './classexam.component.html',
  styleUrls: ['./classexam.component.css']
})
export class ClassexamComponent implements OnInit {
  classexamlist:Apiresponse;
  clsdata :  Data[];
  examdata:Data[];
  buttoncontent="Save";
  dataSource;
  displayedColumns: string[] = ["exam_class_id", "exam_type","class_name", "exam_class_start_date","exam_class_end_date",'actions'];
  constructor(public service:AdminServiceService,private datePipe: DatePipe,private router: Router) { }
  exam_class_id:number=null;
  exam_type:string="";
  class_name:string="";
  exam_class_start_date = new Date();
  exam_class_end_date = new Date();
  class_id:number=null;
  exam_id:string=null;
  date:any;

  exam_subject_type : string ; 
  exam_subject_marks : string; 
  exam_subject_date = new Date(); 
  exam_subject_start_time : string; 
  exam_subject_end_time : string; 
  subject_id : number;

  ngOnInit() {
    this.gettingclasses();
    this.gettingexams();
    this.exam_class_start_date= null;this.exam_class_end_date=null;
    this.service.getclassexam(1,1,1).subscribe((data : Apiresponse) =>
    {
      this.classexamlist=data;
      this.dataSource = new MatTableDataSource(this.classexamlist.Data);
    });
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  gettingexams()
  {
    let parsing : Parsing = {
      institution_id : 1,
      academic_id : 1
    }
    this.service.getschoolexams(parsing).subscribe((data : Apiresponse) =>{
      this.examdata = data.Data;
    });
  }
  public onclick()
  {
    if(this.class_id == null || this.exam_id == null || this.exam_class_start_date == null || this.exam_class_end_date == null)
    {alert("Please fill all fields");}
    else
    {
      if(this.buttoncontent == "Save")
      {
        let user:Classexammodel = 
        {
          exam_class_id:this.exam_class_id,
          exam_class_start_date:this.datePipe.transform(this.exam_class_start_date,"yyyy-MM-dd"),
          exam_class_end_date:this.datePipe.transform(this.exam_class_end_date,"yyyy-MM-dd"),
          class_id:this.class_id,
          exam_id:this.exam_id ,
          institution_id:1,
          academic_id:1
        }
        this.service.createclassexam(user).subscribe((res:JsResponse)=>{
          if(res.code == 200)
          {
            alert("Created Class exam successfully");
          }
          else
          {
            alert(""+res.message);
          }
          this.service.getclassexam(1,1,1).subscribe((data : Apiresponse) =>
          {
            this.classexamlist=data;
            console.log(this.classexamlist.Data);
            this.dataSource = new MatTableDataSource(this.classexamlist.Data);
          });
        });
        this.class_id=null;this.exam_id=null;
        this.exam_class_start_date=null;this.exam_class_end_date=null;
      }
      else
      {
        let user:Classexammodel = 
        {
          exam_class_id : this.exam_class_id,
          exam_class_start_date:this.datePipe.transform(this.exam_class_start_date,"yyyy-MM-dd"),
          exam_class_end_date:this.datePipe.transform(this.exam_class_end_date,"yyyy-MM-dd"),
          class_id:this.class_id,
          exam_id:this.exam_id ,
          institution_id:1,
          academic_id:1
        }
        this.service.updateclassexam(user).subscribe((res:JsResponse)=>
        {
          if(res.code == 200)
          {
            alert("Updated Class exam successfully");
          }
          else
          {
            alert(""+res.message);
          }
          console.log(res);
          this.service.getclassexam(1,1,1).subscribe((data : Apiresponse) =>
          {
            this.classexamlist=data;
            console.log(this.classexamlist.Data);
            this.dataSource = new MatTableDataSource(this.classexamlist.Data);
          });
        });
        this.class_id=null;this.exam_id=null;
        this.exam_class_start_date=null;this.exam_class_end_date=null;
        this.buttoncontent="Save";
      }
    }
  }
  public onclear()
  {
    this.class_id=null;this.exam_id=null;
    this.exam_class_start_date=null;this.exam_class_end_date=null;
    this.buttoncontent="Save";
  }

  public editclick(i:number,exam_class_id:number,exam_id:string,class_id:number,exam_class_start_date:Date,exam_class_end_date:Date)
  {
      this.buttoncontent="Update";
      this.exam_class_id = exam_class_id;
      this.class_id =  class_id;
      this.exam_id = exam_id;
      this.exam_class_start_date = exam_class_start_date;
      this.exam_class_end_date = exam_class_end_date;
  }
  public RowSelectedd(row)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "clsname":this.class_name = row.class_name,
          "examtype":this.exam_type = row.exam_type,
          "clsexamid":this.exam_class_id=row.exam_class_id,
          "clsid":this.class_id = row.class_id,
          "exmid":this.exam_id = row.exam_id,
      }
  };
   // const navigation: NavigationExtras = {state: {class_id: row.class_id}};

    this.router.navigate(['/subjectexam'],navigationExtras);
    
    // this.exam_class_id=row.exam_class_id;
    // this.class_id=row.class_id;
    // this.exam_id=row.exam_id;
    // this.exam_class_start_date=row.exam_class_start_date;
    // this.exam_class_end_date=row.exam_class_end_date;
    // this.buttoncontent = "Update";
  }
}