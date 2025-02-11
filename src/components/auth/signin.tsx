
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import bgImg from "../../assets/auth/bgImg.png";
import googleImg from "../../assets/auth/google.svg";
import linkedinImg from "../../assets/auth/linkedin.svg";
import { useState } from "react";



export default function SigninComponent() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className="h-screen md:flex bg-white shadow-lg rounded-2xl overflow-hidden w-full ">          
            {/* Left Section - Form */}
            
            <div className="md:w-1/2 p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                    <img src="/assets/logo/logo4.jpg" alt="Company Logo" className="max-w-[50%] mx-auto" />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Welcome back!</h2>
                    <p className="text-[#4D4E50] md:text-lg">Please enter your details</p>
                </div>

                <form className='w-full md:max-w-[65%]' >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-5 focus:outline-none"
                    />
                    <div className="relative">
                        <input
                        type={isPasswordVisible ? "text":"password"}
                        placeholder="Enter your password"
                        className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 pr-10 focus:outline-none"
                        />
                        {isPasswordVisible ?              
                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                            <FaEyeSlash onClick={() => {setIsPasswordVisible(false)}} />
                        </span>: 
                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                            <FaEye onClick={() => {setIsPasswordVisible(true)}} />
                        </span>
                        }            
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-[#009345] font-bold text-sm">Forgot your password?</a>
                    </div>

                    <button className="mt-8 w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition">
                        Sign in
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don’t have a PHC account? <a href="/auth/signup" className="text-[#009345] font-bold">Sign up</a>
                </p>

                <div className="flex items-center my-7">
                    <div className="flex-grow h-px w-full bg-gray-300"></div>
                    <span className="mx-2 text-[#151417] text-sm w-full flex-shrink-0">Or sign in with your work email</span>
                    <div className="flex-grow h-px w-full bg-gray-300"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="border p-2 rounded-full hover:bg-gray-100">
                        <img src={googleImg} alt="Google" />
                    </button>
                    <button className="border p-2 rounded-full hover:bg-gray-100">
                        <img src={linkedinImg} alt="LinkedIn" />
                    </button>
                </div>

                <div className="mt-8 md:max-w-[70%] mx-auto">
                    <p className="text-sm lg:text-base text-[#3C3939] text-center">
                    This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and
                    <a href="#" className="underline"> Terms of Service</a> | <a href="#" className="underline">Contact us</a>
                    </p>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 bg-gray-100 hidden md:block">
                <img
                src={bgImg}
                alt="Placeholder"
                className="w-full max-h-screen object-cover"
                />
            </div>
        </div>
    );
}
