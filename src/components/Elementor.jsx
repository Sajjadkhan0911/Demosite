import React from 'react'
import post1 from '../assets/Post-1.jpg'
import post2 from '../assets/Post-2.jpg'
import post3 from '../assets/Post-3.jpg'
import post4 from '../assets/Post-4.jpg'

const Elementor = () => {
  return (
    <div className='mx-[10%] my-[3%]'>
        <div className='flex flex-row gap-6'>
            <div className='p-8 flex-1 bg-white'>
                <div className=''>
                    <h2>Trending Posts</h2>
                    <hr className= 'border-[1px] border-red-500 my-2' />
                </div>
                <div className='flex flex-row gap-5 mt-8'>
                    <div className='relative min-w-[48%] h-56' >
                        <img className='w-full h-full object-cover' src={post1} alt="" />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <h2 className='font-semibold text-2xl ' >Setting Goals and staying motivated</h2>
                            <h5 className='italic'>By Hellen - August 12, 2026</h5>
                        </div>
                    </div>
                    <div className='relative min-w-[48%] h-56'>
                        <img className='w-full h-full object-cover' src={post2} alt="" />
                         <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <h5 className='font-bold text-2xl ' >Reflecting on the blessings in my life</h5>
                            <h5 className='italic'>By Hellen - August 12, 2026</h5>
                        </div>
                    </div>
                </div>

            </div>
            <div className='p-8 flex-1 bg-white'>
                <div className=''>
                    <h2>Hot News</h2>
                    <hr className= 'border-[1px] border-red-500 my-2' />
                </div>
                <div className='flex flex-row gap-5 mt-8'>
                    <div className='relative min-w-[48%] h-56'>
                        <img className='w-full h-full object-cover' src={post3} alt="" />
                        <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <h5 className='font-bold text-2xl ' >Reflecting on the blessings in my life</h5>
                            <h5 className='italic'>By Hellen - August 12, 2026</h5>
                        </div>
                    </div>
                    <div className='relative min-w-[48%] h-56'>
                        <img className='w-full h-full object-cover' src={post4} alt="" />
                        <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <h5 className='font-bold text-2xl ' >Reflecting on the blessings in my life</h5>
                            <h5 className='italic'>By Hellen - August 12, 2026</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Elementor