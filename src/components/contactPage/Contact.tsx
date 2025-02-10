import heroImg from "../../assets/contact/hero.png"

import callImg from "../../assets/contact/call-now.svg";
import addressImg from "../../assets/contact/address.svg";
import policyImg from "../../assets/contact/policy.svg";
import supportImg from "../../assets/contact/support.svg";
import reportImg from "../../assets/contact/report.svg";

export default function Contact() {    
    return (
        
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full">
                <img src={heroImg} alt="Hero img" className="w-full min-h-[250px] max-h-[500px] md:max-h-[700px] object-cover object-left" />    
            </div>

            
            <section className="bg-[#7AB58D0D] py-10 md:pt-14 lg:pt-16 px-7 md:px-20 xl:px-[200px] flex flex-col gap-8 md:gap-12 lg:gap-16 lg:flex-row justify-between" >
                <div className="w-full max-w-[500px]" >
                    <p className="text-base lg:text-xl text-[#6F6969]">I'M NEW HERE</p>
                    <p className="font-medium text-2xl lg:text-3xl" >
                        Interested in a product? 
                    </p>
                    <p className="text-[#575454] font-medium text-xl lg:text-2xl" >
                        Talk to our sales team.
                    </p>
                    <p className="mt-2 text-sm lg:text-base text-[#00000080]" >
                        From questions about Insurance to one-on-one personalised policy, we'd love to connect and help get you started.
                    </p>
                </div>
                <div className="flex-1 max-w-[650px] space-y-3" >
                    <div className="bg-white px-10 lg:px-14 py-12 flex items-start w-full gap-6 border-[#E2E1E1] border" >
                        <img src={callImg} alt="community img" className="" />
                        <div className="font-medium">
                            <span className="text-sm lg:text-base text-[#383C39] font-bold mb-2" >Enquiry Now</span>
                            <p className=" text-xl lg:text-2xl" >
                                +234 905 411 0010 <br />
                                +234 905 411 0010
                            </p>
                            <p className="text-base lg:text-lg mt-0.5" >
                                contact@npfinsurance.com
                            </p>
                        </div>
                    </div>
                    <div className="bg-white px-10 lg:px-14 py-12 flex items-start w-full gap-6 border-[#E2E1E1] border" >
                        <img src={addressImg} alt="community img" className="" />
                        <div className="font-medium">
                            <span className="text-sm lg:text-base text-[#383C39] font-bold mb-2" >Address</span>
                            <p className="text-sm lg:text-lg " >
                                Insurance Building, Behind Louis Edet House
                                Force Headquaters,Shehu Shagari Way, Abuja
                            </p>                            
                        </div>
                    </div>

                </div>

            </section>
            
            <section className="bg-white py-10 md:py-16 lg:py-20 px-7 md:px-20 xl:px-[200px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mx-auto">
                    {
                        contactData.map((data, index) => (
                            <ContactCard key={index} img={data.img} title={data.title} description={data.description} />
                        ))
                    }
                </div>
            </section>       
        </>
    )
}



const ContactCard = ({ img, title, description }: { img: string, title: string, description: string }) => {

    return (
        <div className="bg-[#1F834026] p-5 text-center rounded-2xl">
            <img src={img} alt="" className="block mx-auto mb-10 md:mb-1 lg:mb-8"/>
            <div className="text-[#000000]" >
                <h3 className="font-semibold text-base lg:text-lg mb-3">{title}</h3>
                <p className="text-sm md:text-xs lg:text-base text-[#00000080]">
                    {description}
                </p>
            </div>
        </div>
    )
}


const contactData = [
    {
        title: "Policy Questions",
        description: "To ask questions about your insurance policy or bond, please contact  NPFinsurance.",
        img: policyImg
    },
    {
        title: "Report a Claim",
        description: "We guide you through the simple, hassle-free process of securing your coverage.",
        img: reportImg
    },
    {
        title: "Ongoing Support",
        description: "Enjoy peace of mind with our 24/7 support and assistance whenever you need it.",
        img: supportImg
    },
]

