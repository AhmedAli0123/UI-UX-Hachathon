"use client";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
}

export default function MenuCard({ id, name, price, image, tags }: Props) {
  const route = useRouter();

  function handleNavigate() {
    route.push(`/shoplist/${id}`);
  }

  return (
    <div
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyDown={(e)=>e.key === "Enter" && handleNavigate()}
      className="w-[150px]  md:w-[300px]  rounded  hover:border-2 border-[#FF9F0D] transition-transform duration-200 ease-in transform hover:scale-105"
    >
      <div className="w-[150px] h-[200px] md:w-[290px] md:h-[300px]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          unoptimized={true}
          className="rounded cursor-pointer"
        />
      </div>
      <h2 className="font-bold text-[16px] md:text-[18px]">{name}</h2>
      <h2 className="text-[#FF9F0D] font-normal md:text-[16px] text-[12px]">
        ${price}
      </h2>
    </div>
  );
}
