import React from 'react'
import { assets, plans } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { delay, motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';

const BuyCredit = () => {
    const { user, setShowLogin, backendUrl, token, loadCreditsData, } = useContext(AppContext);

    const navigate = useNavigate();

    const initPay = async (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Credits Payment',
            description: 'Credits Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(`${backendUrl}/api/user/verify-razor`, response, { headers: { token } })
                    if (data.success) {
                        loadCreditsData();
                        navigate('/');
                        toast.success('Credit Added');
                    }
                } catch (error) {
                    toast.error(error.message);
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open();
    }


    const paymentRazorpay = async (planId) => {
        try {
            if (!user) {
                setShowLogin(true);
            }
            const { data } = await axios.post(`${backendUrl}/api/user/pay-razor`, { planId }, { headers: { token } });
            if (data.success) {
                initPay(data.order);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }
    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <p className='px-5 py-1.5 text-xs text-[#6f6f6f] border-2 broder-[#6f6f6f] rounded-full'>OUR PLANS</p>
            <p className='text-2xl font-[500] my-6'>Choose the plan</p>
            <div className='w-full flex flex-col md:flex-row items-center justify-between my-10 gap-5 md:gap-5 lg:gap-10 lg:px-36 '>
                {plans.map((item, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        key={index} className='w-[70%] sm:w-[80%] md:w-[40%] md:px-5 lg:px-10 py-10 shadow-md bg-white/40 rounded-xl flex flex-col items-center justify-center'>
                        <img src={assets.logo_icon} alt="" />
                        <p className='text-sm text-[#5d5d5d] font-[500] my-2'>{item.id}</p>
                        <p className='text-xs text-[#5d5d5d] mb-4'>{item.desc}</p>
                        <p className='text-xs text-[#5d5d5d]'><span className='text-3xl font-[500]'>₹</span><span className='text-2xl font-[500]'>{item.price}</span> / {item.credits} credits</p>
                        <button onClick={() => paymentRazorpay(item.id)} className='text-xs px-10 md:px-8 lg:px-10 rounded-lg py-2.5 bg-black text-white mt-8' >{user ? "Purchase" : "Get Started"}</button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default BuyCredit
