export interface Data {
    class_name:string;
    class_code:string;
    class_id:number;
    class_description:string;
    //employee_id:string;
    //departmant_id:string;
    time_table_id:string;

    timetable_status:string;
    //sub_allocation_id:string;
    time_period_id:string;
    blood_group_code:string;
    blood_group_id:string;
    //academic_id:string;
    blood_group_name:string;
    //institution_id:string;
    academic_end_month:string;
    academic_end_year:string;
    academic_start_month:string;
    academic_start_year:string;
    academic_status:string;
    cast_name:string;
    cast_id:string;
    religion_id:string;
    religion_name:string;

    states:string;
    state_id:string;

    //Start of Department Fields
    departmant_id: number;
    departmant_name: string;
    department_code: string;
    department_description: string;
    //End of Department Fields

    //Start of Subject Allocation Fields
    sub_allocation_id : number;
    institution_id : number;
    academic_id : number;
    subject_id : number;
    subject_name : string;
    first_name : string;
    employee_id : number;

    subject_code : string;
    subject_description : string;
    subject_status : string;
    //End of Subject Allocation Fields
}
