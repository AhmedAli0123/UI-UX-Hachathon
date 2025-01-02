"use client";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { products } from "@/app/utilits/mock";

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
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/feature/cart";

interface Params {
  params: {
    id: string;
  };
}

function Product({ params }: Params) {
  const dataId = Number(params.id);

  // For Product Details
  const product = products.find((item) => item.id === dataId);

  // For Notification Package Of React Toastify
  function handleNotification() {
    toast.success("Item was added in cart successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  // For Add To Cart
  const dispatch =useAppDispatch()
  const [cartItem, setCartItem]:any = useState({
    id: product?.id,
    title: product?.title,
    img: product?.img,
    price: product?.price || 0,
    quantity:  1,
  });

  return (
    <>
      <section className="px-[80px] md:px-[135px] flex flex-col md:flex-row gap-[55px]  my-[120px]">
        {/* Creating Images */}
        <div className="w-[100%] md:w-[50%] flex justify-between gap-[24px]">
          <div>
            <Image
              src={product?.img || ""}
              width={491}
              height={550}
              alt=""
              className=" md:w-[400px] md:h-[550px] hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* For Product Details Section */}
        <div className="w-[100%] md:w-[50%] ">
          {/* For Tops Buttons */}
          <div className="hidden lg:flex lg:flex-row flex-col justify-between">
            <div className="bg-[#FF9F0D] text-white px-[17px] rounded-[8px] whitespace-nowrap md:whitespace-normal font-bold items-center flex gap-[5px]">
              In Stock
            </div>

            {/* For Arrow Buttons */}
            <div className="hidden  lg:flex lg:gap-2 md:gap-5">
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
              {product?.title}
            </h2>
            <p className="text-[#4F4F4F] text-[14px]  md:text-[18px] mt-[24px]">
              {product?.Description}
            </p>

            <hr className="border border-[#E0E0E0] my-[32px]" />

            <h3 className="md:text-[32px] text-[24px] font-bold mt-[64px] leading-[40px]">
              ${cartItem.price * cartItem.quantity}
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
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity:
                        cartItem.quantity > 1 ? cartItem.quantity - 1 : 1, 
                    })
                  }
                >
                  -
                </button>

                {/* Counter Value */}
                <div className="w-16 h-[50px] text-2xl flex items-center justify-center border border-gray-500">
                  {cartItem.quantity}
                </div>

                {/* Plus Button */}
                <button
                  className="w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity + 1, // Correctly increment the quantity
                    })
                  }
                >
                  +
                </button>
              </div>
              <ToastContainer />
              <button
                onClick={() => {
                  dispatch(addToCart(cartItem)); // Dispatch the action to add the item to the cart
                  handleNotification(); // Trigger the notification
                }}
                className="bg-[#FF9F0D] px-5 py-2 text-[12px] md:text-[16px] hover:bg-[#ffaf37] hover:text-white 
                                        flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105"
              >
                Add To Cart
              </button>
            </div>

            <h2 className="text-[#4F4F4F] text-[18px] font-normal flex cursor-pointer">
              {" "}
              <span className="flex items-center"> 
              <FaRegHeart className="hover:text-red-600 cursor-pointer " /> Add
              to Wishlist{" "}
              </span>
              <span className="flex items-center ml-[16px]">
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
