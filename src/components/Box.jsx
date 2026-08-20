import React from 'react'

const box = ({image, heading, text}) => {
    return (
        <div>
            <div className='flex flex-row my-10  bg-white'>
                <div className='h-96 min-w-[40%]'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='ml-5 flex flex-col justify-center px-2'>
                    <div className='flex flex-row gap-2 my-2 text-white'>
                        <button className='bg-[#FF4F4f]  rounded px-3'>Lifestyle</button>
                        <button className='bg-[#FF4F4f]  rounded px-3'>Travel</button>
                    </div>
                    <div>
                        <h2 className='font-[800] text-3xl'>{heading}</h2>
                        <p className='my-2 text-gray-400'>by Hellen April 16, 2023 - No Comments</p>
                        <p className='text-gray-500'>{text}</p>
                    </div>
                    <div className='my-2'>
                        <button className='font-semibold hover:text-[#FF4F4f]'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default box