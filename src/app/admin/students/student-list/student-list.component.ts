import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared/data';
import { AdminServiceService } from '../../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
val:string;
clsdata : Data[];
clsid:string;
studdata:Apiresponse;
mobile_no:string;
dataSource;
displayedColumns: string[] = ["admission_number","student_roll_no","first_name","last_name","guardian_name","guardian_mobile_no","actions"];
constructor(public service:AdminServiceService) { }
set string(data:string)
{
  data="kumar";
}
  ngOnInit() {
    console.log(this.val);
    this.gettingclasses();
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  selectOption(value) 
  {
    this.clsid=value;
    console.log(value);
    this.service.getclassstudent(1,1,value).subscribe(data=>{
      this.studdata=data;
      console.log(this.studdata);
      this.dataSource=new MatTableDataSource(this.studdata.Data); 
    });
  }
  public viewchangeclick(i:number,mobile_no:string)
  {
    this.mobile_no=mobile_no;
    localStorage.setItem('key', this.mobile_no);
  }
}
