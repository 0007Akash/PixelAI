import React from 'react'
import { assets } from '../assets/assets'

const GenerateButton = () => {
    return (
        <div className='flex items-center gap-2 px-6 py-3 bg-black text-white w-fit rounded-full font-[200] mt-5 sm:mt-10 cursor-pointer'>
            <p>Generate AI Images</p>
            <img className='w-6' src={assets.star_group} alt="" />
        </div>
    )
}

export default GenerateButton
