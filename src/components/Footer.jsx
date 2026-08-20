import React from 'react'
import { FaFacebookF , FaInstagram , FaTwitter , FaLinkedinIn , FaSearch , FaBars   } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black '>
            <div className='px-[10%] pt-[10%] pb-[5%] text-white '>
                <div className='grid grid-cols-4 gap-5'>
                    <div>
                        <h2 >About</h2>
                        <hr className='border-[#333] mt-2' />
                        <p className='mt-8'>Appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively.</p>
                    </div>
                    <div>
                        <h2>Tags</h2>
                        <hr className='mt-2 border-[#333]' />
                        <div className='grid grid-cols-[max-content_max-content] justify-items-start gap-5 mt-8'>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Activities</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Beauty</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Fashion</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Health</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Lifestyle</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Photography</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Sport</button>
                            <button className='bg-[#383838] border border-gray-500 w-fit px-4 py-2'>Travel</button>
                        </div>
                    </div>
                    <div>
                        <h2>Recent Posts</h2>
                        <hr className='mt-2 border-[#333]' />
                        <div className='flex flex-col mt-8 gap-5'>
                            <div className='flex flex-row gap-5 items-center'>
                                <div className='h-20 w-28'>
                                    <img className='w-full h-full object-contain' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/2023/04/Post-8.jpg" alt="" />
                                </div>
                                <div className='text-sm'>
                                    <h4 className='font-semibold'>
                                        Setting Goals and Staying Motivated
                                    </h4>
                                    <p>
                                        April 16, 2023
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center  flex-row gap-5'>
                                <div className='h-20 w-28'>
                                    <img className='w-full h-full object-contain' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/2023/04/Post-3.jpg" alt="" />
                                </div>
                                <div className='text-sm'>
                                    <h4 className='font-semibold'>
                                        My Experience with Anxiety and Depression
                                    </h4>
                                    <p>
                                        April 16, 2023
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-5 items-center'>
                                <div className='h-20 w-28'>
                                    <img className='w-full h-full object-contain' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/elementor/thumbs/Post-14-q53hgz1evdsog96cpv39l4xnmnhcptccrkepucey6g.jpg" alt="" />
                                </div>
                                <div className='text-sm'>
                                    <h4 className='font-semibold text-sm'>
                                        My Experience with Anxiety and Depression
                                    </h4>
                                    <p>
                                        April 16, 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 >Follow me</h2>
                        <hr className='mt-2 border-[#333]' />
                        <div className='flex flex-row mt-8 gap-2'>
                            <FaFacebookF className='bg-[#1ED3FF] text-white text-4xl p-2 rounded-sm' />
                            <FaTwitter className='bg-[#FF9602] text-white text-4xl p-2 rounded-sm' />
                            <FaInstagram className='bg-[#FF4F4F] text-white text-4xl p-2 rounded-sm' />
                            <FaLinkedinIn className='bg-[#C265E9] text-white text-4xl p-2 rounded-sm' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <hr className='border-[#333]' />
                <p className='text-center py-5'> © 2026 Created with <span className='text-red-500 text-lg'> Royal Elementor Addons </span> </p>
            </div>
        </div>
    )
}

export default Footer