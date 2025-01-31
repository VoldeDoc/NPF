import heroImg from "../../assets/insurance/hero.png"
//import downArrow from "../../assets/insurance/down-arrow.svg"
import { useState } from "react";
import { IFormValues } from "./Tools/handleFormValidations";
import PersonalDetails from "./Tools/PersonalDetails";
import VehicleDetails from "./Tools/VehicleDetails";
import UploadDetails from "./Tools/UploadDetails";
import SuccessfulPayment from "./Tools/SuccessfulPayment";


export default function MotorInsuranceQuote() {

    const [formValues, setFormValues] = useState<IFormValues>({
        category: "",
        title: "",
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        driverLicenceNumber: "",
        driverLicenceExpiryDate: "",
        yearsOfDriving: "",
        vehicleRegistrationNumber: "",
        valueAmount: "",
        vehicleUse: "",
        make: "",
        model: "",
        bodyColor: "",
        carYear: "",
        carType: "",
        chassisNumber: "",
        engineNumber: "",
        effectFrom: "",
        validId: null,
        vehicleLicense: null,
        utilityBill: null
    })

    //Handle both cases of type file and others
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (e.target.type === "file") {
            const file = e.target.files?.[0];
            if (!file) {
                return;
            }

            setFormValues((prev) => ({
                ...prev,
                [name]: file
            }));
            return;
        }
        
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const [currentStep, setCurrentStep] = useState(1);
    return (
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full">
                <img src={heroImg} alt="Hero img" className="w-full max-h-[500px] md:max-h-[700px]" />    
            </div>
            <main className="bg-[#1F834008] py-8 md:py-12 px-7 md:px-20 lg:px-[160px] xl:px-[200px]" >                
                {currentStep === 1 && <PersonalDetails currentStep={currentStep} setCurrentStep={setCurrentStep} formValues = {formValues} handleInputChange={handleInputChange} />}
                {currentStep === 2 && <VehicleDetails currentStep={currentStep} setCurrentStep={setCurrentStep} formValues = {formValues} handleInputChange={handleInputChange} />}
                {currentStep === 3 && <UploadDetails currentStep={currentStep} setCurrentStep={setCurrentStep} formValues = {formValues} handleInputChange={handleInputChange} />}     
                {currentStep === 4 && <SuccessfulPayment currentStep={currentStep} setCurrentStep={setCurrentStep} />}     
            </main>
        </>
    )
}






