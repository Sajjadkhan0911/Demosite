import React from 'react'
import Box from './Box'
import Post1 from '../assets/Post-2.jpg'
import Post2 from '../assets/Post-4.jpg'
import Post3 from '../assets/Post-6.jpg'
import Post4 from '../assets/Post-9.jpg'
import Post5 from '../assets/Post-10.jpg'
import Post6 from '../assets/Post-11.jpg'
import Post7 from '../assets/Post-12.jpg'
import Post8 from '../assets/Post-13.jpg'

const LifeStyleContent = () => {

    const heading1 = 'Reflecting on the Blessings in My Life'
    const heading2 = 'Change: Coping with Life’s Transitions'
    const heading3 = 'Learning to Embrace My Imperfections'
    const heading4 = 'Moments that Matter in Life and Love'
    const heading5 = 'Perspective: Seeing Life Through New Eyes'
    const heading6 = 'Chasing the Sun: Tales of Adventure'
    const heading7 = 'Living: Lessons Learned Along the Way'
    const heading8 = 'Finding My Way: Tales of Self-Discovery'

    const text = 'Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off...'

  return (
    <div>
        <Box image={Post1} heading={heading1} text = {text}/>
        <Box image={Post2} heading={heading2} text = {text}/>
        <Box image={Post3} heading={heading3} text = {text}/>
        <Box image={Post4} heading={heading4} text = {text}/>
        <Box image={Post5} heading={heading5} text = {text}/>
        <Box image={Post6} heading={heading6} text = {text}/>
        <Box image={Post7} heading={heading7} text = {text}/>
        <Box image={Post8} heading={heading8} text = {text}/>
    </div>
  )
}

export default LifeStyleContent