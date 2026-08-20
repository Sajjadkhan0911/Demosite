import React from 'react'
import PhotographyContent from './PhotographyContent'

const PhotographyBody = () => {
  return (
    <div>
         <div>
            <h2 className='text-3xl font-bold'>Category: <span className='text-[#FF4C60]'>Photography</span></h2>
            <hr className='border border-[#FF4C60] mt-4' />
        </div>
        <div>
            <PhotographyContent />
        </div>
    </div>
  )
}

export default PhotographyBody