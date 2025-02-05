import heroImg from "../../assets/about/hero.png"
import missionImg from "../../assets/about/mission.png"
import visionImg from "../../assets/about/vision.png"   
import amehImg from "../../assets/about/ameh.png";
import temitayoImg from "../../assets/about/temitayo.png";
import suleimanImg from "../../assets/about/suleiman.png";
import ekechukwuImg from "../../assets/about/ekechukwu.png";
import groupImg from "../../assets/about/group.png";
import React from "react";

export default function About() {
    
    return (
        
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full">
                <img src={heroImg} alt="Hero img" className="w-full min-h-[250px] max-h-[500px] md:max-h-[700px] object-cover" />    
            </div>

            {/* About NPF Insurance */}
            <section className="bg-white py-10 md:py-14 lg:py-16 px-7 md:px-20 lg:px-[160px] xl:px-[200px] mx-auto md:max-w-[80%]" >
                <h2 className="mb-4 font-semibold text-lg md:text-xl lg:text-3xl text-center" >About NPF INSURANCE</h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-medium text-[#00000080]" >
                    NPF Insurance Company Limited is a general business insurance company, licensed by the National Insurance Commission (NAICOM). As a privately-owned company, we are dedicated to contributing to Nigeria's GDP by providing comprehensive insurance and risk management solutions. Our experienced leadership team, headed by the Chairman, Mr. Olufemi Adenaike and MD/CEO, Mr. Temitayo Oke, brings a combined experience of over 200 years in Human Resources, Risk, and Asset management across various sectors of the Nigerian economy. We are committed to providing innovative and customer-focused insurance solutions at competitive rates. Our team of experts offer exceptional services, expert risk management advice, and tailored insurance products to meet your specific needs. As a trusted insurance partner, NPF Insurance is poised to become a leader in the industry. Our emphasis is on empowering our clients through continuous improvement, risk management, capacity building and ensuring optimal value from our relationships.
                </p>
            </section>

            {/* Mission and Vision */}
            <section className="bg-white py-10 md:py-14 lg:py-16 px-7 md:px-20 lg:px-[160px] xl:px-[200px] flex flex-col md:flex-row gap-10 lg:gap-24" >
                <div className="flex-1" >
                    <img src={missionImg} alt="vision" className="mb-5 xl:mb-[26px]" />
                    <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4">Our Vision</h3>
                    <p className="text-[#00000080] text-base xl:text-xl" >
                        We envision becoming a leading insurance provider known for our integrity, reliability and superior customer experience.To delight our customers with exceptional services
                    </p>
                </div>

                <div className="flex-1" >
                    <img src={visionImg} alt="vision" className="mb-5 xl:mb-[26px]" />
                    <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-2 xl:mb-4"> Our Mission</h3>
                    <p className="text-[#00000080] text-base xl:text-xl" >
                        To protect our customers’ financial well-being by offering innovative insurance products, exceptional customer service and a commitment to long term relationships.
                    </p>
                </div>
            </section>

            {/* Our Team */}
            <section className="bg-[#7AB58D0D] py-10 md:py-14 lg:py-16 px-7 md:px-20 lg:px-[160px] xl:px-[200px]" >
                <h4 className="text-lg md:text-xl lg:text-3xl font-semibold text-center mb-12 lg:mb-16">Our Team</h4>
                <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start">
                    <TeamImageCard img={amehImg} name="CSP Ameh Lydia" position="Director" />
                    <TeamImageCard img={temitayoImg} name="Temitayo Oke ACIIN" position="Managing Director/ Chief Executive Officer" />
                    <TeamImageCard img={suleimanImg} name="Ba’aba Suleiman ESQ" position="Director" />
                    <TeamImageCard img={ekechukwuImg} name="Mac Ekechukwu FIIN PHd" position="Executive Director Operations" />
                </div>
            </section>

            
            {/* Contact us section */}
            <section className="bg-white py-10 md:py-14 px-7 md:px-20 text-center ">
                <img src={groupImg} alt="Group Img" className="mb-5 lg:mb-8 mx-auto" />
                <h5 className="text-sm md:text-base font-semibold mb-2">Have any question?</h5>
                <p className="text-[#00000080] text-sm mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                <button className="text-white font-semibold bg-black-500 py-2.5 px-5 rounded-full" >
                    Contact Us
                </button>
            </section>

        </>
    )
}


const TeamImageCard = ({ img, name, position }:{img: React.ReactNode, name:string, position:string }) => {

    return (
        <div className="text-center w-[200px] md:w-[150px] xl:w-[200px]" >
            <img src={String(img)} alt={name} className="h-[200px] md:h-[150px] xl:h-[200px] rounded-lg object-cover mb-3 lg:mb-5" />
            <h4 className="text-sm lg:text-base font-semibold mb-1 lg:mb-2" >{name}</h4>
            <p className="text-[#00000080] text-xs lg:text-sm" >{position}</p>
        </div>
    )
}