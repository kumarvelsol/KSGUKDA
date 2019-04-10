import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../class/data';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';
import { AdminServiceService } from '../admin/admin-service.service';
import { Classresponse } from '../class/classresponse';
import { MatDialogRef } from '@angular/material';

import { Ttablemodel } from '../ttablemodel';
import { TransfereServiceService } from '../transfere-service.service';


@Component({
  selector: 'app-timetableupdate',
  templateUrl: './timetableupdate.component.html',
  styleUrls: ['./timetableupdate.component.css']
})
export class TimetableupdateComponent implements OnInit {

  subjects : Data[];
  serRes : Classresponse;
  ff:Ttablemodel;

  
  
  constructor(private service:ClasserviceService,public srs:AdminServiceService,
    public dialogRef: MatDialogRef<TimetableupdateComponent> ,
    private transfereService:TransfereServiceService ) { }

  ngOnInit() 
  {
    //this.resetForm();

   let ss:number=this.transfereService.getData();
   
   this.service.refer.class_id=ss;
   
   
    this.service.getdepartment(1,1,this.service.refer.class_id).subscribe(data=>{
      //this.serRes=data;  
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

    console.log(updateTperiod.value);
    
    
    this.service.updateTimeTables(updateTperiod.value).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);  
        console.log(this.serRes.Data); 
        this.dialogRef.close();                   
      }
      else{
        alert(this.serRes.message);
        
      }
  }) 

  }
  close()
  {
    this.dialogRef.close();
  }

}
