"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "../menu" },
    { name: "Blog", path: "../blogdetail" },
    { name: "FAQ ", path: "../faq" },
    { name: "About", path: "../about" },
    { name: "Chef", path: "../chef" },
    { name: "Contact", path: "../SignUp" },
  ];

  const handleNavigation = (path:string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <nav className="bg-black text-white p-4 w-full">
      <div className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <div className="text-2xl font-bold md:hidden">
          <span className="text-orange-500">Food</span>tuck
        </div>

        {/* Hamburger Icon */}
        <div
          className="text-orange-500 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center transition-all duration-300 z-20 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-orange-500 cursor-pointer px-4 md:px-0"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-orange-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <CiSearch className="absolute top-2.5 right-3" />
          </div>
          <IoBagHandle className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
