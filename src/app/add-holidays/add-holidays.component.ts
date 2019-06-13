import { Component, OnInit } from '@angular/core';
import { HolidaysServsService } from '../shared/holidays-servs.service';
import { NgForm } from '@angular/forms';
import { Classresponse } from '../class/classresponse';
//import { DatePipe } from '@angular/common';
import { AddHolidaymodel } from '../shared/add-holidaymodel';
import { Data } from 'src/app/class/data';
@Component({
  selector: 'app-add-holidays',
  templateUrl: './add-holidays.component.html',
  styleUrls: ['./add-holidays.component.css']
})
export class AddHolidaysComponent implements OnInit {

  data:Data[];
  dataSource
  public show:boolean = false;


  buttoncontent:string="save";
  constructor(public service:HolidaysServsService) { }

  displayedColumns: string[] = ['date', 'month', 'year','remarks','actions'];
  end:String;
  serRes:Classresponse;
  ss:AddHolidaymodel;

  ngOnInit() {
    this.resetForm();
    this.displayHolidaysList();
  }
  displayHolidaysList()
  {
    this.service.getHolidays(1,1).subscribe(res=>{          
      this.data=res.Data;      
      this.dataSource = this.data;
  });

  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.service.addHoliday={
          startdate:null,
          enddate:null,
          academic_id:1,
          institution_id:1,  
          remarks:'',               
        }
  }
  
  onSubmit(holidays:NgForm)
  { 
    
    if(holidays.value.startdate == null || holidays.value.enddate == null)
    {
      alert("please insert valid data");
    }
    else if(this.buttoncontent=='save')
    {
      this.service.addTperiods(holidays.value).subscribe(data=>{
        this.serRes=data;
        
        if(this.serRes.code==200)
        {
          alert(this.serRes.message);    
                      this.displayHolidaysList();
        }
        else{        
          alert(this.serRes.message);
          
        }
    })
    }else
    {

      this.service.updateHolidays(holidays.value).subscribe(data=>{
        this.serRes=data;
        if(this.serRes.code==200)
        {
          
          alert(this.serRes.message);                
          this.displayHolidaysList();
        }
        else{        
          alert(this.serRes.message);
          
        }
    })
     
    }
    

  }

  populateForm(country:updateholidays)
  {

    this.buttoncontent="update";
    //this.show = !this.show;
    this.show = true;
    this.service.addHoliday.startdate=country.date;
    this.service.addHoliday.enddate=country.date;
    this.service.addHoliday.remarks=country.remarks;
    console.log(this.service.addHoliday);
  }

  
}
export interface updateholidays
{
 date:string;
 dates:string;
 holiday :number; 
 remarks:string;
 institution_id:number;
  academic_id:number;
}
