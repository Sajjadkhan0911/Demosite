import React from 'react'
import { BiSolidChevronDown } from "react-icons/bi";
import { FaPlane, FaMotorcycle, FaGem, FaCamera } from 'react-icons/fa'; 
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='mt-5 mx-[10%]'>
            <div className='flex justify-center'>
            <div className='bg-[#FF4F4F] px-10 py-5 rounded-ss-3xl rounded-ee-3xl'>
                <ul className='flex flex-row  gap-5 text-white font-semibold '>
                    <li><NavLink to={'/'} className={ ({ isActive }) => `${isActive ? 'border-white' : 'border-transparent'} flex items-center gap-1 border-b-2 border-transparent hover:border-white `}>HOME</NavLink></li>
                    
                    <li className='relative group'><NavLink to={'/blog'} className={ ({ isActive }) => `${isActive ? 'border-white' : 'border-transparent'} flex items-center gap-1 border-transparent border-b-2 hover:border-white`} >BLOG LAYOUT<span><BiSolidChevronDown /></span> </NavLink>
                        <div className='absolute top-12 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500 ease-in-out z-10'>
                            <div className=' text-gray-400 flex flex-col gap-1 w-52'>
                                <NavLink className='p-4 bg-white hover:bg-gray-500'>
                                    VERSION 1
                                </NavLink>
                                 <NavLink className='p-4 bg-white hover:bg-gray-500'>
                                    VERSION 2
                                </NavLink>
                                 <NavLink className='p-4 bg-white hover:bg-gray-500'>
                                    VERSION 3
                                </NavLink>

                            </div>
                        </div>
                    </li>
                    
                    <li className='relative group'><NavLink className={ ({ isActive }) => `${isActive ? 'border-white' : 'border-transparent'} flex  items-center gap-1 border-transparent border-b-2 hover:border-white`} >CATEGORIES<span><BiSolidChevronDown /></span> </NavLink>
                        <div className='absolute top-12 -right-28 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10'>
                            <div className='bg-white text-black  p-7 w-[300px] grid grid-cols-2 gap-y-4'>
                                <NavLink to={'/category/travel'} className='flex items-center gap-2 hover:text-[#FF4F4F]' href="#"><span><FaPlane className='text-[#FF4F4F]' /></span>Travel</NavLink>
                                <NavLink to={'/category/lifestyle'} className='flex items-center gap-2 hover:text-[#FF4F4F]' href="#"> <span><FaMotorcycle className='text-[#FF4F4F]' /></span>Life Style</NavLink>
                                <NavLink to={'/category/beauty'} className='flex items-center gap-2 hover:text-[#FF4F4F]' href="#"> <span><FaGem className='text-[#FF4F4F]' /></span>Beauty</NavLink>
                                <NavLink to={'/category/photography'} className='flex items-center gap-2 hover:text-[#FF4F4F]' href="#"> <span><FaCamera  className='text-[#FF4F4F]' /></span>Photography</NavLink>
                            </div>
                        </div>
                   
                    
                    </li>
                    
                    <li><NavLink to={'/about'} className={ ({ isActive }) => `${isActive ? 'border-white' : 'border-transparent'} flex items-center gap-1 border-transparent border-b-2 hover:border-white`} >ABOUT</NavLink></li>
                    
                    <li><NavLink to={'/contact'} className={ ({ isActive }) => `${isActive ? 'border-white' : 'border-transparent'} flex items-center gap-1 border-transparent border-b-2 hover:border-white`} >CONTACT</NavLink></li>
                </ul>
            </div>
        </div>

        



        </div>
    )
}

export default Navbar