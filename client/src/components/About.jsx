import React from 'react'
import { assets } from '../assets/assets'
import GenerateButton from './GenerateButton'
import { motion } from "motion/react"

const About = () => {
    return (
        <div>

            <div
                className='flex flex-col sm:flex-col md:flex-row items-center justify-center py-10 sm:py-20 mt-3 md:mt-5 lg:mt-10 gap-5 sm:gap-2 md:gap-5 '>
                <div className="md:w-1/2 sm:w-full w-full flex items-center justify-center relative overflow-hidden group">
                    <motion.img
                        initial={{ scale: 0.2, opacity: 0.2 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full rounded-xl"
                        src={assets.sample_img_1}
                        alt="Sample"
                    />
                    <div
                        className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-700 rounded-xl"
                    >
                        <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                            Create AI Images
                        </p>
                        <p className="text-center text-[#434343] pt-5 pb-10">
                            Bring your words to life with breathtaking, creative images.
                        </p>
                    </div>
                </div>

                <div className='md:w-1/2 sm:w-full w-full '>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-xl sm:text-2xl md:text-3xl'>Introducing the AI-Powered Text to Image Generator</motion.p>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-[#6f6f6f] py-4 sm:py-1 lg:py-7 '>
                        Experience the future of creativity with our AI-Powered Text to Image Generator. Turn your ideas, phrases, or descriptions into stunning, high-quality visuals in just seconds. Whether you're a designer, content creator, or someone with a vision, this cutting-edge tool makes transforming words into art effortless and fun.</motion.p>
                    <GenerateButton />
                </div>

            </div>
        </div>
    )
}

export default About
