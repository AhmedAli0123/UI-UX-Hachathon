"use client";

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shoplist" },
    { name: "Contact", path: "/SignUp" },
  ];

  return (
    <nav className="bg-black text-white p-4 w-full">
      <div className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Food</span>tuck
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden flex justify-between">
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt3 className="text-orange-500 text-[34px] cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
                {navigationItems.map((item) => (
                  <li key={item.name} className="hover:text-orange-500" onClick={() => router.push(item.path)}>
                    {item.name}  
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-[32px]">
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-orange-500 cursor-pointer"
              onClick={() => router.push(item.path)}
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
