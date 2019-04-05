import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { Userlist } from '../admin/usertype/usertype.component';
import { InstituteInsert } from 'src/app/shared/instituteinsert';
import { DepartmentDetails } from 'src/app/shared/DepartmentModels/departmentdetails';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { ParseInstituteId } from '../admin/institutedetails/institutedetails.component';
import { Cast } from 'src/app/shared/cast';
import { PassingInstitute } from './cast-details/cast-details.component';
import { Religion } from 'src/app/shared/religion';
import { PassInstitute } from './religion/religion.component';
import { User } from '../shared/user';
import { Academicdetails} from '../shared/academicdetails';
import { PassingInstituteid } from '../admin/academicdetails/academicdetails.component';
import { Designation } from '../shared/designation';
import { DesignationList } from './designation/designation.component';
import { Bloodgroup} from '../shared/bloodgroup';
import { PassInstituteID } from './bloodgroup/bloodgroup.component';
import { SubjectInsert } from '../shared/SubjectModels/subjectinsert';
import { SubjectUpdate } from '../shared/SubjectModels/subjectupdate';
import { SubjectParsing } from '../shared/SubjectModels/subparsing';
import { DepartmentList } from '../shared/DepartmentModels/departmentlist';
import { DepEmpParsing } from '../shared/SubjectAllocationModels/depemparsing';
import { SubjectAllocationInsert } from '../shared/SubjectAllocationModels/subjectallocation_insert';
import { SubjectAllocationParsing } from '../shared/SubjectAllocationModels/subjectallocation_parsing';
import {Classteacherdetails} from '../shared/classteacherdetails';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  Baseurl = 'http://veledu.edujinni.in/';
  constructor(private http:HttpClient) { }


  //Start of Department related Service Methods
    getdepartment(){
      return this.http.get<DepartmentList>(this.Baseurl+"departmentlist");
    }
    createdepartment (department : Department){
      return this.http.post(`${this.Baseurl+"department"}`,department);
    }
    updatedepartment (depart_details : DepartmentDetails){
      return this.http.post(`${this.Baseurl+"departmentupdate"}`,depart_details);
    }
  //End of Department related Service Methods

  //Start of Institute related Service Methods
    getinstitute (inst_Id : ParseInstituteId){
      return this.http.post(`${this.Baseurl+"Institutionlist"}`,inst_Id);
    }
    createinstitute (institute : InstituteInsert){
      return this.http.post(`${this.Baseurl+"Institution"}`,institute);
    }
    updateinstitute (insti_up : InstituteUpdate){
      return this.http.post(`${this.Baseurl+"Institutionupdate"}`,insti_up);
    }
  //End of Institute related Service Methods

  clsurl = 'http://veledu.edujinni.in/classallocation';
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
  getclassallocation(class_all : Classteacherdetails)
  {
    return this.http.get(`${this.Baseurl+"Classlist"}`);
  }
  insertclassallocation(class_in : Classteacherdetails)
  {
    return this.http.post(`${this.clsurl}`, class_in);
  }

  //Start of Subject Related ServiceMethods.
    public createsubject(sub_insert: SubjectInsert){
      return this.http.post(`${this.Baseurl+"Subjectinsert"}`,sub_insert);
    }
    public updatesubject(sub_up: SubjectUpdate){
      return this.http.post(`${this.Baseurl+"Subjectupdate"}`,sub_up);
    }
    public subjectlist(sub_parse : SubjectParsing){
      return this.http.post(`${this.Baseurl+"Subjectslist"}`,sub_parse);
    }
  //End of Subject Related ServiceMethods.

  //Start of Subject Allocation ServiceMethods.
    public getDepEmpList(depemp : DepEmpParsing){
      return this.http.post(`${this.Baseurl+"Employeeparticular"}`,depemp);
    }
    public CreateSubjectAllocaion(sub_allo_insert : SubjectAllocationInsert){
      return this.http.post(`${this.Baseurl+"subjectallocationinsert"}`,sub_allo_insert);
    }
    public getSubjectAllocationList(sub_allo_parsing : SubjectAllocationParsing){
      return this.http.post(`${this.Baseurl+"subjectallocationdetailslist"}`,sub_allo_parsing);
    }
  //public UpdateSubjectAllocation()
  //End of Subject Allocation ServiceMethods.
}
