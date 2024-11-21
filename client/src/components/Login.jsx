import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { delay, motion } from 'motion/react'

const Login = () => {
    const [state, setState] = useState('signup');
    const { showLogin, setShowLogin } = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 px-4 backdrop-blur-sm bg-black/30 z-10 flex items-center justify-center'>
            <motion.form
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-lg px-12 py-10 text-slate-500 relative'>
                <h1 className='text-center text-2xl capitalize'>{state}</h1>
                <p className='text-sm my-2'>Log in to continue or sign up to explore more.</p>
                {state !== 'login' && <div className='flex bg-white border border-zinc-300 py-2 px-6 rounded-full mt-5 gap-1'>
                    <img className='w-5' src={assets.profile_icon} alt="" />
                    <input className='w-full outline-none text-sm' type="text" placeholder='Full Name' />
                </div>}
                <div className='flex bg-white border border-zinc-300 py-2 px-6 rounded-full mt-4 gap-2'>
                    <img className='w-3' src={assets.email_icon} alt="" />
                    <input className='w-full outline-none text-sm' type="text" placeholder='Email' />
                </div>
                <div className='flex bg-white border border-zinc-300 py-2 px-6 rounded-full mt-4 gap-2'>
                    <img className='w-3' src={assets.lock_icon} alt="" />
                    <input className='w-full outline-none text-sm' type="text" placeholder='Password' />
                </div>
                <p className='text-sm text-blue-400 my-4 cursor-pointer'>Forgot Password?</p>
                <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'login' ? 'Login' : 'Create Account'}</button>
                {state === 'login' ?
                    <p onClick={() => setState('sign up')} className='text-center mt-4 text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer'>Sign Up</span></p>
                    :
                    <p onClick={() => setState('login')} className='text-center mt-4 text-sm'>Already have an account? <span className='text-blue-600 cursor-pointer'>Login</span></p>}
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
            </motion.form>
        </div>
    )
}

export default Login
