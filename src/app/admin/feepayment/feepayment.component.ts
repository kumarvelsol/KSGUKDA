import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {
  displayedColumns : string[] = ['FeeCategory','FeeAmount','Comments'];
  dataSource;
  constructor() { }

  ngOnInit() {
  }

}
