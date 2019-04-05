import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Designation } from 'src/app/shared/designation';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { DepartmentList } from 'src/app/shared/DepartmentModels/departmentlist';
import { DepartmentData } from 'src/app/shared/DepartmentModels/departmentdata';

export interface Designationdetails {
  designation_id : number ;
    designation_code :string;
    designation_name :string;
    designation_description :string;
    institution_id : 1;
    academic_id : 1;
    departmant_id :1;
}
export interface DesignationData {
  designation_id : number ;
  designation_code :string;
  designation_name :string;
  designation_description :string;
  departmant_name :string;
}
export interface DeptData {
  departmant_id : number;
  departmant_name :string;
}
export interface DeptList {
  code: number;
  message: string;
  Data: DeptData[];
}
export interface DesignationList {
  code: number;
  message: string;
  Data: DesignationData[];
}

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  ab:Designation[];
  abDatasource;
  delist : DepartmentData[];
  desiglist : DesignationList;
  designationlist : DesignationData[];
  displayedColumns: string[] = ['designation_id','designation_code','designation_name'];
  constructor(private designationservice: AdminServiceService) { }
  ngOnInit() {
    let a : Designation = {
      institution_id :1,
      academic_id : 1,
      designation_id : this.designation_id,
      designation_code :this.designation_code,
      designation_name :this.designation_name,
      designation_description :this.designation_description,
      departmant_id :1,
      departmant_name : this.departmant_name
    }
    this.designationservice.getdepartment().subscribe((data : DepartmentList )=>
      {
        this.delist = data.Data;
      });
      this.designationservice.getdesignation(a).subscribe((data : DesignationList) =>
          {
            this.desiglist = data;
            this.abDatasource = new MatTableDataSource(this.desiglist.Data);
          })
  }
  selected = null;
  buttoncontent:string = 'Save';
  designation_id : number ;
  designation_code :string =''
  designation_name :string = ''
  departmant_name : string = ''
  designation_description :string = ''
  institution_id : 1
  academic_id : 1
  departmant_id =1

public onsubmitclick()
 {
  
   if(this.designation_name == '' || this.designation_code == '')
      {alert("Please enter Valid Data") }
    else
    {
      if(this.buttoncontent == 'Modify')
      { 
        let a:Designation = {
          designation_id : this.designation_id ,
          designation_code :this.designation_code,
          designation_name :this.designation_name,
          designation_description :this.designation_description,
          institution_id : 1,
          academic_id : 1,
          departmant_id :1,
          departmant_name : this.departmant_name
         }
        this.designationservice.updatedesignation(a).subscribe((res)=>{
          console.log("Updated");
          this.designationservice.getdepartment().subscribe((data: DepartmentList) => 
          {
            this.delist = data.Data;
            
          });
          this.designationservice.getdesignation(a).subscribe((data : DesignationList) =>
          {
            this.desiglist = data;
            this.abDatasource = new MatTableDataSource(this.desiglist.Data);
          })
          this.designation_code =''; this.designation_name = ''; this.designation_description = '';
        });
        this.buttoncontent = 'Save';
      }
      else
      {
        let a:Designation = {
          designation_id : this.designation_id ,
          designation_code :this.designation_code,
          designation_name :this.designation_name,
          designation_description :this.designation_description,
          institution_id : 1,
          academic_id : 1,
          departmant_id :1,
          departmant_name : this.departmant_name
         }
        this.designationservice.createdesignation(a).subscribe((res)=>{
          console.log("Created");
          this.designationservice.getdepartment().subscribe((data: DepartmentList) => 
          {
            this.delist = data.Data;
          });
          this.designationservice.getdesignation(a).subscribe((data : DesignationList) =>
          {
            this.desiglist = data;
            this.abDatasource = new MatTableDataSource(this.desiglist.Data);
          })
          this.designation_code =''; this.designation_name = ''; this.designation_description = '';

        console.log(this.designation_id);
        console.log(this.designation_code);
        console.log(this.designation_name);
        console.log(this.designation_description);
        this.buttoncontent = 'Save';
      });
    }
 }
}
public RowSelected(row)
 {
   this.buttoncontent = 'Modify';
   this.designation_id = row.designation_id;
   this.departmant_id = row.departmant_id;
   this.designation_code = row.designation_code;
   this.designation_name = row.designation_name;
   this.designation_description = row.designation_description;
   console.log("row clicked",row);
 }
}
