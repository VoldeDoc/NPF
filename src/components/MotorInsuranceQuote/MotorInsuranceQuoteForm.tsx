import heroImg from "../../assets/insurance/hero.png";
import { useEffect, useState } from "react";
import PersonalDetails from "./Tools/PersonalDetails";
import VehicleDetails from "./Tools/VehicleDetails";
import UploadDetails from "./Tools/UploadDetails";
import Checkout from "./Tools/Checkout";
import SuccessfulPayment from "./Tools/SuccessfulPayment";
import { useNavigate } from "react-router-dom";

export default function MotorInsuranceQuote() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [userData, setUserData] = useState(null);
  const [vehicleData, setVehicleData] = useState(null);
  const [uploadData, setUploadData] = useState<{ validId: File | null; vehicleLicense: File | null; utilityBill: File | null; } | null>({
    validId: null,
    vehicleLicense: null,
    utilityBill: null,
  });
  const [selectedIdType, setSelectedIdType] = useState<string>(""); // Add state for selectedIdType



  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      // User is not authenticated, store redirection flag
      localStorage.setItem("cameFromMotorInsurance", "true");
      navigate("/auth/signup"); // Redirect to signup/login
    } else {
      setUserData(JSON.parse(storedUserData));
    }
  }, [navigate]);

  return (
    <>
      {/* <!-- Hero section --> */}
      <div className="w-full">
        <img src={heroImg} alt="Hero img" className="w-full max-h-[500px] md:max-h-[700px]" />
      </div>
      <main className="bg-[#1F834008] py-8 md:py-12 px-7 md:px-20 lg:px-[160px] xl:px-[200px]">
        {/* {currentStep === 1 && (
          <PersonalDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setUserData={setUserData}
            initialValues={userData}
            setSelectedIdType={setSelectedIdType} // Pass setSelectedIdType to PersonalDetails
          />
        )} */}
        {currentStep === 2 && (
          <VehicleDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setVehicleData={setVehicleData}
            initialValues={vehicleData}
            setSelectedIdType={setSelectedIdType} // Pass setSelectedIdType to PersonalDetails
          />
        )}
        {currentStep === 3 && (
          <UploadDetails
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setUploadData={setUploadData}
            initialValues={uploadData || { validId: null, vehicleLicense: null, utilityBill: null }}
            selectedIdType={selectedIdType} 
          />
        )}
        {currentStep === 4 && (
          <Checkout
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            /* userData={userData} */
            vehicleData={vehicleData}
            uploadData={uploadData}
          />
        )}
        {currentStep === 5 && (
          <SuccessfulPayment
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </main>
    </>
  );
}