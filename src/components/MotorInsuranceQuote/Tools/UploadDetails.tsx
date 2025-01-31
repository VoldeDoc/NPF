import { IFormValues } from "./handleFormValidations";
import ProgressBar from "./ProgressBar";
import { BackButton } from "./NextButton";
import { useState } from "react";
import DocumentCard from "./DocumentCard";
import fireIcon from "../../../assets/insurance/fire-02.svg"
import carIcon from "../../../assets/insurance/car-02.png"
import trafficIcon from "../../../assets/insurance/traffic-incident.svg"
import { toast } from "react-toastify";

const UploadDetails = ({ currentStep, setCurrentStep, formValues, handleInputChange }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>, formValues:IFormValues, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {   
    
    const [display, setDisplay] = useState("uploadDocuments");
    /* const [selectedDocument, setSelectedDocument] = useState({
        validId: null,
        vehicleLicense: null,
        utility_bill: null
    });

    const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }

        const { name } = e.target;
        setSelectedDocument((prev) => ({
            ...prev,
            [name]: file
        }));
    } */

    const handleProceed = () => {
        console.log("Proceed to payment clicked");
    };

    const handleEdit = () => {
        console.log("Edit clicked");
    };

    const user = {
        name: "John Doe",
        amount: 5000
    }

    return (
        <section className="">
            <div className="mx-auto text-center space-y-3 md:space-y-5">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">Upload Your Documents</h2>
                <div className="text-[#000000CC] font-semibold text-base md:text-lg text-center">
                    <p>
                        Attach a valid means of ID (e.g: Driver’s license, International passport or National ID) and Vehicle License
                    </p>
                    <p className="font-medium mt-5">
                        *Each document/image should not be more than 2MB in size
                    </p>
                </div>
            </div>

            <ProgressBar currentStep={currentStep} totalSteps={4} />            

            <form id="upload-details"                
                className="mt-8 lg:mt-14 py-5 font-medium text-sm md:text-base">
                
                { display === "uploadDocuments" &&
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-3 md:p-6">
                        <label htmlFor="validId" className="">
                            <DocumentCard
                                title="VALID ID"
                                description="Official documents issued by government, Driver licence, NIN, Voters Card, and International Passport"
                                isActive={true} // First card is highlighted
                                icon={trafficIcon}
                            />
                        </label>
                        <input type="file" name="validId" id="validId" className="hidden"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="vehicleLicense" className="">
                            <DocumentCard
                                title="VEHICLE LICENSE"
                                description="Document issued by government authority that allows vehicle to be legally driven on public roads."
                                icon={fireIcon}
                            />
                        </label>
                        <input type="file" name="vehicleLicense" id="vehicleLicense" className="hidden"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="utility_bill" >
                            <DocumentCard
                                title="UTILITY BILL"
                                description="A bill statement issued by service provider for essential services like electricity, water, or gas."
                                icon={carIcon}
                            />
                        </label>
                        <input type="file" name="utility_bill" id="utility_bill" className="hidden"
                            onChange={handleInputChange}
                        />
                    </div>
                }
                {
                    display === "proceedToPayment" &&
                    <div className="bg-white shadow-md p-5 md:p-8 lg:p-20 mx-auto space-y-4 md:space-y-8 min-h-[500px]">
                        <p className="text-lg md:text-xl font-medium text-[#000000CC]">Dear {user.name},</p>
                        <p className="text-[#00000080] font-medium">
                            Based on the details you have provided, The amount to pay below:
                        </p>

                        <p className="font-semibold text-sm md:text-xl text-[#000000CC]">Third Party Insurance - ₦{user.amount.toLocaleString()}.00</p>

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
                }
                

                <div className="flex justify-between items-center mt-5">
                    <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    {/* <NextButton
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        onClick={() => {
                            if (display === "uploadDocuments") {
                                setDisplay("proceedToPayment");
                                return;   
                            } else {
                                setCurrentStep((prev) => prev + 1)
                                window.scrollTo(0, 600);
                            }                            
                        }}
                    /> */}

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (display === "uploadDocuments") {
                                if(!formValues.validId || !formValues.vehicleLicense) {
                                    console.log("Validation failed");
                                    toast.error("Please click on the cards and upload all required documents");
                                    return;
                                }
                                setDisplay("proceedToPayment");
                            } else {
                                setCurrentStep((prev) => prev + 1)
                                window.scrollTo(0, 600);
                            }                            
                        }}
                        type="submit" className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block">
                        Next
                    </button>
                </div>
            </form>
        </section>
    )
}

export default UploadDetails;