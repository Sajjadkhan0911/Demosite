import React from 'react'
import LifeStyleBody from '../../components/LifeStyleBody'
import Sidebar from '../../components/Sidebar'

const LifeStyle = () => {
  return (
    <div className='mx-[10%] my-[8%] grid grid-cols-7 gap-5'>
      <div className='col-span-5'>
        <LifeStyleBody />
      </div>
      <div className='col-span-2'>
        <Sidebar />
      </div>
    </div>
  )
}

export default LifeStyle