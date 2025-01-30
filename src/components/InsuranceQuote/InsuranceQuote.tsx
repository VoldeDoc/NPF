import heroImg from "../../assets/insurance/hero.png"
import downArrow from "../../assets/insurance/down-arrow.svg"
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import NextButton, { BackButton } from "./NextButton";
import DocumentCard from "./DocumentCard";
import fireIcon from "../../assets/insurance/fire-02.svg"
import carIcon from "../../assets/insurance/car-02.png"
import trafficIcon from "../../assets/insurance/traffic-incident.svg"
import successIllustration from "../../assets/insurance/success-illustration.png"
import { toast } from "react-toastify";


export default function InsuranceQuote() {

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

    const [currentStep, setCurrentStep] = useState(4);
    return (
        <>
            {/* <!-- Header --> */}
            <header className="py-10" ></header>
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

const PersonalDetails = ({ currentStep, setCurrentStep, formValues, handleInputChange  }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>, formValues:IFormValues, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {   
    return (
        <>
            <section className="" >
                <div className="mx-auto text-center space-y-3 md:space-y-5" >
                    <div className=" text-sm text-[#1F8340] font-semibold text-center flex gap-2 items-center w-fit mx-auto">
                        <div className="w-2 h-2 rounded-full bg-[#1F8340]" ></div>
                        <span>OUR SERVICES</span>
                    </div>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">Let's get started on your car insurance quote</h2>
                    <p className="text-[#00000080] font-medium text-sm md:text-base w-full md:w-[50%] lg:w-[40%] mx-auto text-center">
                        Fill in your vehicle details beginning with year, below. Or enter
                        your VIN and we can pre-fill some of the required information.
                    </p>
                </div>
                
                <ProgressBar currentStep={currentStep} totalSteps={4} />
                <div className="" >

                </div>

                <form
                    onSubmit={(e) => {
                        handleValidation(e, currentStep, setCurrentStep);
                    }}
                    id="personal-details" className="mt-8 lg:mt-14 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="category">CATEGORY *</label>
                        <div className="relative">
                            <select name="category" id="category"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.category}
                                className="bg-[#F4F4F4] border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
                            >
                                <option value="">Select Category</option>
                                <option value="individual">Individual</option>                                
                            </select>
                            <img src={downArrow} alt="down-arrow" className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="title">TITLE *</label>
                        <div className="relative">
                            <select name="title" id="title"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.title}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
                            >
                                <option value="">Select Title</option>
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="miss">Miss</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12" >
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="firstName">FIRST NAME *</label>
                            <input name="firstName" id="firstName"
                                placeholder="FIRST NAME"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.firstName}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black"
                            />                                        
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="surname">SURNAME *</label>
                            <input name="surname" id="surname" placeholder="SURNAME"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.surname}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="email">EMAIL *</label>
                            <input name="email" id="email" placeholder="EMAIL" type="email"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.email}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="phone">PHONE NO *</label>
                            <input name="phone" id="phone" placeholder="PHONE NO" type="tel"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.phone}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>            
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driverLicenceNumber">Driver licence Number*</label>
                            <input name="driverLicenceNumber" id="driverLicenceNumber" placeholder="Driver licence Number" type="number"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.driverLicenceNumber}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driverLicenceExpiryDate">Driver Licence Expired. Date *</label>
                            <input name="driverLicenceExpiryDate" id="driverLicenceExpiryDate" placeholder="" type="date"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.driverLicenceExpiryDate}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="yearsOfDriving">Year of Driving*</label>
                        <div className="relative">
                            <select name="yearsOfDriving" id="yearsOfDriving"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.yearsOfDriving}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]">
                                <option value="">Select Year</option>
                                <option value="1-year">1 year</option>
                                <option value="2-year">2 years</option>
                                <option value="3-year-plus">3 years plus</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    
                    {/* <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
                    <button type="submit" className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block">
                        Next
                    </button>
                </form>
            </section>
        </>
    )
}

const VehicleDetails = ({currentStep, setCurrentStep, formValues, handleInputChange}:{currentStep:number, setCurrentStep:React.Dispatch<React.SetStateAction<number>>, formValues:IFormValues, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {   
    return (
        <section className="">
            <div className="mx-auto text-center space-y-3 md:space-y-5">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">Third Party Motor Insurance</h2>
                <p
                    className="text-[#00000080] font-medium text-sm md:text-base w-full md:w-[50%] lg:w-[40%] mx-auto text-center">
                    Fill in your vehicle details beginning with year, below. Or enter
                    your VIN and we can pre-fill some of the required information.
                </p>
            </div>

            <ProgressBar currentStep={currentStep} totalSteps={4} />            

            <form
                onSubmit={(e) => {
                    handleValidation(e, currentStep, setCurrentStep);
                }}
                id="vehicle-details"
                className="mt-8 lg:mt-14 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="vehicleRegistrationNumber">Vehicle Registration Number *</label>
                        <input name="vehicleRegistrationNumber" id="vehicleRegistrationNumber"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.vehicleRegistrationNumber}
                            className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="valueAmount">Value Amount *</label>
                        <input name="valueAmount" id="valueAmount" placeholder="Between ₦1,000,000-₦10,000,000"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.valueAmount}
                            className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4 w-full">
                    <p>How do you want to use this vehicle *</p>
                    <div className="flex gap-6 sm:gap-12">
                        <label htmlFor="private-use" className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
                            <input
                                name="vehicleUse" type="radio" id="private-use" value="private-use"
                                required
                                onChange={handleInputChange}
                                checked={formValues.vehicleUse === "private-use"}
                                className="border border-[#BBBFBD] outline-none text-black" />
                                <span>Private Motors</span>
                        </label>
                        <label htmlFor="commercial-use" className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
                            <input name="vehicleUse" type="radio" id="commercial-use" value="commercial-use"
                                required
                                onChange={handleInputChange}
                                checked={formValues.vehicleUse === "commercial-use"}
                                className="border border-[#BBBFBD] outline-none text-black" />
                            <span>Commercial Motors</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="make">Make *</label>
                        <div className="relative">
                            <select name="make" id="make"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.make}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
                                <option value="">                                
                                    Select Make
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="lexus">lexus</option>
                                <option value="hilux">hilux</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="model">Model *</label>
                        <div className="relative">
                            <select name="model" id="model"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.model}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
                                <option value="">
                                    Select Model
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="lexus">lexus</option>
                                <option value="hilux">hilux</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="bodyColor">Body Color *</label>
                        <div className="relative">
                            <select name="bodyColor" id="bodyColor"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.bodyColor}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
                                <option value="">
                                    Select Color
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="lexus">lexus</option>
                                <option value="hilux">hilux</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="carYear">Select year *</label>
                        <div className="relative">
                            <select name="carYear" id="carYear"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.carYear}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
                                <option value="">
                                    Select Year
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="lexus">lexus</option>
                                <option value="hilux">hilux</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="carType">Car Type *</label>
                        <div className="relative">
                            <select name="carType" id="carType"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.carType}
                                className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
                                <option value="">
                                    Select Type
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="lexus">lexus</option>
                                <option value="hilux">hilux</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="chassisNumber">Chassis Number</label>
                        <input name="chassisNumber" id="chassisNumber" placeholder="Chassis Number "
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.chassisNumber}
                            className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="engineNumber">Engine Number</label>
                        <input name="engineNumber" id="engineNumber" placeholder="Engine Number"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.engineNumber}
                            className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="effectFrom">With Effect From *</label>
                        <input name="effectFrom" id="effectFrom" type="date"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.effectFrom}
                            className="bg-inherit border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    {/* <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
                    <button type="submit" className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block">
                        Next
                    </button>
                </div>
            </form>
        </section>
    )
}


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


const SuccessfulPayment = ({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>> }) => {
    
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

            <div id="successful-payment"
                className="mt-8 lg:mt-14 text-center bg-white shadow-md p-5 sm:p-10 md:p-12 lg:p-20 mx-auto min-h-[400px] h-fit"
            > 
                <img src={successIllustration} alt="Success illustration" className="mx-auto max-w-[250px] md:max-w-none" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl mt-20 lg:mt-[100px]" >
                    Congratulations!
                </h3>
                <div className="w-full md:max-w-[60%] lg:max-w-[80%] mx-auto mt-4">
                    <p className="text-sm md:text-lg lg:text-xl" >
                        You're just one step away from receiving your Third Party Insurance
                        Details—congratulations!
                    </p>
                </div>
            </div>            

            <div className="flex justify-between items-center mt-5">
                <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <NextButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}                        
                />
            </div>
        </section>
    )
}

const handleValidation = (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>, currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>,) =>{
    e.preventDefault();
    console.log("Form submitted");
    const form = e.currentTarget;
    // Check form validity
    if (!form.checkValidity()) {
        form.reportValidity(); // Show validation messages
        return;
    }

    if (currentStep === 4) {
        return;
    }
    setCurrentStep((prev) => prev + 1)
    window.scrollTo(0, 600);
}



interface IFormValues {
    category: string;
    title: string;
    firstName: string;
    surname: string;
    email: string;
    phone: string;
    driverLicenceNumber: string;
    driverLicenceExpiryDate: string;
    yearsOfDriving: string;
    vehicleRegistrationNumber: string;
    valueAmount: string;
    vehicleUse: string;
    make: string;
    model: string;
    bodyColor: string;
    carYear: string;
    carType: string;
    chassisNumber: string;
    engineNumber: string;
    effectFrom: string;
    validId: File | null;
    vehicleLicense: File | null;
    utilityBill: File | null;
}