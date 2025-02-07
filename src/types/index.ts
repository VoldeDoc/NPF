export interface UserFormValues{
    insurance_type: "comprehensive" | "third_party";
    category:string;
    sub_category:string;
    title: "MR" | "MRS" | "MISS"|"MS"|"DR"|"PROF"|"ENGR"|"ARCH"|"BARR"|"CAPT"|"LT"|"MAJ"|"GEN"|"COL"|"REV"|"PASTOR"|"EVANG"|"CHIEF"|"PRINCE"|"PRINCESS"|"HON"|"SEN";
    use_type:"individual" | "corporate";
    first_name:string;
    last_name:string;
    email:string;
    phone_number:string;
    driver_license:string;
    license_expire_year:number;
    year_of_driving:number;
}

export interface VehicleFormValues{
    user_id?:number;
    vehicle_registration_number:string;
    value_amount:string;
    maker:string;
    motor_type:string;
    model:string;
    body_color:string;
    year:string;
    car_type:string;
    chassis_number:string;
    engine_number:string;
    with_effect_from:string;
}

export interface DocumentFormValues{
    user_id:number;
    validId:File;
    vehicleLicense:File;
    utility_bill:File;
}

export interface DocumentUploadProps{
    user_id:number;
    type:string;
    document_type:string;
    file:File;
}