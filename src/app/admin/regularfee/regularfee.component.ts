import { Component, OnInit,Renderer2 } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Regularfee } from 'src/app/shared/regularfee';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data, NavigationExtras, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Classresponse } from 'src/app/class/classresponse';
import { JsResponse } from 'src/app/shared/jsresponse';

export interface Months {
  mid: string;
  name: string;
};
export interface Years {
  id: string;
  yearr: string;
};

@Component({
  selector: 'app-regularfee',
  templateUrl: './regularfee.component.html',
  styleUrls: ['./regularfee.component.css']
})
export class RegularfeeComponent implements OnInit {
  words2 = []; word = [];
  regularfeelist : Apiresponse; regularfeedata : Data[];
  dataSource ;jsRes : JsResponse;tot : number = 0; total_amount : number; 
  commentdata : string;
  displayedColumns : string[] = ['feetypes'];
  month: Months[] = [
    {mid: '1', name: 'January'},
    {mid: '2', name: 'february'},
    {mid: '3', name: 'March'},
    {mid: '4', name: 'April'},
    {mid: '5', name: 'May'},
    {mid: '6', name: 'June'},
    {mid: '7', name: 'July'},
    {mid: '8', name: 'August'},
    {mid: '9', name: 'September'},
    {mid: '10', name: 'October'},
    {mid: '11', name: 'November'},
    {mid: '12', name: 'December'},
  ];
  year: Years[] = [
    {id: '1', yearr: '2017-18'},
    {id: '2', yearr: '2018-19'},
    {id: '3', yearr: '2019-20'},
    {id: '4', yearr: '2020-21'},
    
  ];
  feee : any = {};Amount : any = {};comment : any = {};
  student_id : number;listcount : number; first_name : string; class_name : string;
  feetypess_id : number; fee : string;
  constructor(private service1Service: AdminServiceService,private router: Router) { }

  ngOnInit() {
    let a : Regularfee = {
      feee  : this.feee  ,
      Amount : this.Amount, 
      comment : this.comment ,
      institution_id : 1 ,
      academic_id : 1,
      student_id : this.student_id
    }
    this.service1Service.getstudentdetails(1,1,44).subscribe((data: Apiresponse) => 
      {
        this.student_id = data.Data[0].student_id;
        this.first_name = data.Data[0].first_name;
        this.class_name = data.Data[0].class_name;
        console.log(data);
      });
    this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse) => 
      {
        this.regularfeelist = data;
        console.log(this.regularfeelist);
        this.dataSource = new MatTableDataSource(this.regularfeelist.Data);
        this.listcount = data.Data.length;
        for (let i = 0; i < data.Data.length; i++) 
        {
          if(i == 0){   
            this.fee = data.Data[i].feetypess_id+"";
          }else{
            this.fee = this.fee + "," + data.Data[i].feetypess_id; 
          }
          this.words2.push();
        }
      });
     // this.feee[i] = 0;this.Amount[i]=0;
  }
  public onChange(event: number)
  {
    console.log(this.words2);
    this.total_amount = 0;
    this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse)=>{
      this.dataSource = new MatTableDataSource(data.Data);
      this.listcount = data.Data.length;
      for (let i = 0; i < this.listcount; i++) 
      {
      this.tot = this.words2[i];
      this.total_amount+= +this.words2[i];
      console.log("total_amount",this.total_amount);
      this.Amount[i] = this.total_amount;
      console.log(this.Amount[i]);
      console.log(this.tot);
    }
  });
}
public oncomments(event1 : number)
{
  this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse)=>{
    this.dataSource = new MatTableDataSource(data.Data);
    this.listcount = data.Data.length;
    for (let i = 0; i < this.listcount; i++) 
    {
    this.commentdata = this.word[i];
    }
});
}
  public onSaveClick(first_name:string,student_id: number,class_name : string,words2:number,word:string)   //j:number,first_name:string,student_id: number,class_name : string,Amount:number,comment:string
  {
    if(this.listcount > 0)
    {
      for (let i = 0; i < this.listcount; i++) 
      {
        if(i == 0)
        {
          this.feee = this.fee;
          this.Amount = this.words2[i];
          this.comment = this.word[i];
        }else{
          this.feee = this.fee;
          this.Amount = this.Amount + "," + this.words2[i];
          this.comment = this.comment+","+ this.word[i];
        }
      }
    } 
    let a : Regularfee = 
    {
      feee  : this.feee  ,
      Amount : this.Amount, 
      comment : this.comment ,
      institution_id : 1 ,
      academic_id : 1,
      student_id : this.student_id
    } 
    // this.service1Service.addingfeetypes(a).subscribe((data : JsResponse) => {
    //       this.jsRes = data;
    //       if(this.jsRes.code==200)
    //       {
    //         console.log(data);
    //         alert("Fee Added Succesfully.!");
    //       }else{ }
    //     });
        console.log(a);
        let navigationExtras: NavigationExtras = {
          queryParams: {
              "clsname":this.class_name = class_name,
              "name":this.first_name= first_name, 
              "stdid" : this.student_id = student_id,
              "amount" : this.Amount = words2,
              "comments" : this.comment = word,
          }
        };
        this.router.navigate(['/FeePayment'],navigationExtras);
        console.log("Amount",this.words2);console.log("comment",this.comment);
      } 
}