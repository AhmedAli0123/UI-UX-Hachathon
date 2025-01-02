"use client"



import React from 'react'
import  Image from 'next/image'

import { useRouter } from "next/navigation";

interface Props {
    id: number;
    name: string;
    price: number;
    image: string;
    tags: string[];
  }
  

export default  function MenuCard({ id, name, price, image, tags }: Props) {

    const route= useRouter()

    function handleNavigate() {
      route.push((`/shoplist/${id}`))
    }

    return (
      <div onClick={handleNavigate}
      className='w-[200px] h-[230px] md:w-[300px] md:h-[330px] rounded  hover:border-2 border-[#FF9F0D] transition-transform duration-200 ease-in transform hover:scale-105'>
        <Image src={image} alt={name} width={300} height={200} className='rounded cursor-pointer'/>
        <h2 className='font-bold text-[16px] md:text-[18px] mt-[8px]'>{name}</h2>
        <div>
          <h2 className='text-[#FF9F0D] font-normal md:text-[16px] text-[12px]'>${price}</h2>
        </div>
      </div>
    );
  }
  