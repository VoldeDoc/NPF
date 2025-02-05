import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
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
  return (
    <>
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            className={({ isActive }) =>
              `px-4 py-2 font-bold text-black ${
                isActive ? " text-green-500 " : ""
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile Links */}
      <div className="md:hidden space-y-2">
        {links.map((link, index) => (
          <div key={index} className="relative">
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
          </div>
        ))}
      </div>
    </>
  );
}