import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Data } from '../class/data';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';
import { AdminServiceService } from '../admin/admin-service.service';
import { Classresponse } from '../class/classresponse';
import { MatDialogRef } from '@angular/material';

import { Ttablemodel } from '../ttablemodel';
import { TransfereServiceService } from '../transfere-service.service';
import { Subject } from 'rxjs';
import { TimetableComponent } from '../timetable/timetable.component';
import { ClassesRelatedComponent } from '../admin/class/classes-related/classes-related.component';


@Component({
  selector: 'app-timetableupdate',
  templateUrl: './timetableupdate.component.html',
  styleUrls: ['./timetableupdate.component.css']
})
export class TimetableupdateComponent implements OnInit {

  subjects : Data[];
  serRes : Classresponse;
  ff:Ttablemodel;
  cls_id:number;
  constructor(private service:ClasserviceService,public srs:AdminServiceService,
    public dialogRef: MatDialogRef<TimetableupdateComponent> ,
    private transfereService:TransfereServiceService,
     ) { }

  ngOnInit() 
  {
    //this.resetForm();

   let ss:number=this.transfereService.getData();
  this.cls_id=ss;

    this.service.getPerticularClassAllocatointoSubjects(1,1,this.cls_id).subscribe(data=>{
      
      this.subjects=data.Data;

      
    });



    

  }

  // resetForm(form? : NgForm)
  // { 
  //   if(form!=null)
  //   form.reset();
  //       this.service.tupdates={                              
  //         employee_id:1,
  //         first_name:'',
  //         session_name:null,
  //         from_time:null,
  //         subject_id:1,
  //         subject_name:null,
  //         timetable_status:null,
  //         to_time:null
  //       }
  // }

  onSubmit(updateTperiod:NgForm)
  {
    //console.log(updateTperiod.value);

    if(updateTperiod.value.sub_allocation_id==null)
    {
      alert("-- please select class --");      
    }
    else
    {
        this.service.updateTimeTables(updateTperiod.value).subscribe(data=>
          {
              this.serRes=data;
              if(this.serRes.code==200)
              {
                alert(this.serRes.message);  
                
                this.dialogRef.close();                   
              }
              else{
                alert(this.serRes.message);
                
              }
            }) 
    }
  

  }
  close()
  {
   this.dialogRef.close();
       
  }

  

}
