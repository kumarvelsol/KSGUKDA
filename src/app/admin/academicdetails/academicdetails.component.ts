import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Academicdetails } from 'src/app/shared/academicdetails';
import { MatTableDataSource} from '@angular/material';

export interface PassingInstituteid {
  institution_id:number;
}
export interface Academicdata {
  academic_id:number;
  academic_start_year:number;
  academic_start_month:number;
  academic_end_year:number;
  academic_end_month:number;
  academic_status:string;
  institution_id:number;
}

export interface Academiclist {
  code: number;
  message: string;
  Data: Academicdata[];
}

@Component({
  selector: 'app-academicdetails',
  templateUrl: './academicdetails.component.html',
  styleUrls: ['./academicdetails.component.css']
})
export class AcademicdetailsComponent implements OnInit {
  acde:Academicdetails[];
  academiclist:Academiclist;
  dataSource;
  displayedColumns: string[] = ["academic_id", "academic_start_year", "academic_start_month", "academic_end_year", "academic_end_month", "academic_status"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    let passing_institute:PassingInstituteid = 
    {
      institution_id:1
    };
    this.service.getacademic(passing_institute).subscribe((data : Academiclist) =>
    {
      this.academiclist = data;
      console.log(this.academiclist.Data);
      this.dataSource = new MatTableDataSource(this.academiclist.Data);
    });
  }
  academic_id:number=null;
  academic_start_year:number=null;
  academic_start_month:number=null;
  academic_end_year:number=null;
  academic_end_month:number=null;
  academic_status:string='';
  buttoncontent:string="Save";

  public saveclick()
  {
    if(this.academic_start_year==null || this.academic_start_month==null || this.academic_end_year==null || this.academic_end_month==null || this.academic_status=="")
    {alert("Please fill all fields");}
    else
    {
      let acd:Academicdetails = {
        academic_id: this.academic_id,
        academic_start_year:this.academic_start_year,
        academic_start_month:this.academic_start_month,
        academic_end_year:this.academic_end_year,
        academic_end_month:this.academic_end_month,
        academic_status:this.academic_status,
        institution_id:1
      }
      this.service.createacademic(acd).subscribe((res)=>{
        console.log(res);
        this.service.getacademic(acd).subscribe((data : Academiclist) =>
        {
        this.academiclist = data;
        console.log(this.academiclist.Data);
        this.dataSource = new MatTableDataSource(this.academiclist.Data);
        });
      });
      this.academic_start_year=null;this.academic_start_month=null;this.academic_end_year=null;
      this.academic_end_month=null;this.academic_status='';
      this.academic_status="Saved successfully";
    }
  }
  public RowSelected(row)
  {
    // this.buttoncontent="Modify";
    // this.academic_start_year=row.academic_start_year;
    // this.academic_start_month=row.academic_start_month;
    // this.academic_end_year=row.academic_end_year;
    // this.academic_end_month=row.academic_end_month;
    // this.academic_status=row.academic_status;
  }

}
