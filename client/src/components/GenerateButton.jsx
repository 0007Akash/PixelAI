import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const GenerateButton = () => {
    return (
        <Link to={'/generate'}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 px-6 py-3 bg-black text-white w-fit rounded-full font-[200] mt-5 sm:mt-10 cursor-pointer'>
                <p>Generate AI Images</p>
                <img className='w-6' src={assets.star_group} alt="" />
            </motion.div>
        </Link>

    )
}

export default GenerateButton
