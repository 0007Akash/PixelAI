import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pb-10 flex items-center justify-between'>
            <div className='flex flex-col md:flex-row  md:items-center gap-1 mr-10'>
                <div className='flex items-center gap-1 mr-10'>
                    <img src={assets.logo_icon} alt="logo" className='w-8 sm:w-9 lg:w-10' />
                    <p className=' sm:text-xl md:text-2xl font-semibold font-mono'>GenPixelAI</p>
                </div>
                <p className='border-l-2 border-none md:border-[#6f6f6f] text-[#6f6f6f] md:pl-10'>All right reserved. Copyright @PixelAI</p>
            </div>
            <div className='w-1/2 sm:w-fit flex items-center gap-2'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
        </div>
    )
}

export default Footer
