import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.css']
})
export class FeeTypeComponent implements OnInit {
  type : string = "";
  code : string = "";
  buttoncontent:string = "Add";
  displayedColumns = ['fee_type_id', 'fee_type_code', 'fee_name', 'actions'];
  dataSource;
  constructor(public service : AdminServiceService) { }
  ngOnInit() {
    this.onclearclick();
  }
  public onsaveclick(){
    if(this.code == "" || this.type == ""){
      alert("Please fill all fields");
    }else{
      if(this.buttoncontent == "Add"){
        this.service.CreateFeeType(1,1,this.type,this.code).subscribe(data =>{
          if(data.code == 200){
            alert("Inserted Succesfully");
            this.onclearclick();
          }else{
            alert("Failed to Insert");
          }
        });
      }else if(this.buttoncontent == "Update"){
        this.service.UpdateFeeType(1,1,this.id,this.type,this.code).subscribe(data =>{
          if(data.code == 200){
            alert("Updated Succesfully");
            this.onclearclick();
          }else{
            alert("FFailed to Update")
          }
        });
      }
    }
  }
  id : number;
  public startEdit(i: number, fee_type_id: number, fee_type_code: string, fee_name: string) {
    // index row is used just for debugging proposes and can be removed
    this.id = fee_type_id;
    this.type = fee_name;
    this.code = fee_type_code;
    this.buttoncontent = "Update";
  }
  public onclearclick(){
    this.buttoncontent = "Add";
    this.id = 0;
    this.type = "";
    this.code = "";
    this.service.GetFeeTypes(1,1).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data.Data);
    });
  }
}