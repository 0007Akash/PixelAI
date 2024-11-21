import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"
const WorkingSteps = () => {
    return (
        <div className='py-10 sm:py-20 flex flex-col items-center justify-center mt-10'>
            <h1 className='text-3xl sm:ext-4xl md:text-5xl lg:text-5xl'>How it works</h1>
            <p className='text-[#6f6f6f] pt-5 pb-10'>
                Transform your ideas and words into stunning, visually captivating images.</p>
            <div className='flex flex-col items-center justify-center gap-5'>
                {stepsData.map((item, index) => (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='hover:scale-105 transition-all duration-500 flex items-center justify-between border-2 border-gray-300 px-2 py-2 sm:px-5 md:p-8  gap-2  sm:gap-5 md:gap-10 sm:w-[100%] lg:w-full rounded-xl'>
                        <img className='w-[35%] sm:w-[25%] lg:w-[10%]' src={item.icon} alt="item_icon" />
                        <div>
                            <p className='text-lg md:text-2xl font-medium'>{item.title}</p>
                            <p className='text-[#6f6f6f] mt-0 md:mt-2'>"{item.description}"</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WorkingSteps
