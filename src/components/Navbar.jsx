import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // settoggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrolly > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // navitimes array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];
  // console.log(isMenuOpen);
  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={` py-4  lg:px-14 px-4 ${
          isSticky
            ? "sticky"
            : "sticky top-0 right-0 left-0 border bg-white duration-300 "
        }`}
      >
        <div className="flex justify-between items-center text-base  gap-8 ">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w10 inline-block items-center" />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* Nav items */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className=" block text-base text-gray-900 hover:text-brnadPrimary first:font-medium "
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href=""
              className="hidden lg:flex items-center text-brnadPrimary hover:text-gray-900"
            >
              Login
            </a>
            <button className=" bg-brnadPrimary text-white py-2 px-4 transition-all duration-300 rounded  hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              className="text-2xl focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralGrey" />
              )}
            </button>
          </div>
        </div>
        {/* {for items mobile device} */}
        <div
          className={`space-y-4 px-4 mt-16 py-7  bg-brnadPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className=" block text-base text-white hover:text-stone-600 first:font-medium "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
