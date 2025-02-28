export interface UserFormValues{
    insurance_type: "premium" | "third_party";
    category:string;
    sub_category:string;
    title: "MR" | "MRS" | "MISS"|"MS"|"DR"|"PROF"|"ENGR"|"ARCH"|"BARR"|"CAPT"|"LT"|"MAJ"|"GEN"|"COL"|"REV"|"PASTOR"|"EVANG"|"CHIEF"|"PRINCE"|"PRINCESS"|"HON"|"SEN";
    use_type:"individual" | "corporate";
    first_name:string;
    last_name:string;
    email:string;
    phone_number:string;
    driver_license?:string;
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
    year:string | number;
    car_type:string;
    chassis_number:string;
    engine_number:string;
    with_effect_from: string;
    
    //New additions from personal details
    insurance_package: "premium" | "third_party";
    category:string;
    sub_category: string;
    driver_license?:string;
    license_expire_year: Date; // Now a Date object
    year_of_driving:number | string;
}

export interface DocumentFormValues{
    user_id:number;
    nin:File;
    vehicleLicense:File;
    utilityBill:File;
}

export interface DocumentUploadProps{
    user_id:number;
    type:string;
    document_type?:string;
    file: File & { type: "image/jpeg" | "image/png" | "application/pdf" };
}