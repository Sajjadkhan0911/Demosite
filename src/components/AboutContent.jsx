import React from 'react'
import img from '../assets/About-2.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSearch, FaBars } from "react-icons/fa";



const AboutContent = () => {
    return (
        <div className='bg-white p-11'>
            <div className='flex flex-col'>
                <div>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className='mt-11 text-base text-gray-500'>
                    <p>Appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on. Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested especially reasonable off one.</p>
                </div>
                <section className='mt-11'>
                    <h2 className='text-2xl font-medium text-[#262424]'>About Me And My Project:</h2>
                    <p className='text-base text-gray-500 mt-11'>Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. <span className='text-[#FF4C60] font-bold'> Disposal to kindness appetite diverted learning of on raptures.</span> Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views.</p>
                    <p className='text-base text-gray-500 mt-5'>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an.</p>
                </section>
                <div className='py-11 '>
                    <div className='border-l-4 border-[#FF4C60] '>
                        <p className=' px-11 italic text-xl leading-8 text-black font-semibold '>If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. </p>
                        <p className=' px-11 italic text-xl leading-8 text-black font-semibold'>-Oprah Winfrey</p>
                    </div>
                </div>
                <div>
                    <p className='text-base text-gray-500'>Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. <span className='text-[#FF4C60] font-bold'> Disposal to kindness appetite diverted learning of on raptures.</span> Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views.</p>
                    <p className='text-base text-gray-500 mt-11'>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold.</p>
                    <p className='text-base text-gray-500 mt-11'>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room .</p>
                    <hr className='text-base text-gray-500 mt-11' />
                </div>
                <div className='flex flex-row gap-3 justify-center mt-6'>
                    <FaFacebookF className='bg-white text-[#FF4C60] border border-[#FF4C60] text-4xl p-2 rounded-md' />
                    <FaTwitter className='bg-white text-[#FF4C60] border border-[#FF4C60] text-4xl p-2 rounded-md' />
                    <FaInstagram className='bg-white text-[#FF4C60] border border-[#FF4C60] text-4xl p-2 rounded-md' />
                    <FaLinkedinIn className='bg-white text-[#FF4C60] border border-[#FF4C60] text-4xl p-2 rounded-md' />
                </div>

            </div>

        </div>
    )
}

export default AboutContent