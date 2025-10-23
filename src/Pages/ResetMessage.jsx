import React from 'react'
import messagebox from "../assets/5fTpdMUsdL2.svg"

export default function ResetMessage() {
  return (
    <div className='flex justify-center items-center flex-col gap-3 py-10 lg:py-20 bg-gray-300/35 h-screen w-full text-2xl lg:text-3xl px-4'>
        <img src={messagebox} alt="" className='w-16 h-16 lg:w-20 lg:h-20' />
        <p className='text-3xl lg:text-5xl text-center'>Reset link sent to<br/> your email</p>
        <div className='mt-6 lg:mt-10'>
          <button className='border px-8 lg:px-12 py-2 lg:py-3 rounded-xl cursor-pointer text-sm lg:text-base'>
            Close
          </button>
        </div>
    </div>
  )
}
