import React from 'react'
import BeautyContent from './BeautyContent'

const BeautyBody = () => {
  return (
    <div>
        <div>
            <h2 className='text-3xl font-bold'>Category: <span className='text-[#FF4C60]'>Beauty</span></h2>
            <hr className='border border-[#FF4C60] mt-4' />
        </div>
        <div>
            <BeautyContent />
        </div>
    </div>
  )
}

export default BeautyBody