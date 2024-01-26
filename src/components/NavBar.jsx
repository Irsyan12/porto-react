import React, { useContext } from "react";
import NavBar2 from "./NavBarMbl";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkMode } from "../context/DarkMode";
const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <>
      <NavBar2 />
      <div className="hidden sm:flex items-center justify-center w-full mt-3">
        <ul
          className={`flex items-center justify-center w-76 mt-5 py-3 px-5 rounded-full px-3 text-sm font-medium space-x-8  backdrop-blur ${
            isDarkMode
              ? "bg-zinc-800 text-white shadow-lg ring-1 bg-gray-600 ring-gray-600"
              : "bg-white/90 text-zinc-500 shadow-zinc-800/5 ring-2 ring-zinc-900/5 shadow-lg "
          }`}
        >
          <li>
            <a
              href="#about"
              draggable="false"
              className={`hover:font-semibold transition duration-200 ease-in-out ${
                isDarkMode ? "hover:text-teal-200" : "hover:text-zinc-800"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#certification"
              draggable="false"
              className={`hover:font-semibold transition duration-200 ease-in-out ${
                isDarkMode ? "hover:text-teal-200" : "hover:text-zinc-800"
              }`}
            >
              Certification
            </a>
          </li>
          <li>
            <a
              href="#contactme"
              draggable="false"
              className={`hover:font-semibold transition duration-200 ease-in-out ${
                isDarkMode ? "hover:text-teal-200" : "hover:text-zinc-800"
              }`}
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <div
        className="absolute ml-10 sm:top-1 sm:right-0 mt-8 sm:mr-10 hover:cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div
          className={`w-12 h-10 flex items-center justify-center rounded-full shadow-lg shadow-zinc-800/5 backdrop-blur ${
            isDarkMode
              ? "ring-1 bg-zinc-800 ring-gray-600 "
              : "ring-2 ring-zinc-900/5 bg-white/90"
          }`}
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faMoon : faSun}
            className={`text-md ${
              isDarkMode ? "text-gray-300 " : "text-teal-500"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
