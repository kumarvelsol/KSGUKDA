import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Attendencemodel } from 'src/app/shared/attendencemodel';
import { JsResponse } from 'src/app/shared/jsresponse';
import { DatePipe } from '@angular/common';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { Classresponse } from 'src/app/class/classresponse';


@Component({
  selector: 'app-postattendence',
  templateUrl: './postattendence.component.html',
  styleUrls: ['./postattendence.component.css']
})
export class PostattendenceComponent implements OnInit {

  
  clsdata :  Data[];
  subjdata : Data[];
  RollNo : any = {};
  StudentRollNo : string;
  sub_allocation:number;
  time_tb_id:number;
  buttoncontent:string="";
  dataSource;
  Attendence : string="";
  count:number;
  grsroup :any="" ;
  empList: Array<String> =[];
  ganesh : any={};
  displayedColumns: string[] = ["attendence_id","student_roll_no","first_name","admissionno","remarks","Attendence_status"];
  
  class_id  : number; sub_allocation_id:number; date:string;attendence_status:string;student_roll_no:number;time_table_id:number;
  first_name:string; admissionno:number;subject_id:number; remarks:string;checkall:boolean=true; Year :string;Month:string;student_id:number;
  attdata : Apiresponse;

  serRes:Classresponse;

  
  
  isSelected = false;

  constructor(public service:AdminServiceService, private srv:ClasserviceService,private datePipe:DatePipe ) { }

  ngOnInit() 
  {
    this.buttoncontent = "Save";
    this.gettingclasses(); 
  }

  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  
  selectOption(value) 
  {
    this.class_id =value;
    this.service.getSubjectAllocatedId(1,1,this.class_id).subscribe(data=>
      {
      this.subjdata = data.Data;
    });
  }

  selectSubAllocation(value)
  {
    this.sub_allocation_id=value.sub_allocation_id;
    this.time_table_id=value.time_table_id;
  }


  post:any[];
  public onclearclick()
  {
    this.class_id =null;
    this.subject_id=null;    
    this.dataSource = null;
  }
  public getdetails()
  {
    this.service.getclassattendencelist(1,1,this.class_id ).subscribe(data=>{
      this.attdata = data;
      for(let i=0;i>data.Data.length;i++){
        if(i == 0){
          this.StudentRollNo = data.Data[i].student_roll_no;
        }else{
          this.StudentRollNo = this.StudentRollNo + "," + data.Data[i].student_roll_no;
        }
        this.ganesh = data.Data[i].attendence_id;
      }
            
      this.dataSource=new MatTableDataSource(this.attdata.Data); 
      this.count=this.dataSource.data.length;
    });
  }
  public onsaveclick()
  {
       
    let attend : Attendencemodel =
    {
      institution_id : 1,
      academic_id : 1,
      class_id : this.class_id ,
      sub_allocation_id : this.sub_allocation_id,
      Year : this.Year=this.datePipe.transform(this.date,"yyyy"),
      Month : this.Month=this.datePipe.transform(this.date,"MM"),
      Date : this.date=this.datePipe.transform(this.date,"dd"),
      attendence : this.Attendence,
      //student_id : this.student_id,
      time_table_id : this.time_table_id,
    }
    
    this.srv.addingss(attend).subscribe(data=>{
      this.serRes=data;     
      if(this.serRes.code==200)

      {
        alert(this.serRes.message);     
      }
      else{          
        alert(this.serRes.message);          
      }
  })
  
 }

 

  
  

  

 
  onSelect(i:number,event,sub_allocation:number,time_tb_id:number) 
  {

    for(let i=0;i<this.count;i++)
    {
      if(i==0)
      {
        if(event.checked && this.ganesh[i])
        {
          this.Attendence="P";
        }else
        {
          this.Attendence="A";
        }
      }else
      {
        if(event.checked && this.ganesh[i])
        {
          this.Attendence=this.Attendence+",P";
        }else
        {
          this.Attendence=this.Attendence+",A";
        }
      }
    }
    

    // this.sub_allocation=sub_allocation;
    // this.time_tb_id=time_tb_id;
  
  }
}
