import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute, Data, NavigationExtras, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Apiresponse } from 'src/app/shared/apiresponse';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {
  feepaymentlist : Apiresponse; feepaymentdata : Data[]; Amountt : any = {};comment : any = {};
  institutelist : Apiresponse; institutedata : Data[];
  displayedColumns : string[] = ['FeeCategory','FeeAmount','Comments'];
  displayedColumnss : string[] = ['Schoolname','Address'];
  dataSource; dataSourcee; class_name: string; first_name:string;student_id:number; 
  institution_name : string;institution_address : string;words2 = []; word = [];
  constructor(private service1Service: AdminServiceService,private route: ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.class_name = params["clsname"];
      this.first_name = params["name"];
      this.student_id=params["stdid"];
      this.Amountt = params["amount"];
      this.comment = params["comments"];
  });
  console.log("feeamount",this.Amountt);
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
        this.institutelist = data;
        console.log(this.institutelist);
        this.dataSourcee = new MatTableDataSource(this.institutelist.Data);
      });
      this.words2 = this.Amountt; this.word = this.comment;
      console.log("words2",this.words2);console.log("word",this.word);
  }
  public onproceedclick(class_name:string,first_name:string,student_id:number,words2:string,word:string)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "clsnamee":this.class_name = class_name,
          "namee":this.first_name= first_name, 
          "stdidd" : this.student_id = student_id,
          "amountt" : this.Amountt = words2,
          "commentss" : this.comment = word,
      }
    };
    this.router.navigate(['/FeePaymentPreview'],navigationExtras);
  }
}
