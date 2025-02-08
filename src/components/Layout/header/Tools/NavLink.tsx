import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
    submenu: [{ title: "Superboard", url: "/about/superboard" }],
  },
  {
    title: 'Blog',
    url: "#"
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `px-4 py-2 font-bold text-black text-sm lg:text-base ${isActive && link.url !== "#" ? "text-green-500" : ""}`
              }
            >
              {link.title}
              {link.submenu && (
                <FaCaretDown className="ml-2 inline" />
              )}
            </NavLink>

            {/* Dropdown for "About" */}
            {link.submenu && dropdownOpen && activeIndex === index && (
              <div className="absolute left-0 mt-0.5 w-48 bg-white shadow-md rounded-md">
                {link.submenu.map((sub, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={sub.url}
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                  >
                    {sub.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Links */}
      <div className="md:hidden space-y-2">
        {links.map((link, index) => (
          <div key={index} className="relative">
            {link.submenu ? (
              <div>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="block font-bold px-4 py-2 text-xl text-gray-700 w-full text-left"
                >
                  {link.title}
                  <FaCaretDown className="ml-2 inline" />
                </button>
                {dropdownOpen && (
                  <>
                    <div className="mt-1 space-y-1 bg-white shadow-md rounded-md">
                      <NavLink
                        key={index}
                        to={link.url}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {link.title}
                      </NavLink>
                    </div>
                    <div className="mt-1 space-y-1 bg-white shadow-md rounded-md">
                      {link.submenu.map((sub, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={sub.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `block font-bold px-4 py-2 text-xl ${isActive && link.url !== "#"
                    ? "bg-green-600 text-white rounded-lg w-full"
                    : "text-gray-700"
                  }`
                }
              >
                {link.title}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </>
  );
}