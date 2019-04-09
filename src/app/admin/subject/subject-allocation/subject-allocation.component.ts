import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/class/data';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { SubjectParsing } from 'src/app/shared/SubjectModels/subparsing';
import { SubjectData } from 'src/app/shared/SubjectModels/subjectdata';
import { SubjectList } from 'src/app/shared/SubjectModels/subjectList';
import { DepartmentData } from 'src/app/shared/DepartmentModels/departmentdata';
import { DepEmpData } from 'src/app/shared/SubjectAllocationModels/depempdata';
import { DepEmpParsing } from 'src/app/shared/SubjectAllocationModels/depemparsing';
import { DepEmpList } from 'src/app/shared/SubjectAllocationModels/depemplist';
import { SubjectAllocationInsert } from 'src/app/shared/SubjectAllocationModels/subjectallocation_insert';
import { JsResponse } from 'src/app/shared/jsresponse';
import { SubjectAllocationParsing } from 'src/app/shared/SubjectAllocationModels/subjectallocation_parsing';
import { SubjectAllocationList } from 'src/app/shared/SubjectAllocationModels/subjectallocationlist';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-subject-allocation',
  templateUrl: './subject-allocation.component.html',
  providers: [AdminServiceService,ClasserviceService],
  styleUrls: ['./subject-allocation.component.css']
})
export class SubjectAllocationComponent implements OnInit {
  classes : Data[];
  subjects : SubjectList[];
  departments : DepartmentData[];
  teachers : DepEmpData[];
  departmentSelected : number;
  classSelected : number;
  subjectSelected : number;
  teacherSelected : number;
  displayedColumns = ['sub_allocation_id', 'class_name', 'subject_name', 'departmant_name','first_name','actions'];
  dataSource;
  buttoncontent : string = "Add";
  constructor(public service:AdminServiceService, public cservice : ClasserviceService) { }

  ngOnInit() {
    this.gettingDetails();
    this.GettingSubjectAllocationList();
  }

  public ondepartmentchanged(val){
    console.log(val);
    //Start of Getting Employess based on Department Id
    let depemp_parsing : DepEmpParsing = {
      institution_id : 1,
      academic_id : 1,
      departmant_id : val,
    }
    this.service.getDepEmpList(depemp_parsing).subscribe((data : DepEmpList) =>{
      this.teachers = data.Data;
    })
    //End of Getting Employess based on Department Id
  }

  //Start of Getting all Data For Drop Downs
  public gettingDetails(){
    // Start of Getting Classes
    this.cservice.get_products().subscribe(res=>{          
      this.classes = res.Data;   
    });
    //End of Getting Classes
    // Start of Getting Subjects
    let sub_parsing : SubjectParsing ={
      institution_id : 1,
      academic_id : 1
    }
    this.service.subjectlist(sub_parsing).subscribe((data : SubjectData) =>{
      this.subjects = data.Data;
    });
    // End of Getting Subjects

    // Start of Getting Department 
    this.service.getdepartment().subscribe(data => 
    {
      this.departments = data.Data;
    });
    // End of Getting Department 
    
  }
  //End of Getting all Data For Drop Downs

  //Start of Getting Subject Allocation List
  public GettingSubjectAllocationList(){
    let sub_allo_parsing : SubjectAllocationParsing = {
      institution_id : 1,
      academic_id : 1
    }
    this.service.getSubjectAllocationList(sub_allo_parsing).subscribe((data : SubjectAllocationList) =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  //End of Getting Subject Allocation List

  public onsaveclick(){
    if(this.buttoncontent == "Add"){
      let suballocation_insert : SubjectAllocationInsert = {
        class_id : this.classSelected,
        institution_id : 1,
        employee_id : this.teacherSelected,
        academic_id : 1,
        departmant_id : this.departmentSelected,
        subject_id : this.subjectSelected,
      }
      this.service.CreateSubjectAllocaion(suballocation_insert).subscribe((data : JsResponse) =>{
        if(data.code == 200){
          alert("Succefully inserted");
        }else{
          alert("Failed to insert");
        }
      });
    }
    else if(this.buttoncontent == "Update"){
    }
  }
  id : number;
  public startEdit(i: number,sub_allocation_id : number, class_id: number, subject_id: number, departmant_id: number, employee_id: number) {
    // index row is used just for debugging proposes and can be removed
    this.id = sub_allocation_id;
    this.classSelected = class_id;
    this.subjectSelected = subject_id;
    this.departmentSelected = departmant_id;
    this.teacherSelected = employee_id;
    this.buttoncontent = "Update";
  }
}
