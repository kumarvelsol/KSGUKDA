import { Injectable } from '@angular/core';
import { Classmodel } from './classmodel';
import { Data } from './data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classresponse } from './classresponse';
import { Timeperiodmodel } from '../timeperiods/timeperiodmodel';
import { Ttablemodel } from '../ttablemodel';
import { Tupdate } from '../tupdate';

@Injectable({
  providedIn: 'root'
})
export class ClasserviceService {

  tperiods:Timeperiodmodel;
  refer:Classmodel
  data:Data[];

  ttable:Ttablemodel;
  tupdates:Tupdate
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  validateLogin(emp:Classmodel):Observable<Classresponse>
  {    
    emp.institution_id=1;
    emp.academic_id=1;
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/classinsert',emp);
  }
  //displaying the classes details
  get_products()
  {

    this.refer.institution_id=1;
    this.refer.academic_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/Classlist',this.refer);

  }
  //updating the classes list
  updateClass(refer:Classmodel):Observable<Classresponse>
  {
    refer.institution_id=1;
    refer.academic_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/classupdate',refer);
  }
  addTperiods(emp:Timeperiodmodel):Observable<Classresponse>
  {    
    emp.institution_id=1;
    emp.academic_id=1;
    //emp.class_id=1;
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/addingTimePeriods',emp)
  }




  getTperiods ()
  {
    this.tperiods.institution_id=1;
    this.tperiods.academic_id=1;
 
    //console.log(emp);
    return this.http.post<Classresponse>('http://veledu.edujinni.in/getTimeperiods',JSON.stringify(this.tperiods), this.httpOptions);
   
  }






  updateTPeriods(ssp:Timeperiodmodel):Observable<Classresponse>
  {
    ssp.institution_id=1;
    ssp.academic_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/updateTimePeriods',ssp);
  }




  deleteTPeriods(tperiods:Timeperiodmodel):Observable<Classresponse>
  {
    tperiods.institution_id=1;
    tperiods.academic_id=1;
        
    return this.http.post<Classresponse>('http://veledu.edujinni.in/deleteTimePeriod',tperiods);
  }


  getTimetables(emp:Ttablemodel):Observable<Classresponse>
  {    
    emp.institution_id=1;
    emp.academic_id=1;
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/classinsert',emp)
  }

  getTimeTables(ss:Ttablemodel) :Observable<Classresponse>
  {    
    ss.academic_id=1;
    ss.institution_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/timetableallocation',ss)
  }


  updateTimeTables(nn:Ttablemodel) :Observable<Classresponse>
  {    
    nn.academic_id=1;
    nn.institution_id=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/updateTimeTables',nn)
  }



  // getPerticularClassAllocatoinSubjects(pp:Ttablemodel)
  // {
  //   pp.academic_id=1;
  //   pp.institution_id=1;
    
  //   return this.http.post<Classresponse>('http://veledu.edujinni.in/allocationlist',pp);    
  // }


  getdepartment(institution_id : number, academic_id : number,class_id:number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id',academic_id+"");
    params = params.append('class_id',class_id+"");
    return this.http.post<Classresponse>('http://veledu.edujinni.in/allocationlist',params);
  }
 


  
}
