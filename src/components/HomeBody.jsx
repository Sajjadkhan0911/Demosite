import React from 'react'
import Sidebar from './Sidebar'
import HomeContent from './HomeContent'

const HomeBody = () => {
    return (
        <div className='mx-[10%] my-14 grid grid-cols-7 gap-5'>
            <div className='col-span-5'>
                <HomeContent />
            </div>
            <div className='col-span-2'>
                <Sidebar />
            </div>
        </div>
    )
}

export default HomeBody