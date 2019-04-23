import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewattendence',
  templateUrl: './viewattendence.component.html',
  styleUrls: ['./viewattendence.component.css']
})
export class ViewattendenceComponent implements OnInit {

  buttoncontent:string="";
  dataSource;
  displayedColumns: string[] = ["sno","studentname"];
  constructor() { }

  ngOnInit() {
    this.buttoncontent = "Save";
  }

}
