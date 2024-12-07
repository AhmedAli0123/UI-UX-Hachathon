"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";
import favorite from "@/app/assets/favorite.png";
import cardIcom from "@/app/assets/Cart1 with buy.png";

import { useState } from "react";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 text-black border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap ">
            Exclusive
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            aria-controls="navbar-search"
            aria-expanded={isNavbarOpen}
            className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </button>

          {/* Search Bar (Desktop) */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-[243px] "
              placeholder="What are you looking for?"
            />
          </div>
          <Image
            src={favorite}
            alt="Favorite icon"
            className="w-[20px] h-[18px] items-center mx-auto my-auto ml-[30px] cursor-pointer"
          />
          <Image
            src={cardIcom}
            alt="Favorite icon"
            className="w-[32px] h-[32px] items-center mx-auto my-auto ml-[30px] cursor-pointer"
          />
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between ${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black ">
            <li>
              <Link
                href="#"
                className="block py-2 px-3  hover:text-gray-500 rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 hover:text-gray-500  rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3  hover:text-gray-500 rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/../SignUp"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 hover:text-gray-500 "
                aria-current="page"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
