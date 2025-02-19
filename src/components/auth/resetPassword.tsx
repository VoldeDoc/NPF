
import bgImg from "../../assets/auth/bgImg.png";
import passwordImg from "../../assets/auth/reset.svg"


export default function ResetPasswordComponent() {
    return (
        <div className="h-screen md:flex bg-white shadow-lg rounded-2xl overflow-hidden w-full ">          
            {/* Left Section - Form */}
            
            <div className="md:w-1/2 p-8 flex flex-col items-center justify-center text-center">
                <img src="/assets/logo/logo4.jpg" alt="Company Logo" className="max-w-[50%] mx-auto mb-1" />  
                <div className="mb-6">
                    <img src={passwordImg} alt="otp key" className="max-w-16 lg:max-w-20 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Reset your password</h2>
                    <p className="text-[#4D4E50] md:text-lg">Reset your password by entering a new password</p>
                </div>

                <form className='w-full md:max-w-[65%]' >
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full border-2 border-[#D3CDCD] px-4 py-2 lg:py-2.5 mb-4 focus:outline-none"
                    />
                    <button className="mt-8 w-full bg-green-600 text-white py-2.5 rounded hover:bg-green-700 transition">
                        Submit
                    </button>
                </form>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 bg-gray-100 hidden md:flex">
                <div className="h-full w-6 bg-[#EFEB05] mr-1" ></div>
                <div className="h-full w-6 bg-[#009345]" ></div>
                <img
                    src={bgImg}
                    alt="Placeholder"
                    className="w-full max-h-screen object-cover"
                />
            </div>
        </div>
    );
}
