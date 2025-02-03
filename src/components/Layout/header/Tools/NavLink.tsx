import { useState } from "react";
import { NavLink } from "react-router-dom";

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
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => link.submenu && setDropdownOpen(true)}
            onMouseLeave={() => link.submenu && setDropdownOpen(false)}
          >
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `px-4 py-2 font-bold text-black ${
                  isActive ? "text-green-500" : ""
                }`
              }
            >
              {link.title}
            </NavLink>

            {/* Dropdown for "About" */}
            {link.submenu && dropdownOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-md rounded-md">
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
                </button>
                {dropdownOpen && (
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
                )}
              </div>
            ) : (
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `block font-bold px-4 py-2 text-xl ${
                    isActive
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
