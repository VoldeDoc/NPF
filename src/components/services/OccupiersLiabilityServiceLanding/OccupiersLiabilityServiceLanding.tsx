import { Link } from "react-router-dom"
import heroImg from "../../../assets/services/occupiersHero.png"


export default function OccupiersLiabilityServiceLanding() {    
    return (
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full relative" >
                <img
                    src={heroImg} alt="Hero img" className="w-full min-h-[400px] max-h-[420px] object-cover object-top" />    
                <div className="absolute bottom-[15%] right-[20%] text-left sm:text-left bg-white bg-opacity-85 p-5 md:px-8 lg:py-10">
                    <div className="text-3xl sm:text-5xl font-bold">
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl'  >Your <span className="text-green-800">Safety Net</span> for</h1>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl' >Life's Uncertainties</h1>
                    </div>
                    <div className="my-1 text-lg sm:text-xl py-3">
                        <p className="text-[#00000080]">
                            Protecting you and your loved ones with reliable <br />
                            coverage when you need it most.
                        </p>
                    </div>
                </div>
            </div>
            <section className="bg-[#1F834008] py-12 md:py-20 lg:py-28 px-7 md:px-20 lg:px-[120px] xl:px-[160px]" >
                <div className="w-full" >
                    <div className="mb-3 text-sm text-[#1F8340] font-semibold flex gap-2 items-center w-fit">
                        <div className="w-2 h-2 rounded-full bg-[#1F8340]" ></div>
                        <span>Explore our</span>
                    </div>
                    <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-5" >
                        OCCUPIERS LIABILITY
                    </h4>
                    <p className="font-medium text-[#00000080] text-sm leading-7 md:text-base md:leading-8 text-justify" >
                        Occupiers Liability Insurance provides cover to all building owners or occupiers for the benefit of third parties, especially buildings that are accessible to members of the public, in the event of the following perils: Collapse, Storm, Fire, Flood and Earthquake. This insurance policy further covers the legal liabilities of an owner or bodily injury or death suffered by any user of the premises and third parties. Insurance Act 2003 makes Occupiers Liability compulsory for all occupiers of premises. 
                    </p>
                    <Link to={'https://www.niip.ng/Home/SelectInsurance?id=531&chassis=&registration=&purpose=3&StateCode=&InvoiceRef=&invID='}>
                        <button className="mt-7 md:mt-14 relative px-4 py-1.5 text-white text-sm font-bold rounded-full bg-[#093618] border-[5px] border-white shadow-lg">
                            Buy Now
                            <span className="absolute inset-0 rounded-full border-2 border-[#000000] -m-1.5"></span>
                            <span className="absolute -left-1.5 top-0 h-full w-1 bg-[#1F834008] rounded-full"></span>
                            <span className="absolute -right-1.5 top-0 h-full w-1 bg-[#1F834008] rounded-full"></span>
                        </button>
                    </Link>

                </div>
            </section>
        </>
    )
}






