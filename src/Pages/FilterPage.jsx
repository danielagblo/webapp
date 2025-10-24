import React from 'react'
import { GoSearch } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import apartment from "../assets/apartment.png"


const CardsInfor = [
  {
    image: apartment,
    location: "Santamaria-kotobabi",
    title: "Six bedroom apartment",
    price: "120 for 6 days"
  }, {
    image: apartment,
    location: "Santamaria-kotobabi",
    title: "Six bedroom apartment",
    price: "120 for 6 days"
  }, {
    image: apartment,
    location: "Santamaria-kotobabi",
    title: "Six bedroom apartment",
    price: "120 for 6 days"
  }, {
    image: apartment,
    location: "Santamaria-kotobabi",
    title: "Six bedroom apartment",
    price: "120 for 6 days"
  }, {
    image: apartment,
    location: "Santamaria-kotobabi",
    title: "Six bedroom apartment",
    price: "120 for 6 days"
  }
]
export default function FilterPage() {
  
  return (
    <div className=''>
      <div className='flex justify-center items-center flex-col h-screen mt-10 md:mt-20 lg:mt-40 '>
        {/* Search bar */}
        <div className="flex  justify-center items-center flex-col gap-y-2">
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-center '>Oysloe</h1>
          <div className='  gradient-border w-[394px] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-12 md:h-14 lg:h-16 mt-2 rounded-4xl' tabIndex='0'>
            <div className='flex justify-center items-center gap-x-3 w-full h-full rounded-4xl p-3 md:p-4 lg:p-5'>
              <GoSearch className='w-5 h-5 md:w-6 md:h-6' />
              <input type="text" placeholder='Search anything up for good' className='outline-none bg-transparent w-full text-sm md:text-base' />
            </div>
          </div>
          {/*  */}
        </div>
        {/* Search bar */}
       <div className='bg-gray-200/30 w-full h-full mt-20 md:mt-32 lg:mt-40 xl:mt-[180px] px-4 md:px-8 lg:px-16 xl:px-[156px] '>
         {/* Categories */}
           <div></div>
        {/* Categories */}
        {/* Card section */}
         <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[13px] mt-[25px] md:gap-[13px]'>
                      {CardsInfor.map((datas, index) => {
                        return (
                          <div key={index} className=' bg-[#F9F9F9] w-full max-w-56 h-auto min-h-[203px] flex flex-col cursor-pointer p-2'>
                            <img src={datas.image} alt="" className='w-full h-32 md:h-36 lg:h-40 object-contain aspect-square' />
                            <div className='flex flex-row gap-2 mt-2'>
                              <FaLocationDot className='text-[#374957BA] flex-shrink-0' />
                              <p className='text-[#374957BA] text-sm truncate'>{datas.location}</p>
                            </div>
                            <p className='text-sm font-medium mt-1'>{datas.title}</p>
                            <p className='text-sm font-bold mt-1'>₵{datas.price}</p>
                          </div>
                        )
                      })}
                    </div>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[13px] mt-[25px] md:gap-[13px]'>
                                {CardsInfor.map((datas, index) => {
                                  return (
                                    <div key={index} className=' bg-[#F9F9F9] w-full max-w-56 h-auto min-h-[203px] flex flex-col cursor-pointer p-2'>
                                      <img src={datas.image} alt="" className='w-full h-32 md:h-36 lg:h-40 object-contain aspect-square' />
                                      <div className='flex flex-row gap-2 mt-2'>
                                        <FaLocationDot className='text-[#374957BA] flex-shrink-0' />
                                        <p className='text-[#374957BA] text-sm truncate'>{datas.location}</p>
                                      </div>
                                      <p className='text-sm font-medium mt-1'>{datas.title}</p>
                                      <p className='text-sm font-bold mt-1'>₵{datas.price}</p>
                                    </div>
                                  )
                                })}
                              </div>
         </div>
        {/* Card section */}
       </div>
      </div>
    </div>
  )
}
