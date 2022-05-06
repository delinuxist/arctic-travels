import React from 'react'
import passImg from "../assets/img/female-snowboard.jpeg"

const Passes = () => {
  return (
    <>
      <div className='absolute w-full bg-black/80'><img className=' object-cover w-full mix-blend-overlay h-[730px]' src={passImg} alt=""/></div>
      <div className='container relative py-[220px] mx-auto text-white'>
        <h1 className='font-bold text-7xl'>View Passes We've Made</h1>
        <h1 className='pb-20 font-bold text-7xl'>Available For You</h1>
        <button className='p-3 px-10 py-5 font-bold bg-blue-600 rounded-lg '>
            View Passes
          </button>
      </div>
    </>
  )
}

export default Passes