import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { SubjectInsert } from 'src/app/shared/SubjectModels/subjectinsert';
import { JsResponse } from 'src/app/shared/jsresponse';
import { SubjectUpdate } from 'src/app/shared/SubjectModels/subjectupdate';
import { SubjectData } from 'src/app/shared/SubjectModels/subjectdata';
import { MatTableDataSource } from '@angular/material';
import { SubjectList } from 'src/app/shared/SubjectModels/subjectList';
import { SubjectParsing } from 'src/app/shared/SubjectModels/subparsing';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  providers: [AdminServiceService],
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {
  name : string = '';
  code : string = '';
  description : string = '';
  jsRes : JsResponse;
  sub_list : SubjectList[];
  displayedColumns = ['subject_id', 'subject_name', 'subject_code', 'subject_description','actions'];
  dataSource;
  buttoncontent:string = "Add";
  constructor(public service:AdminServiceService) { }
  ngOnInit() {
    this.LoadingList();
  }
  public onsaveclick(){
    if(this.name == "" || this.code == ""){
      alert("Please fill all fields");
    }else{
      if(this.buttoncontent == "Add")
      {
        let sub_ins: SubjectInsert = {
          subject_name : this.name,
          subject_code : this.code,
          subject_description : this.description,
          institution_id : 1,
          academic_id : 1
        }
        this.service.createsubject(sub_ins).subscribe((data : JsResponse) => {
          //this.respons=data;
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert("Subject Added Succesfully.!");
            this.onclearclick();
          }else{
            alert(""+this.jsRes.message);
          }
        });
      }else if(this.buttoncontent == "Update")
      {
        let sub_up : SubjectUpdate ={
          subject_id : this.id,
          subject_name : this.name,
          subject_code : this.code,
          subject_description : this.description,
          institution_id : 1,
          academic_id : 1
        }
        this.service.updatesubject(sub_up).subscribe((data : JsResponse) => {
          //this.respons=data;
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert("Subject Updated Succesfully.!");
            this.code = "";this.name = "";this.description = "";this.id = 0;
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
  public startEdit(i: number, subject_id: number, subject_name: string, subject_code: string, subject_description: string) {
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    this.id = subject_id;
    this.name = subject_name;
    this.code = subject_code;
    this.description = subject_description;
    this.buttoncontent = "Update";
  }
  public LoadingList(){
    let sub_parse : SubjectParsing = {
      institution_id : 1,
      academic_id : 1
    }
    this.service.subjectlist(sub_parse).subscribe((data : SubjectData) =>{
      this.sub_list = data.Data;
      this.dataSource = new MatTableDataSource(this.sub_list);
    });
  }
  public onclearclick(){
    this.name = "";
    this.code = "";
    this.description = "";
    this.buttoncontent = "Add";
    this.LoadingList();
    this.id = 0;
  }
}