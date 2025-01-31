// import OurPartners from "./Tools/OurPartners";
import { Layout } from "../Layout/layout";
import { getCardDetails } from "../Ui/cardDetails";
import Card from "../Ui/Card";
import CarouselComponent from "../Ui/carousel";
export default function Home() {
    const services = getCardDetails()
    return (
        <>

            <Layout>
                <>
                 
                    <CarouselComponent />

                    {/* <div>
                        <h1 className="text-center text-3xl font-bold py-8">OUR PARTNERS</h1>
                        <OurPartners />
                    </div> */}

                    <div className="sm:px-16 px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-10">
                            <div className="relative">
                                <img src="assets/images/african-mother-little-girl-close-up 1 (1).png" alt="" className="relative rounded-lg h-[410px] w-[85%]" />
                                <img src="/assets/images/Frame 20.svg" alt="" className="absolute top-20 right-10 w-1/3" />
                            </div>
                            <div>
                                <div className="mb-8">
                                    <h1 className="text-green-700 font-semibold">ABOUT US</h1>
                                    <p className="text-gray-600">
                                        NPF Insurance Company Limited is a general business insurance
                                        company, licensed by the National Insurance Commission (NAICOM). As a privately-owned company, we are dedicated to contributing to Nigeria's GDP by providing comprehensive insurance and risk management solutions. Read more
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-16">
                                    <div className="space-y-2 py-2">
                                        <div className="flex space-x-5"></div>
                                        <div className="flex space-x-5">
                                            <img src="/assets/images/setting-done-01.png" alt="" /> <span className="text-green-600">Customer-centric Approach</span>
                                        </div>
                                        <div className="flex space-x-5">
                                            <img src="/assets/images/setting-done-01.png" alt="" /> <span className="text-green-600">Transparent communication</span>
                                        </div>
                                        <div className="flex space-x-5">
                                            <img src="/assets/images/setting-done-01.png" alt="" /> <span className="text-green-600">365 / 24x7 Quick Supports</span>
                                        </div>
                                        <div className=" flex space-x-5">
                                            <img src="/assets/images/setting-done-01.png" alt="" /> <span className="text-green-600">Critical Illness Insurance</span>
                                        </div>
                                    </div>

                                    <div className="bg-gray-200 rounded-lg px-4 py-2 text-center " >
                                        <h1 className="text-green-600 text-2xl font-bold">100%</h1>
                                        <p className="text-gray-500">success rate</p>
                                        <hr className="border " />
                                        {/* <h1 className="text-green-600 text-2xl font-bold">5k</h1>
                                        <p className="text-gray-500">satisfied client</p> */}
                                    </div>

                                </div>
                                <div className="py-8">
                                    <button className="bg-green-800 rounded-full py-2 px-4 text-white hover:text-white hover:bg-green-800 transition duration-300">More about</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" bg-blue-50 sm:py-16 px-8">
                        <div className="text-center py-10">
                            <p className="text-green-800 text-xl font-bold">Our Services</p>
                            <h1 className="font-bold text-4xl py-5">Explore Our Services and Experience Protection</h1>
                            <p className="text-gray-600 text-xl">From life to asset coverage, we offer tailored insurance solutions designed to secure what matters most to you.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 sm:px-16 py-10">
                            {services.map((service, index) => (
                                <Card key={index} imageSrc={service.imageSrc} title={service.title} descriptions={service.descriptions} link={service.link} />
                            ))}
                        </div>

                    </div>

                    <div className="py-14">
                        <div className="text-center">
                            <h1 className="text-xl font-bold py-2">Have any question?</h1>
                            <button className="bg-black-500 rounded-full px-4 py-2 text-white">Contact us</button>
                        </div>
                    </div>

                    <div className="bg-blue-50 py-32">
                        <div className="px-8 sm:px-16">
                            <div className="text-center space-y-2 pb-4">
                                <h1 className="text-green-800 font-medium">HOW IT WORKS</h1>
                                <h1 className="text-4xl font-bold">Our Insurance Process Easy </h1>
                                <h1 className="text-4xl font-bold ">Steps To Get Covered </h1>
                                <p className="text-gray-600 font-semibold">Our comprehensive insurance services are designed to provide you with peace of</p>
                                <p className="text-gray-600 font-semibold"> mind, no matter your needs.</p>
                            </div>
                        </div>

                        <div className="px-8 sm:px-16 py-12">
                            <div className="flex flex-col sm:flex-row sm:space-x-10 relative space-y-10 sm:space-y-0">
                                <div className="text-center bg-white rounded-md p-5 w-full sm:w-72 relative">
                                    <div className="text-center flex justify-center">
                                        <img src="/assets/images/tape-measure.png" alt="" />
                                    </div>
                                    <div className="text-gray-600">
                                        <h1 className="text-black-500 text-xl font-bold py-2">Tailored Situations</h1>
                                        <p>Our experts craft a</p>
                                        <p>personalized insurance plan</p>
                                        <p>that fits your lifestyle.</p>
                                    </div>
                                    <div className="bg-green-800 rounded-full w-8 h-8 px-2 py-2 text-center flex items-center justify-center text-white font-bold absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 sm:left-[120px]">1</div>
                                    <div className="absolute bottom-[-100px] left-[140px] hidden lg:block">
                                        <img src="/assets/images/Arrow 1.png" alt="" />
                                    </div>
                                </div>


                                <div className="text-center bg-white rounded-md px-5 py-10 w-full sm:w-72 relative sm:bottom-[-60px]">
                                    <div className="text-center flex justify-center">
                                        <img src="/assets/images/checkmark-badge-03.png" alt="" />
                                    </div>
                                    <div className="text-gray-600">
                                        <h1 className="text-black-500 text-xl font-bold py-2">Easy Enrollment</h1>
                                        <p>We guide you through the</p>
                                        <p>simple,hassle-free process</p>
                                        <p>of securing your coverage.</p>
                                    </div>
                                    <div className="bg-green-800 rounded-full w-8 h-8 px-2 py-2 text-center flex items-center justify-center text-white font-bold absolute top-[-10px] left-1/2 transform -translate-x-1/2 sm:top-[-20px] sm:left-[135px]">2</div>
                                    <div className="absolute top-[-100px] left-[120px] hidden lg:block">
                                        <img src="/assets/images/Arrow 2.png" alt="" />
                                    </div>
                                </div>

                                <div className="text-center bg-white rounded-md p-5 w-full sm:w-72 relative">
                                    <div className="text-center flex justify-center">
                                        <img src="/assets/images/mentoring.png" alt="" />
                                    </div>
                                    <div className="text-gray-600">
                                        <h1 className="text-black-500 text-xl font-bold py-2">Ongoing support</h1>
                                        <p>Enjoy peace of mind with our</p>
                                        <p>24/7 support and assistance</p>
                                        <p>whenever you need it</p>
                                    </div>
                                    <div className="bg-green-800 rounded-full w-8 h-8 px-2 py-2 text-center flex items-center justify-center text-white font-bold absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 sm:left-[120px]">3</div>
                                    <div className="absolute bottom-[-100px] left-[140px] hidden lg:block">
                                        <img src="/assets/images/Arrow 1.png" alt="" />
                                    </div>
                                </div>

                                <div className="text-center bg-white rounded-md px-5 py-10 w-full sm:w-72 relative sm:bottom-[-60px]">
                                    <div className="text-center flex justify-center">
                                        <img src="/assets/images/policy.png" alt="" />
                                    </div>
                                    <div className="text-gray-600">
                                        <h1 className="text-black-500 text-xl font-bold py-2">Claims & Adjustments</h1>
                                        <p>Quick efficeient claims</p>
                                        <p>handling and flexible policy</p>
                                        <p>Adjustments to ensure.</p>
                                    </div>
                                    <div className="bg-green-800 rounded-full w-8 h-8 px-2 py-2 text-center flex items-center justify-center text-white font-bold absolute top-[-10px] left-1/2 transform -translate-x-1/2 sm:top-[-20px] sm:left-[135px]">4</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-b from-white via-blue-200 to-green-200 py-28 ">
                        <div className="px-8 sm:px-16 relative">
                            <img className="absolute top-0 left-20 w-10 h-10 rounded-full" src="/assets/images/car-being-taking-care-workshop 1.png" alt="" />

                            <img className="absolute top-30 left-56 w-10 h-10 rounded-full" src="/assets/images/car-being-taking-care-workshop 1.png" alt="" />
                            <img className="absolute top-40 right-96 w-10 h-10 rounded-full" src="/assets/images/medium-shot-man-posing-with-helmet 1.png" alt="" />
                            <img className="absolute bottom-0 left-64 w-10 h-10 rounded-full" src="/assets/images/portrait-female-mechanic-repair-garage 1.png" alt="" />
                            <img className="absolute bottom-10 right-10 w-10 h-10 rounded-full" src="/assets/images/medium-shot-man-posing-with-helmet 1.png" alt="" />
                            <div className="text-center py-10 relative ">
                                <h1 className="text-4xl font-bold">Get Insured Today</h1>
                                <p className="text-gray-600">Get the courage you need with personalized insurance plans.</p>
                            </div>
                            <div className="text-center relative">
                                <button className="text-white rounded-full px-8 py-2 bg-green-700">Get started</button>
                            </div>
                        </div>
                    </div>

                </>
            </Layout>
        </>
    )
}