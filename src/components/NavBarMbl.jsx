import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { DarkMode } from "../context/DarkMode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar2() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <Menu
      as="div"
      className={`inline-flex ml-auto mx-2 mt-8  text-left sm:hidden`}
    >
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibold ring-gray-200 shadow-sm shadow-xl ring-1 ring-inset  ${
            isDarkMode ? "bg-zinc-800 text-white " : "bg-white text-gray-900"
          } `}
        >
          Menu
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isDarkMode ? "bg-zinc-800 text-white" : "bg-white text-gray-700"
          }`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#certification"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Certification
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#contactme"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Contact Me
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
