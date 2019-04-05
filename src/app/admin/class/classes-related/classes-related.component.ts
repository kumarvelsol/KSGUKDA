import { Component, OnInit } from '@angular/core';
import { Classresponse } from 'src/app/class/classresponse';
import { ClasserviceService } from 'src/app/class/classervice.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Data } from 'src/app/class/data';
import { Classmodel } from 'src/app/class/classmodel';

@Component({
  selector: 'app-classes-related',
  templateUrl: './classes-related.component.html',
  styleUrls: ['./classes-related.component.css']
})
export class ClassesRelatedComponent implements OnInit {

  data:Data[];
  dataSource
  serRes:Classresponse;
  
  constructor(private servs:ClasserviceService,private http:HttpClient) { }
  displayedColumns: string[] = ['class_name', 'class_code', 'class_description','actions'];
  ngOnInit()
  { 
    this.resetForm();
    this.callingClasses();
    
  }
  callingClasses()
  {
    this.servs.get_products().subscribe(res=>{          
      this.data=res.Data;      
      this.dataSource = this.data;
  });
  }

  resetForm(form? : NgForm)
  { 
    if(form!=null)
    form.reset();
        this.servs.refer={
          class_code:'',
          class_description:'',
          class_name:'',
          academic_id:1,
          institution_id:1,
          class_id:null,
        }
  }

  onSubmit(addingClass:NgForm)
  {

    if(addingClass.value.class_id==null)
    {
       this.servs.validateLogin(addingClass.value).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);
        this.callingClasses();
        
      }
      else{        
        alert(this.serRes.message);
        
      }
  })
}
else
{
  //calling update method
  this.updateClasses(addingClass);
  
}
  }

  updateClasses(addingClass : NgForm)
  {

    //this.servs.updateClass(addingClass.value);
    this.servs.updateClass(addingClass.value).subscribe(data=>{
      this.serRes=data;
      if(this.serRes.code==200)
      {
        alert(this.serRes.message);
        this.callingClasses();
        
      }
      else{
        alert(this.serRes.message);
        
      }
  })
  }

  populateForm(country:Classmodel)
  {
    this.servs.refer=Object.assign({},country);  
  }
}
