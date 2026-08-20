import React from 'react'
import LifeStyleContent from './LifeStyleContent'

const LifeStyleBody = () => {
  return (
    <div>
        <div>
            <h2 className='text-3xl font-bold'>Category: <span className='text-[#FF4C60]'>Lifestyle</span></h2>
            <hr className='border border-[#FF4C60] mt-4' />
        </div>
        <div>
            <LifeStyleContent />
        </div>
    </div>
  )
}

export default LifeStyleBody