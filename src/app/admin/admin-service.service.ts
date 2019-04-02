import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/department';
import { DepartmentList } from '../admin/department/department.component';
import { InstituteInsert } from 'src/app/shared/instituteinsert';
import { DepartmentDetails } from 'src/app/shared/departmentdetails';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { ParseInstituteId } from '../admin/institutedetails/institutedetails.component';
import { Cast } from 'src/app/shared/cast';
import { PassingInstitute } from './cast-details/cast-details.component';
import { Religion } from 'src/app/shared/religion';
import {PassInstitute} from './religion/religion.component';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  Baseurl = 'http://veledu.edujinni.in/';
  // departmentllist ='http://veledu.edujinni.in/departmentlist';
  // departmentinsert ='http://veledu.edujinni.in/department';
  // departmentupdate ='http://veledu.edujinni.in/departmentupdate';
  // institutelist = 'http://veledu.edujinni.in/Institutionlist';
  // instituteinsert = 'http://veledu.edujinni.in/Institution';
  // instituteupdate = 'http://veledu.edujinni.in/Institutionupdate';
  constructor(private http:HttpClient) { }

  getdepartment(){
    return this.http.get<DepartmentList>(this.Baseurl+"departmentlist");
  }
  createdepartment (department : Department){
    return this.http.post(`${this.Baseurl+"department"}`,department);
  }
  updatedepartment (depart_details : DepartmentDetails){
    return this.http.post(`${this.Baseurl+"departmentupdate"}`,depart_details);
  }
  getinstitute (inst_Id : ParseInstituteId){
    return this.http.post(`${this.Baseurl+"Institutionlist"}`,inst_Id);
  }
  createinstitute (institute : InstituteInsert){
    return this.http.post(`${this.Baseurl+"Institution"}`,institute);
  }
  updateinstitute (insti_up : InstituteUpdate){
    return this.http.post(`${this.Baseurl+"Institutionupdate"}`,insti_up);
  }
  casturllist='http://veledu.edujinni.in/getCastDetails';
casturlinsert='  http://veledu.edujinni.in/addingCast';
casturlupdate=' http://veledu.edujinni.in/UpdatingCast';
religionurllist='http://veledu.edujinni.in/getReligionDetails';
religionurlinsert='http://veledu.edujinni.in/addingReligion';
religionurlupdate='http://veledu.edujinni.in/updateReligion';

  refer:Cast
  
  getcast (passing_institute : PassingInstitute)
  {
    //return this.http.get<CastList>(this.casturllist);
    return this.http.post(`${this.casturllist}`, passing_institute);
  }
  createcast(cast: Cast){
    return this.http.post(`${this.casturlinsert}`,cast);
  }
  updatecast(cast:Cast){
    return this.http.put(`${this.casturlupdate}${cast.cast_name}`,cast);
  }
   getreligion (passing_institute : PassInstitute )
   {
     return this.http.post(`${this.religionurllist}`, passing_institute);
   }
   createreligion(religion: Religion){
    return this.http.post(`${this.religionurlinsert}`,religion);
  }
  updatereligion(religion:Religion){
    return this.http.put(`${this.religionurlupdate}${religion.religion_name}`,religion);
  }
  


}
