import { FaArrowRightLong } from "react-icons/fa6";
// import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {

    return(
        <div className=" font-[poppins] md:relative md:flex md:justify-between bg-green-700 text-white md:p-20 ">
            <div className="md:w-[600px]">
                <p className="text-sm" >BY THE WAY</p>
                <h1 className="text-4xl">Subscribe for our newsletters</h1>
                <div>
                    <input type="email" name="email" />
                    <p><FaArrowRightLong/></p>
                </div>

                <div>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div>
                <div className="md:w-[600px]">
                    <p>ABOUT US</p>
                    <div>
                        <p>Privacy</p>
                        <p>Claims</p>
                        <p>Third party insurance</p>
                        <p>About us</p>
                    </div>
                </div>

                <div>
                    <p>CONTACT US</p>
                    <div>
                        <p>+234-905411-0010</p>
                        <p>+234-905411-0010</p>
                        <p>contact@npfinsurance.com</p>
                    </div>
                </div>

                <div>
                    <p>Privacy</p>
                    <p> &#x00A9;  2025 - Copyright</p>
                </div>
                
            </div>
        </div>
    )
}


export default Footer