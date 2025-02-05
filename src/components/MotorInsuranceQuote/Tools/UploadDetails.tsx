import ProgressBar from "./ProgressBar";
import { BackButton } from "./NextButton";
import { FormEvent, useState } from "react";
import DocumentCard from "./DocumentCard";
import fireIcon from "../../../assets/insurance/fire-02.svg";
import carIcon from "../../../assets/insurance/car-02.png";
import trafficIcon from "../../../assets/insurance/traffic-incident.svg";
// import { useForm } from "react-hook-form";
// import { FormEventHandler } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// interface IFormInputs {
//   validId: File | null;
//   vehicleLicense: File | null;
//   utility_bill: File | null;
// }

// const schema = yup
//   .object()
//   .shape({
//     validId: yup.mixed(),
//     vehicleLicense: yup.mixed(),
//     utility_bill: yup.mixed(),
//   })
//   .test("atLeastOne", "At least one document is required", (value) => {
//     return value.validId || value.vehicleLicense || value.utility_bill;
//   });

const UploadDetails = ({
  currentStep,
  setCurrentStep,
  setUploadData,
}: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setUploadData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [display, setDisplay] = useState("uploadDocuments");
  const [error, setError] = useState("");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setError,
  //   clearErrors,
  // } = useForm<IFormInputs>({
  //   resolver: yupResolver(schema),
  //   defaultValues: {
  //     validId: null,
  //     vehicleLicense: null,
  //     utility_bill: null,
  //   },
  // });

  const handleProceed = () => {
    console.log("Proceed to payment clicked");
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const user = {
    name: "John Doe",
    amount: 5000,
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validId = data.get("validId");
    const vehicleLicense = data.get("vehicleLicense");
    const utility_bill = data.get("utility_bill");
    console.log(validId, vehicleLicense, utility_bill);

    if (!validId || !vehicleLicense || !utility_bill) {
      setError("At least one document is required");
    } else {
      setError("");
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 600);
      const documentData = {
        validId: validId,
        vehicleLicense: vehicleLicense,
        utility_bill: utility_bill,
      };
      setUploadData(documentData);
    }
  };

  return (
    <section className="">
      <div className="mx-auto text-center space-y-3 md:space-y-5">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">
          Upload Your Documents
        </h2>
        <div className="text-[#000000CC] font-semibold text-base md:text-lg text-center">
          <p>
            Attach a valid means of ID (e.g: Driver’s license, International
            passport or National ID) and Vehicle License
          </p>
          <p className="font-medium mt-5">
            *Each document/image should not be more than 2MB in size
          </p>
        </div>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={4} />

      <form
        id="upload-details"
        className="mt-8 lg:mt-14 py-5 font-medium text-sm md:text-base"
        onSubmit={onSubmit}
      >
        {display === "uploadDocuments" && (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-3 md:p-6">
            <div>
              <label htmlFor="validId" className="">
                <DocumentCard
                  title="VALID ID"
                  description="Official documents issued by government, Driver licence, NIN, Voters Card, and International Passport"
                  isActive={true} // First card is highlighted
                  icon={trafficIcon}
                />
              </label>
              <input
                name="validId"
                type="file"
                id="validId"
                className="hidden"
                accept="image/*"
              />
              {/* {errors.validId && (
                <p className="text-red-500">{errors.validId.message}</p>
              )} */}
            </div>
            <div>
              <label htmlFor="vehicleLicense" className="">
                <DocumentCard
                  title="VEHICLE LICENSE"
                  description="Document issued by government authority that allows vehicle to be legally driven on public roads."
                  icon={fireIcon}
                />
              </label>
              <input
                type="file"
                name="vehicleLicense"
                id="vehicleLicense"
                className="hidden"
                accept="image/*"
              />
              {/* {errors.vehicleLicense && (
                <p className="text-red-500">{errors.vehicleLicense.message}</p>
              )} */}
            </div>
            <div>
              <label htmlFor="utility_bill">
                <DocumentCard
                  title="UTILITY BILL"
                  description="A bill statement issued by service provider for essential services like electricity, water, or gas."
                  icon={carIcon}
                />
              </label>
              <input
                type="file"
                name="utility_bill"
                id="utility_bill"
                className="hidden"
                accept="image/*"
              />
              {/* {errors.utility_bill && (
                <p className="text-red-500">{errors.utility_bill.message}</p>
              )} */}
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {display === "proceedToPayment" && (
          <div className="bg-white shadow-md p-5 md:p-8 lg:p-20 mx-auto space-y-4 md:space-y-8 min-h-[500px]">
            <p className="text-lg md:text-xl font-medium text-[#000000CC]">
              Dear {user.name},
            </p>
            <p className="text-[#00000080] font-medium">
              Based on the details you have provided, The amount to pay below:
            </p>

            <p className="font-semibold text-sm md:text-xl text-[#000000CC]">
              Third Party Insurance - ₦{user.amount.toLocaleString()}.00
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                className="bg-[#1F8340] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-medium transition hover:bg-green-800"
                onClick={handleProceed}
              >
                Proceed to payment
              </button>
              <button
                className="border border-[#1F8340] text-[#1F8340] px-8 md:px-12 py-3 md:py-4 rounded-full font-medium transition hover:bg-green-100"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-5">
          <BackButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <button
            type="submit"
            className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadDetails;
