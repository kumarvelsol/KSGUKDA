import { Component, OnInit, Input } from '@angular/core';
import { TransfereServiceService } from '../transfere-service.service';
import { ClasserviceService } from '../class/classervice.service';
import { Data } from '../class/data';
import { DayWiseModel, TimetableComponent } from '../timetable/timetable.component';
import {  NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {


 
  cls_id:number;
  data:Data[];
  day:DayWiseModel
  dataSource
  constructor(private service:ClasserviceService,private transfereService:TransfereServiceService) { }
  
  displayedColumns: string[] = ['session_name','from_time','to_time','class_name','change/assign'];
  ngOnInit() 
  {
    
    this.resetForm();
    // this.service.getDayWiseList(this.day).subscribe(data=>{
      
    //   this.data=data.Data;
    //   console.log(this.data);
    // });
   
    this.service.getDayWiseList(1,1,1,1).subscribe(data=>{      
          this.data=data.Data;
          this.dataSource=this.data;
        });
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.day={                              
          academic_id:1,
          institution_id:1,
          class_id:null,
          weeksofday_id:1,
          
        }
  }

  // ngDoCheck()
  // {
  //   //console.log("from"+this.transfereService.getData());

  //   this.service.getDayWiseList(1,1,this.transfereService.getData(),1).subscribe(data=>{      
  //     this.data=data.Data;
  //     this.dataSource=this.data;
  //   });
  // }
  

  populate(day:NgForm)
  {
    console.log(day.value);
  }
  
  }
