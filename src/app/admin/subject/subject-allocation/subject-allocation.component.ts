import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { Data } from 'src/app/class/data';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { SubjectParsing } from 'src/app/shared/SubjectModels/subparsing';
import { SubjectData } from 'src/app/shared/SubjectModels/subjectdata';
import { SubjectList } from 'src/app/shared/SubjectModels/subjectList';

@Component({
  selector: 'app-subject-allocation',
  templateUrl: './subject-allocation.component.html',
  providers: [AdminServiceService,ClasserviceService],
  styleUrls: ['./subject-allocation.component.css']
})
export class SubjectAllocationComponent implements OnInit {
  classes : Data[];
  subjects : SubjectList[];
  constructor(public service:AdminServiceService,public cservice : ClasserviceService) { }

  ngOnInit() {
    this.getClasses();
  }
  public getClasses(){
    
    // Start of Getting Classes
    this.cservice.get_products().subscribe(res=>{          
      this.classes = res.Data;   
    });
    //End of Getting Classes
    
    // Start of Getting Subjects
    let sub_parsing : SubjectParsing ={
      institution_id : 1,
      academic_id : 1
    }
    this.service.subjectlist(sub_parsing).subscribe((data : SubjectData) =>{
      this.subjects = data.Data;
    });
    // End of Getting Subjects
  }
}
