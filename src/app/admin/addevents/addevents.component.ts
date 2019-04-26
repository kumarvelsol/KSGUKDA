import { Component, OnInit } from '@angular/core';
import { AdminServiceService, Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data } from 'src/app/shared/data';
import { MatTableDataSource } from '@angular/material';
import { JsResponse } from 'src/app/shared/jsresponse';
import { DatePipe } from '@angular/common';
import { Addevents } from 'src/app/shared/addevents';
import { Classexammodel } from 'src/app/shared/classexammodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent implements OnInit {

  abDatasource; jsRes : JsResponse;
  displayedColumns: string[] = ['event_name','discription','from_date','to_date','View/Change'];
  addeventslist: Apiresponse;
  addeventsdata : Data[];
  event_name:string;
    discription:string;
    from_date = new Date();
    to_date  = new Date();
    event_organizer : string; 
    event_id: number;
    buttoncontent:string = 'Save';
  constructor(private service1Service: AdminServiceService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.from_date = null; this.to_date=null;
    let passing_institute: Parsing = 
    {
        institution_id :1,
        academic_id :1
    }
   this.service1Service.getaddevents(passing_institute).subscribe((data: Apiresponse) => 
   {
     this.addeventslist = data;
     console.log(this.addeventslist);
     this.abDatasource = new MatTableDataSource(this.addeventslist.Data);
    });
  }
  public onsubmitclick()
  {
   if(this.buttoncontent == 'Save')
   {
    let a: Addevents = {
      event_name:this.event_name,
      discription:this.discription,
      from_date : this.datePipe.transform(this.from_date,"yyyy-MM-dd"),
      to_date  :this.datePipe.transform(this.to_date,"yyyy-MM-dd"),
      event_organizer : this.event_organizer,
      institution_id : 1,
      academic_id : 1,
      event_id : this.event_id
    }
    this.service1Service.createaddevents(a).subscribe((data : JsResponse) => {
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        console.log(data);
        alert("Event Added Succesfully.!");
      }else{ }
    });
    console.log(a);
   }
   else if(this.buttoncontent == 'Update')
   {
    let a: Addevents = {
      event_name:this.event_name,
      discription:this.discription,
      from_date : this.datePipe.transform(this.from_date,"yyyy-MM-dd"),
      to_date  :this.datePipe.transform(this.to_date,"yyyy-MM-dd"),
      event_organizer : this.event_organizer,
      institution_id : 1,
      academic_id : 1,
      event_id : this.event_id
    }
    this.service1Service.updateaddevents(a).subscribe((data : JsResponse) => {
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        console.log(data);
        alert("Event Updated Succesfully.!");
      }else{ }
    });
    console.log(a);
   }
  }
  public RowSelected(j:number,event_id:number,event_name:string,discription:string,from_date:Date,to_date:Date,event_organizer:string)
  {
    this.buttoncontent = 'Update';
    this.event_id = event_id;
    this.event_name = event_name ;
    this.discription = discription;  
    this.from_date = from_date;
    this.to_date =to_date;
    this.event_organizer = event_organizer
  }
}
