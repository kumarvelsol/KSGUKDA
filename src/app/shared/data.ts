export interface Data {
    class_name:string;
    class_code:string;
    class_id:number;
    class_description:string;
    //employee_id:string;
    //departmant_id:string;
    time_table_id:string;
    
    user_type_id:number;
    user_code:string;
    user_name:string;

    timetable_status:string;
    //sub_allocation_id:string;
    time_period_id:string;
    blood_group_code:string;
    blood_group_id:string;
    //academic_id:string;
    //institution_id:string;
    blood_group_name:string;
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
    
    employee_code:string,
    last_name:string,
    date_of_birth:Date,
    gender:string,
    phone_no:string,
    alternate_phone_no:string,
    email:string,
    user_type:string,
    designation_id :Number,
    joining_date:Date,
    qualification:string,
    experience:string,
    present_address :string,
    perminent_address:string,
    state:string,
    city :string,
    pin_code:string

    //Start of Department Fields
    departmant_id: number;
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
    designation_code :string;
    designation_name :string;
    designation_description :string;
    departmant_name : string;
    id : number;
}
