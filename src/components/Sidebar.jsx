import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSearch, FaBars } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import author from '../assets/Author.jpg'
import img1 from '../assets/Prefooter-img1.jpg'
import img2 from '../assets/Prefooter-img2.jpg'
import img3 from '../assets/Prefooter-img3.jpg'
import img4 from '../assets/Prefooter-img4.jpg'
import img5 from '../assets/Prefooter-img5.jpg'
import img6 from '../assets/Prefooter-img6.jpg'
import post1 from '../assets/Post-1.jpg'
import post2 from '../assets/Post-2.jpg'
import post3 from '../assets/Post-3.jpg'



const Sidebar = () => {
    return (
        <div >
            {/*---- Side Bar ---- */}

            <div className='col-span-2'>
                <div className='flex flex-col gap-12'>

                    <div className='bg-white p-8'>
                        <div className='py-4'>
                            <h2 className='font-bold text-[20px]'>Lillian Morgan</h2>
                            <hr className='border-red-500 border-[1.5px] mt-4 text-2xl' />
                        </div>
                        <div className='py-4 px-14 text-center'>
                            <img className='rounded-full' src={author} alt="" />
                            <h2 className='mt-6'>Lillian Morgan</h2>
                            <p>Blogger & Writer</p>
                        </div>
                        <div className='text-center'>
                            <p>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy.</p>
                        </div>
                        <div className='flex flex-row mt-8 gap-2 justify-center'>
                            <FaFacebookF className='bg-[#5395FF] text-white text-4xl p-2 rounded-sm' />
                            <FaTwitter className='bg-[#5BCAFF] text-white text-4xl p-2 rounded-sm' />
                            <FaLinkedinIn className='bg-[#5464D7] text-white text-4xl p-2 rounded-sm' />
                        </div>
                    </div>

                    {/*---- First Div End ---- */}


                    <div className='bg-white p-8'>
                        <div className='py-4'>
                            <h2 className='font-bold text-[20px]'>Follow On Instagram</h2>
                            <hr className='border-red-500 border-[1.5px] mt-4 text-2xl' />
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                        </div>
                    </div>

                    {/*---- Second Div End ---- */}


                    <div className='bg-white p-8'>
                        <div className='py-4'>
                            <h3 className='font-bold text-[20px]'>Recent Posts</h3>
                            <hr className='border-red-500 border-[1.5px] mt-4 text-2xl' />
                        </div>
                        <div className='flex flex-col mt-8 gap-5'>

                            <div className='flex flex-row gap-5 items-center'>
                                <div className='h-24 w-28'>
                                    <img className='w-full h-full object-cover' src={post1} alt="" />
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

                            <div className='flex items-center flex-row gap-5'>
                                <div className='h-24 w-32'>
                                    <img className='w-full h-full object-cover' src={post2} alt="" />
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
                                <div className='h-24 w-32'>
                                    <img className='w-full h-full object-cover' src={post3} alt="" />
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

                    {/*---- Third Div End ---- */}

                    <div className='backgroung-img'>
                        <div className='my-44 mx-10 text-center'>
                            <h1 className='text-white font-bold text-3xl'>
                                Dream Life in Paris
                            </h1>

                            <p className='text-white'>Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant.</p>

                            <button className='text-white bg-red-500 px-6 py-2 rounded-sm'>Explore more</button>
                        </div>
                    </div>

                    {/*---- Fourth Div End ---- */}

                    <div className='bg-white p-8'>
                        <div>
                            <CiMail className='text-red-500 h-10 w-10' />
                        </div>
                        <div className='my-4 '>
                            <h2>Join the family!</h2>
                            <p>Sign up for a Newsletter.</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <input className='border outline-none p-2' type="text" placeholder='sample@mail.com' />
                            <button className='bg-red-500 p-2 text-white'>Subscribe</button>

                        </div>
                    </div>

                    {/*---- Fifth Div End ---- */}

                    <div className='bg-white p-8'>
                        <div className='py-4'>
                            <h2 className='font-bold text-[20px]'>Categories</h2>
                            <hr className='border-red-500 border-[1.5px] mt-4 text-2xl' />
                        </div>
                        <div className='mt-10'>
                            <div className='flex flex-row justify-between hover:cursor-pointer hover:text-red-500 my-1'>
                                <p>Beauty</p>
                                <p>(9)</p>
                            </div>
                            <hr />
                            <div className='flex flex-row justify-between my-1'>
                                <p>Lifestyle</p>
                                <p>(8)</p>
                            </div>
                            <hr />
                            <div className='flex flex-row justify-between my-1'>
                                <p>Photography</p>
                                <p>(9)</p>
                            </div>
                            <hr />
                            <div className='flex flex-row justify-between my-1'>
                                <p>Travel</p>
                                <p>(8)</p>
                            </div>
                            <hr />
                        </div>
                    </div>

                    {/*---- Fifth Div End ---- */}

                    <div className=' bg-white p-8'>
                        <div className='py-4'>
                            <h2 className='font-bold text-[20px]'>Tags</h2>
                            <hr className='border-red-500 border-[1.5px] mt-4 text-2xl' />
                        </div>
                        <div className=' flex flex-wrap gap-2'>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3'>Activities</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Beauty</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Fashion</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Health</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Lifestyle</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Photography</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Sport</button>
                            <button className='border border-gray-300 text-gray-500 py-1 px-3 '>Travel</button>
                        </div>
                    </div>


                </div>
            </div>






        </div>
    )
}

export default Sidebar