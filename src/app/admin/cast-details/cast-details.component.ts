import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/CastModels/cast';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource} from '@angular/material';
import { JsResponse } from 'src/app/shared/jsresponse';

export interface PassingInstitute {
  institution_id : number;
}
@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  providers: [ AdminServiceService ],
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  jsRes : JsResponse;
  cast : Cast[];
  // dataSource = new MatTableDataSource<Datum>();
  // displayedColumns: string[] = ['cast_id', 'cast_name'];
  
  displayedColumns : string[] = ['cast_id', 'cast_name','actions'];
  dataSource;
  constructor(public service:AdminServiceService ) { }

  ngOnInit() {
    this.service.getcast(1).subscribe(data => 
    {
     this.dataSource = new MatTableDataSource(data.Data);
    });
  }
  cast_name:string='';
  id:number;
  buttoncontent:string="Add";

  public onclick(){
     if(this.cast_name == '' )
    {alert("Please enter valid details") }
    else
    {
    if(this.buttoncontent == "Add")
    {
      let cast: Cast = {
        cast_name:this.cast_name,
        institution_id : 1,
        academic_id : 1
      }
      this.service.createcast(cast).subscribe((data : JsResponse)=>{
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert(" Cast Added successfully");
          console.log("success");
        }else{
        }
      });
      // this.service.getcast().subscribe((data: Datum[]) => {this.dataum = data;});
      this.id = null;this.cast_name = null; 
    }
    else if(this.buttoncontent == "Update")
    {
      let cast: Cast = {
        academic_id : 1,
        institution_id : 1,
        cast_name : this.cast_name,
        
      }
      this.service.updatecast(this.num,1,1,this.cast_name).subscribe((data : JsResponse) => {
        //this.respons=data;
        this.jsRes = data;
        if(this.jsRes.code==200)
        {
          alert("Cast update Succesfully.!");
          console.log("success");
        }else{
        }
      });
    }
  }


  
  }
  num : number;
  public startEdit(i:number,cast_id: number, cast_name: string,) {
  // index row is used just for debugging proposes and can be removed
    this.num = cast_id;
    this.cast_name = cast_name;
    this.buttoncontent = "Update";
  }
}