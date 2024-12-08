import React from 'react'
import review1 from "../../../public/Reviewslider1.png"

import Image from 'next/image'

function Testimonials() {
  return (
    <>
        <section className='bg-black px-5 md:px-[135px] py-[120px]'>
            <div>
                <h2 className='text-[#FF9F0D] text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal
                '>Testimonials</h2>
                <h2 className='text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal'>What our client are saying</h2>
            </div>

            <div className='w-[100%] h-[500px] flex justify-center items-center mt-[40px]'>
                
                <Image src={review1} alt='review' className='w-[400px] h-[300px] md:w-[800px] md:h-[500px] bg-white'></Image>
            </div>
        </section>
    </>
  )
}

export default Testimonials