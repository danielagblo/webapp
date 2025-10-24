import React from 'react'
import mobilephone from "../assets/pngwing.com2.png"
import Furniture from "../assets/pngwing.com(9)6.png"
import Vehicles from "../assets/pngwing.com(1)4.png"
import Industry from "../assets/pngwing.com(7)4.png"
import Fashion from "../assets/pngwing.com(4)3.png"
import Grocery from "../assets/pngwing.com(11)4.png"
import Games from "../assets/pngwing.com(2)3.png"
import Cosmetics from "../assets/pngwing.com(12)3.png"
import Property from "../assets/pngwing.com(6)3.png"
import Services from "../assets/job-post_149457381.png"
import { SlArrowLeft } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import apartment from "../assets/apartment.png"



const Product = [
  {
    image: mobilephone,
    title: "Electronics",
  }, {
    image: Furniture,
    title: "Furniture",
  },
  {
    image: Vehicles,
    title: "Vehicles",
  },
  {
    image: Industry,
    title: "Industry",
  },
  {
    image: Fashion,
    title: "Fashion",
  },
  {
    image: Grocery,
    title: "Grocery",
  },
  {
    image: Games,
    title: "Games",
  },
  {
    image: Cosmetics,
    title: "Cosmetics",
  },
  {
    image: Property,
    title: "Property",
  },
  {
    image: Services,
    title: "Services",
  },

]
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


export default function HomePage() {
  return (
    <div className='my-16 md:my-32 lg:my-64'>
      {/* Search bar */}
      <div className='flex justify-center items-center h-screen mt-10 md:mt-20 lg:mt-40 '>
        <div className="flex  justify-center items-center flex-col gap-y-2">
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-center '>Oysloe</h1>
          <div className='  gradient-border w-[394px] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-12 md:h-14 lg:h-16 mt-2 rounded-4xl' tabIndex='0'>
            <div className='flex justify-center items-center gap-x-3 w-full h-full rounded-4xl p-3 md:p-4 lg:p-5'>
              <GoSearch className='w-5 h-5 md:w-6 md:h-6' />
              <input type="text" placeholder='Search anything up for good' className='outline-none bg-transparent w-full text-sm md:text-base' />
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 mt-3.5'>
            {
              Product.map((item) => {
                return (
                  <div key={item.title} className=' bg-[#F9F9F9] w-full max-w-[244px] h-auto min-h-[203px] flex flex-col items-center justify-center gap-y-2 rounded-lg shadow-md border-gray-700 hover:border-blue-900 transition-all duration-300 ease-in-out cursor-pointer'>
                    <img src={item.image} alt="" className='w-full h-32 md:h-36 lg:h-40 object-contain aspect-square' />
                    <p className='text-center'>{item.title}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='mt-16 flex justify-center items-center gap-x-4'>
            <h1 className=' text-4xl'>Explore Ads</h1>
            <button className='bg-[#F9F9F9] w-[230px] h-[70px] text-2xl rounded-3xl cursor-pointer'>
              Show all
            </button>
          </div>
          {/*  */}
          <div className='mt-[83px] flex flex-row gap-x-4'>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#374957" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 54 * 0.5}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[#374957] text-lg font-bold">200+</div>
                <div className="text-[#374957] text-xs">Vehicles</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#374957" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 54 * 0.4}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[#374957] text-lg font-bold">45k+</div>
                <div className="text-[#374957] text-xs">Electronics</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#374957" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 54 * 0.3}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[#374957] text-lg font-bold">158+</div>
                <div className="text-[#374957] text-xs">Furniture</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#374957" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 54 * 0.78}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[#374957] text-lg font-bold">100+</div>
                <div className="text-[#374957] text-xs">Sporting</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#374957" strokeWidth="12" fill="none" strokeDasharray={`${2 * Math.PI * 54 * 0.9}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-[#374957] text-lg font-bold">31+</div>
                <div className="text-[#374957] text-xs">Fashion</div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Search bar */}
      {/* cards  section  */}
      <div className='bg-gray-200/30 w-full h-full mt-20 md:mt-32 lg:mt-40 xl:mt-[180px] px-4 md:px-8 lg:px-16 xl:px-[156px] '>
        {/* Electronics card section */}
        <div className=''>
          <div className='flex justify-between items-center  mt-[59px] ' >
            <div className="flex flex-row gap-6 items-center">
              <h1 className='text-3xl'>Electronics</h1>
              <button className='bg-[#ffffff] w-[203px] h-[66px] text-2xl rounded-3xl cursor-pointer'>
                Show all
              </button>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <button className='bg-gray-200 w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowLeft className='w-6 h-6  ' />
              </button>
              <button className='bg-[#ffffff] w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowRight className='w-6 h-6  ' />
              </button>
            </div>
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
        {/*Electronics card section   */}
        {/* Vehicle section */}
        <div className=''>
          <div className='flex justify-between items-center   mt-[68px] ' >
            <div className="flex flex-row gap-6 items-center">
              <h1 className='text-3xl'>Vehicle</h1>
              <button className='bg-[#ffffff] w-[203px] h-[66px] text-2xl rounded-3xl cursor-pointer'>
                Show all
              </button>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <button className='bg-gray-200 w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowLeft className='w-6 h-6  ' />
              </button>
              <button className='bg-[#ffffff] w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowRight className='w-6 h-6  ' />
              </button>
            </div>
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
        {/* Vehical  card section */}
        {/* Furniture section */}
        <div className=''>
          <div className='flex justify-between items-center  mt-[59px] ' >
            <div className="flex flex-row gap-6 items-center">
              <h1 className='text-3xl'>Furniture</h1>
              <button className='bg-[#ffffff] w-[203px] h-[66px] text-2xl rounded-3xl cursor-pointer'>
                Show all
              </button>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <button className='bg-gray-200 w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowLeft className='w-6 h-6  ' />
              </button>
              <button className='bg-[#ffffff] w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowRight className='w-6 h-6  ' />
              </button>
            </div>
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
        {/* fruniture  card  section */}
        {/* Sport card section */}
        <div className=''>
          <div className='flex justify-between items-center  mt-[59px] ' >
            <div className="flex flex-row gap-6 items-center">
              <h1 className='text-3xl'>Sporting</h1>
              <button className='bg-[#ffffff] w-[203px] h-[66px] text-2xl rounded-3xl cursor-pointer'>
                Show all
              </button>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <button className='bg-gray-200 w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowLeft className='w-6 h-6  ' />
              </button>
              <button className='bg-[#ffffff] w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowRight className='w-6 h-6  ' />
              </button>
            </div>
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
        {/* Sport card section */}
        {/* Fashion card section */}
        <div className=''>
          <div className='flex justify-between items-center  mt-[59px] ' >
            <div className="flex flex-row gap-6 items-center">
              <h1 className='text-3xl'>Fashion</h1>
              <button className='bg-[#ffffff] w-[203px] h-[66px] text-2xl rounded-3xl cursor-pointer'>
                Show all
              </button>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <button className='bg-gray-200 w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowLeft className='w-6 h-6  ' />
              </button>
              <button className='bg-[#ffffff] w-[66px] h-[66px] rounded-full flex justify-center items-center'>
                <SlArrowRight className='w-6 h-6  ' />
              </button>
            </div>
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
        {/* fashion card section */}
      </div>
      {/* cards  section  */}
    </div>
  )
}


