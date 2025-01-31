import { handleValidation, IFormValues } from "./handleFormValidations";
import ProgressBar from "./ProgressBar";
import downArrow from "../../../assets/insurance/down-arrow.svg";
import { BackButton } from "./NextButton";

const VehicleDetails = ({ currentStep, setCurrentStep, formValues, handleInputChange }: { currentStep: number, setCurrentStep: React.Dispatch<React.SetStateAction<number>>, formValues: IFormValues, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {   
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
                            className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="valueAmount">Value Amount *</label>
                        <input name="valueAmount" id="valueAmount" placeholder="Between ₦1,000,000-₦10,000,000"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.valueAmount}
                            className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-black">
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-black">
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-black">
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-black">
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-black">
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
                            className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="engineNumber">Engine Number</label>
                        <input name="engineNumber" id="engineNumber" placeholder="Engine Number"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.engineNumber}
                            className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="effectFrom">With Effect From *</label>
                        <input name="effectFrom" id="effectFrom" type="date"
                            required
                            onChange={handleInputChange}
                            defaultValue={formValues.effectFrom}
                            className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
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


export default VehicleDetails;