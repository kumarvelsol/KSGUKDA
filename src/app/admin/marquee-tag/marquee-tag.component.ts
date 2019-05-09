import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-marquee-tag',
  templateUrl: './marquee-tag.component.html',
  styleUrls: ['./marquee-tag.component.css']
})
export class MarqueeTagComponent implements OnInit {
  NoticeBoardData : string = "";
  DataLength : number;
  NoticeBoardList : any = [];
  constructor(public service : AdminServiceService, public datepipe : DatePipe) { }

  ngOnInit() {
    this.service.FutureNoticeBoard(1,1).subscribe(data =>{
      this.DataLength = data.Data.length;
      if(this.DataLength > 0){
        for(let i = 0;i < this.DataLength ; i++){
          console.log(i);
          this.NoticeBoardData = data.Data[i].title + " (" + data.Data[i].discription + ") on " + this.datepipe.transform(data.Data[i].date,'yyyy-MM-dd');
          this.NoticeBoardList.push(this.NoticeBoardData);
        }
      }
      console.log(this.NoticeBoardList);
    });
  }
}