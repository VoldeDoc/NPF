import heroImg from "../../../assets/services/publicHero.png"


export default function PublicLiabilityServiceLanding() {    
    return (
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full relative" >
                {/* <div className="absolute inset-0" style={{
                    background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.04) 0%, rgba(31, 131, 64, 0.4) 34.5%, rgba(31, 131, 64, 0.4) 89.38%)'
                    }}></div> */}
                <img                    
                    src={heroImg} alt="Hero img" className="w-full min-h-[400px] max-h-[420px] object-cover object-top" />    
                <div className="absolute bottom-[15%] right-[20%] text-left sm:text-left bg-[#FFFFFF] bg-opacity-75 p-5 md:px-8">
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
            <section className="bg-[#1F834008] py-12 md:py-20 lg:py-28 px-7 md:px-20 lg:px-[120px] xl:px-[160px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20" >
                <div className="" >
                    <div className="mb-3 text-sm text-[#1F8340] font-semibold flex gap-2 items-center w-fit">
                        <div className="w-2 h-2 rounded-full bg-[#1F8340]" ></div>
                        <span>Explore our</span>
                    </div>
                    <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-5" >
                        PUBLIC LIABILITY INSURANCE
                    </h4>
                    <p className="font-medium text-[#00000080] text-sm leading-7 md:text-base md:leading-8 text-justify" >
                        Your organization may be held liable for injury to third parties or their property as a result of negligence or other torts. Such liability, if proved, may result in heavy financial burden, which most organizations may find very difficult to pay out of purse. 
                        <br />
                        <br />
                        It is for such eventualities that the public liability insurance was designed. Apart from liability arising from the occupation or operation of an organization on their premises, the policy may be extended to include product liability, which implies reimbursement for liability attaching from goods sold.
                    </p>
                    <button className="mt-7 md:mt-14 relative px-4 py-1.5 text-white text-sm font-bold rounded-full bg-[#093618] border-[5px] border-white shadow-lg">
                        Buy Now
                        <span className="absolute inset-0 rounded-full border-2 border-[#000000] -m-1.5"></span>
                        <span className="absolute -left-1.5 top-0 h-full w-1 bg-[#1F834008] rounded-full"></span>
                        <span className="absolute -right-1.5 top-0 h-full w-1 bg-[#1F834008] rounded-full"></span>
                    </button>
                </div>
                <div className="rounded-xl md:rounded-2xl p-5 lg:p-10 w-full h-fit bg-white shadow-lg " > 
                    <h4 className="font-semibold mb-6 text-[#000000] pl-4" >
                        Generally, the basic public liability policy offers reimbursement against legal liability incurred from third parties for:
                    </h4>                        
                    <div className={`font-medium text-[#787474] text-sm md:text-base`} >
                        <ul className="list-none space-y-2 mb-8" >
                            <li className="flex gap-1.5 items-center" >
                                <img src="/assets/images/check.svg" alt="" className="w-4 h-4" />
                                <span>Death</span>
                            </li>
                            <li className="flex gap-1.5 items-center" >
                                <img src="/assets/images/check.svg" alt="" className="w-4 h-4" />
                                <span>Injury</span>
                            </li>
                            <li className="flex gap-1.5 items-center" >
                                <img src="/assets/images/check.svg" alt="" className="w-4 h-4" />
                                <span>Property damage arising out of negligence traceable to the organization or its employees whilst they are engaged on the company's business. </span>
                            </li>                            
                        </ul>                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}






