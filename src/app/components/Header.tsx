import React from "react";
import Link from "next/link";
import LanguageDropDown from "./LanguageDropDown";

function Header() {
  return (
    <>
      <header className="w-full h-[50px] bg-black text-white flex justify-between items-center px-4">
        <div className=" md:flex-1 md:flex inline-block md:justify-center gap-2 text-xs md:text-lg">
          <h1>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <Link href={"/"} className="underline font-semiboldbold">
            ShopNow
          </Link>
        </div>
        <div className="flex z-20 mr-0 md:">
          <LanguageDropDown />
        </div>
      </header>
    </>
  );
}

export default Header;
