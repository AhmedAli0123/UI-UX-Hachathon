import React from 'react'
import Image from 'next/image'

import truck from '../assets/icon-delivery.png'
import secure from "../assets/Icon-secure.png"
import customer from "../assets/Icon-Customer service.png"

function Reveiw() {
  return (
    <div className='md:px-[135px] my-[140px] flex flex-col md:flex-row justify-center items-center gap-10 md:justify-evenly'>
        
        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center border'>
          <div className='bg-black h-[80px] w-[80px] rounded-full flex justify-center items-center'>
          <Image 
            src={truck}
            alt="fast Delivery"
          />
          </div>
          <h2 className='text-[19px] font-semibold mt-[24px]'>FREE AND FAST DELIVERY</h2>
          <h3 className='text-sm font-normal mt-[12px]'>Free delivery for all orders over $140</h3>
        </div>

        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center'>
          <div className='bg-black h-[80px] w-[80px] rounded-full flex justify-center items-center'>
          <Image 
            src={secure}
            alt="fast Delivery"
          />
          </div>
          <h2 className='text-[19px] font-semibold mt-[24px]'>24/7 CUSTOMER SERVICE</h2>
          <h3 className='text-sm font-normal mt-[12px]'>Friendly 24/7 customer support</h3>
        </div>

        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center'>
          <div className='bg-black h-[80px] w-[80px] rounded-full flex justify-center items-center'>
          <Image 
            src={customer}
            alt="fast Delivery"
          />
          </div>
          <h2 className='text-[18px] font-semibold mt-[24px]'>MONEY BACK GUARANTEE</h2>
          <h3 className='text-sm font-normal mt-[12px]'>We reurn money within 30 days</h3>
        </div>

    </div>
  )
}

export default Reveiw