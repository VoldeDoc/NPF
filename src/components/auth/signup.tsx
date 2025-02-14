import { FaEye, FaEyeSlash } from "react-icons/fa6";
import bgImg from "../../assets/auth/bgImg.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "@/services/axios-client";
import { useNavigate } from "react-router-dom";
import downArrow from "../../assets/insurance/down-arrow.svg";

export default function SignupComponent() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [userFormData, setUserFormData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
    use_type: "",
    
  });

  const handleInputChange = (e:any) => {
    setUserFormData({...userFormData, [e.target.name]: e.target.value });
  };

  /* useEffect(() => {
    // Check if the user came from the motor insurance page
    const cameFromMotorInsurance = localStorage.getItem("cameFromMotorInsurance");
    if (cameFromMotorInsurance) {
      localStorage.removeItem("cameFromMotorInsurance"); // Remove after detecting it
    }
  }, []); */

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Processing...")
    console.log(userFormData)

    if (
      userFormData.first_name === "" ||
      userFormData.last_name === "" ||
      userFormData.email === "" ||
      userFormData.password === "" ||
      userFormData.password_confirmation === "" ||
      userFormData.phone_number === "" ||
      userFormData.title === "" || 
      userFormData.use_type === ""
    ) {
      toast.error("Please fill all the required fields");
      toast.dismiss(toastId)
      return;
    }

    if (userFormData.password !== userFormData.password_confirmation) {
      toast.error("Passwords do not match");
      toast.dismiss(toastId)
      return;
    }

    try {
      const signUpRequest = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userFormData),
      });

      const signUpResponse = await signUpRequest.json();
      console.log(signUpResponse);

      if (signUpRequest.ok) {
        toast.success(signUpResponse.message || "User signed up successfully");
        localStorage.setItem("signupEmail", userFormData.email);
        navigate("/auth/otp")
        localStorage.setItem("userData", JSON.stringify(signUpResponse.data));
        /* // Simulating a response with token and user details
        const { token, user } = signUpResponse;

        // Save user data & token to localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(user));

        // Redirect based on where the user came from
        const cameFromMotorInsurance = localStorage.getItem("cameFromMotorInsurance");

        if (cameFromMotorInsurance) {
          navigate("/motor-insurance-form")
          localStorage.removeItem("cameFromMotorInsurance"); // Remove after detecting it
        } else {
          navigate("/dashboard");
        } */
      } else {
        toast.error(signUpResponse.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Something went wrong, please try again.");
    } finally {
      toast.dismiss(toastId)
    }
  };


  return (
    <div className="md:h-screen md:flex bg-white shadow-lg rounded-2xl overflow-hidden w-full">
      {/* Left Section - Form */}
      <div className="md:w-1/2 p-8 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <img src="/assets/logo/logo4.jpg" alt="Company Logo" className="max-w-[50%] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Welcome Onboard!</h2>
          <p className="text-[#4D4E50] md:text-lg">Please enter your details</p>
        </div>

        <form className='w-full md:max-w-[65%] space-y-4'>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleInputChange}
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleInputChange}
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleInputChange}
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone No"
            name="phone_number"
            onChange={handleInputChange}
            className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 focus:outline-none"
          />
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              onChange={handleInputChange}
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
              name="password_confirmation"
              onChange={handleInputChange}
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

          <div className="relative">
            <select
              name="title"
              onChange={handleInputChange}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
            >
              <option value="">Select Title</option>
              <option value="MR">Mr</option>
              <option value="MRS">Mrs</option>
              <option value="MISS">Miss</option>
              <option value="MS">Ms</option>
              <option value="DR">Dr</option>
              <option value="PROF">Prof</option>
              <option value="ENGR">Engr</option>
              <option value="ARCH">Arch</option>
              <option value="BARR">Barr</option>
              <option value="CAPT">Capt</option>
              <option value="LT">Lt</option>
              <option value="MAJ">Maj</option>
              <option value="GEN">Gen</option>
              <option value="COL">Col</option>
              <option value="REV">Rev</option>
              <option value="PASTOR">Pastor</option>
              <option value="EVANG">Evang</option>
              <option value="CHIEF">Chief</option>
              <option value="PRINCE">Prince</option>
              <option value="PRINCESS">Princess</option>
              <option value="HON">Hon</option>
              <option value="SEN">Sen</option>
            </select>
            <img src={downArrow} alt="down-arrow" className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative">
            <select
              name="use_type"  
              onChange={handleInputChange}
              className="bg-[#F4F4F4] border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full appearance-none text-[#7A7575]"
            >
              <option value="">Select Use Type</option>
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
            </select>
            <img src={downArrow} alt="down-arrow" className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2" />
          </div>

          <button
            onClick={handleSignUp}
            className="mt-4 w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition">
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
