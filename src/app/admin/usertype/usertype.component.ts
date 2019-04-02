import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { JsResponse } from 'src/app/shared/jsresponse';
import { User} from 'src/app/shared/user';
import { MatTableDataSource} from '@angular/material';

export interface Userdata {
  user_code: string;
  user_name: string;
  user_type_id: number;
}

export interface Userlist {
  code: number;
  message: string;
  Data: Userdata[];
}
@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})
export class UsertypeComponent implements OnInit {
  userlist : Userlist;
  userdata : Userdata[];
  users:User;
  dataSource;
  displayedColumns: string[] = ["user_type_id", "user_code", "user_name"];
  constructor(public service:AdminServiceService) { }

  ngOnInit() {
    this.service.getusers().subscribe((data : Userlist) =>
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
    debugger;
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
            Academic_id:1
          }
          this.service.createuser(user).subscribe((res)=>{
            console.log("Created a user successfully");
            this.service.getusers().subscribe((data : Userlist) =>
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
            Academic_id:1
          }
            this.service.updateuser(user).subscribe((res)=>{
              console.log(res);
              this.service.getusers().subscribe((data : Userlist) =>
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
  public RowSelected(row)
  {
      this.buttoncontent="Modify";
      this.user_type_id = row.user_type_id;
      this.user_code =  row.user_code;
      this.user_name = row.user_name;
      console.log(row);
  }
}
