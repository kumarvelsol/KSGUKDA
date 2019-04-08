import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { AdminServiceService,Parsing } from 'src/app/admin/admin-service.service';

export interface Employeedata {
  empolyee_id:number,
  employee_code:string,
  first_name:string,
  last_name:string,
  phone_no:string,
  user_type:string,
  academic_id:1,
  institution_id:1,
  designation_id :Number,
  departmant_id:Number,
  department_name:string,
  designation_name:string
}

export interface EmployeeList {
  code: number;
  message: string;
  Data: Employeedata[];
}
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee_id:number;employee_code:string;first_name:string;last_name:string;phone_no:string;user_type:string;department_name:string;designation_name:string;
  emplist : EmployeeList;
  empdata : Employeedata[];
  dataSource;
  displayedColumns: string[] = ["employee_code", "first_name", "last_name","departmant_name","designation_name","phone_no","user_type","actions"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    let passing_institute:Parsing = 
    {
      institution_id:1,
      academic_id:1
    }
    this.service.getemployee(passing_institute).subscribe((data : EmployeeList) =>
    {
      this.emplist=data;
      console.log(this.emplist.Data);
      this.dataSource = new MatTableDataSource(this.emplist.Data);
    });
  }
  public onchangeclick(i:number,employee_id:number)
  {
    this.employee_id=employee_id;
    //console.log(this.employee_id);
    //localStorage.setItem("emplistt",JSON.stringify(this.list));
  }
}
