import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { Schoolexam } from 'src/app/shared/schoolexam';
import { JsResponse } from 'src/app/shared/jsresponse';

@Component({
  selector: 'app-schoolexam',
  templateUrl: './schoolexam.component.html',
  styleUrls: ['./schoolexam.component.css']
})
export class SchoolexamComponent implements OnInit {
  abDatasource; jsRes : JsResponse;
  displayedColumns: string[] = ['exam_id','exam_type','exam_start_date','exam_end_date'];
  startDate = new Date(2019, 0, 1);
  schoolexamslist: Apiresponse;
  schoolexamsdata : Data[];
  buttoncontent : string = 'Save';
  exam_type: string; exam_start_date: Date;exam_end_date: Date; exam_id: number;
  constructor(private service1Service: AdminServiceService) { }

  ngOnInit() {
    let passing_institute: Parsing = 
    {
        institution_id :1,
        academic_id :1
    }
   this.service1Service.getschoolexams(passing_institute).subscribe((data: Apiresponse) => 
   {
     this.schoolexamslist = data;
     console.log(this.schoolexamslist);
     this.abDatasource = new MatTableDataSource(this.schoolexamslist.Data);
    });
  }
  public onsubmitclick()
 {
   if(this.buttoncontent == 'Save')
   {
      let a : Schoolexam =
      {
        exam_type: this.exam_type,
        exam_start_date: this.startDate,
        exam_end_date: this.exam_end_date,
        exam_id: this.exam_id,
        institution_id : 1,
        academic_id : 1,
      }
      this.service1Service.createschoolexam(a).subscribe((data : JsResponse) => {
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("SchoolExams Added Succesfully.!");
        }else{ }
      });
      this.service1Service.getschoolexams(a).subscribe((data: Apiresponse) => 
      {
        this.schoolexamslist = data;
        console.log(this.schoolexamslist);
        this.abDatasource = new MatTableDataSource(this.schoolexamslist.Data);
      });
   }
   else if(this.buttoncontent == 'Update')
   {
    let b : Schoolexam =
    {
      exam_type: this.exam_type,
      exam_start_date: this.startDate,
      exam_end_date: this.exam_end_date,
      exam_id: this.exam_id,
      institution_id : 1,
      academic_id : 1,
    }
    this.service1Service.updateschoolexam(b).subscribe((data : JsResponse) => {
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        alert("SchoolExams Updated Succesfully.!");
      }else{ }
    });
    this.service1Service.getschoolexams(b).subscribe((data: Apiresponse) => 
    {
      this.schoolexamslist = data;
      console.log(this.schoolexamslist);
      this.abDatasource = new MatTableDataSource(this.schoolexamslist.Data);
    });
   }
   this.exam_type = "";this.exam_start_date = null; this.exam_end_date = null;
 }
 public RowSelected(row)
  {
    this.buttoncontent = 'Update';
    this.exam_id = row.exam_id;
    this.exam_type = row.exam_type;
    this.exam_start_date = row.exam_start_date;
    this.exam_end_date = row.exam_end_date;
    console.log("row clicked",row);
  }
}
