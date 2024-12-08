import Image from "next/image";
import Link from "next/link";

import blog1 from "../assets/blog1.png";
import calender from "../assets/Calendar.png";
import Admin from "../assets/Admin.png";

import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import cmt1 from "../assets/cmt1.png";
import cmt2 from "../assets/cmt2.png";
import cmt3 from "../assets/cmd3.png";

export default function BlogDetails() {
  return (
    <>
      {/* // Main div  */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog Detail</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">Home</Link> &gt; Blog Detail
          </p>
        </div>
      </section>

      {/* main div */}
 
      <div className="flex flex-col bg-white min-h-screen my-[120px]">
  {/* Main Content */}
  <div className="w-full lg:w-[60%] mx-auto px-4 lg:px-8">
    <Image src={blog1} alt="" className="w-full max-w-[872px] mx-auto" />
    <div className="flex mt-4 gap-2">
      <Image src={calender} alt="" width={24} height={24} className="cursor-pointer" />
      <Image src={Admin} alt="" width={267} height={24} className="cursor-pointer" />
    </div>
    <h1 className="font-bold text-xl md:text-2xl text-[#333] mt-6">
      10 Reasons To Do A Digital Detox Challenge
    </h1>
    <p className="text-[#4F4F4F] mt-4">
      Netus pretium tellus nulla commodo massa adipiscing in elementum magna...
    </p>
    <p className="text-[#4F4F4F] mt-4">
      Ac haca ullamcorper donec ante habi tasse donec imperdiet...
    </p>

    <div className="bg-[#FF9F0D] p-4 mt-8 rounded-md">
      <div className="flex items-center">
        <Image src={blog2} alt="" width={48} height={48} className="mr-4" />
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
        </p>
      </div>
    </div>
    <p className="text-[#4F4F4F] mt-8">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam...
    </p>

    <div className="flex flex-col lg:flex-row mt-8 gap-4">
      {/* Text Section */}
      <div className="lg:w-[50%]">
        <p className="text-[#4F4F4F]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
        </p>
        <p className="text-[#4F4F4F] mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing...
        </p>
      </div>
      {/* Image Section */}
      <div className="lg:w-[50%]">
        <Image src={blog3} alt="" className="w-full" />
      </div>
    </div>
    <Image src={blog4} alt="" className="mt-10 w-full max-w-[872px]" />
  </div>

  {/* Comment Section */}
  <div className="w-full lg:w-[60%] mx-auto px-4 lg:px-8 mt-10">
    <h1 className="text-2xl font-bold">Comments - 03</h1>
    <div className="mt-4 space-y-4">
      <Image src={cmt1} alt="" className="w-full max-w-[872px] mt-[32px]" />
      <Image src={cmt2} alt="" className="w-full max-w-[672px] mx-auto mt-[32px]" />
      <Image src={cmt3} alt="" className="w-full max-w-[872px] mt-[32px]" />
    </div>

    {/* Post a Comment */}
    <h1 className="text-xl font-bold border-b mt-10 pb-2">Post a Comment</h1>
    <div className="mt-4 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border px-4 py-2 w-full md:w-[48%] rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 w-full md:w-[48%] rounded-md"
        />
      </div>
      <textarea
        placeholder="Write a Comment"
        className="border px-4 py-2 w-full h-32 rounded-md"
      ></textarea>
      <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#FF9F0D] border border-[#FF9F0D] transition">
        Post a Comment
      </button>
    </div>
  </div>
</div>


    </>
  );
}
