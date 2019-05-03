import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  title : string = "";
  description : string = "";
  date : Date;
  buttoncontent:string = "Save";
  displayedColumns = ['notice_board_id', 'title', 'discription','date', 'actions'];
  dataSource;
  constructor(public service : AdminServiceService,public datepipe: DatePipe) { }
  ngOnInit() {
    this.onclearclick();
  }
  onsaveclick(){
    if(this.title == "" || this.description == "" || this.date == null){
      alert("Please fill all fields");
    }else{
      let dateString = this.datepipe.transform(this.date,'yyyy-MM-dd');
      console.log(dateString);
      if(this.buttoncontent == "Save"){
        this.service.CreateNotice(this.title,this.description,dateString,1,1).subscribe(data =>{
          if(data.code == 200){
            alert("Inserted Succesfully");
            this.onclearclick();
          }else{
            alert("Failed to Insert");
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateNotice(this.id,1,1,this.title,this.description,dateString).subscribe(data =>{
          if(data.code == 200){
            alert("Updated Succesfully");
            this.onclearclick();
          }else{
            alert("Failed to Update")
          }
        });
      }
    }
  }
  id : number;
  public startEdit(i: number, notice_board_id: number, title: string, discription: string, date : Date) {
    // index row is used just for debugging proposes and can be removed
    this.id = notice_board_id;
    this.title = title;
    this.description = discription;
    //this.datepipe.transform(this.date,'yyyy-MM-dd');
    this.date = date;
    this.buttoncontent = "Update";
  }
  public onclearclick(){
    this.buttoncontent = "Save";
    this.title = "";
    this.date = null;
    this.description = "";
    this.service.GetNotice(1,1).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
}