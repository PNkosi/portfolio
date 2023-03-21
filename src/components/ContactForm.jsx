import { ToastContainer } from "react-toastify";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ theme }) => {
    let inputStyles
    if (theme === 'dark') {
        inputStyles = {
            background: 'rgb(51, 65, 85)',
            color: '#fff',
            fontWeight: '500'
        }
    } else if (theme === 'light') {
        inputStyles = {
            background: '#e8e8f7',
            color: 'rgb(51, 65, 85)',
            fontWeight: '500',
        }
    }

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
        <>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
                <div className="flex flex-col mb-6">
                    <label className='mb-2' htmlFor="username">Name</label>
                    <input style={inputStyles} className='border-orange border-l-4 focus:outline-orange py-4 px-2 h-[50px]' placeholder='Enter your name' type="text" name="username" id="username" required />
                </div>

                <div className="flex flex-col mb-6">
                    <label className='mb-2' htmlFor="user_email">Email</label>
                    <input style={inputStyles} className='border-orange border-l-4 focus:outline-orange py-4 px-2 h-[50px]' placeholder='Email Address' type="email" name="user_email" id="user_email" required />
                </div>

                <div className="flex flex-col mb-6">
                    <label className='mb-2' htmlFor="message">Message</label>
                    <textarea style={inputStyles} className='border-orange border-l-4 focus:outline-orange py-4 px-2' name="message" id="message" cols="30" rows="5" placeholder='How can I help?' required></textarea>
                </div>

                <input onClick={sendEmail} className='flex items-center gap-2 w-fit py-3 px-4 orange rounded-lg font-bold text-xl mt-6 cursor-pointer' type="submit" value="Send" />

            </form>

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
        </>
    )
}

export default ContactForm