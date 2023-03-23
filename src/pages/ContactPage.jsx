import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si'
import { ContactForm } from "../components";

import img from '../assets/SVG/desk-illustration.svg'

const ContactPage = () => {

    return (
        <section className="p-container flex flex-col lg:flex-row gap-6 lg:gap-0 mb-4">
            <div className="flex justify-center items-center flex-col lg:w-1/2 bg-gradient-to-br from-purple to-blue-300 py-6 lg:p-6 text-white">
                <img className="w-1/3 lg:w-1/2" src={img} />
                <h2 className="section-title text-white font-bold w-fit mx-auto">Get in touch with me</h2>

                <p className="font-bold">perfect@nkosi.dev</p>
                <div className=" flex justify-between w-32 mt-6">
                    <a className='hover-border-rounded' href="#"><SiGithub /></a>
                    <a className='hover-border-rounded' href="#"><SiTwitter /></a>
                    <a className='hover-border-rounded' href="#"><SiLinkedin /></a>
                </div>
            </div>
            <div className="lg:p-6 lg:w-1/2">
                <ContactForm theme='light' />
            </div>
        </section>
    )
}

export default ContactPage