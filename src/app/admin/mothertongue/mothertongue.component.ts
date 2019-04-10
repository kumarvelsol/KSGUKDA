import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource} from '@angular/material';
import { JsResponse } from 'src/app/shared/jsresponse';
import {Mother_Tongue} from 'src/app/shared/Mother_tongue/mother_tongue';

@Component({
  selector: 'app-mothertongue',
  providers : [AdminServiceService],
  templateUrl: './mothertongue.component.html',
  styleUrls: ['./mothertongue.component.css']
})
export class MothertongueComponent implements OnInit {
  jsRes : JsResponse;
  mothertongue:Mother_Tongue[];
  
  displayedColumns : string[] = ['mother_tongue_id', 'mother_tongue_name','actions'];
  dataSource;

  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.service.getmothertongue(1,1).subscribe(data => 
    {
     this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  
  mother_tongue_name:string='';
  id:number;
  buttoncontent:string="Add";
  public onclick(){
    if(this.buttoncontent == "Add")
    {
      let mothertongue: Mother_Tongue = {
        mother_tongue_name:this.mother_tongue_name,
        institution_id : 1,
        academic_id : 1
      }
      this.service.createmothertongue(mothertongue).subscribe((data : JsResponse)=>{
          //this.respons=data;
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert(" Mothertongue Added successfully");
          console.log("success");
        }else{
        }
      });
    
      this.id = null;this.mother_tongue_name = null; 
    }
    else if(this.buttoncontent == "Update")
    {
      let mothertongue: Mother_Tongue = {
        academic_id : 1,
        institution_id : 1,
        mother_tongue_name : this.mother_tongue_name,
      }
      this.service.updatemothertongue(mothertongue).subscribe((data : JsResponse) => {
        //this.respons=data;
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("Mothertongue update Succesfully.!");
          console.log("success");
        }else{
        }
      });
    }
  }
  index : number;
  number : number;
  public startEdit(i:number,mother_tongue_id: number, mother_tongue_name : string) {

  this.index = i;
  this.number = mother_tongue_id;
  this.mother_tongue_name = mother_tongue_name;
  
  this.buttoncontent = "Update";
  console.log(this.id);
  }
  

}
