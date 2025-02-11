import { FaEye, FaEyeSlash } from "react-icons/fa6";
import bgImg from "../../assets/auth/bgImg.png";
import { useState } from "react";

export default function SignupComponent() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <div className="h-screen md:flex bg-white shadow-lg rounded-2xl overflow-hidden w-full">
      {/* Left Section - Form */}
      <div className="md:w-1/2 p-8 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <img src="/assets/logo/logo4.jpg" alt="Company Logo" className="max-w-[50%] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Welcome Onboard!</h2>
          <p className="text-[#4D4E50] md:text-lg">Please enter your details</p>
        </div>

        <form className='w-full md:max-w-[65%]'>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
          />
          <div className="relative mb-4">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 pr-10 focus:outline-none"
            />
            {isPasswordVisible ? (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                <FaEyeSlash onClick={() => setIsPasswordVisible(false)} />
              </span>
            ) : (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                <FaEye onClick={() => setIsPasswordVisible(true)} />
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 pr-10 focus:outline-none"
            />
            {isConfirmPasswordVisible ? (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                <FaEyeSlash onClick={() => setIsConfirmPasswordVisible(false)} />
              </span>
            ) : (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                <FaEye onClick={() => setIsConfirmPasswordVisible(true)} />
              </span>
            )}
          </div>

          <button className="mt-4 w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition">
            Sign up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have a PHC account? <a href="/auth/signin" className="text-[#009345] font-bold">Login</a>
        </p>
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
