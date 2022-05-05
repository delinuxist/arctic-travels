import React from 'react'
import redImg from "../assets/img/5028b67c4f601a43bad483a9144766b2.jpeg"
import blackImg from "../assets/img/snowboarder-black.jpeg"
import blueImg from "../assets/img/cd308b43da49bf74dfeb0d3a1b4ff79a.jpeg"

const Regions = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-3 '>
        <img className=' h-[800px] object-cover'  src={redImg} alt="" />
        <img className=' h-[800px] object-cover' src={blackImg} alt="" />
        <img className=' h-[800px] object-cover' src={blueImg} alt="" />

      </div>
    </div>
  )
}

export default Regions