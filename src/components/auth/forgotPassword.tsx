
import bgImg from "../../assets/auth/bgImg.png";
import passwordImg from "../../assets/auth/password.svg"


export default function ForgotPasswordComponent() {
    return (
        <div className="h-screen md:flex bg-white shadow-lg rounded-2xl overflow-hidden w-full ">          
            {/* Left Section - Form */}
            
            <div className="md:w-1/2 p-8 flex flex-col items-center justify-center text-center">
                <img src="/assets/logo/logo4.jpg" alt="Company Logo" className="max-w-[50%] mx-auto mb-1" />  
                <div className="mb-6">
                    <img src={passwordImg} alt="otp key" className="max-w-16 lg:max-w-20 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Forgot Password</h2>
                    <p className="text-[#4D4E50] md:text-lg">Enter the email address registered with your account</p>
                </div>

                <form className='w-full md:max-w-[65%]' >
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
                    />
                    <button className="mt-8 w-full bg-green-600 text-white py-2.5 rounded hover:bg-green-700 transition">
                        Reset password
                    </button>
                </form>
                
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
