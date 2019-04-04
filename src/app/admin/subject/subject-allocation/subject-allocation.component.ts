import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/class/data';
import { ClasserviceService } from 'src/app/class/classervice.service';

@Component({
  selector: 'app-subject-allocation',
  templateUrl: './subject-allocation.component.html',
  providers: [AdminServiceService,ClasserviceService],
  styleUrls: ['./subject-allocation.component.css']
})
export class SubjectAllocationComponent implements OnInit {
  classes : Data[];
  constructor(public service:AdminServiceService,public cservice : ClasserviceService) { }

  ngOnInit() {
    this.getClasses();
  }

  public getClasses(){
    this.cservice.get_products().subscribe(res=>{          
      this.classes = res.Data;   
      //this.dataSource = this.data;
    });
  }
}
