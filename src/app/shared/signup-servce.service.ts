import { Injectable } from '@angular/core';
import { Signupmodel } from './signupmodel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classresponse } from '../class/classresponse';

@Injectable({
  providedIn: 'root'
})
export class SignupServceService 
{

  signUpModelRef:Signupmodel;

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  addSignUp(emp:Signupmodel):Observable<Classresponse>
  {        
    return this.http.post<Classresponse> ('http://veledu.edujinni.in/Institution',emp);
  }

  loginAdmin (institution_code : string, institution_password : string)
  {
    let params = new HttpParams();
    params = params.append('institution_code', institution_code+"");
    params = params.append('institution_password',institution_password+"");
     
    //console.log(emp);
    return this.http.post<Classresponse>('http://veledu.edujinni.in/instituteLogin',params);
   
  }



}
