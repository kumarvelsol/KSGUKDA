import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm } from '@angular/forms';
import { Data } from '../class/data';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { Ttablemodel } from '../ttablemodel';
import { Classresponse } from '../class/classresponse';
import { TimeperiodsComponent } from '../timeperiods/timeperiods.component';
import { TimetableupdateComponent } from '../timetableupdate/timetableupdate.component';
import { Router } from '@angular/router';
import { TransfereServiceService } from '../transfere-service.service';

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

  loading: boolean = false;

  public show:boolean = false;
  constructor(public service:ClasserviceService,public dialog: MatDialog,
    private transfereService:TransfereServiceService) { }

    displayedColumns: string[] = ['session_name','from_time','to_time','subject_name','first_name','time_periods_status','change/assign'];
  //displayedColumns: string[] = ['session_name','from_time','to_time','subject_name','first_name','timetable_status','change/assign'];
  ngOnInit() 
  {
    this.resetForm();

    this.service.get_products(1,1).subscribe(res=>{          
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
          sub_allocation_id:null,
          first_name:null,
          from_time:null,
          session_name:null,
          timetable_status:null,
          to_time:null,
          subject_id:null,
          employee_id:null,
          time_table_id:null
        }
  }

  // onSubmit(addingTtables:NgForm)
  // {      
    
  //   this.transfereService.setData(addingTtables.value.class_id);
  // //   this.service.getTimeTables(addingTtables.value).subscribe(data=>{
  // //   this.serRes=data;
  // //   this.dataSource=this.serRes.Data;  
  // // });
  // }


          

  selectOption(value) 
  {     
      //code for selecting the selected value from dropdown 
      this.transfereService.setData(value);                
  }

    

    Monday()
    {

      this.loading=true;
      this.class_id=this.transfereService.getData();
      
      this.show = !this.show;
      this.show=true;
      this.service.getDayWiseList(1,1,this.class_id,1).subscribe(data=>{
        this.loading=false;        
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }

    populate(ff:Ttablemodel)
    {
      this.transfereService.setData(ff.class_id);
      
      this.service.ttable=Object.assign({},ff);
    
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=false;
      dialogConfig.autoFocus=true;
      dialogConfig.width="60%";
      this.dialog.open(TimetableupdateComponent,dialogConfig);
    }

    Tuesday()
    {
      this.show = !this.show;
      this.show=true;
      this.class_id=this.transfereService.getData();
      this.service.getDayWiseList(1,1,this.class_id,2).subscribe(data=>{      
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }
    Wednesday()
    {
      this.show = !this.show;
      this.show=true;
      this.class_id=this.transfereService.getData();
      this.service.getDayWiseList(1,1,this.class_id,3).subscribe(data=>{      
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }

    Thursday()
    {
      this.show = !this.show;
      this.show=true;
      this.class_id=this.transfereService.getData();
      this.service.getDayWiseList(1,1,this.class_id,4).subscribe(data=>{      
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }

    Friday()
    {
      this.show = !this.show;
      this.show=true;
      this.class_id=this.transfereService.getData();
      this.service.getDayWiseList(1,1,this.class_id,5).subscribe(data=>{      
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }
    Saturday()
    {
      this.show = !this.show;
      this.show=true; // two lines of code for displaying the layout depending on button clickings
      this.class_id=this.transfereService.getData();
      this.service.getDayWiseList(1,1,this.class_id,6).subscribe(data=>{      
        this.data=data.Data;
        this.dataSource=this.data;
      });
    }

    

         
}




export interface DayWiseModel
{
    institution_id:number;
    academic_id:number;
    class_id:number;
    weeksofday_id:number;
}




