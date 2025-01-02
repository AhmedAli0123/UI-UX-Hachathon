// pages/success.js

import Link from 'next/link';

export default function Success() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="text-center px-4 py-6 bg-[#FF9F0D] rounded-lg max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Order Successfully Placed!</h1>
        <p className="mb-6 text-xl">Thank you for your order. Your food is on its way!</p>
        
          <Link href="/shoplist"className="px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition duration-300">
            Continue Eating
          </Link>
        
      </div>
    </div>
  );
}
