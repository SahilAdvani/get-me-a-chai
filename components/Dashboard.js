"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {

    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        getData()
        if (!session) {
            router.push("/login")
        }
    }, [session, router])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className='container mx-auto py-5 px-6'>
                <h1 className='text-center font-bold my-5 text-3xl'>Welcome to your Dashboard</h1>
                <form className='max-w-2xl mx-auto' action={handleSubmit}>
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="name" className='mb-2 font-bold'>Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id='name' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for email */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="email" className='mb-2 font-bold'>Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name='email' id='email' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for username */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="username" className='mb-2 font-bold'>Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id='username' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for profile picture of input type text */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="profilepic" className='mb-2 font-bold'>Profile Picture</label>
                        <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id='profilepic' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for cover pic */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="coverpic" className='mb-2 font-bold'>Cover Picture</label>
                        <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id='coverpic' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for razorpay id */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="razorpayid" className='mb-2 font-bold'>Razorpay Id</label>
                        <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id='razorpayid' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* input for razorpay secret */}
                    <div className='my-2 flex flex-col justify-center'>
                        <label htmlFor="razorpay" className='mb-2 font-bold'>Razorpay Secret</label>
                        <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret' className='p-1 w-full bg-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-sm' />
                    </div>
                    {/* Submit Button */}
                    <div className='my-6'>
                        <button className='w-full p-1 bg-blue-500 rounded-lg er:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none   '>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard

