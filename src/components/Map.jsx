import React from 'react'
import mapImg from "../assets/img/map.png"

const Map = () => {
  return (
    <div className='w-full pt-[210px] h-[750px]'>
      <div className='absolute object-center '><img src={mapImg} alt="" /></div>
      <div className='w-full '>
        <div className='text-5xl font-bold text-center '>
           <h1>Creating the best <span className='text-blue-600 '>ice-cold!</span> experience </h1> <br/>
           <h1 className='pb-10 '>you would never forget.</h1>
           <p className='text-3xl font-thin text-gray-600 pb-[120px]'>Would you explore nature paradise in the world, find <br/> best destionation in the world with us.</p>

           <h1>View Regions available</h1>
        </div>
      </div>

    </div>
  )
}

export default Map