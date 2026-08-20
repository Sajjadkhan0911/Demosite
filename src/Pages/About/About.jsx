import React from 'react'
import Sidebar from '../../components/Sidebar'
import AboutContent from '../../components/AboutContent'

const About = () => {
    return (
        <div className='mx-[10%] mt-[8%] grid grid-cols-7 gap-5'>
            <div className='col-span-5'>
                <AboutContent />
            </div>
            <div className='col-span-2'>
                <Sidebar />
            </div>
        </div>
    )
}

export default About