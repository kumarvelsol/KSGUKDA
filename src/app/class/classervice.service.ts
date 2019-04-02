import { Injectable } from '@angular/core';
import { Classmodel } from './classmodel';
import { Data } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classresponse } from './classresponse';

@Injectable({
  providedIn: 'root'
})
export class ClasserviceService {

  refer:Classmodel
data:Data[];
  constructor(private http:HttpClient) { }

  validateLogin(emp:Classmodel):Observable<Classresponse>
  {    
    emp.institution_id=1;
    emp.academic_id=1;
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/classinsert',emp)
  }



//displaying the classes details
  get_products()
    {
      return this.http.get<Classresponse>('http://veledu.edujinni.in/Classlist');
  }


  //updating the classes list
  updateClass(refer:Classmodel):Observable<Classresponse>
  {
    refer.institution_id=1;
    refer.academic_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/classupdate',refer);
  }
}
