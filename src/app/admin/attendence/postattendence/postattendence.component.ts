import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/shared/data';

@Component({
  selector: 'app-postattendence',
  templateUrl: './postattendence.component.html',
  styleUrls: ['./postattendence.component.css']
})
export class PostattendenceComponent implements OnInit {
  clsdata :  Data[];
  subjdata : Data[];
  buttoncontent:string="";
  dataSource;
  displayedColumns: string[] = ["sno","studentrollno","studentname","admissionno","remarks","checkall"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.buttoncontent = "Save";
    this.gettingclasses();
    this.gettingsubjects();
  }
  gettingclasses()
  {
    this.service.get_classes(1,1).subscribe(data=>{
      this.clsdata = data.Data;
    });
  }
  gettingsubjects()
  {
    this.service.subjectlist(1,1).subscribe(data=>{
      this.subjdata = data.Data;
    });
  }
}
