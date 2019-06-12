import { Component, OnInit } from '@angular/core';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { Regularfee } from 'src/app/shared/regularfee';
import { JsResponse } from 'src/app/shared/jsresponse';

@Component({
  selector: 'app-feepaymentpreview',
  templateUrl: './feepaymentpreview.component.html',
  styleUrls: ['./feepaymentpreview.component.css']
})
export class FeepaymentpreviewComponent implements OnInit {
  words2 = []; word = [];listcount : number;jsRes : JsResponse;
  feee : any = {}; feelist : Apiresponse;
  feepaymentlist : Apiresponse; feepaymentdata : Data[]; Amounttt : any = {};commentt : any = {}; a1 = []; b1 = [];
  displayedColumns : string[] = ['FeeCategory','FeeAmount','Comments']; Amount : any = {};comment : any = {};
  dataSource;class_name: string; first_name:string;student_id:number; 
  institution_name : string;institution_address : string;fee : string;
  constructor(private service1Service: AdminServiceService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.class_name = params["clsnamee"];
      this.first_name = params["namee"];
      this.student_id=params["stdidd"];
      this.Amounttt = params["amountt"];
      this.commentt = params["commentss"];
  });
}
  ngOnInit() {
    this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse) => 
      {
        this.feepaymentlist = data;
        console.log(this.feepaymentlist);
        this.dataSource = new MatTableDataSource(this.feepaymentlist.Data);
      });
      this.service1Service.getstudentdetails(1,1,44).subscribe((data: Apiresponse) => 
      {
        this.institution_name = data.Data[0].institution_name;
        this.institution_address = data.Data[0].institution_address;
      });
      this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse) => 
      {
        this.feelist = data;
        console.log(this.feelist);
        this.dataSource = new MatTableDataSource(this.feelist.Data);
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
  }
  public onsaveclick()
  {
    if(this.listcount > 0)
    {
      for (let i = 0; i < this.listcount; i++) 
      {
        if(i == 0)
        {
          this.feee = this.fee;
          this.Amount = this.Amounttt[i];
          this.comment = this.commentt[i];
        }else{
          this.feee = this.fee;
          this.Amount = this.Amount + "," + this.Amounttt[i];
          this.comment = this.comment+","+ this.commentt[i];
        }
      }
    } 
    let a : Regularfee = 
    {
      feee  : this.feee,
      Amount : this.Amount, 
      comment : this.comment ,
      institution_id : 1,
      academic_id : 1,
      student_id : this.student_id
    } 
    this.service1Service.addingfeetypes(a).subscribe((data : JsResponse) => 
    {
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            console.log(data);
            alert("Fee Added Succesfully.!");
          }else{ }
    });
    console.log(a);
  }
}