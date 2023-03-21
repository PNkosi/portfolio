import { ContactForm } from "./index.js";
import logoHive from '../assets/SVG/hive-logo.svg'

const Contact = () => {
    return (
        <section className="bg-slate-900 text-white" id='contact'>
            <div className="p-container py-12 flex flex-col items-center lg:flex-row lg:justify-between gap-8">
                <div className="lg:w-1/2 self-start w-full">
                    <h2 className="section-title">Get in touch with me</h2>
                    <ContactForm theme="dark" />
                </div>
                <img className="w-1/3 animate-pulse" src={logoHive} alt="" />
            </div>
        </section>
    )
}

export default Contact