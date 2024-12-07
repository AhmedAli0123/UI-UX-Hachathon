import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Add specific icons to the library
library.add(faFacebookF);
library.add(faTwitter);
library.add(faInstagram);
library.add(faLinkedin);

import QrCode from "../assets/Qr Code.png";
import google from "../assets/GooglePlay.png";
import apple from "../assets/download-appstore.png";

const Footer = () => {
  return (
    <footer className="bg-black  mt-[100px] md:mt-10 mx-auto">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 md:mx-24">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Exlucsive
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Subscribe
                </Link>
              </li>
              <li className="mb-4">
                <p className="hover:underline">Get 10% off your first order</p>
              </li>

              <li className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[180px] h-[48px] bg-black text-gray-700 pl-4 pr-10 rounded border-2 border-white"
                />
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="hover:underline">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  exclusive@gmail.com
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  +88015-88888-9999
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Account
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Login / Register
                </a>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Link
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download App
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p className="text-xs font-semibold">
                  Save $3 with App New User Only
                </p>
              </li>
              <li className="mb-4 flex gap-[8px]">
                <Image
                  src={QrCode}
                  alt="Qr Code"
                  className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                />
                <div className="flex flex-col gap-[7px]">
                  <Image
                    src={google}
                    alt="Download from Google"
                    className="-[90px] h-[30pxw] md:w-[110] md:h-[40px] cursor-pointer"
                  />

                  <Image
                    src={apple}
                    alt="Download from Apple Store"
                    className="-[90px] h-[30pxw] md:w-[110] md:h-[40px] cursor-pointer"
                  />
                </div>
              </li>

              <li className="flex gap-[24px]">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />

                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <hr className="border-t-2 border-gray-700" />
      </div>

      <div className="text-gray-700 flex justify-center items- h-[40px] text-base font-normal">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
