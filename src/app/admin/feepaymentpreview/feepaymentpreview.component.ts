import { Component, OnInit } from '@angular/core';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { Data, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-feepaymentpreview',
  templateUrl: './feepaymentpreview.component.html',
  styleUrls: ['./feepaymentpreview.component.css']
})
export class FeepaymentpreviewComponent implements OnInit {
  feepaymentlist : Apiresponse; feepaymentdata : Data[]; Amounttt : any = {};commentt : any = {};
  displayedColumns : string[] = ['FeeCategory','FeeAmount','Comments'];
  dataSource;class_name: string; first_name:string;student_id:number; 
  institution_name : string;institution_address : string;
  constructor(private service1Service: AdminServiceService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.class_name = params["clsnamee"];
      this.first_name = params["namee"];
      this.student_id=params["stdidd"];
      this.Amounttt = params["amountt"];
      this.commentt = params["commentss"];
  });
  console.log("feeamount",this.Amounttt);
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
  }
}
