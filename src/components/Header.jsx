import React from 'react'
import { FaFacebookF , FaInstagram , FaTwitter , FaLinkedinIn , FaSearch , FaBars   } from "react-icons/fa";
import RotatingText from './RotatingText';



const Header = () => {
  return (
    <div>
        <div className='mx-[10%] mt-[3%]'>
            <div className='flex flex-row items-center'>
                <div className='my-5 flex-1'>
                    <div className='flex flex-row gap-2'>
                        <FaFacebookF className='bg-[#1ED3FF] text-white text-4xl p-2 rounded-sm' />
                        <FaTwitter className='bg-[#FF9602] text-white text-4xl p-2 rounded-sm' />
                        <FaInstagram className='bg-[#FF4F4F] text-white text-4xl p-2 rounded-sm' />
                        <FaLinkedinIn className='bg-[#C265E9] text-white text-4xl p-2 rounded-sm' />
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='h-32 relative flex justify-center'>
                        <img className='h-full p-5 ' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/2023/04/Logo-Retina-1.png" alt="" />
                        <div className='absolute bottom-10 left-[185px] text-nowrap'>
                            <RotatingText />
                        </div>
                    </div>
                </div>
                <div className=' flex-1 flex flex-row gap-6'>
                    <div className='flex flex-1 justify-end flex-row items-center'>
                        <input className='py-2 px-4 border border-gray-200 outline-none rounded-sm' type="text" placeholder='ajax live search' />
                        <div className='bg-[#FF4F4F] py-3 px-4 rounded-sm'>
                            <FaSearch className='text-white font-bold' />
                        </div>
                    </div>
                    <div className='bg-[#1ED3FF] max-h-max p-2 rounded-sm'>
                        <FaBars className='text-white' />
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Header