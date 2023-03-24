import { SiLinkedin, SiGithub } from 'react-icons/si'
import Typed from 'react-typed'
import Button from './Button'

const Hero = () => {
  return (
    <section className="flex flex-col justify-center p-container h-[70vh] lg:h-screen text-slate-700">
      <h2 className="text-4xl">Hello👋, Welcome!</h2>
      <h1 className="text-5xl md:text-8xl pt-2 pb-6">I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f15a24] via-orange to-purple">Perfect Nkosi</span></h1>
      <div className="flex ">
        <p className="text-2xl md:text-3xl">A Web </p>

        <Typed
          className='text-2xl md:text-3xl text-orange pl-2'
          strings={['Developer', 'Designer']}
          typeSpeed={50}
          backSpeed={50}
          loop>
        </Typed>
      </div>


      <div className="flex gap-4">
        <Button url="#" color="dark" text='Github' icon={<SiGithub />} />
        <Button url="#" color="purple" text='Linkedin' icon={<SiLinkedin />} />
      </div>

      <a className='w-fit mx-auto text-center text-xl mt-5 hover:animate-bounce font-bold' href="#contact">say hi👋</a>
    </section>
  )
}

export default Hero
