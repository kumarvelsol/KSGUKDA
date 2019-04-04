import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../class/data';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-timetableupdate',
  templateUrl: './timetableupdate.component.html',
  styleUrls: ['./timetableupdate.component.css']
})
export class TimetableupdateComponent implements OnInit {

 
    
  constructor(private service:ClasserviceService) { }

  ngOnInit() {
    this.resetForm();
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
