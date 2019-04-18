import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-fee-mode',
  templateUrl: './fee-mode.component.html',
  styleUrls: ['./fee-mode.component.css']
})
export class FeeModeComponent implements OnInit {
  mode : string = "";
  code : string = "";
  installments : number = 0;
  buttoncontent:string = "Add";
  displayedColumns = ['fee_mode_id', 'fee_mode_name', 'fee_mode_code','No_of_installments', 'actions'];
  dataSource;
  constructor(public service : AdminServiceService) { }

  ngOnInit() {
    this.onclearclick();
  }

  public onsaveclick(){
    if(this.mode == "" || this.code == "" || this.installments == 0){
      alert("Please fill all fields");
    }else{
      if(this.buttoncontent == "Add"){
        this.service.CreateFeeMode(1,1,this.mode,this.code,this.installments).subscribe(data =>{
          if(data.code == 200){
            alert("Inserted Succesfully");
            this.onclearclick();
          }else{
            alert("Failed to Insert");
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateFeeMode(1,1,this.id,this.mode,this.code,this.installments).subscribe(data =>{
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
  public startEdit(i: number, fee_mode_id: number, fee_mode_name: string, fee_mode_code: string, No_of_installments : number) {
    // index row is used just for debugging proposes and can be removed
    this.id = fee_mode_id;
    this.mode = fee_mode_name;
    this.code = fee_mode_code;
    this.installments = No_of_installments;
    this.buttoncontent = "Update";
  }
  public onclearclick(){
    this.buttoncontent = "Add";
    this.id = 0;
    this.mode = "";
    this.code = "";
    this.installments = 0;
    this.service.GetFeeModes(1,1).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
}