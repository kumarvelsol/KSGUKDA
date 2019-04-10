import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Classteacherdetails } from 'src/app/shared/classteacherdetails';
import { Data } from 'src/app/shared/data';
import { Classresponse } from 'src/app/class/classresponse';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { Employeemodel } from 'src/app/shared/employeemodel';

export interface TeacherData {
  institution_id :1;
    academic_id : 1;
    class_id : number;
    employee_id : number;
    departmant_id : number;
    class_name : string;
    first_name : string;
    departmant_name : string;
    id : number;
}

export interface TeacherList {
  code: number;
  message: string;
  Data: TeacherData[];
}


@Component({
  selector: 'app-classteacherdetails',
  templateUrl: './classteacherdetails.component.html',
  styleUrls: ['./classteacherdetails.component.css']
})
export class ClassteacherdetailsComponent implements OnInit {
  ab:Classteacherdetails[];
  abDatasource;
  cnameSelected : number;
  deptSelected : number;
  empSelected : number;
  teacherdata :TeacherData[];
  teacherlist : TeacherList;
  deptdata : Data[];
  clsdata :  Data[]; clslist : Classresponse;
  empdata : Data[];
  displayedColumns: string[] = ['id','class_name','departmant_name','first_name','actions'];
  constructor(public designationservice: AdminServiceService,public cservice : ClasserviceService) { }
  public ondepartmentchanged(val){
     this.GetDepEmplist(val);
  }
  ngOnInit() {
    let a : TeacherData =
    {
      departmant_id : this.deptSelected,
      class_id : this.cnameSelected,
      employee_id : this.empSelected,
      institution_id : 1,
      academic_id : 1,
      class_name : this.class_name,
      first_name : this.first_name,
      departmant_name : this.departmant_name,
      id : this.id      
    }
    this.designationservice.getdepartment(1,1).subscribe(data =>{
      this.deptdata = data.Data;
    });
    this.designationservice.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
    // this.cservice.get_products().subscribe(res =>{          
    //   this.clsdata = res.Data;   
    // });
    this.designationservice.getclassallocation(a).subscribe((res : TeacherList) =>
    {
          console.log(res);
          this.teacherlist = res;
          this.abDatasource = new MatTableDataSource(res.Data);
    });
  }
  buttoncontent:string = 'Save';
  departmant_id : number ;
  class_id : number;
  employee_id : number;
  institution_id : 1;
  academic_id : 1;
  class_name : string;
  first_name : string;
  departmant_name : string;
  id : number;
  
  public onsubmitclick()
  {
    if(this.buttoncontent == 'Save')
    {
        let a:TeacherData = {
          departmant_id : this.deptSelected,
          class_id : this.cnameSelected,
          employee_id : this.empSelected,
          institution_id : 1,
          academic_id : 1,
          class_name : this.class_name,
          first_name : this.first_name,
          departmant_name : this.departmant_name,
          id : this.id
          }
        this.designationservice.insertclassallocation(a).subscribe((res : TeacherList)=>{
          console.log(res);
          console.log("Created");
          this.designationservice.getclassallocation(a).subscribe((data: TeacherList) => 
          {
            this.teacherlist = data;
            console.log(this.teacherlist);
            this.abDatasource = new MatTableDataSource(data.Data);
          });            
      });
    }
    else {
      let a:TeacherData = {
        departmant_id : this.deptSelected,
        class_id : this.cnameSelected,
        employee_id : this.empSelected,
        institution_id : 1,
        academic_id : 1,
        class_name : this.class_name,
        first_name : this.first_name,
        departmant_name : this.departmant_name,
        id : this.id
      }
      this.designationservice.insertclassallocation(a).subscribe((res : TeacherList)=>{
        console.log("Updated");
        console.log(res);
        this.designationservice.getclassallocation(a).subscribe((data: TeacherList) => 
        {
          this.teacherlist = data;
          console.log(this.teacherlist);
          this.abDatasource = new MatTableDataSource(data.Data);
        });
        this.buttoncontent = 'Save';
      });
    }
    this.class_name = ''; this.departmant_name = "" ; this.first_name = "";
  }
  no : number;
  public RowSelected(j: number,id : number,class_id : number, departmant_id: number, employee_id: number)
   {
     this.no = id;
     this.cnameSelected = class_id;
     this.deptSelected = departmant_id;
     this.GetDepEmplist(departmant_id);
     this.empSelected = employee_id;
     console.log("row clicked",j);
     console.log(this.cnameSelected);
     console.log(this.empSelected);
     console.log(this.deptSelected);
     console.log(id);
     this.buttoncontent = 'Update';
   }
   public GetDepEmplist(id : number){
    //Start of Getting Employess based on Department Id
    this.designationservice.getDepEmpList(1,1,id).subscribe(data =>{
      this.empdata = data.Data;
    })
    //End of Getting Employess based on Department Id
  }
}
