import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/department';
import { DepartmentList } from '../admin/department/department.component';
import { Userlist } from '../admin/usertype/usertype.component';
import { InstituteInsert } from 'src/app/shared/instituteinsert';
import { DepartmentDetails } from 'src/app/shared/departmentdetails';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { ParseInstituteId } from '../admin/institutedetails/institutedetails.component';
import { Cast } from 'src/app/shared/cast';
import { PassingInstitute } from './cast-details/cast-details.component';
import { Religion } from 'src/app/shared/religion';
import {PassInstitute} from './religion/religion.component';
import { User } from '../shared/user';
import { Academicdetails} from '../shared/academicdetails';
import { PassingInstituteid } from '../admin/academicdetails/academicdetails.component';
import { Designation } from '../shared/designation';
import { DesignationList } from './designation/designation.component';
import {Bloodgroup} from '../shared/bloodgroup';
import { PassInstituteID } from './bloodgroup/bloodgroup.component';

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
  


  getusers(){
    return this.http.get<Userlist>(this.Baseurl+"usertypelist");
  }
  createuser (user : User){
    return this.http.post(`${this.Baseurl+"USERINSERT"}`,user);
  }
  updateuser (user_details : User){
    return this.http.post(`${this.Baseurl+"updateusertype"}`,user_details);
  }
  getacademic (academic : PassingInstituteid){
    return this.http.post(`${this.Baseurl+"getAcadamicdetails"}`,academic);
  }
  createacademic (academici : Academicdetails){
    return this.http.post(`${this.Baseurl+"Acadamicdetails"}`,academici)
  }
  public getdesignation()
  {
    return this.http.get<DesignationList>(this.Baseurl+"desiginationlist");
  }
  public createdesignation(desig_in:Designation){
      return this.http.post(`${this.Baseurl+"desigination"}`,desig_in);
  }
  public updatedesignation(desig_up: Designation){
    return this.http.post(`${this.Baseurl+"desiginationupdate"}`,desig_up);
  }
  getbloodgroup(blood_get : PassingInstitute)
  {
    return this.http.post(`${this.Baseurl+"getbloodGroupdetails"}`, blood_get);
  }
  public createbloodgroup(blood_in:Bloodgroup){
      return this.http.post(`${this.Baseurl+"addingBloodGroup"}`,blood_in);
  }
  public updatebloodgroup(blood_up: Bloodgroup){
    return this.http.post(`${this.Baseurl+"updateBloodGroup"}`,blood_up);
}
}
