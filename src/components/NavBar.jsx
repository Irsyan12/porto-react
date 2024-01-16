import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full mt-3">
      <ul className="flex items-center justify-center w-72 mt-5 py-3 px-5 rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-500 shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-900/5 backdrop-blur space-x-8">
        <li>
          <a
            href="#about"
            draggable="false"
            className="hover:text-zinc-800 hover:font-semibold transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            draggable="false"
            className="hover:text-zinc-800 hover:font-semibold transition duration-300 ease-in-out"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            draggable="false"
            className="hover:text-zinc-800 hover:font-semibold transition duration-300 ease-in-out"
          >
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;