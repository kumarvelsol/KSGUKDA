import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { Data} from 'src/app/shared/data';
import { AdminServiceService,Parsing } from '../admin-service.service';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { JsResponse } from 'src/app/shared/jsresponse';

@Component({
  selector: 'app-classexam',
  templateUrl: './classexam.component.html',
  styleUrls: ['./classexam.component.css']
})
export class ClassexamComponent implements OnInit {
  classexamlist:Apiresponse;
  clsdata :  Data[];
  buttoncontent="Save";
  dataSource;
  displayedColumns: string[] = ["exam_class_id", "exam_type","class_name", "exam_class_start_date","exam_class_end_date","actions"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.gettingclasses();
    this.service.getclassexam(1,1,1).subscribe((data : Apiresponse) =>
    {
      this.classexamlist=data;
      console.log(this.classexamlist.Data);
      this.dataSource = new MatTableDataSource(this.classexamlist.Data);
    });
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
}
