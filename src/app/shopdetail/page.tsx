import React from 'react'
import Link from 'next/link'

import SimilarProduct from "./components/SimilarProducts"
import Description from './components/Description'
import Product from './components/Product'

function page() {
  return (
    <>
    
      {/* Heroo Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Shop Details</h2>
          <p className="mt-[20px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            &gt; Sign up
          </p>
        </div>
      </section>
    
  <Product />
    <Description />
      <SimilarProduct />
      </>
  )
}

export default page