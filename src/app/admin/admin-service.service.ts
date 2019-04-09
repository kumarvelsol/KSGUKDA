import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { Userlist } from '../admin/usertype/usertype.component';
import { InstituteInsert } from 'src/app/shared/instituteinsert';
import { DepartmentDetails } from 'src/app/shared/DepartmentModels/departmentdetails';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { ParseInstituteId } from '../admin/institutedetails/institutedetails.component';
import { Cast } from 'src/app/shared/Cast/cast';
import { PassingInstitute } from './cast-details/cast-details.component';
import { Religion } from 'src/app/shared/Religion/religion';
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
import { Employeemodel } from '../shared/employeemodel';
import { DepEmpParsing } from '../shared/SubjectAllocationModels/depemparsing';
import { SubjectAllocationInsert } from '../shared/SubjectAllocationModels/subjectallocation_insert';
import { SubjectAllocationParsing } from '../shared/SubjectAllocationModels/subjectallocation_parsing';
import { Student } from '../shared/student';
import {Apiresponse} from '../shared/apiresponse';

import {PasingInstitute} from '../admin/mothertongue/mothertongue.component';
import {Mother_Tongue} from 'src/app/shared/Mother_tongue/mother_tongue';

import {Classteacherdetails} from '../shared/classteacherdetails';
import { TeacherData } from './classteacherdetails/classteacherdetails.component';
import { SubjectAllocationUpdate } from '../shared/SubjectAllocationModels/subjectallocation_update';


export interface Parsing{
  institution_id : number,
  academic_id : number,
}
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  Baseurl = 'http://veledu.edujinni.in/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  refer : DepartmentDetails;
  constructor(private http:HttpClient) { }
  //Start of Department related Service Methods
    getdepartment(dep_parsing : Parsing){
      return this.http.post<DepartmentList>(this.Baseurl+"departmentlist",dep_parsing);
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

  casturllist='http://veledu.edujinni.in/getCastDetails';
  casturlinsert='  http://veledu.edujinni.in/addingCast';
  casturlupdate=' http://veledu.edujinni.in/UpdatingCast';
  religionurllist='http://veledu.edujinni.in/getReligionDetails';
  religionurlinsert='http://veledu.edujinni.in/addingReligion';
  religionurlupdate='http://veledu.edujinni.in/updateReligion';
  mothertongueurllist='http://veledu.edujinni.in/getmothertongueDetails';
  mothertongueurlinsert='http://veledu.edujinni.in/addmothertongue';
  mothertongueurlupdate = 'http://veledu.edujinni.in/Updatingmothertongue';
   
  
  //refer:Cast
  
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
  
  getusers(userinstacad:Parsing){
    return this.http.post(`${this.Baseurl+"usertypelist"}`,userinstacad);
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

  public getdesignation(desig_get : Parsing)
  {
    return this.http.post(this.Baseurl+"desiginationlist",desig_get);
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
  getclassallocation(class_get : TeacherData)
  {
    return this.http.post(`${this.Baseurl+"Classallocationlist"}`,class_get);
  }
  insertclassallocation(class_in : TeacherData)
  {
    return this.http.post(`${this.Baseurl+"classallocation"}`, class_in);
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
   public createemployee(emp:Employeemodel)
   {
      return this.http.post(`${this.Baseurl+"EmployeeInsert"}`,emp);
   }

   public getemployee(emplist:Parsing)
   {
     return this.http.post(`${this.Baseurl+"Employeelist"}`,emplist);
   }


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
    public UpdateSubjectAllocation(sub_allo_update : SubjectAllocationUpdate){
      return this.http.post(`${this.Baseurl+"subjectallocationupdate"}`,sub_allo_update);
    }
    public get_classes(cls_parsing : Parsing)
    {
      return this.http.post('http://veledu.edujinni.in/Classlist',cls_parsing);
    }
  //public UpdateSubjectAllocation()
  //End of Subject Allocation ServiceMethods.
  public insertStudent(student:Student) 
  {
    return this.http.post(`${this.Baseurl+"StudentInsert"}`,student);
  }

  public getClassesList(institution_id:string,academic_id:string)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id);
    params=params.append('academic_id',academic_id);
    return this.http.post<Apiresponse> (this.Baseurl+"Classlist",params)
  }
  public getTimeTAbleList(institution_id:string,academic_id:string)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id);
    params=params.append('academic_id',academic_id);
    return this.http.post<Apiresponse> (this.Baseurl+"getTimeTabless",params)
  }

  public getCastesLists(institution_id:string)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id);
    return this.http.post<Apiresponse> (this.Baseurl+"getCastDetails",params)
  }
  public getReligionsLists(institution_id:string)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id);
    return this.http.post<Apiresponse> (this.Baseurl+"getReligionDetails",params)
  }
  public getBloodGroupsLists(institution_id:string)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id);
    return this.http.post<Apiresponse> (this.Baseurl+"getbloodGroupdetails",params)
  }

  public getStatesList()
  {
    return this.http.get<Apiresponse> (this.Baseurl+"stateslist")
  }
  public addStudent(student:Student)
  {
    console.log(student);
     return this.http.post(this.Baseurl+"StudentInsert",student);
  }
  
  getmothertongue (PasingInstitute : PasingInstitute )
   {
     return this.http.post(`${this.mothertongueurllist}`, PasingInstitute);
   }
   createmothertongue(mothertongue: Mother_Tongue){
    return this.http.post(`${this.mothertongueurlinsert}`,mothertongue);
  }
  updatemothertongue(mothertongue:Mother_Tongue){
    return this.http.put('${this.mothertongueurlupdate}${mothertongue.mother_tongue_name}',mothertongue);
  }
}
