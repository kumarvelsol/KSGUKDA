import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { Designation } from 'src/app/shared/designation';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  ab:Designation[];
  abDatasource;
  jsRes : JsResponse;
  delist : Data[];
  desiglist : Apiresponse;
  designationlist : Data[];
  displayedColumns: string[] = ['designation_id','designation_code','designation_name','actions'];
  constructor(public designationservice: AdminServiceService) { }
  ngOnInit() {
    let a:Designation = {
      designation_id : this.designation_id ,
      designation_code :this.designation_code,
      designation_name :this.designation_name,
      designation_description :this.designation_description,
      institution_id : 1,
      academic_id : 1,
      departmant_id : this.deptselected,
      departmant_name : this.departmant_name
    }
    this.designationservice.getdepartment(1,1).subscribe(data =>
    {
      this.delist = data.Data;
    });
    this.designationservice.getdesignation(a).subscribe((data : Apiresponse) =>
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
      if(this.buttoncontent == 'Update')
      { 
        let a:Designation = {
          designation_id : this.designation_id ,
          designation_code :this.designation_code,
          designation_name :this.designation_name,
          designation_description :this.designation_description,
          institution_id : 1,
          academic_id : 1,
          departmant_id : this.deptselected,
          departmant_name : this.departmant_name
         }
         this.designationservice.updatedesignation(a).subscribe((data : JsResponse) => {
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert("Designation Updated Succesfully.!");
          }else{
            alert(""+this.jsRes.message);
          }
        });
          this.designationservice.getdesignation(a).subscribe((data : Apiresponse) =>
          {
            this.desiglist = data;
            this.abDatasource = new MatTableDataSource(this.desiglist.Data);
          })
          this.designation_code =''; this.designation_name = ''; this.designation_description = '';
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
          departmant_id : this.deptselected,
          departmant_name : this.departmant_name
         }
         this.designationservice.createdesignation(a).subscribe((data : JsResponse) => {
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert("Designation Added Succesfully.!");
          }else{}
        });
          this.designationservice.getdesignation(a).subscribe((data : Apiresponse) =>
          {
            this.desiglist = data;
            this.abDatasource = new MatTableDataSource(this.desiglist.Data);
          })
          this.designation_code =''; this.designation_name = ''; this.designation_description = '';
        this.buttoncontent = 'Save';
    }
 }
}
deptselected : number;
public RowSelected(row)
 {
   this.buttoncontent = 'Update';
   this.designation_id = row.designation_id;
   this.deptselected = row.departmant_id;
   this.designation_code = row.designation_code;
   this.designation_name = row.designation_name;
   this.designation_description = row.designation_description;
   console.log("row clicked",row);
 }
 public RowSelectedd(j:number,designation_id:number,departmant_id:number,designation_code:string,designation_name:string,designation_description:string)
 {
   this.buttoncontent = 'Update';
   this.designation_id = designation_id;
   this.deptselected = departmant_id;
   this.designation_code = designation_code;
   this.designation_name = designation_name;
   this.designation_description = designation_description;
   console.log("row clicked",j);
 }
 callType(value){
  console.log(value);
  this.departmant_name=value;
}
public onclearclick(){
  this.designation_name = "";
   this.designation_description = "";
   this.deptselected = null;
  this.designation_code = "";
  this.buttoncontent = "Save";
  //this.designation_id = 0;
}
}
