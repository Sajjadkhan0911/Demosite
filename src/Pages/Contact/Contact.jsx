import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContactContent from '../../components/ContactContent'

const Contact = () => {
    return (
        <div className='mx-[10%] mt-[8%] grid grid-cols-7 gap-5'>
            <div className='col-span-5'>
                <ContactContent />
            </div>
            <div className='col-span-2'>
                <Sidebar />
            </div>
        </div>
    )
}

export default Contact