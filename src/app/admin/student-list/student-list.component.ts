import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
val:string;
  constructor() { }
set string(data:string)
{
  data="kumar";
}
  ngOnInit() {
    console.log(this.val);
  }
}
