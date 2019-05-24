import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Apiresponse } from 'src/app/shared/apiresponse';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {
  feepaymentlist : Apiresponse; feepaymentdata : Data[]; Amount : any = {};comment : any = {};
  displayedColumns : string[] = ['FeeCategory','FeeAmount','Comments'];
  dataSource;class_name: string; first_name:string;student_id:number; 
  constructor(private service1Service: AdminServiceService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.class_name = params["clsname"];
      this.first_name = params["name"];
      this.student_id=params["stdid"];
      this.Amount = params["amount"];
      this.comment = params["comments"];
  });
}
  ngOnInit() {
    this.service1Service.getfeetypes(1,1).subscribe((data: Apiresponse) => 
      {
        this.feepaymentlist = data;
        console.log(this.feepaymentlist);
        this.dataSource = new MatTableDataSource(this.feepaymentlist.Data);
        
      });
  }

}
