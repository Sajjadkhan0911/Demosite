import React from 'react'
import Sidebar from '../../components/Sidebar'
import PhotographyBody from '../../components/PhotographyBody'

const Photography = () => {
    return (
        <div className='mx-[10%] my-[8%] grid grid-cols-7 gap-5'>
            <div className='col-span-5'>
                <PhotographyBody />
            </div>
            <div className='col-span-2'>
                <Sidebar />
            </div>
        </div>
    )
}

export default Photography