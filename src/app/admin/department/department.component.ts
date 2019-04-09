import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { JsResponse } from 'src/app/shared/jsresponse';
import { DepartmentDetails} from 'src/app/shared/DepartmentModels/departmentdetails';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  providers: [AdminServiceService],
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  jsRes : JsResponse;
  department : Department[];
  
  displayedColumns = ['departmant_id', 'departmant_name', 'department_code', 'department_description','actions'];
  dataSource;
  constructor(public service:AdminServiceService) { }
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor() { }
  ngOnInit() {
    this.GetDepartmentDetails();
  }
  name : string = "";
  code : string = "";
  description : string = "";
  
  buttoncontent:string = "Add";
  public ondepartmentclick()
  {
    if(this.name == "" || this.code == "")
    {
      alert("Please fill all fields");
    }
    else
    {
      if(this.buttoncontent == "Add")
      {
        let depart: Department = {
          department_code:this.code,
          departmant_name:this.name,
          department_description:this.description,
          institution_id : 1,
          academic_id : 1
        }
        this.service.createdepartment(depart).subscribe((data : JsResponse) => {
          //this.respons=data;
          this.jsRes = data;
          if(this.jsRes.code == 200)
          {
            alert("Department Added Succesfully.!");
            this.onclearclick();
          }else{
            alert(""+this.jsRes.message);
          }
        });
        // this.service.getdepartment().subscribe((data: DepartmentData[]) => {this.departData = data;});
        this.code = null;this.name = null;this.description = null;
      }
      else if(this.buttoncontent == "Update")
      {
        let depart_details: DepartmentDetails = {
          departmant_id : this.id,
          institution_id : 1,
          academic_id : 1,
          department_code : this.code,
          department_description : this.description,
          departmant_name : this.name,
        }
        this.service.updatedepartment(depart_details).subscribe((data : JsResponse) => {
          //this.respons=data;
          this.jsRes = data;
          if(this.jsRes.code == 200)
          {
            alert("Department Updated Succesfully.!");
            this.onclearclick();
          }else{
            alert(""+this.jsRes.message);
          }
        });
      }
    }
  }
  index : number;
  id : number;
  public startEdit(i: number, departmant_id: number, departmant_name: string, department_code: string, department_description: string) {
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    this.id = departmant_id;
    this.name = departmant_name;
    this.code = department_code;
    this.description = department_description;
    this.buttoncontent = "Update";
    console.log(this.id);
    // const dialogRef = this.dialog.open(EditDialogComponent, {
    //   data: {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
    // });
  }
  public GetDepartmentDetails(){
    this.service.getdepartment(1,1).subscribe(data => 
    {
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  public onclearclick(){
    this.name = "";
    this.code = "";
    this.description = "";
    this.buttoncontent = "Add";
    this.GetDepartmentDetails();
    this.id = 0;
  }
}