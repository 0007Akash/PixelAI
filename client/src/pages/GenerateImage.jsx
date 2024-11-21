import React, { useState } from 'react'
import { images } from '../assets/assets'
import { motion } from 'motion/react'

const GenerateImage = () => {
    const [image, setImage] = useState(images[1]);
    const [isImageLoaded, setIsImageLoaded] = useState(true);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmitHandler} className='min-h-[90vh] flex flex-col items-center justify-center'>
            <div>
                <div className='relative group'>
                    <img
                        src={image} alt="" className='sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-sm  h-[40vh] lg:h-[50vh]' />
                    <span className={`z-10 absolute h-1 bottom-0 left-0  bg-blue-900 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}></span>
                </div>
                {loading &&
                    <p>Loading...</p>
                }
            </div>
            {!isImageLoaded &&
                <div className='text-white flex items-center justify-between text-xs mt-10 md:max-w-[80%] lg:max-w-[50%] w-full sm:min-w-[50%]'>
                    <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate.' className='rounded-tl-full rounded-bl-full  px-5 sm:px-10 py-4 outline-none bg-gray-700 flex-1 ' />
                    <button type='submit' className='bg-black px-5 sm:px-10 py-4 rounded-tr-full rounded-br-full'>Generate</button>
                </div>
            }
            {isImageLoaded &&
                <div className='flex mt-10 items-center justify-center gap-5 text-white text-sm flex-wrap'>
                    <p onClick={() => setIsImageLoaded(false)} className='bg-transparent border border-zinc-900 text-black px-8 py-2.5 rounded-full cursor-pointer'>Generate Another</p>
                    <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer' >
                        Download
                    </a>
                </div>
            }
        </form>
    )
}

export default GenerateImage
