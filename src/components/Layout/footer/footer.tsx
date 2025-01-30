import { BiLogoTelegram } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { TbBrandYoutube } from "react-icons/tb";
export default function Footer() {
  return (
    <>
      <footer className="text-white bg-green-800 py-20">
        <div className="px-8 sm:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-gray-100 pb-5">By the way</h1>

              <h1 className="text-5xl font-bold text-white">Subscribe for our </h1>
              <h1 className="text-5xl font-bold text-white">newsletter</h1>
              <div className="mt-5 flex items-center max-w-md">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="flex-grow px-4 py-2 border border-white bg-green-800 focus:outline-none rounded-lg w-96"
                />
                <button className="px-4 py-2 bg-green-800 text-white rounded-r-md flex items-center justify-center">
                  →
                </button>
              </div>

            </div>

            <div>
              <div>
                <h1 className="text-gray-100 pb-1 text-xs"> ABOUT US</h1>
                <div className="py-2">
                  <ul className="text-lg">
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Claims</a></li>
                    <li><a href="">Third Party claims</a></li>
                    <li><a href="">About Us</a></li>
                  </ul>
                </div>
              </div>

              <div className="py-7">
                <h1 className="text-gray-100 pb-1 text-xs">CONTACT US</h1>
                <div className="py-2">
                  <ul className="text-lg">
                    <li>
                      <a href="tel:+">+234-905-411-0010</a>
                    </li>
                    <li>
                      <a href="tel:+">+234-905-411-0011</a>
                    </li>
                    <li>
                      <a href="mailto:contact@npfinsurance.com">contact@npfinsurance.com</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
            <div className="flex space-x-9">
            <Link to={""}>
              <BiLogoTelegram className="text-white text-lg"/>
            </Link>
            <Link to={""}>
              <SiInstagram className="text-white text-lg"/>
            </Link>
            <Link to={""}>
              <TbBrandYoutube className="text-white text-lg"/>
            </Link>
            </div>
            <div>
              <h1  className="text-xs text-gray-200 pb-4">Pricacy</h1>
              <h1>© {new Date().getFullYear()}-copyright</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}