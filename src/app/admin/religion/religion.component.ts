import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AdminServiceService } from '../admin-service.service';
import { Religion } from 'src/app/shared/ReligionModels/religion';
import { JsResponse } from 'src/app/shared/JsResponse';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  providers: [ AdminServiceService ],
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {
  jsRes : JsResponse;
  religion:Religion[];

  // dataSource = new MatTableDataSource<Religion>();
  // displayedColumns: string[] = ['religion_id', 'religion_name'];

  displayedColumns : string[] = ['religion_id', 'religion_name','actions'];
  dataSource;

  constructor(public service:AdminServiceService ) { }

  ngOnInit() {
  this.service.getreligion(1).subscribe(data => 
   {
    this.dataSource = new MatTableDataSource(data.Data);
   });
  }
  religion_name:string='';
  id:number;
  buttoncontent:string="Add";
  public onclick()
  {
    if(this.religion_name == '' )
    {alert("Please enter valid details") }
    else
    {
    
      if(this.buttoncontent == "Add")
      {
        let religion: Religion = {
          religion_name:this.religion_name,
          institution_id : 1,
          academic_id : 1
        }
        this.service.createreligion(religion).subscribe((data : JsResponse)=>{
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert(" Added successfully");
            console.log("success");
          }else{
          }
        });
        // this.service.getreligion().subscribe((data: ReligionData[]) => {this.religionData = data;});
        this.id = null;this.religion_name = null;
      }  
      else if(this.buttoncontent == "Update")
      {
        let religion: Religion = {
          academic_id : 1,
          institution_id : 1,
          religion_name : this.religion_name,
          
        }
        this.service.updatereligion(this.num,1,1,this.religion_name).subscribe((data : JsResponse) => {
          //this.respons=data;
          this.jsRes = data;
          if(this.jsRes.code==200)
          {
            alert("Religion update Succesfully.!");
            console.log("success");
          }
      
          
        });
      }
    }
      
  }
   num : number;
   public startEdit(i:number,religion_id: number, religion_name: string,) {
    // index row is used just for debugging proposes and can be removed
   this.num = religion_id;
   this.religion_name = religion_name;
   this.buttoncontent = "Update";
   }
}
