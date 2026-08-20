import React from 'react'
import Sidebar from '../../components/Sidebar'
import BeautyBody from '../../components/BeautyBody'

const Beauty = () => {
  return (
    <div className='mx-[10%] my-[8%] grid grid-cols-7 gap-5'>
      <div className='col-span-5'>
        <BeautyBody />
      </div>
      <div className='col-span-2'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Beauty