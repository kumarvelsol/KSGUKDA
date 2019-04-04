import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Designation } from 'src/app/shared/designation';
import { MatPaginator,MatTableDataSource } from '@angular/material';

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
  designationlist:DesignationList;
  deptlist : DesignationData[];
  dlist : DeptData[];
  delist : DeptList;
  displayedColumns: string[] = ['designation_id','designation_code','designation_name'];
  constructor(private designationservice: AdminServiceService) { }
  ngOnInit() {
   this.designationservice.getdesignation().subscribe(data => 
   {
     this.deptlist = data.Data;
     console.log(this.designationlist);
     this.abDatasource = new MatTableDataSource(this.designationlist.Data);
    });
    this.designationservice.getdepartment().subscribe(data => this.dlist = data.Data)
      // {
      //   this.dlist = data.Data;
      //   console.log(this.delist);
      //   this.abDatasource = new MatTableDataSource(this.delist.Data);
      //  });
  }
  selected = null;
  buttoncontent:string = 'Save';
  designation_id : number ;
  designation_code :string =''
  designation_name :string = ''
  department_name : string = ''
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
          department_name : this.department_name
         }
        this.designationservice.updatedesignation(a).subscribe((res)=>{
          console.log("Updated");
          this.designationservice.getdesignation().subscribe((data: DesignationList) => 
          {
            this.designationlist = data;
            console.log(this.designationlist);
            this.abDatasource = new MatTableDataSource(this.designationlist.Data);
          });
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
          department_name : this.department_name
         }
        this.designationservice.createdesignation(a).subscribe((res)=>{
          console.log("Created");
          this.designationservice.getdesignation().subscribe((data: DesignationList) => 
          {
            this.designationlist = data;
            console.log(this.designationlist);
            this.abDatasource = new MatTableDataSource(this.designationlist.Data);
          });
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
