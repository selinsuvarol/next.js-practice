import React from "react";
import { ShoppingCartIcon } from '@heroicons/react/solid';

function Navbar () {
    return (
    <nav
        className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 border-solid border-t-2 border-darkpurple shadow-black">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <img src="./logos/navbar-logo.jpg" alt="student store logo" className="border border-blue-600"/>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 border-2 rounded text-darkpurple border-darkpurple hover:text-darkpurple hover:border-darkpurple">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-darkpurple lg:flex-grow">
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-purple mr-2">
                    About Us
                </a>
                <a href="#responsive-header"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-purple mr-2">
                    Our Team
                </a>
            </div>
            <div className="relative mx-2  text-gray-600 lg:block hidden">
                <input
                    className="border-2 border-gray-300 bg-white rounded-[20px] h-10 pl-2 pr-8  text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search"></input>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                </button>
            </div>
            <div className="flex ">
            <a href="#"
                   className=" block text-md px-4  mx-3 py-2  bg-darkpurple rounded-[20px] text-white font-bold mt-4 hover:bg-purple lg:mt-0">Sign Up</a>
                <a href="#"
                   className=" block text-md px-4  mx-3 py-2  bg-darkpurple rounded-[20px] text-white font-bold mt-4 hover:bg-purple lg:mt-0">Sell Items</a>
            </div>
            <ShoppingCartIcon className="h-7 w-7 ml-2 text-orange-400 hover:text-orange-600" />
        </div>
    </nav>
    )
};

export default Navbar;