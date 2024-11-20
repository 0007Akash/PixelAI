import React, { useState } from 'react'
import GenerateButton from '../components/GenerateButton'
import { assets, images } from '../assets/assets'
import WorkingSteps from '../components/WorkingSteps'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'


const Home = () => {
    const [image, setImage] = useState(images[0])
    return (
        <>
            <div className='flex flex-col sm:flex-col md:flex-row items-center justify-center py-10 sm:py-20 mt-3 md:mt-5 lg:mt-10 gap-5 sm:gap-2 md:gap-10 '>
                <div className='md:w-1/2 sm:w-full w-full '>
                    <p className='bg-white px-5 py-2 w-fit rounded-full border-[2px] text-[#6f6f6f]'>Free Online AI Image Generator</p>
                    <p className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl mt-3 sm:mt-5'>Turn text to <span className='text-[#007cff]'>image</span>, in seconds. </p>
                    <p className='text-[#6f6f6f] mt-3 sm:mt-5'>
                        Bring your ideas to life and turn them into stunning visuals. Use the best AI image generators to transform your words into beautiful images. Create unique, eye-catching visuals perfect for your project.</p>
                    <GenerateButton />
                </div>
                <div className='md:w-1/2 sm:w-full w-full flex items-center justify-center relative '>
                    <img className='sm:w-[100%] md:w-[100%] lg:w-[100%] h-96 rounded-xl' src={image} alt="" />
                    <div className='absolute bottom-[-15%] bg-white w-[90%] sm:w-[70%]  md:w-[80%] lg:w-[70%] h-[25%] rounded-xl shadow-md flex items-center justify-around'>
                        {images.map((image, index) => (
                            <div className='w-[80px] h-[70px] transition-all duration-500 hover:scale-110'>
                                <img onClick={() => setImage(image)} className='w-full h-full rounded-lg' src={image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <WorkingSteps />
            <About />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home
