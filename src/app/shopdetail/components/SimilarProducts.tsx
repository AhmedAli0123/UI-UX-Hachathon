import React from "react";

import Image from "next/image";

import { FaArrowLeft , FaArrowRight} from "react-icons/fa";

function SimilarProducts() {
  const product = [
    {
      id: 1,
      name: "Fresh Lime",
      price: 38.0,
      image: "/shoplist1.png",
      tags: ["newest"],
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: 28.0,
      image: "/shoplist2.png",
      tags: ["sell"],
    },
    {
      id: 3,
      name: "Burger",
      price: 21.0,
      image: "/shoplist3.png",
      tags: ["newest"],
    },
    {
      id: 4,
      name: "Fresh Lime",
      price: 38.0,
      image: "/shoplist1.png",
      tags: ["newest"],
    },
  ];
  return (
    <>
      <section className="px-[80px] md:px-[120px] my-[120px]">
        {/* Upper Heading and Button */}
        <div className="flex justify-between">
          <h2 className=" text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal font-bold">
            Similar Products
          </h2>
                {/* For Arrow Buttons */}
            <div className="flex gap-2 md:gap-5">
                <button className="bg-[#FAF7F2] w-[39px] h-[40px] rounded-full hover:bg-[#FF9F0D] hover:text-white 
                flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105">
                    <FaArrowLeft />
                </button>
                <button className="bg-[#FAF7F2] w-[39px] h-[40px] rounded-full hover:bg-[#FF9F0D] hover:text-white 
                flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105">
                    <FaArrowRight /> 
                </button>
            </div>
        </div>

        {/* Creating Products */}

        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-4 mt-[24px] ">
            {product.map((items)=>
            
                
                    <div 
                    key={items.id}
                    className='w-[200px]  md:w-[250px] rounded  hover:border-2 border-gray-700 transition-transform duration-200 ease-in transform hover:scale-105'>
                            <Image src={items.image} alt={items.name} width={300} height={200} className='rounded cursor-pointer'/>
                            <h2 className='font-bold text-[16px] md:text-[18px] mt-[8px]'>{items.name}</h2>
                            <div>
                              <h2 className='text-[#FF9F0D] font-normal md:text-[16px] text-[12px]'>${items.price}</h2>
                            </div>
                    </div>
            
        )}
        </div>
      </section>
    </>
  );
}

export default SimilarProducts;
