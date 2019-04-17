import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { Data } from '@angular/router';
import { Apiresponse } from 'src/app/shared/apiresponse';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee_id:string;employee_code:string;first_name:string;last_name:string;phone_no:string;user_type:string;department_name:string;designation_name:string;
  emplist : Data;
  empdata : Apiresponse[];
  dataSource;
  displayedColumns: string[] = ["employee_code", "first_name", "last_name","departmant_name","designation_name","phone_no","user_type","actions"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.service.getemployeelist(1,1).subscribe((data : Apiresponse) =>
    {
      this.emplist=data;
      this.dataSource = new MatTableDataSource(this.emplist.Data);
    });
  }
  empid:string="";
  public onchangeclick(i:number,employee_id:string)
  {
    this.employee_id=employee_id;
    //console.log(this.employee_id);
    //let key = this.employee_id;
    localStorage.setItem('key', this.employee_id);
    //let myItem = localStorage.getItem(key);
    //console.log(myItem);
  }
}
