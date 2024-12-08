import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

// import extra1 from "../assets/extra1.png";
// import extra2 from "../assets/extra2.png";
// import extra3 from "../assets/extra3.png";
// import extra4 from "../assets/extra4.png";
// import extra5 from "../assets/extra5.png";
// import extra6 from "../assets/extra6.png";
 
import experience from "../assets/30year.png"
const Home = () => {
  return (
    <>
      {/* Left  */}
      <section className="flex flex-row bg-black px-[135px]">
      {/* <div className="grid grid-rows-3 grid-cols-4 gap-2 p-4 bg-black">
      Top row
      <div className="col-span-2 row-span-1 relative">
        <Image
          src={extra1}
          alt="Tacos"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-1 relative">
        <Image
          src={extra2}
          alt="Burger"
          className="object-cover w-full h-full"
        />
      </div>

      Second row
      <div className="col-span-1 row-span-1 relative">
        <Image
          src={extra3}
          alt="Fried food"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-1 row-span-1 relative">
        <Image
          src={extra4}
          alt="Stacked Burger"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-1 relative">
        <Image
          src={extra6}
          alt="Burger and Fries"
          className="object-cover w-full h-full"
        />
      </div>

      Third row
      <div className="col-span-4 row-span-1 relative">
        <Image
          src={extra1}
          alt="Pasta"
          className="object-cover w-full h-full"
        />
      </div>
    </div> */}

        {/* right */}
        <div className="bg-black">
          <div className="mt-[50]">
            <h3 className="text-[#FF9F0D] text-2xl  mb-[35]">Why Choose us</h3>
            <h1 className="text-white text-6xl font-bold mb-7">
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste
              <br /> And Experienced{" "}
            </h1>
            <p className="text-gray-200 mb-14 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam
              <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in <br /> consequat.
            </p>

            <div className="gap-10 flex mb-5">
              <section className="bg-yellow-400  text-white p-12">
                Fast Food
              </section>
              <section className="bg-yellow-400 text-white p-12">Lunch</section>
              <section className="bg-yellow-400 text-white p-12">
                Dinner
              </section>
            </div>

            <Image
              src={experience}
              alt="experience"
              width={374}
              height={93}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
