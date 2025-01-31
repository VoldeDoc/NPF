import { handleValidation, IFormValues } from "./handleFormValidations";
import ProgressBar from "./ProgressBar";
import downArrow from "../../../assets/insurance/down-arrow.svg";

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
                                className="bg-[#F4F4F4] border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
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
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black"
                            />                                        
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="surname">SURNAME *</label>
                            <input name="surname" id="surname" placeholder="SURNAME"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.surname}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="email">EMAIL *</label>
                            <input name="email" id="email" placeholder="EMAIL" type="email"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.email}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="phone">PHONE NO *</label>
                            <input name="phone" id="phone" placeholder="PHONE NO" type="tel"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.phone}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                        </div>            
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driverLicenceNumber">Driver licence Number*</label>
                            <input name="driverLicenceNumber" id="driverLicenceNumber" placeholder="Driver licence Number" type="number"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.driverLicenceNumber}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 w-full">
                            <label htmlFor="driverLicenceExpiryDate">Driver Licence Expired. Date *</label>
                            <input name="driverLicenceExpiryDate" id="driverLicenceExpiryDate" placeholder="" type="date"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.driverLicenceExpiryDate}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        <label htmlFor="yearsOfDriving">Year of Driving*</label>
                        <div className="relative">
                            <select name="yearsOfDriving" id="yearsOfDriving"
                                required
                                onChange={handleInputChange}
                                defaultValue={formValues.yearsOfDriving}
                                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-[#7A7575]">
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

export default PersonalDetails;