import heroImg from "../../assets/insurance/hero.png";
import { useEffect, useState } from "react";
//import PersonalDetails from "./Tools/PersonalDetails";
import VehicleDetails from "./Tools/VehicleDetails";
import UploadDetails from "./Tools/UploadDetails";
import Checkout from "./Tools/Checkout";
import SuccessfulPayment from "./Tools/SuccessfulPayment";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseUrl } from "@/services/axios-client";

export default function MotorInsuranceQuote() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [userData, setUserData] = useState(null);
  const [searchParams] = useSearchParams(); // Get search params from URL
  console.log(userData)
  const [vehicleData, setVehicleData] = useState(null);
  const [uploadData, setUploadData] = useState<{ nin: File | null; vehicleLicense: File | null; utilityBill: File | null; } | null>({
    nin: null,
    vehicleLicense: null,
    utilityBill: null,
  });
  const [selectedIdType, setSelectedIdType] = useState<string>(""); // Add state for selectedIdType



  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");

    if (!storedUserData) {
      // User is not authenticated, store redirection flag
      sessionStorage.setItem("cameFromMotorInsurance", "true");
      navigate("/auth/signup"); // Redirect to signup/login
    } else {
      setUserData(JSON.parse(storedUserData));
    }
  }, [navigate]);

  //For reference after payment
  useEffect(() => {
    const token = sessionStorage.getItem("authToken")
    const paymentReference = searchParams.get("reference");
    
    let retries = 0;
    const maxRetries = 10;

    if (paymentReference) {
      // Call backend to verify payment
      const verifyPayment = async () => {
        try {
          const response = await fetch(`${baseUrl}/payment/callbacks?reference=${paymentReference}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });
          const result = await response.json();
          console.log(result);
          if (result.payment.status == "success") {
            // Payment was successful, navigate to dashboard
            navigate("/dashboard/home");
          } else if (result.payment.status == "pending" && retries < maxRetries) {
            setTimeout(verifyPayment, 5000)
            //verifyPayment();
            retries++;
          } else {
            // Payment failed, take user back to checkout (step 4), before doing this, setVehicleData and the document also
            setCurrentStep(4);
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          setCurrentStep(4); // Handle failure case
        }
      };
      verifyPayment();
    }
  }, [searchParams, navigate]);

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
            initialValues={uploadData || { nin: null, vehicleLicense: null, utilityBill: null }}
            selectedIdType={selectedIdType} 
          />
        )}
        {currentStep === 4 && (
          <Checkout
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            /* userData={userData} */
            setVehicleData={setVehicleData}
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