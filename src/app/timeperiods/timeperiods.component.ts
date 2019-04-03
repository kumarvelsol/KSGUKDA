import { Component, OnInit } from '@angular/core';
import { ClasserviceService } from '../class/classervice.service';
import { NgForm, NgModel } from '@angular/forms';
import { Classresponse } from '../class/classresponse';
import { Data } from '../class/data';
import { Timeperiodmodel } from './timeperiodmodel';


@Component({
  selector: 'app-timeperiods',
  templateUrl: './timeperiods.component.html',
  styleUrls: ['./timeperiods.component.css']
})
export class TimeperiodsComponent implements OnInit {

 
  rss:Timeperiodmodel;
  dataSource
  cis_id:number;
  constructor(private service:ClasserviceService) { }

  buttoncontent:string = "Add";
  serRes:Classresponse;
  data:Data[];

  displayedColumns: string[] = ['session_name', 'from_time', 'to_time','actions'];
  ngOnInit()
  { 
    this.resetForm();
    this.callingGetPeriods();
    this.service.get_products().subscribe(res=>{          
    this.data=res.Data;      
    
  });
  }
  callingGetPeriods()
  {
    this.service.getTperiods().subscribe(data=>{
      this.serRes=data;
      this.dataSource=this.serRes.Data;          
    });
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.tperiods={
          session_name:'',
          from_time:'',
          to_time:'',
          academic_id:1,
          institution_id:1,
          class_id:null,
          time_period_id:null
        }
  }


  onSubmit(addingTperiod:NgForm)
  {
    //console.log(addingTperiod.value);

    if(addingTperiod.value.time_period_id==null)
    {
      this.service.addTperiods(addingTperiod.value).subscribe(data=>{
        this.serRes=data;
       
        if(this.serRes.code==200)
        {
          alert(this.serRes.message);
          this.callingGetPeriods();       
        }
        else{          
          alert(this.serRes.message);          
        }
    })
    }else
    {
      this.updateClasses(addingTperiod);
    }
    
  }


  populateForm(element:Timeperiodmodel)
  {

    this.service.tperiods=Object.assign({},element); 
    this.buttoncontent="Update";
  }



  updateClasses(addingClass : NgForm)
  {

    
    this.service.updateTPeriods(addingClass.value).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);
        this.callingGetPeriods();        
      }
      else{
        alert(this.serRes.message);
        
      }
  })
  }


 
  deletes(ddingTperiod : Timeperiodmodel)
  {
    //console.log(ddingTperiod);
    this.service.deleteTPeriods(ddingTperiod).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);
        this.callingGetPeriods();
      }
      else
      {
        alert(this.serRes.message);
        
      }
  })
  }



  // selectOption(value) {
  //   //getted from event
  //   this.cis_id=value;
  //   console.log(value);
  //   //getted from binding
    
  // }


}
