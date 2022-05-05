import React from 'react'
import bgImg from "../../assets/img/0c09800d4737d1ecfda624aa769586c5.jpeg"
import {GiCommercialAirplane} from "react-icons/gi"
import {IoIosAirplane} from "react-icons/io"
import {LocationMarkerIcon, ChevronDownIcon,UserIcon,CalendarIcon} from "@heroicons/react/outline"
import starSvg from "../../assets/img/silver-star.svg"
import nikeSvg from "../../assets/img/nike-logo.svg";
import intraxSvg from "../../assets/img/intrax.svg";
import appleSvg from "../../assets/img/apple-pay.svg";
import masterSvg from "../../assets/img/master-card.svg"


const Header = () => {
  return (
    <>
      <div className='absolute w-full bg-gray-900/40'>
  <img className=' object-center w-full h-[770px] mix-blend-overlay' src={bgImg} alt="" />
  </div>
      {/* Nav */}
      <div className=' container h-[80px] bg-transparent mx-auto px-5'>
  <div className='relative flex justify-between ' >
    <div className='flex items-center py-4 '>
      {/* brand */}
      <div className='flex justify-between '>
          <GiCommercialAirplane className='p-1 text-4xl text-blue-700 border border-dashed rounded-full '/>  <h1 className='pl-3 text-2xl font-bold text-white '>Arctic Travels</h1>
      </div>
      {/* Nav links */}
        <ul className='flex pl-5 font-thin text-white '>
          <li>About Us</li>
          <li>Support</li>
          <li>Language</li>
        </ul>
   
    </div>
    <button className='px-12 my-5 font-bold text-blue-500 bg-gray-200 rounded-lg '>
      Sign In
    </button>
  </div>
      </div>
      <div className='container relative px-5 py-24 mx-auto text-white'>
          <h1 className='pb-6 text-6xl font-bold '>Plan The Perfect Winter Trip</h1>
          <p className=' text-3xl text-justify max-w-[650px] pb-[80px]'>Easily plan your ideal ski trip from home with the help of professionals</p>
          <button className='p-3 px-10 py-5 font-bold bg-blue-600 rounded-lg '>
            Book Here
          </button>
      </div>
      {/* floating card */}
  
      <div className=' relative max-w-[1200px] bottom-[-150px] left-1/2 transform -translate-x-1/2 mx-1 drop-shadow-lg   bg-[#F8F9FC] py-8 px-5 rounded-xl'>
      <div className='grid grid-cols-5 gap-3 '>
        {/* location */}
        <div className='flex flex-col'>
        <div className='flex pb-2' >
        <LocationMarkerIcon className='w-8 pr-2 text-blue-600'/>
        <h1 className='font-light text-gray-400 uppercase '>Location</h1>
        </div>
        <div className='flex '>
          <h1 className='pr-3 text-xl '>Iceland</h1>
          <ChevronDownIcon className='w-5'/>
        </div>
        </div> 
        {/* persons */}
        <div className='flex flex-col'>
        <div className='flex pb-2' >
        <UserIcon className='w-8 pr-2 text-green-600'/>
        <h1 className='font-light text-gray-400 uppercase '>persons</h1>
        </div>
        <div className='flex '>
          <h1 className='pr-3 text-xl '>4 Persons</h1>
          <ChevronDownIcon className='w-5 '/>
        </div>
        </div> 
        {/* checkin */}
        <div className='flex flex-col'>
        <div className='flex pb-2' >
        <CalendarIcon className='w-8 pr-2 text-red-600'/>
        <h1 className='font-light text-gray-400 uppercase '>check in</h1>
        </div>
        <div className='flex '>
          <h1 className='pr-3 text-xl '>12 January 2022</h1>
          <ChevronDownIcon className='w-5 '/>
        </div>
        </div> 
        {/* checkout */}
        <div className='flex flex-col'>
        <div className='flex pb-2' >
        <CalendarIcon className='w-8 pr-2 text-red-600'/>
        <h1 className='font-light text-gray-400 uppercase '>check out</h1>
        </div>
        <div className='flex '>
          <h1 className='pr-3 text-xl '>18 January 2022</h1>
          <ChevronDownIcon className='w-5 '/>
        </div>
        </div> 
        <button className='text-white bg-blue-600 rounded-lg '>
          <div className='flex justify-center'>
          <h1 className='pr-2 font-bold'>Book Trip</h1>
         <IoIosAirplane className='text-2xl'/>
          </div>
         
        </button>
 
      </div>
      </div>
      {/* floating end */}
      {/* Sponsors */}
      <div className='relative w-full pt-[240px] container mx-auto px-[150px]   '>
        <div className='flex justify-between'>
        <img src={nikeSvg} alt="" />
        <img src={appleSvg} alt="" />
        <img src={starSvg} alt="" />
        <img src={intraxSvg} alt="" />
        <img src={masterSvg} alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Header