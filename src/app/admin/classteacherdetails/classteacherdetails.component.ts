import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Classteacherdetails } from 'src/app/shared/classteacherdetails';
import { DepartmentList } from 'src/app/shared/DepartmentModels/departmentlist';
import { DepartmentData } from 'src/app/shared/DepartmentModels/departmentdata';
import { Data } from 'src/app/class/data';
import { Classresponse } from 'src/app/class/classresponse';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { Employeemodel } from 'src/app/shared/employeemodel';
// import {} from 'src/app/shared/


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
  classSelected : number;
  deptSelected : number;
  empSelected : number;
  teacherdata :TeacherData[];
  teacherlist : TeacherList;
  deptdata : DepartmentData[]; deptlist : DepartmentList;
  clsdata :  Data[]; clslist : Classresponse;
  displayedColumns: string[] = ['class_name','first_name','departmant_name','actions'];
  constructor(private designationservice: AdminServiceService,public cservice : ClasserviceService) { }

  ngOnInit() {
    let a : TeacherData =
    {
      departmant_id : this.deptSelected,
      class_id : this.classSelected,
      employee_id : this.empSelected,
      institution_id : 1,
      academic_id : 1,
      class_name : this.class_name,
      first_name : this.first_name,
      departmant_name : this.departmant_name,
      id : this.id      
    }
    this.designationservice.getdepartment().subscribe((data : DepartmentList) => 
     {
          this.deptdata = data.Data;
      });
      this.cservice.get_products().subscribe(res =>{          
        this.clsdata = res.Data;   
      });
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
            class_id : this.classSelected,
            employee_id : this.empSelected,
            institution_id : 1,
            academic_id : 1,
            class_name : this.class_name,
            first_name : this.first_name,
            departmant_name : this.departmant_name,
            id : this.id
           }
          this.designationservice.insertclassallocation(a).subscribe((res)=>{
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
          class_id : this.classSelected,
          employee_id : this.empSelected,
          institution_id : 1,
          academic_id : 1,
          class_name : this.class_name,
          first_name : this.first_name,
          departmant_name : this.departmant_name,
          id : this.id
         }
        this.designationservice.insertclassallocation(a).subscribe((res)=>{
          console.log("Updated");
          this.designationservice.getclassallocation(a).subscribe((data: TeacherList) => 
          {
            this.teacherlist = data;
            console.log(this.teacherlist);
            this.abDatasource = new MatTableDataSource(data.Data);
          });
          this.buttoncontent = 'Save';
      });
    }
  }
  no : number;
  public RowSelected(ii: number,id,class_id : number, departmant_id: number, employee_id: number)
   {
     this.buttoncontent = 'Modify';
     this.no = id;
     this.classSelected = class_id;
     this.deptSelected = departmant_id;
     this.empSelected = employee_id;
     console.log("row clicked",ii);
     console.log(this.classSelected);
   }
  }

  
  
  
  
