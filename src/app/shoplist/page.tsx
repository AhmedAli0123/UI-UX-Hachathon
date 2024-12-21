import React from "react";

import Link from "next/link";

import MenuCard from "./MenuCard";

const menuItems = [
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
    name: "Country Burger",
    price: 45.0,
    image: "/shoplist4.png",
    tags: ["default"],
  },
  {
    id: 5,
    name: "Drink",
    price: 23.0,
    image: "/shoplist5.png",
    tags: ["default"],
  },
  {
    id: 6,
    name: "Pizza",
    price: 43.0,
    image: "/shoplist6.png",
    tags: ["default"],
  },
  {
    id: 7,
    name: "Cheese Butter",
    price: 10.0,
    image: "/shoplist7.png",
    tags: ["default"],
  },
  {
    id: 8,
    name: "Sandwiches",
    price: 25.0,
    image: "/shoplist8.png",
    tags: ["default"],
  },
  {
    id: 9,
    name: "Chicken Chup",
    price: 12.0,
    image: "/shoplist9.png",
    tags: ["default"],
  },
];

function page() {
  return (
    <>
      {/* Heroo Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop page</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Shop
          </p>
        </div>
      </section>

      {/* For Main Page */}

      <section className=" px-[70px] md:px-[135px] flex flex-col md:flex-row my-[40px]">
        {/* For Menu Items   */}
        <div>
          <div className="flex flex-col md:flex-row md:justify-start md:items-center mt-[120px] gap-[5px]">
            <h2>Sort By:</h2>
            <input
              type="dropDown"
              placeholder="newest"
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px]  ml-[5px] rounded-md "
            />
            <h2 className="md:ml-[40px]">Show:</h2>
            <input
              type="dropDown"
              placeholder="Default"
              className="border border-gray-500 w-[150px] md:w-[236px] h-[26px] md:h-[46px] ml-[5px] rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 gap-[34px] sm:grid-cols-2 md:grid-cols-3 mt-[24px] ">
            {menuItems.map((item) => (
              <MenuCard
                key={item.id} // <-- Add key here
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
