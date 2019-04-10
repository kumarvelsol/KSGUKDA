import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../../admin-service.service';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { SubjectAllocationInsert } from 'src/app/shared/SubjectAllocationModels/subjectallocation_insert';
import { JsResponse } from 'src/app/shared/jsresponse';
import { SubjectAllocationList } from 'src/app/shared/SubjectAllocationModels/subjectallocationlist';
import { MatTableDataSource } from '@angular/material';
import { SubjectAllocationUpdate } from 'src/app/shared/SubjectAllocationModels/subjectallocation_update';
import { Data } from 'src/app/shared/data';

@Component({
  selector: 'app-subject-allocation',
  templateUrl: './subject-allocation.component.html',
  providers: [ AdminServiceService,ClasserviceService ],
  styleUrls: ['./subject-allocation.component.css']
})
export class SubjectAllocationComponent implements OnInit {
  classes : Data[];
  subjects : Data[];
  departments : Data[];
  teachers : Data[];
  departmentSelected : number = 0;
  classSelected : number = 0;
  subjectSelected : number = 0;
  teacherSelected : number = 0;
  displayedColumns = ['sub_allocation_id', 'class_name', 'subject_name', 'departmant_name','first_name','actions'];
  dataSource;
  buttoncontent : string = "Add";
  constructor(public service : AdminServiceService, public cservice : ClasserviceService) { }
  ngOnInit() {
    this.gettingDetails();
    this.GettingSubjectAllocationList();
  }
  public ondepartmentchanged(val){
    this.teacherSelected = 0;
    this.GetDepEmplist(val);
  }
  //Start of Getting all Data For Drop Downs
  public gettingDetails(){
    // Start of Getting Classes
    this.service.get_classes(1,1).subscribe(data=>{
      this.classes = data.Data;
    });
    //End of Getting Classes
    // Start of Getting Subjects
    this.service.subjectlist(1,1).subscribe(data =>{
      this.subjects = data.Data;
    });
    // End of Getting Subjects
    // Start of Getting Department 
    this.service.getdepartment(1,1).subscribe(data => 
    {
      this.departments = data.Data;
    });
    // End of Getting Department 
  }
  //End of Getting all Data For Drop Downs

  //Start of Getting Subject Allocation List
  public GettingSubjectAllocationList(){
    this.service.getSubjectAllocationList(1,1).subscribe((data : SubjectAllocationList) =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  //End of Getting Subject Allocation List
  public onsaveclick(){
    if(this.classSelected == 0 || this.subjectSelected == 0 || this.departmentSelected == 0 || this.teacherSelected == 0){
      alert("Please select all Fields");
    }else{
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
            this.onclearclick();
          }else{
            alert("Failed to insert");
          }
        });
      }
      else if(this.buttoncontent == "Update"){
        // console.log("Id : "+this.id);
        // console.log("class : " +this.classSelected);
        // console.log("subject : " +this.subjectSelected);
        // console.log("department : " +this.departmentSelected);
        // console.log("teacher : " +this.teacherSelected);
        let suballocation_update : SubjectAllocationUpdate = {
          sub_allocation_id : this.id,
          class_id : this.classSelected,
          institution_id : 1,
          employee_id : this.teacherSelected,
          academic_id : 1,
          departmant_id : this.departmentSelected,
          subject_id : this.subjectSelected,
        }
        this.service.UpdateSubjectAllocation(suballocation_update).subscribe((data : JsResponse) =>{
          console.log(data);
          if(data.code == 200){
            alert("Succefully Updated");
            this.onclearclick();
          }else{
            alert("Failed to update");
          }
        });
      }
    }
  }
  id : number;
  public startEdit(i: number,sub_allocation_id : number, class_id: number, subject_id: number, departmant_id: number, employee_id: number) {
    this.id = sub_allocation_id;
    this.classSelected = class_id;
    this.subjectSelected = subject_id;
    this.departmentSelected = departmant_id;
    this.GetDepEmplist(departmant_id);
    this.teacherSelected = employee_id;
    this.buttoncontent = "Update";
  }
  public GetDepEmplist(id : number){
    //Start of Getting Employess based on Department Id
    this.service.getDepEmpList(1,1,id).subscribe(data =>{
      this.teachers = data.Data;
    })
    //End of Getting Employess based on Department Id
  }
  public onclearclick(){
    // this.name = "";
    // this.code = "";
    // this.description = "";
    this.buttoncontent = "Add";
    this.classSelected = 0;
    this.subjectSelected = 0;
    this.departmentSelected = 0;
    this.teacherSelected = 0;
    this.GettingSubjectAllocationList();
    // this.LoadingList();
    this.id = 0;
  }
}