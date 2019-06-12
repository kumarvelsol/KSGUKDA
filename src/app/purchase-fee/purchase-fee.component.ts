import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Data } from '../shared/data';
import { Apiresponse } from '../shared/apiresponse';
import { JsResponse } from '../shared/jsresponse';

@Component({
  selector: 'app-purchase-fee',
  templateUrl: './purchase-fee.component.html',
  styleUrls: ['./purchase-fee.component.css']
})
export class PurchaseFeeComponent implements OnInit 
{

  words2 = []; word = [];
  regularfeelist : Apiresponse; regularfeedata : Data[];
  dataSource 
  jsRes : JsResponse;tot : number = 0; total_amount : number;  listcount : number;
  commentdata : string;
  
  feee : any = {};
  Amount : any = {};
  comment : any = {};
  feetypess_id : number; fee : string;

  constructor(private adminService: AdminServiceService) { }

  displayedColumns: string[] = ['purchase_feetypes'];

  ngOnInit() 
  {
    this.adminService.purchasefeefetch(1,1).subscribe((data: Apiresponse) => 
      {
        this.regularfeelist = data;
        console.log(this.regularfeelist);
        this.dataSource = new MatTableDataSource(this.regularfeelist.Data);
        this.listcount = data.Data.length;
        for (let i = 0; i < data.Data.length; i++) 
        {
          if(i == 0){   
            this.fee = data.Data[i].purchase_feetypess_id+"";
          }else{
            this.fee = this.fee + "," + data.Data[i].purchase_feetypess_id; 
          }
          this.words2.push();
        }
      });
  }

  onChange(event: number)
  {

    //console.log(this.words2);
  }

  oncomments(event1 : number)
  {

    for (let i = 0; i < this.listcount; i++) 
    {
    this.commentdata = this.word[i];
    }
    console.log(this.fee);
  }



  onSaveClick( Amount :string )
  {

    if(this.words2[0].length==0)
    {
      console.log("enter amount first");
    }else
    {
      this.performDataLogics();
    }     
  }
  onclearclick()
  {
    
  }

  performDataLogics()
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
          }else
          {
            this.feee = this.fee;
            this.Amount = this.Amount + "," + this.words2[i];
            this.comment = this.comment+","+ this.word[i];
          }
        }
      } 

      let a1 : purchaseFees = 
      {
        purchasefee  : this.feee  , 
      Amount : this.Amount, 
      comments : this.comment ,
      institution_id : 1 ,
      academic_id : 1,
      student_id : 44,
    } 

    this.adminService.purchasefeeadding(a1).subscribe((data : JsResponse) => 
    {
      this.jsRes = data;
      if(this.jsRes.code==200)
      {
        console.log(data);
        alert(this.jsRes.message);
      }else{ }
    });
  }

  

}

export interface purchaseFees
{ 
  purchasefee :number;
  Amount : string;
  comments : string;
    institution_id : number ,
      academic_id : number,
      student_id : number;
}
