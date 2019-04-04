import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Classteacherdetails } from 'src/app/shared/classteacherdetails';
import { DepartmentList } from 'src/app/shared/DepartmentModels/departmentlist';
import { DepartmentData } from 'src/app/shared/DepartmentModels/departmentdata';
import { Data } from 'src/app/class/data';
import { Classresponse } from 'src/app/class/classresponse';
import { ClasserviceService } from 'src/app/class/classervice.service';
// import {} from 'src/app/shared/


export interface TeacherData {
  institution_id :1;
    academic_id : 1;
    class_id : string;
    employee_id : string;
    department_id : string;
    class_name : string;
    employee_name : string;
    department_name : string;
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
  teacherdata :TeacherData[];
  teacherlist : TeacherList;
  deptdata : DepartmentData[]; deptlist : DepartmentList;
  clsdata :  Data[]; clslist : Classresponse;
  displayedColumns: string[] = ['class_name','employee_name','department_name'];
  constructor(private designationservice: AdminServiceService,public cservice : ClasserviceService) { }

  ngOnInit() {
    let a : Classteacherdetails
    {
      institution_id:1;
      class_id : this.class_id;
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
              this.teacherlist = res;
              this.abDatasource = new MatTableDataSource(this.teacherlist.Data);
        });
     }
    selected = null;
    buttoncontent:string = 'Save';
    department_id : string ;
    class_id : string;
    employee_id : string;
    institution_id : 1;
    academic_id : 1;
    class_name : string;
    employee_name : string;
    department_name : string;
  
  public onsubmitclick()
   {
          let a:Classteacherdetails = {
            department_id : this.department_id,
            class_id : this.class_id,
            employee_id : this.employee_id,
            institution_id : 1,
            academic_id : 1,
            class_name : this.class_name,
            employee_name : this.employee_name,
            department_name : this.department_name
           }
          this.designationservice.insertclassallocation(a).subscribe((res)=>{
            console.log("Created");
            this.designationservice.getclassallocation(a).subscribe((data: TeacherList) => 
            {
              this.teacherlist = data;
              console.log(this.teacherlist);
              this.abDatasource = new MatTableDataSource(this.teacherlist.Data);
            });
            
            this.buttoncontent = 'Save';
        });
  }
  public RowSelected(row)
   {
     this.buttoncontent = 'Modify';
     this.class_id = row.class_id;
     this.department_id = row.department_id;
     this.employee_id = row.employee_id;
     console.log("row clicked",row);
   }
  }

  
  
  
  
