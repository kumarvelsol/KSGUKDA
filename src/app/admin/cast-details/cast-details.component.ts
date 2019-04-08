import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/Cast/cast';
import { AdminServiceService } from '../admin-service.service';
import { MatTableDataSource} from '@angular/material';
import { JsResponse } from 'src/app/shared/jsresponse';
import { CastData } from 'src/app/shared/Cast/castdata';
import { CastList } from 'src/app/shared/Cast/castlist';



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
  cast:Cast[];
  castlist:CastList;
  castdata :CastData[];
  // dataSource = new MatTableDataSource<Datum>();
  // displayedColumns: string[] = ['cast_id', 'cast_name'];
  
  displayedColumns : string[] = ['cast_id', 'cast_name','actions'];
  dataSource;
  constructor(public service:AdminServiceService ) { }

  ngOnInit() {
    let passing_institute: PassingInstitute = {
      institution_id : 1,
    }
   this.service.getcast(passing_institute).subscribe((data: CastList) => 
   {
     this.castlist = data;
     console.log(this.castlist);
     this.dataSource = new MatTableDataSource(this.castlist.Data);
    });
  }
  cast_name:string='';
  id:number;
  buttoncontent:string="Add";
  public onclick(){
    if(this.buttoncontent == "Add")
    {
      let cast: Cast = {
        cast_name:this.cast_name,
        institution_id : 1,
        academic_id : 1
      }
      this.service.createcast(cast).subscribe((data : JsResponse)=>{
          //this.respons=data;
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
    this.service.updatecast(cast).subscribe((data : JsResponse) => {
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

  index : number;
  num : number;
  public startEdit(i:number,cast_id: number, cast_name: string,) {
  // index row is used just for debugging proposes and can be removed
  this.index = i;
  this.num = cast_id;
  this.cast_name = cast_name;
  
  this.buttoncontent = "Update";
  console.log(this.id);
  }

}