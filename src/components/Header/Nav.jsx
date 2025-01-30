import Logo from "../../assets/Logo.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useState } from 'react'

const Nav = () => {

    const [dropDown, setDropDown] = useState(false)
    const [btnsearch, setBtnSearch] = useState(false)

    return(
        <div className="fixed flex justify-between items-center px-5 h-[70px] w-full z-10   md:px-10 ">
            
            <div className="flex gap-2 md:gap-6 items-center ">
                
                <div className="visible relative md:hidden  ">
                   <button onClick={() => setDropDown((prev) => !prev)}><FaBars className="text-2xl"/></button> 
                   
                   <div style={{display: dropDown ? "block" : "none"}} className="transform hover:scale-100 hover:bg-opacity-50 transition linear duration-300  absolute z-10  top-[40px] mr-[10] w-[100px] border-black shadow-md rounded border-gray-500 bg-white">
                        <ul className="">
                            <li className=" hover:bg-gray-200 p-2">Home</li>
                            <li className=" hover:bg-gray-200 p-2">About Us</li>
                            <li className=" hover:bg-gray-200 p-2">Services</li>
                            <li className=" hover:bg-gray-200 p-2">Blog</li>
                            <li className=" hover:bg-gray-200 p-2">Contact Us</li>
                        </ul>
                    </div>
                </div>

            
                <div>
                        <img src={Logo} alt="Logo" className="w-[80px] h-[80px] md:w-[200px] md:h-[100px]" />
                </div>
                
            </div>    

                <div className="hidden md:flex">
                            <ul className="md:flex md:gap-10 md:items-center">
                                <li className="hover:text-green-700">Home</li>
                                <li className="hover:text-green-700">About Us</li>
                                <li className="hover:text-green-700 md:flex md:justify-between md:items-center">
                                    <div>Services</div>
                                    <div><MdKeyboardArrowDown /></div>
                                </li>
                                <li className="hover:text-green-700">Blog</li>
                                <li className="hover:text-green-700">Contact Us</li>
                            </ul>
                </div>
         

                <div className="relative ">
                    <button  onClick={() => setBtnSearch(!btnsearch) }><CiSearch   /> 
                    </button>
                    <div style={{display: btnsearch ? "block ": "none"}} className="absolute ml-[-120px]  md:ml-[-300px]   border-gray-900    bg-white">
                    <input type="search"  name="search" placeholder="search now"  className="hover:bg-gray-100 rounded shadow-md  w-[170px] md:w-[300px] p-1 "/>
                    </div>
                </div>

        </div>
    )
}


export default Nav