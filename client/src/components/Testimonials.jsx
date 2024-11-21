import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import GenerateButton from './GenerateButton'
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <>
            <div className=' p-0 md:p-0 lg:p-0 my-28'>
                <p className='text-3xl sm:ext-4xl md:text-5xl lg:text-5xl text-center' >Customer Testimonials</p>
                <p className='text-center text-[#6f6f6f] pt-5 pb-10'>Voices That Inspire Us</p>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
                    {testimonialsData.map((item, index) => (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}

                            key={index} className='md:w-[50%] lg:w-[30%] w-full  bg-white/40 flex flex-col items-center justify-center text-center border-2 px-7 md:px-2 py-5 rounded-lg'>
                            <img src={item.image} alt="image" />
                            <p className='mt-4 font-[500] text-xl'>{item.name}</p>
                            <p className='text-[#746d7f] text-sm'>{item.role}</p>
                            <div className='flex mt-4'>
                                {Array(item.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))}
                            </div>
                            <p className='my-5 text-center'>{item.text}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='pt-10 pb-40  flex flex-col items-center justify-center my-20'>
                <p className='text-3xl sm:ext-4xl md:text-5xl lg:text-5xl text-center mb-7'>See the magic. Try now</p>
                <GenerateButton />
            </motion.div>
        </>
    )
}

export default Testimonials
