import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { Data} from 'src/app/shared/data';
import { AdminServiceService,Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Classexammodel } from 'src/app/shared/classexammodel';
import { DatePipe } from '@angular/common';

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
  displayedColumns: string[] = ["exam_class_id", "exam_type","class_name", "exam_class_start_date","exam_class_end_date"];
  constructor(public service:AdminServiceService,private datePipe: DatePipe) { }
  exam_class_id:number=null;
  exam_type:string="";
  class_name:string="";
  exam_class_start_date = new Date();
  exam_class_end_date = new Date();
  class_id:number=null;
  exam_id:number=null;
  date:any;
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
  public RowSelected(j:number,exam_class_id:number,exam_id:number,class_id:number,exam_class_start_date:Date,exam_class_end_date:Date)
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
    this.exam_class_id=row.exam_class_id;
    this.class_id=row.class_id;
    this.exam_id=row.exam_id;
    this.exam_class_start_date=row.exam_class_start_date;
    this.exam_class_end_date=row.exam_class_end_date;
    this.buttoncontent = "Update";
  }
}
