import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  title : string = "";
  description : string = "";
  date : string = "";
  buttoncontent:string = "Save";
  displayedColumns = ['notice_board_id', 'title', 'discription','date', 'actions'];
  dataSource;
  constructor(public service : AdminServiceService) { }
  ngOnInit() {
    this.onclearclick();
  }
  onsaveclick(){
    if(this.title == "" || this.description == "" || this.date == ""){
      alert("Please fill all fields");
    }else{
      if(this.buttoncontent == "Save"){
        this.service.CreateNotice(this.title,this.description,this.date,1,1).subscribe(data =>{
          if(data.code == 200){
            alert("Inserted Succesfully");
            this.onclearclick();
          }else{
            alert("Failed to Insert");
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateNotice(this.id,1,1,this.title,this.description,this.date).subscribe(data =>{
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
  public startEdit(i: number, notice_board_id: number, title: string, discription: string, date : string) {
    // index row is used just for debugging proposes and can be removed
    this.id = notice_board_id;
    this.title = title;
    this.description = discription;
    this.date = date;
    this.buttoncontent = "Update";
  }

  public onclearclick(){
    this.buttoncontent = "Save";
    this.title = "";
    this.date = "";
    this.description = "";
    this.service.GetNotice(1,1).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
}