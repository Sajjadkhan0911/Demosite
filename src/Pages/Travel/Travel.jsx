import React from 'react'
import Post1 from '../../assets/Post-1.jpg'
import Box from '../../components/Box'
import Sidebar from '../../components/Sidebar'
import TravelBody from '../../components/TravelBody'

const Travel = () => {
  return (
    <div className='mx-[10%] my-[8%] grid grid-cols-7 gap-5'>
      <div className='col-span-5'>
        <TravelBody />
      </div>
      <div className='col-span-2'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Travel