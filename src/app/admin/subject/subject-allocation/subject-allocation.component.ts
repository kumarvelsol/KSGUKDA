import { Component, OnInit } from '@angular/core';
import { SubjectUpdate } from 'src/app/shared/SubjectModels/subjectupdate';

@Component({
  selector: 'app-subject-allocation',
  templateUrl: './subject-allocation.component.html',
  styleUrls: ['./subject-allocation.component.css']
})
export class SubjectAllocationComponent implements OnInit {

  classes : SubjectUpdate[];
  constructor() { }

  ngOnInit() {
  }
}
