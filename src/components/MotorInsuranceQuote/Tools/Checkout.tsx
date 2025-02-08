import ProgressBar from "./ProgressBar";
import { BackButton } from "./NextButton";
import UseInsurance from "@/hooks/UseInsurance";
import { toast } from "react-toastify";

const Checkout = ({
  currentStep,
  setCurrentStep,
  userData,
  vehicleData,
  uploadData,
}: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  userData: any;
  vehicleData: any;
  uploadData: any;
}) => {
  const { submitInsuranceDetails, initializePayment, loading } = UseInsurance();

  const handlePayNow = async () => {
    if (!userData || !vehicleData || !uploadData) {
      toast.error("Missing required data. Please go back and complete all steps.");
      return;
    }
    const response = await submitInsuranceDetails(userData, vehicleData, uploadData);
    if (response && response.message) {
      if (!(response instanceof Error)) {
        toast.success(response.message);
        const paymentResponse = await initializePayment("25");
        if (paymentResponse && paymentResponse.data.authorization_url) {
          toast.success("Redirecting to payment gateway...");
          window.open(paymentResponse.data.authorization_url, "_self");
        } else {
          toast.error("Payment initialization failed");
        }
    }
  }
  };

  return (
    <section className="">
      <div className="mx-auto text-center space-y-3 md:space-y-5">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">
          Checkout
        </h2>
        <p className="text-[#00000080] font-medium text-sm md:text-base w-full md:w-[50%] lg:w-[40%] mx-auto text-center">
          Review your details and proceed to payment.
        </p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={4} />

      <div className="mt-8 lg:mt-14 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
        <div>
          <h3 className="font-semibold text-lg">Personal Details</h3>
          <p className="text-base">
            <span className="font-semibold">Insurance Type:</span>{" "}
            {userData.insurance_type === "third_party"
              ? "Third Party"
              : "premium"}
          </p>
          <p className="text-base">
            <span className="font-semibold">Use Type:</span> {userData.use_type}
          </p>
          <p className="text-base">
            <span className="font-semibold">Category:</span> {userData.category}
          </p>
          <p className="text-base">
            <span className="font-semibold">Sub Category:</span> {userData.sub_category}
          </p>
          <p className="text-base">
            <span className="font-semibold">Full Name:</span> {userData.title}{" "}
            {userData.first_name} {userData.last_name}
          </p>
          <p className="text-base">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-base">
            <span className="font-semibold">Phone:</span>{" "}
            {userData.phone_number}
          </p>
          <p className="text-base">
            <span className="font-semibold">Drivers License:</span>{" "}
            {userData.driver_license} (Expires on {userData.license_expire_year}
            )
          </p>
          <p className="text-base">
            <span className="font-semibold">Years of Driving Experience:</span>{" "}
            {userData.year_of_driving}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Vehicle Details</h3>
          <p className="text-base">
            <span className="font-semibold">Registration Number:</span>{" "}
            {vehicleData.vehicle_registration_number}
          </p>
          <p className="text-base">
            <span className="font-semibold">Value:</span>{" "}
            {vehicleData.value_amount.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
          <p className="text-base">
            <span className="font-semibold">Make:</span>{" "}
            {vehicleData.maker.toLocaleUpperCase()}
          </p>
          <p className="text-base">
            <span className="font-semibold">Model:</span>{" "}
            {vehicleData.model.toLocaleUpperCase()}
          </p>
          <p className="text-base">
            <span className="font-semibold">Body Color:</span>{" "}
            {vehicleData.body_color}
          </p>
          <p className="text-base">
            <span className="font-semibold">Year of Manufacture:</span>{" "}
            {vehicleData.year}
          </p>
          <p className="text-base">
            <span className="font-semibold">Chassis Number:</span>{" "}
            {vehicleData.chassis_number}
          </p>
          <p className="text-base">
            <span className="font-semibold">Engine Number:</span>{" "}
            {vehicleData.engine_number}
          </p>
          <p className="text-base">
            <span className="font-semibold">With Effect From:</span>{" "}
            {vehicleData.with_effect_from}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Uploaded Documents</h3>
          {uploadData.validId?.name && (
            <div className="text-base">
              <span className="font-semibold">Valid ID:</span>{" "}
              {uploadData.validId.name}
            </div>
          )}
          {uploadData.vehicleLicense?.name && (
            <div className="text-base">
              <span className="font-semibold">Vehicle License:</span>{" "}
              {uploadData.vehicleLicense.name}
            </div>
          )}
          {uploadData.utilityBill?.name && (
            <div className="text-base">
              <span className="font-semibold">Utility Bill:</span>{" "}
              {uploadData.utilityBill.name}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white shadow-md p-5 md:p-8 lg:p-20 mx-auto space-y-4 md:space-y-8">
        <p className="text-lg md:text-xl font-medium text-[#000000CC]">
          Dear {userData.first_name},
        </p>
        <p className="text-[#00000080] font-medium">
          Based on the details you have provided, The amount to pay below:
        </p>

        <p className="font-semibold text-sm md:text-xl text-[#000000CC]">
          Third Party Insurance -{" "}
          {(20000).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </p>
      </div>

      <hr className="my-5" />
      <p>
        By clicking the button below, you agree to our Terms and Conditions and
        Privacy Policy
      </p>

      <div className="flex justify-between items-center mt-5">
        <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <button
          onClick={handlePayNow}
          className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block"
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
      </div>
    </section>
  );
};

export default Checkout;