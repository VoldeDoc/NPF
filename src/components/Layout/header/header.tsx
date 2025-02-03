import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import NavLinks from './Tools/NavLink';
import { Link } from 'react-router-dom';
import NPFLogo from "../../../assets/NPFLogo.png"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white text-black-500 px-6 md:px-16 md:py-2 flex justify-between gap-2 items-center z-10">
        <div className="text-2xl font-bold  md:h-[20px]">
          {/* <img src={"/assets/logo/logo.svg"} alt="logo" className='' /> */}
          <img src={NPFLogo} alt="logo"
            className='h-[20px] w-[200px] md:h-[40px] md:w-[300px] '
           />
        </div>
        <div className="hidden md:flex justify-center flex-1 px-3 lg:px-10">
          <NavLinks />
        </div>
        <div className="hidden md:flex">
          <Link to={'#'} /* to={'/motor-insurance-quote'} */>
            <button className="bg-green-900 text-white px-2 py-1 xl:px-4 xl:py-2 rounded-lg md:rounded-full text-sm lg:text-base w-fit">
              Get a Quote
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </header>
      <aside className={`fixed top-0 left-0 w-64 h-full bg-white text-black-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-20`}>
        
        <div className="p-4">
          <div className="text-2xl font-bold mb-4">
            <img src="assets/logo/NPF logo 5.svg" alt="" />
          </div>
          <nav className="flex flex-col space-y-2">
            <NavLinks />
          </nav>
        </div>
        <div className="absolute bottom-2 left-0 w-full px-4">
          <Link to={'#'} /* to={'/motor-insurance-quote'} */>
            <button className="bg-green-900 text-white w-full px-2 py-2 rounded">
              Get a Quote
            </button>
          </Link>
        </div>
      </aside>
      {/* <div className="pt-1"> */}
        {/* This div adds padding to the top of the body to account for the fixed header */}
      {/* </div> */}
    </>
  );
}