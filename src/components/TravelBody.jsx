import React from 'react'
import TravelContent from './TravelContent'

const TravelBody = () => {
  return (
    <div>
        <div>
            <h2 className='text-3xl font-bold'>Category: <span className='text-[#FF4C60]'>Travel</span></h2>
            <hr className='border border-[#FF4C60] mt-4' />
        </div>
        <div>
            <TravelContent />
        </div>
    </div>
  )
}

export default TravelBody