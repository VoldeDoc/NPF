import heroImg from "../../assets/insurance/hero.png"
import downArrow from "../../assets/insurance/down-arrow.svg"
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import NextButton, { BackButton } from "./NextButton";

export default function InsuranceQuote() {

    const [currentStep, setCurrentStep] = useState(1);
    return (
        <>
            {/* <!-- Header --> */}
            <header className="py-10" ></header>
            {/* <!-- Hero section --> */}
            <div className="w-full">
                <img src={heroImg} alt="Hero img" className="w-full max-h-[500px] md:max-h-[700px]" />    
            </div>
            {currentStep === 1 && <PersonalDetails currentStep={currentStep} setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <VehicleDetails currentStep={currentStep} setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <UploadDetails currentStep={currentStep} setCurrentStep={setCurrentStep} />}
            
        </>
    )
}

const PersonalDetails = ({currentStep, setCurrentStep}:{currentStep:number, setCurrentStep:React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <>
            <section className="py-8 md:py-12 px-5 md:px-10 lg:px-20 xl:px-28" >
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

                <form id="personal-details" className="mt-10 lg:mt-20 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="category">CATEGORY *</label>
                        <div className="relative">
                            <select name="category" id="category"
                                className="bg-[#F4F4F4] border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
                            >
                                <option value="individual">Individual</option>
                                <option value=""></option>
                            </select>
                            <img src={downArrow} alt="down-arrow" className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="title">TITLE *</label>
                        <div className="relative">
                            <select name="title" id="title"
                                className="bg-[#F4F4F4] border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
                            >
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
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black"
                            />                                        
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="surname">SURNAME *</label>
                            <input name="surname" id="surname" placeholder="SURNAME"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="email">EMAIL *</label>
                            <input name="email" id="email" placeholder="EMAIL" type="email"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="phone">PHONE NO *</label>
                            <input name="phone" id="phone" placeholder="PHONE NO" type="tel"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>            
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driver-licence-number">Driver licence Number*</label>
                            <input name="driver-licence-number" id="driver-licence-number" placeholder="Driver licence Number" type="number"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driver-licence-expiry-date">Driver Licence Expired. Date *</label>
                            <input name="driver-licence-expiry-date" id="driver-licence-expiry-date" placeholder="" type="date"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="years-of-driving">Year of Driving*</label>
                        <div className="relative">
                            <select name="years-of-driving" id="years-of-driving"
                                className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-[#7A7575]">
                                <option value="1-year">1 year</option>
                                <option value="2-year">2 years</option>
                                <option value="3-year-plus">3 years plus</option>
                            </select>
                            <img src={downArrow} alt="down-arrow"
                                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </form>
            </section>
        </>
    )
}

const VehicleDetails = ({currentStep, setCurrentStep}:{currentStep:number, setCurrentStep:React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <section className="py-8 md:py-12 px-5 md:px-10 lg:px-20 xl:px-28">
            <div className="mx-auto text-center space-y-3 md:space-y-5">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">Third Party Motor Insurance</h2>
                <p
                    className="text-[#00000080] font-medium text-sm md:text-base w-full md:w-[50%] lg:w-[40%] mx-auto text-center">
                    Fill in your vehicle details beginning with year, below. Or enter
                    your VIN and we can pre-fill some of the required information.
                </p>
            </div>

            <ProgressBar currentStep={currentStep} totalSteps={4} />
            <div className="">

            </div>

            <form id="personal-details"
                className="mt-10 lg:mt-20 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="vehicle-registration-number">Vehicle Registration Number</label>
                        <input name="vehicle-registration-number" id="vehicle-registration-number"
                            className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="value-amount">Value Amount</label>
                        <input name="value-amount" id="value-amount" placeholder="Between ₦1,000,000-₦10,000,000"
                            className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                </div>
                <div className="space-y-3 md:space-y-4 w-full">
                    <p>How do you want to use this vehicle *</p>
                    <div className="flex gap-6 sm:gap-12">
                        <label htmlFor="private-use" className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
                            <input name="vehicle-use" type="radio" id="private-use" value="private-use"
                                className="border border-[#BBBFBD] outline-none text-black" />
                                <span>Private Motors</span>
                        </label>
                        <label htmlFor="commercial-use" className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
                            <input name="vehicle-use" type="radio" id="commercial-use" value="commercial-use"
                                className="border border-[#BBBFBD] outline-none text-black" />
                            <span>Commercial Motors</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-12">
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="make">Make</label>
                        <div className="relative">
                            <select name="make" id="make"
                                className="bg-white border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
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
                                className="bg-white border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
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
                        <label htmlFor="body-color">Body Color *</label>
                        <div className="relative">
                            <select name="body-color" id="body-color"
                                className="bg-white border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
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
                        <label htmlFor="car-year">Select year *</label>
                        <div className="relative">
                            <select name="car-year" id="car-year"
                                className="bg-white border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
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
                        <label htmlFor="car-type">Car Type *</label>
                        <div className="relative">
                            <select name="car-type" id="car-type"
                                className="bg-white border border-[#BBBFBD] py-3 px-3.5 outline-none w-full appearance-none text-black">
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
                        <label htmlFor="chassis-number">Chassis Number</label>
                        <input name="chassis-number" id="chassis-number" placeholder="Chassis Number "
                            className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="engine-number">Engine Number</label>
                        <input name="engine-number" id="engine-number" placeholder="Engine Number"
                            className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="effect-from">With Effect From *</label>
                        <input name="effect-from" id="effect-from" type="date"
                            className="border border-[#BBBFBD] py-3 px-3.5 outline-none w-full text-black" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </div>
            </form>
        </section>
    )
}

const UploadDetails = ({currentStep, setCurrentStep}:{currentStep:number, setCurrentStep:React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <section className="py-8 md:py-12 px-5 md:px-10 lg:px-20 xl:px-28">
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
            <div className="">

            </div>

            <form id="personal-details"
                className="mt-10 lg:mt-20 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base">
                
                <div className="flex justify-between items-center">
                    <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
                </div>
            </form>
        </section>
    )
}

