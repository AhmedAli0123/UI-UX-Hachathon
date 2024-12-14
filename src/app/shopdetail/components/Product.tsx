"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaRegHeart,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

import star from "../assets/Star.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

function Product() {
  const [count, setCount] = useState(1);

  function handleNotification() {
    toast.success("Item was added in cart successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <section className="px-[80px] md:px-[135px] flex flex-col md:flex-row gap-[55px]  my-[120px]">
        {/* Creating Images */}
        <div className="w-[100%] md:w-[50%] flex justify-between gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <Image
              src={img1}
              alt=""
              className="hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
            <Image
              src={img2}
              alt=""
              className="hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
            <Image
              src={img3}
              alt=""
              className="hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
            <Image
              src={img4}
              alt=""
              className="hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
          </div>
          <div>
            <Image
              src={img5}
              alt=""
              className=" md:w-[400px] md:h-[550px] hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* For Product Details Section */}
        <div className="w-[100%] md:w-[50%] ">
          {/* For Tops Buttons */}
          <div className="flex md:flex-row flex-col justify-between">
            <button className="bg-[#FF9F0D] text-white px-[17px] rounded-[8px] whitespace-nowrap md:whitespace-normal font-bold">
              In Stock
            </button>

            {/* For Arrow Buttons */}
            <div className="flex gap-2 md:gap-5">
              <button
                className=" text-[#828282] text-[14px] md:text-[18px] px-5 py-2 rounded-full hover:bg-[#FF9F0D] hover:text-white 
                                flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
              >
                <FaArrowLeft /> Prev
              </button>
              <button
                className="text-[#828282] text-[14px] md:text-[18px] px-5 py-2 rounded-full hover:bg-[#FF9F0D] hover:text-white 
                                flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>

          {/* For Product Details */}
          <div>
            <h2 className="text-[24px] md:text-[48px] font-bold mt-[8px]">
              Yummy Chicken Chup
            </h2>
            <p className="text-[#4F4F4F] text-[14px]  md:text-[18px] mt-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>

            <hr className="border border-[#E0E0E0] my-[32px]" />

            <h3 className="md:text-[32px] text-[24px] font-bold mt-[64px] leading-[40px]">
              54.00$
            </h3>

            <div className="flex gap-[14px] text-[#828282] text-[12px] md:text-[16px] font-normal mt-[18px]">
              <Image src={star} alt="rating" />|<h2 className="">5.0 Rating</h2>
              |<h2>22 Review</h2>
            </div>

            <h2 className="mt-[22px]">Dictum/cursus/Risus</h2>

            <div className="my-[26px] flex flex-col md:flex-row gap-[16px]">
              <div className="flex items-center  text-black">
                {/* Minus Button */}
                <button
                  className="w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]"
                  onClick={() => setCount((prev) => Math.max(0, prev - 1))} // Prevents negative values
                >
                  -
                </button>

                {/* Counter Value */}
                <div className="w-16 h-[50px] text-2xl flex items-center justify-center border border-gray-500">
                  {count}
                </div>

                {/* Plus Button */}
                <button
                  className="w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= {Bounce}
              />
              <button
                onClick={handleNotification}
                className="bg-[#FF9F0D] px-5 py-2 text-[12px] md:text-[16px] hover:bg-[#ffaf37] hover:text-white 
                                        flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
              >
                Add To Cart
              </button>
            </div>

            <h2 className="text-[#4F4F4F] text-[18px] font-normal flex cursor-pointer">
              {" "}
              <FaRegHeart className="hover:text-red-600 cursor-pointer " /> Add
              to Wishlist{" "}
              <span className="flex ml-[16px]">
                <IoIosGitCompare />
                Compare
              </span>
            </h2>

            <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
              <span className="text-[#333333]">Category:</span> Pizza
            </h2>
            <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
              <span className="text-[#333333]">Tags:</span> Our Shop
            </h2>

            <div className="flex mt-[28px] items-center gap-[5px]">
              <h2 className="text-[#333333] text-[18px] font-normal ">
                Share:
              </h2>
              <FaYoutube className="w-[23px] h-[23px]  text-[#4F4F4F]" />
              <FaFacebook className="w-[23px] h-[23px] text-[#4F4F4F]" />
              <FaTwitter className="w-[23px] h-[23px]  text-[#4F4F4F]" />
              <FaInstagramSquare className="w-[23px] h-[23px] text-[#4F4F4F]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
