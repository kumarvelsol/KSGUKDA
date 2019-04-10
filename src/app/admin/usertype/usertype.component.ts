import { Component, OnInit } from '@angular/core';
import { AdminServiceService,Parsing } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { Data} from 'src/app/shared/data';
import { MatTableDataSource} from '@angular/material';
import { Apiresponse } from 'src/app/shared/apiresponse';
import { User } from 'src/app/shared/user';



@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})
export class UsertypeComponent implements OnInit {
  userlist : Apiresponse;
  userdata : Data[];
  users:Data;
  dataSource;
  displayedColumns: string[] = ["user_type_id", "user_code", "user_name","actions"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.service.getusers(1,1).subscribe((data : Apiresponse) =>
    {
      this.userlist=data;
      console.log(this.userlist.Data);
      this.dataSource = new MatTableDataSource(this.userlist.Data);
    });
  }
  user_type_id:number=null;
  user_code:string=null;
  user_name:string='';
  status:string='';
  buttoncontent:string="Add";
  public onclick()
  {
    if(this.user_code == null || this.user_name == "")
    {alert("Please fill all fields");}
    else
      {
        if(this.buttoncontent == "Add")
        {
          let user:User = {
            user_type_id: this.user_type_id,
            user_code:this.user_code,
            user_name:this.user_name,
            institution_id:1,
            academic_id:1
          }
          this.service.createuser(user).subscribe((res:JsResponse)=>{
            if(res.code == 200)
            {
             alert("Created User successfully");
            }
            else
            {
              alert(""+res.message);
            }
            console.log("Created a user successfully");
            this.service.getusers(1,1).subscribe((data : Apiresponse) =>
            {
              this.userlist=data;
              console.log(this.userlist.Data);
              this.dataSource = new MatTableDataSource(this.userlist.Data);
            });
          });
          this.user_code=null;this.user_name=null;
          this.status="Added successfully";
        }
        else
        {
          let user:User = {
            user_type_id: this.user_type_id,
            user_code:this.user_code,
            user_name:this.user_name,
            institution_id:1,
            academic_id:1
          }
            this.service.updateuser(user).subscribe((res:JsResponse)=>{
              if(res.code == 200)
              {
                alert("Updated User successfully");
              }
              else
              {
                alert(""+res.message);
              }
              console.log(res);
              this.service.getusers(1,1).subscribe((data : Apiresponse) =>
              {
                this.userlist=data;
                console.log(this.userlist.Data);
                this.dataSource = new MatTableDataSource(this.userlist.Data);
              });
            });
            this.user_code=null;this.user_name=null;
            this.status="Updated successfully";
            this.buttoncontent="Add";
        }
    }
  }
  public onclear()
  {
    this.user_code=null;this.user_name=null;
    this.buttoncontent="Add";
  }
  public RowSelected(i:number,user_type_id:number,user_code:string,user_name:string)
  {
      this.buttoncontent="Modify";
      this.user_type_id = user_type_id;
      this.user_code =  user_code;
      this.user_name = user_name;
  }
}
