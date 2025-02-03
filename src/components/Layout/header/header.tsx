import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import NavLinks from './Tools/NavLink';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/Logo.png"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white text-black-500 px-16 py-2 flex justify-between items-center z-10">
        <div className="text-2xl font-bold ">
          <img src={Logo} alt="logo" className=' h-[40px]  w-[200px] md:w-[300px] md:h-[50px]' />
        </div>
        <div className="hidden md:flex justify-center flex-1 px-10">
          <NavLinks />
        </div>
        <div className="hidden md:flex">
          <Link to={'/motor-insurance-quote'}>
            <button className="bg-green-900 text-white px-4 py-2 rounded-full">
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
          <Link to={'/motor-insurance-quote'}>
            <button className="bg-green-900 text-white w-full px-2 rounded">
              Get a Quote
            </button>
          </Link>
        </div>
      </aside>
      <div className="pt-16">
        {/* This div adds padding to the top of the body to account for the fixed header */}
      </div>
    </>
  );
}