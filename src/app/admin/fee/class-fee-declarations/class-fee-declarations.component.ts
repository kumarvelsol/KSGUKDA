import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared/data';
import { AdminServiceService } from '../../admin-service.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-class-fee-declarations',
  templateUrl: './class-fee-declarations.component.html',
  styleUrls: ['./class-fee-declarations.component.css']
})
export class ClassFeeDeclarationsComponent implements OnInit {
  classes : Data[];
  totalamount : number = 0;
  amount : number = 0;
  fee : any = {};
  classSelected : number = 0;
  listcount : number;
  FeeTypeIds : string;
  FeeAmounts : string;
  ClassIds : string;
  buttoncontent : string = "Save";
  displayedColumns = ['fee_type_code', 'fee_name', 'fee_amount'];
  dataSource;
  constructor(public service: AdminServiceService) { }
  ngOnInit() {
    this.getclassdetails();
  }
  public getclassdetails(){
    this.service.get_classes(1,1).subscribe(data=>{
      this.classes = data.Data;
    });
  }
  public onclasschanged(val){
    if(this.classSelected == 0){
    }
    this.service.GetClassFee(1,1,val).subscribe(data=>{
      if(data.Data.length > 0){
        this.dataSource = new MatTableDataSource(data.Data);
        this.listcount = data.Data.length; 
        for (let i = 0; i < data.Data.length; i++) {
          if(i == 0){
            this.FeeTypeIds = data.Data[i].fee_type_id+"";
            this.ClassIds = data.Data[i].class_id+"";
            this.FeeAmounts = data.Data[i].fee_Amount+"";
          }else{
            this.FeeTypeIds = this.FeeTypeIds + "," + data.Data[i].fee_type_id;
            this.ClassIds = this.ClassIds + "," + data.Data[i].class_id;
            this.FeeAmounts = this.FeeAmounts + "," + data.Data[i].fee_Amount;
          }
          this.fee[i] = data.Data[i].fee_Amount;
          console.log(i+" : "+this.fee[i]);
          this.amount = data.Data[i].fee_Amount + this.amount;
        }
        this.totalamount = this.amount;
      }else{
        this.service.GetFeeTypes(1,1).subscribe(data =>{
          this.dataSource = new MatTableDataSource(data.Data);
          this.listcount = data.Data.length; 
          for (let i = 0; i < data.Data.length; i++) {
            if(i == 0){
              this.FeeTypeIds = data.Data[i].fee_type_id+"";
              this.ClassIds = this.classSelected+"";
              this.FeeAmounts = 0+"";
            }else{
              this.FeeTypeIds = this.FeeTypeIds + "," + data.Data[i].fee_type_id;
              this.ClassIds = this.ClassIds + "," + this.classSelected;
              this.FeeAmounts = this.FeeAmounts + "," + 0;
            }
            this.fee[i] = 0;
            console.log(i+" : "+this.fee[i]);
            this.amount = 0 + this.amount;
          }
        });
        this.totalamount = this.amount;
      }
    });
    this.amount = 0;
  }
  public onsaveclick(){
    if(this.listcount > 0){
      for (let i = 0; i < this.listcount; i++) {
        if(i == 0){
          this.FeeAmounts = this.fee[i];
        }else{
          this.FeeAmounts = this.FeeAmounts + "," + this.fee[i];
        }
      }
      console.log(this.FeeAmounts);
      console.log(this.ClassIds);
      console.log(this.FeeTypeIds);
    }
    if(this.buttoncontent == "Save"){
      this.service.CreateClassFee(this.ClassIds,this.FeeTypeIds,this.FeeAmounts,1,1).subscribe(data =>{
        if(data.code == 200){
          alert("Inserted Succesfully");
          //this.onclearclick();
        }else{
          alert("Failed to Insert");
        }
      });
    }else {//if(this.buttoncontent == "Update"){
      // this.service.UpdateFeeType(1,1,this.id,this.type,this.code).subscribe(data =>{
      //   if(data.code == 200){
      //     alert("Updated Succesfully");
      //     //this.onclearclick();
      //   }else{
      //     alert("FFailed to Update")
      //   }
      // });
    }
  }
}