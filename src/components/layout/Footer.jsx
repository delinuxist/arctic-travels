import React from 'react'
import {GiCommercialAirplane} from "react-icons/gi"
import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='w-full  pt-[100px] container mx-auto'> 
    <div className='px-5 '>
      <div className='grid gap-10 pb-8 md:grid-cols-3 lg:grid-cols-5'>
        {/* brand */}
        <div className='col-span-2 '>
        <GiCommercialAirplane className='p-1 text-4xl text-blue-700 border border-gray-500 border-dashed rounded-full '/> 
        <h1 className='py-5 text-2xl font-bold'>Arctic Travels</h1>
        <p className='pb-8 text-xs font-thin text-gray-900 '>Book your trip in minutes, get<br/>control for much longer.</p>
        <div className='flex space-x-8'>
        <FaFacebookF className='p-2 text-4xl text-blue-700 border border-gray-500 rounded-full '/>
        <FaInstagram className='p-2 text-4xl text-blue-700 border border-gray-500 rounded-full '/>
        <FaTwitter className='p-2 text-4xl text-blue-700 border border-gray-500 rounded-full '/>
        </div>
        </div>
        {/* company */}
        <div>
          <h1 className='pb-3 font-light text-blue-700 uppercase'>Company</h1>
          <ul className='font-light '>
            <li className='pl-0 '>About</li>
            <li className='pl-0 '>Careers</li>
            <li className='pl-0 '>Mobile</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h1 className='pb-3 font-light text-blue-700 uppercase'>Contact</h1>
          <ul className='font-light '>
            <li className='pl-0 '>FAQ</li>
            <li className='pl-0 '>Press</li>
            <li className='pl-0 '>Affiliates</li>
          </ul>
        </div>
        {/* More */}
        <div>
          <h1 className='pb-3 font-light text-blue-700 uppercase'>More</h1>
          <ul className='font-light '>
            <li className='pl-0 '>Airlines</li>
            <li className='pl-0 '>Airfees</li>
            <li className='pl-0 '>Lowfare Tips</li>
          </ul>
        </div>
      </div>
      {/* year */}
      <div className='grid gap-3 py-8 text-gray-500 md:grid-col-2 lg:grid-cols-5'>
          <div className='col-span-2 '>
            <p className='font-semibold '>&copy; 2022 Travels - All right reserved.</p>
          </div>
          <p className='text-xs '>Privacy Policy</p>
          <p className='text-xs '>Terms of Use</p>
      </div>
    </div>  
    </div>
  )
}

export default Footer