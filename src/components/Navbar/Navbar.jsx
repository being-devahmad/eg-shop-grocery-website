import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-[#F0F2F5] relative">
        <div className="container mx-auto flex justify-between p-5 items-center">
          {/* Logo */}
          <div>
            <img src={logo} />
          </div>

          {/* Toggle btn */}
          {isMenuOpen ? (
            <AiOutlineClose
              onClick={handleToggleClick}
              className="text-black text-2xl block md:hidden"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleToggleClick}
              className="text-black text-2xl block md:hidden"
            />
          )}

          {/* Nav Items */}
          <ul className="hidden md:flex items-center text-lg justify-center">
            <Link to={'/'} className="mr-5 text-gray-500 hover:text-black cursor-pointer">
              Home
            </Link>
            <Link to={'/shop'} className="mr-5 text-gray-500 hover:text-black cursor-pointer">
              Shop
            </Link>
            <Link to={'/about'} className="mr-5 relative text-gray-500 hover:text-black cursor-pointer flex justify-center items-center">About
              {/* <span>Pages</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 ms-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg> */}
            </Link>
            <Link to={'/cart'} className="mr-5 text-gray-500 hover:text-black cursor-pointer">
              Shop
            </Link>
            <Link to={'/contact'} className="mr-5 text-gray-500 hover:text-black cursor-pointer">
              Contact
            </Link>
          </ul>

          {/* Contact nav */}
          <div className="hidden md:flex justify-center items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div>
              <p>Hotline Number</p>
              <p>+880 176 1111 456</p>
            </div>
          </div>

          {/* Responsive Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white p-4 rounded-md md:hidden z-50">
              <Link to={'/'}
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
              >
                Home
              </Link>
              <Link to={'/shop'}
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
              >
                Shop
              </Link>
              <Link to={'/cart'}
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
              >
                Cart
              </Link>
              <Link to={'/about'}
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900 relative"
              >
                About
              </Link>
              <Link to={'/contact'}
                className="block text-gray-800 font-semibold mb-2 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../../assets/logo.png";

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-[#F0F2F5]">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               {/* NavBar */}
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 {/* Logo */}
//                 <div className="flex flex-shrink-0 items-center">
//                   <img className="h-8 w-auto" src={logo} alt="Your Company" />
//                 </div>
//                 {/* NavItems */}
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     <a
//                       href="/"
//                       className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium"
//                     >
//                       Home
//                     </a>
//                     <a
//                       href="/"
//                       className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium"
//                     >
//                       Shop
//                     </a>
//                     <a
//                       href="/"
//                       className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium"
//                     >
//                       Pages
//                     </a>
//                     <a
//                       href="/"
//                       className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium"
//                     >
//                       Contact
//                     </a>
//                     {/* {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? " text-grey-700"
//                             : "text-gray-600  hover:text-black",
//                           "rounded-md px-3 py-2 text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))} */}
//                   </div>
//                 </div>
//                 {/* <div className="hidden sm:ml-6 sm:block">
//                   <p>Hotline Number</p>
//                   <p>123456</p>
//                 </div> */}
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 {/* Profile dropdown */}
//                 {/* <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu> */}
//               </div>
//             </div>
//           </div>

//           {/* Mobile View - Nav Items */}
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               <a
//                 href="/"
//                 className="text-gray-600 block hover:text-black px-3 py-2 text-sm font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="/"
//                 className="text-gray-600 block hover:text-black px-3 py-2 text-sm font-medium"
//               >
//                 Shop
//               </a>
//               <a
//                 href="/"
//                 className="text-gray-600 block hover:text-black px-3 py-2 text-sm font-medium"
//               >
//                 Pages
//               </a>
//               <a
//                 href="/"
//                 className="text-gray-600 block hover:text-black px-3 py-2 text-base font-medium"
//               >
//                 Contact
//               </a>
//               {/* {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))} */}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
