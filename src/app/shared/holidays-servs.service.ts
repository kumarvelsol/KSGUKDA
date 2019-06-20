import { Injectable } from '@angular/core';
import { AddHolidaymodel } from './add-holidaymodel';

import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classresponse } from '../class/classresponse';
import { updateholidays } from '../add-holidays/add-holidays.component';

@Injectable({
  providedIn: 'root'
})
export class HolidaysServsService {

  addHoliday:AddHolidaymodel
  constructor(private http:HttpClient) { }
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  addTperiods(emp:AddHolidaymodel):Observable<Classresponse>
  {    
    emp.institution_id=1;
    emp.academic_id=1;    
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/dates',emp)
  }



  addHolidays(emp:AddHolidaymodel):Observable<Classresponse>
  {    
    // emp.institution_id=1;
    // emp.academic_id=1;    
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/dates',emp)
  }

  getHolidays(institution_id : number, academic_id : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id',academic_id+"");
    
    return this.http.post<Classresponse>('http://veledu.edujinni.in/holidaylist',params);
  }


  updateHolidays(ss:updateholidays){
    ss.institution_id=1;
    ss.academic_id=1; 
    ss.holiday=1;
    return this.http.post<Classresponse>('http://veledu.edujinni.in/updateholiday',ss);

  }


}
