import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState(true);
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between pt-3'>
            <Link to={'/'}>
                <div className='flex items-center gap-1'>
                    <img src={assets.logo_icon} alt="logo" className='w-8 sm:w-9 lg:w-10' />
                    <p className=' sm:text-xl md:text-2xl font-semibold font-mono'>PixelAI</p>
                </div>
            </Link>
            <div>
                {user === null ?
                    <div className='flex items-center gap-2 sm:gap-4 md:gap-6 text-[#49545b]'>
                        <p className='cursor-pointer' onClick={() => navigate('/buy')}>Pricing</p>
                        <button onClick={() => setUser(true)} className='px-6 sm:px-8  md:px-10  py-3 sm:py-2 bg-black text-white rounded-full'>Login</button>
                    </div>
                    :
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2 bg-[#d6ebfe] py-2 px-5 rounded-full hover:scale-105 transition-all duration-500 text-[#49545b]'>
                            <img className='w-5' src={assets.credit_star} alt="credit_star" />
                            <p>Credits left : 5</p>
                        </div>
                        <div className='flex items-center gap-2 text-[#49545b] relative group'>
                            <p>Hi! Akash</p>
                            <img className='w-10 shadow-md rounded-full' src={assets.profile_icon} alt="profile_icon" />
                            <div className='absolute top-[100%] right-0 w-full bg-transparent  pl-8 py-3 hidden  group-hover:block'>
                                <ul className='relative'>
                                    <div className='z-10 w-4 h-4 border-b-2 border-l-2 absolute bg-teal-50  rotate-[135deg] right-4 top-[-8px]'></div>
                                    <li onClick={() => setUser(null)} className='border-2 cursor-pointer active:scale-95 transition-all duration-300 bg-teal-50 px-2 py-1 z-0'>Logout</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
