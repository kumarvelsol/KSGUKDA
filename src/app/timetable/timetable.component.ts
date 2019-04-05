import { Component, OnInit, Input } from '@angular/core';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';
import { Data } from '../class/data';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { Ttablemodel } from '../ttablemodel';
import { Classresponse } from '../class/classresponse';

import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';
import { TimetableupdateComponent } from '../timetableupdate/timetableupdate.component';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  tt:Ttablemodel
  data:Data[];
  serRes:Classresponse;
  class_id:number;
  dataSource
  constructor(private service:ClasserviceService,public dialog: MatDialog) { }

  displayedColumns: string[] = ['session_name','from_time','to_time','subject_name','first_name','change/assign'];
  ngOnInit() 
  {
    this.resetForm();

    this.service.get_products().subscribe(res=>{          
      this.data=res.Data;      
    });
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.ttable={                              
          academic_id:1,
          institution_id:1,
          class_id:null,
          time_period_id:null,
          sub_allocation_id:null
        }
  }

  onSubmit(addingTtables:NgForm)
  {
  this.service.getTimeTables(addingTtables.value).subscribe(data=>{
    this.serRes=data;
    this.dataSource=this.serRes.Data;  
  });
  }

        

  // selectOption(value) 
  // {     
  //     console.log(value);
  //     //getted from binding      
  // }

    populateForm(ff:Ttablemodel)
    {
      console.log(ff);    



      this.service.ttable=Object.assign({},ff);
     // this.service.dataInDialog(ff);
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="60%";
      this.dialog.open(TimetableupdateComponent,dialogConfig);
      
    }
}


