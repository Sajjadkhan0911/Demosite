import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import img1 from '../assets/Prefooter-img1.jpg'
import img2 from '../assets/Prefooter-img2.jpg'
import img3 from '../assets/Prefooter-img3.jpg'
import img4 from '../assets/Prefooter-img4.jpg'
import img5 from '../assets/Prefooter-img5.jpg'
import img6 from '../assets/Prefooter-img6.jpg'

const Prefooter = () => {
  return (
    <div className='flex flex-row w-full h-full relative mt-20'>
        <div className='overflow-hidden relative'>   
            <img  className='hover:scale-125 object-contain  ease-in-out duration-700' src={img1} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='overflow-hidden relative'>
            <img className='hover:scale-125 object-contain  ease-in-out duration-700' src={img2} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='overflow-hidden relative'>
            <img className='hover:scale-125 object-contain  ease-in-out duration-700' src={img3} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='overflow-hidden relative'>
            <img className='hover:scale-125 object-contain  ease-in-out duration-700' src={img4} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='overflow-hidden relative'>
            <img className='hover:scale-125 object-contain ease-in-out duration-700' src={img5} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='overflow-hidden relative'>
            <img className='hover:scale-125 object-contain ease-in-out duration-700' src={img6} alt="" />
            <div className='absolute inset-0 bg-black/30 pointer-events-none'></div>
        </div>
        <div className='absolute right-[43%] top-[43%]  text-white'>
            <button className='bg-[#FF4F4f] py-3 px-5 flex flex-row justify-center items-center rounded-md gap-2'>
                <FaInstagram  className='text-[20px]'/>
                FOLLOW ON INSTAGRAM
                </button>
        </div>
    </div>
    
  )
}

export default Prefooter