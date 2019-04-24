import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/DepartmentModels/department';
import { InstituteInsert } from 'src/app/shared/instituteinsert';
import { DepartmentDetails } from 'src/app/shared/DepartmentModels/departmentdetails';
import { InstituteUpdate } from 'src/app/shared/instituteupdate';
import { ParseInstituteId } from '../admin/institutedetails/institutedetails.component';
import { Cast } from 'src/app/shared/CastModels/cast';
import { PassingInstitute } from './cast-details/cast-details.component';
import { Religion } from 'src/app/shared/ReligionModels/religion';
import { User } from '../shared/user';
import { Academicdetails} from '../shared/academicdetails';
import { Designation } from '../shared/designation';
import { Bloodgroup} from '../shared/bloodgroup';
import { SubjectInsert } from '../shared/SubjectModels/subjectinsert';
import { SubjectUpdate } from '../shared/SubjectModels/subjectupdate';
import { Employeemodel } from '../shared/employeemodel';
import { Classexammodel } from '../shared/classexammodel';
import { SubjectAllocationInsert } from '../shared/SubjectAllocationModels/subjectallocation_insert';
import { Student } from '../shared/student';
import {Apiresponse} from '../shared/apiresponse';
import {Mother_Tongue} from 'src/app/shared/Mother_tongue/mother_tongue';
import { TeacherData } from './classteacherdetails/classteacherdetails.component';
import { SubjectAllocationUpdate } from '../shared/SubjectAllocationModels/subjectallocation_update';
import { SubjectAllocationList } from '../shared/SubjectAllocationModels/subjectallocationlist';
import { JsResponse } from '../shared/jsresponse';
import { Schoolexam } from '../shared/schoolexam';
import { ClassFeeList } from '../shared/classfeelist';
import { Subjectexam } from '../shared/subjectexam';
import { Addevents } from '../shared/addevents';
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
    getdepartment(institution_id : number, academic_id : number){
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      return this.http.post<Apiresponse>(this.Baseurl+"departmentlist",params);
    }
    createdepartment (department : Department){
      return this.http.post(`${this.Baseurl+"department"}`,department);
    }
    updatedepartment (depart_details : DepartmentDetails){
      return this.http.post(`${this.Baseurl+"departmentupdate"}`,depart_details);
    }
  //End of Department related Service Methods

  //Start of Institute related Service Methods
    getinstitute (institution_id : number){//institution_id inst_Id : ParseInstituteId
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"Institutionlist"}`,params);
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
  
  getcast (institution_id : number)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"getCastDetails"}`, params);
  }
  createcast(cast: Cast){
    return this.http.post(`${this.Baseurl+"addingCast"}`,cast);
  }
  updatecast(cast_id : number,institution_id : number,academic_id : number, cast_name : string){
    let params = new HttpParams();
    params = params.append('cast_id', cast_id+"");
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('cast_name', cast_name);
    return this.http.post(`${this.Baseurl+"UpdatingCast"}`,params);
  }

  getreligion (institution_id : number )
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"getReligionDetails"}`, params);
  }
  createreligion(religion: Religion){
    return this.http.post(`${this.Baseurl+"addingReligion"}`,religion);
  }
  updatereligion(religion_id : number,institution_id : number,academic_id : number,religion_name : string ){
    let params = new HttpParams();
    params = params.append('religion_id', religion_id+"");
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('religion_name', religion_name);
    return this.http.post(`${this.Baseurl+"updateReligion"}`,params);
  }
  
  getusers(institution_id : number, academic_id : number)
  {
    let params = new HttpParams();
     params = params.append('institution_id', institution_id+"");
     params = params.append('academic_id',academic_id+"");
    return this.http.post(`${this.Baseurl+"usertypelist"}`,params);
  }
  createuser (user : User){
    return this.http.post(`${this.Baseurl+"USERINSERT"}`,user);
  }
  updateuser (user_details : User){
    return this.http.post(`${this.Baseurl+"updateusertype"}`,user_details);
  }

  getacademic (institution_id : number, academic_id : number)
  {
    let params = new HttpParams();
     params = params.append('institution_id', institution_id+"");
     params = params.append('academic_id',academic_id+"");
    return this.http.post(`${this.Baseurl+"getAcadamicdetails"}`,params);
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

  getbloodgroup(blood_get : Parsing)
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
  //School Exams Related ServiceMethods
  getschoolexams(exam_get : Parsing)
  {
    return this.http.post(`${this.Baseurl+"getSchoolExams"}`, exam_get);
  }
  public createschoolexam(exam_in:Schoolexam){
      return this.http.post(`${this.Baseurl+"addingSchoolExam"}`,exam_in);
  }
  public updateschoolexam(exam_up: Schoolexam){
    return this.http.post(`${this.Baseurl+"updatingSchoolExam"}`,exam_up);
  }
  public deleteschoolexam(exam_del: Schoolexam){
    return this.http.post(`${this.Baseurl+"deletingSchoolExam"}`,exam_del);
  }
  //Subject Exams Related ServiceMethods
  getsubjectexams(exam_get : Parsing)
  {
    return this.http.post(`${this.Baseurl+"getExamSubjects"}`, exam_get);
  }
  public createsubjectexam(exam_in:Subjectexam){
      return this.http.post(`${this.Baseurl+"addingExamSubject"}`,exam_in);
  }
  public updatesubjectexam(exam_up: Subjectexam){
    return this.http.post(`${this.Baseurl+"updatingExamSubject"}`,exam_up);
  }
  getaddevents(event_get : Parsing)
  {
    return this.http.post(`${this.Baseurl+"Eventlist"}`, event_get);
  }
  public createaddevents(event_in:Addevents){
    return this.http.post(`${this.Baseurl+"addingevent"}`,event_in);
}
public updateaddevents(event_up: Addevents){
  return this.http.post(`${this.Baseurl+"updateevent"}`,event_up);
}
  //Start of Subject Related ServiceMethods.
    public createsubject(sub_insert: SubjectInsert){
      return this.http.post(`${this.Baseurl+"Subjectinsert"}`,sub_insert);
    }
    public updatesubject(sub_up: SubjectUpdate){
      return this.http.post(`${this.Baseurl+"Subjectupdate"}`,sub_up);
    }
    public subjectlist(institution_id: number,academic_id : number){//sub_parse : SubjectParsing
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"Subjectslist"}`,params);
    }
  //End of Subject Related ServiceMethods.
   public createemployee(emp:Employeemodel)
   {
      return this.http.post(`${this.Baseurl+"EmployeeInsert"}`,emp);
   }
   public updateemployee(empu:Employeemodel)
   {
     return this.http.post(`${this.Baseurl+"Employeeupdate"}`,empu);
   }
   public getemployeelist(institution_id : number, academic_id : number)
   {
    let params = new HttpParams();
     params = params.append('institution_id', institution_id+"");
     params = params.append('academic_id',academic_id+"");
     return this.http.post(`${this.Baseurl+"Employeelist"}`,params);
   }
   public createclassexam(cls:Classexammodel)
   {
      return this.http.post(`${this.Baseurl+"addingClassExam"}`,cls);
   }
   public updateclassexam(clsu: Classexammodel){
    return this.http.post(`${this.Baseurl+"updatingClassExam"}`,clsu);
  }
   public getparticularemployee(institution_id : number, academic_id : number,employee_id : string)
   {
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      params = params.append('employee_id',employee_id+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"Employeeparticular"}`,params);
   }
   public getclassexam(institution_id : number, academic_id : number,exam_id : number)
   {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id',academic_id+"");
    params = params.append('exam_id',exam_id+"");
    return this.http.post(`${this.Baseurl+"getClassExams"}`,params);
   }
  //Start of Subject Allocation ServiceMethods.
    public getDepEmpList(institution_id : number, academic_id : number, departmant_id : number)
    {//,depemp : DepEmpParsing
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      params = params.append('departmant_id',departmant_id+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"Employeeparticularepartment"}`,params);
    }
    public CreateSubjectAllocaion(sub_allo_insert : SubjectAllocationInsert){
      return this.http.post(`${this.Baseurl+"subjectallocationinsert"}`,sub_allo_insert);
    }
    public getSubjectAllocationList(institution_id : number,academic_id : number){
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      return this.http.post<SubjectAllocationList>(`${this.Baseurl+"subjectallocationdetailslist"}`,params);
    }
    public UpdateSubjectAllocation(sub_allo_update : SubjectAllocationUpdate){
      return this.http.post(`${this.Baseurl+"subjectallocationupdate"}`,sub_allo_update);
    }
    public get_classes(institution_id : number,academic_id : number)
    {
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"Classlist"}`,params);
    }
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
  
  getmothertongue (institution_id: number,academic_id:number )
  {
    let params = new HttpParams();
    params = params.append('institution_id',institution_id+"");
    params = params.append('academic_id',academic_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"getmothertongueDetails"}`, params);
  }
  createmothertongue(mothertongue: Mother_Tongue){
    return this.http.post(`${this.Baseurl+"addmothertongue"}`,mothertongue);
  }
  updatemothertongue(mother_tongue_id : number,institution_id : number,academic_id : number,mother_tongue_name : string){
    let params = new HttpParams();
    params = params.append('mother_tongue_id', mother_tongue_id+"");
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('mother_tongue_name', mother_tongue_name);
    return this.http.post(`${this.Baseurl+"Updatingmothertongue"}`,params);
  }
  //Start of FeeType ServiceMethods
  public CreateFeeType(institution_id : number,academic_id : number,fee_name : string,fee_type_code : string){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('fee_name', fee_name);
    params = params.append('fee_type_code', fee_type_code);
    return this.http.post<JsResponse>(`${this.Baseurl+"Addingfee"}`,params);
  }
  public GetFeeTypes(institution_id : number,academic_id : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"Allfeetypes"}`,params)
  }
  public UpdateFeeType(institution_id : number,academic_id : number,fee_type_id:number, fee_name : string,fee_type_code : string){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('fee_type_id', fee_type_id+"");
    params = params.append('fee_name', fee_name);
    params = params.append('fee_type_code', fee_type_code);
    return this.http.post<JsResponse>(`${this.Baseurl+"updatefee"}`,params);
  }
  //End of Feetype ServiceMethods

  //Start of FeeModes ServiceMethods
  public CreateFeeMode(institution_id : number,academic_id : number,fee_mode_name : string, fee_mode_code : string, No_of_installments : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('fee_mode_name', fee_mode_name);
    params = params.append('fee_mode_code', fee_mode_code);
    params = params.append('No_of_installments', No_of_installments+"");
    return this.http.post<JsResponse>(`${this.Baseurl+"Addingfeemode"}`,params);
  }
  public GetFeeModes(institution_id : number,academic_id : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"Allfeemodes"}`,params)
  }
  public UpdateFeeMode(institution_id : number,academic_id : number,fee_mode_id : number, fee_mode_name : string, fee_mode_code : string, No_of_installments : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('fee_mode_id', fee_mode_id+"");
    params = params.append('fee_mode_name', fee_mode_name);
    params = params.append('fee_mode_code', fee_mode_code);
    params = params.append('No_of_installments', No_of_installments+"");
    return this.http.post<JsResponse>(`${this.Baseurl+"updatefeemode"}`,params);
  }
  //End of FeeMode ServiceMethods
  getclassstudent (institution_id : number, academic_id : number,class_id:number)
  {
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id',academic_id+"");
    params = params.append('class_id',class_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"studentclassdetails"}`,params);
  }
  getparticularstudent(institution_id : number, academic_id : number,mobile_no : string)
   {
      let params = new HttpParams();
      params = params.append('institution_id', institution_id+"");
      params = params.append('academic_id',academic_id+"");
      params = params.append('mobile_no',mobile_no+"");
      return this.http.post<Apiresponse>(`${this.Baseurl+"particularstudentdetails"}`,params);
   }

  //Start of Class Fee Declarations
  public GetClassFee(institution_id : number, academic_id : number, class_id : number){
    let params = new HttpParams();
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    params = params.append('class_id', class_id+"");
    return this.http.post<ClassFeeList>(`${this.Baseurl+"classfeelist"}`,params);
  }
  public CreateClassFee(classid : string,feetypeid : string,feeAmount : string,institution_id : number,academic_id : number){
    let params = new HttpParams();
    params = params.append('classid', classid);
    params = params.append('feetypeid', feetypeid);
    params = params.append('feeAmount', feeAmount);
    params = params.append('institution_id', institution_id+"");
    params = params.append('academic_id', academic_id+"");
    return this.http.post<JsResponse>(`${this.Baseurl+"classfee"}`,params);
  }
  //End of Class Fee Declarations
  //Start of Notice Board
  public CreateNotice(title : string,discription : string,date : string,institution_id : number,academic_id : number){
    let params = new HttpParams();
    params = params.append('title',title);
    params = params.append('discription',discription);
    params = params.append('date',date);
    params = params.append('institution_id',institution_id+"");
    params = params.append('academic_id',academic_id+"");
    return this.http.post<JsResponse>(`${this.Baseurl+"addingnotice"}`,params);
  }
  public GetNotice(institution_id : number,academic_id : number){
    let params = new HttpParams();
    params = params.append('institution_id',institution_id+"");
    params = params.append('academic_id',academic_id+"");
    return this.http.post<Apiresponse>(`${this.Baseurl+"Noticeboardlist"}`,params);
  }
  public UpdateNotice(notice_board_id : number, institution_id : number, academic_id : number, title : string, discription : string, date : string){
    let params = new HttpParams();
    params = params.append('notice_board_id',notice_board_id+"");
    params = params.append('title',title);
    params = params.append('discription',discription);
    params = params.append('date',date);
    params = params.append('institution_id',institution_id+"");
    params = params.append('academic_id',academic_id+"");
    return this.http.post<JsResponse>(`${this.Baseurl+"updatenotice"}`,params);
  }
  //End of Notice Board
}