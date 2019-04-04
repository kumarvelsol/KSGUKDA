import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../class/data';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';
import { SubjectList } from '../shared/SubjectModels/subjectList';
import { SubjectParsing } from 'src/app/shared/SubjectModels/subparsing';
import { SubjectData } from 'src/app/shared/SubjectModels/subjectdata';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-timetableupdate',
  templateUrl: './timetableupdate.component.html',
  styleUrls: ['./timetableupdate.component.css']
})
export class TimetableupdateComponent implements OnInit {

  subjects : SubjectList[];
    
  constructor(private service:ClasserviceService,public srs:AdminServiceService) { }

  ngOnInit() {
    this.resetForm();
    
    let sub_parsing : SubjectParsing ={
      institution_id : 1,
      academic_id : 1
    }
    this.srs.subjectlist(sub_parsing).subscribe((data : SubjectData) =>{
      this.subjects = data.Data;
    });
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.tupdates={                              
          employee_id:1,
          first_name:'',
          session_name:null,
          from_time:null,
          subject_id:1,
          subject_name:null,
          timetable_status:null,
          to_time:null
        }
  }

  onSubmit(updateTperiod:NgForm)
  {
    console.log(updateTperiod.value);

    
  }





}
