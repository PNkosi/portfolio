import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import hive from '../assets/hive.svg'
import { BiSend } from 'react-icons/all'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from './Button'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6ljeqq', 'template_zjlpo4j', form.current, 'uT4Bl7hnbM6goe-zw')
            .then(() => {
                toast.success('Message sent successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                e.target.reset()
            }, (error) => {
                toast.error('Message not sent', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };

    return (
        <section className="bg-slate-900 text-white" id='contact'>
            <div className="p-container py-12">
                <h2 className="section-title">Get in touch with me</h2>

                <div className="flex">
                    <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2 '>
                        <div className="flex flex-col mb-6">
                            <label className='mb-2' htmlFor="username">Name</label>
                            <input className='bg-slate-700 border-orange border-l-4 focus:outline-orange p-2' placeholder='Enter your name' type="text" name="username" id="username" required />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className='mb-2' htmlFor="user_email">Email</label>
                            <input className='bg-slate-700 border-orange border-l-4 focus:outline-orange p-2' placeholder='Email Address' type="email" name="user_email" id="user_email" required />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className='mb-2' htmlFor="message">Message</label>
                            <textarea className='bg-slate-700 border-orange border-l-4 focus:outline-orange p-2' name="message" id="message" cols="30" rows="5" placeholder='How can I help?' required></textarea>
                        </div>

                        <input onClick={sendEmail} className='flex items-center gap-2 w-fit py-3 px-4 orange rounded-lg font-bold text-xl mt-6 cursor-pointer' type="submit" value="Send" />

                    </form>

                    <img className='hidden md:block md:w-1/2 ml-6' src={hive} alt="" />
                </div>

                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </section>
    )
}

export default Contact