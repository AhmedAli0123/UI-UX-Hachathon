"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleNavigation = (item:any) => {
    setMenuOpen(false); // Close the menu
    if (item === "Menu") {
      router.push("../menu"); // Navigate to the Menu page
    } else if (item === "Home") {
      router.push("/"); // Navigate to Home
    } else if (item === "Blog") {
      router.push("../blogdetail"); // Navigate to Blog (example)
    } else if (item === "About") {
      router.push("../about"); // Navigate to About (example)
    } else if (item === "Shop") {
      router.push("../shoplist"); // Navigate to About (example)
    }else if (item === "Page") {
      router.push("../faq"); // Navigate to About (example)
    }else if (item === "Contact") {
      router.push("../chef"); // Navigate to About (example)
    }
    // Add other navigation logic as needed
  };

  return (
    <nav className="bg-black text-white p-4 w-full overflow-hidden">
      <section className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <div className="md:hidden block text-2xl font-bold">
          <span className="text-orange-500">Food</span>tuck
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="text-orange-500 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

        {/* Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-orange-500 cursor-pointer px-4 md:px-0"
              onClick={() => handleNavigation(item)} // Handle navigation
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <span className="absolute top-2.5 right-3">
              <CiSearch />
            </span>
          </div>
          <IoBagHandle className="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </section>
    </nav>
  );
}
