import { FaLongArrowAltRight } from 'react-icons/fa'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <section className="flex flex-col justify-center p-container h-[100vh] text-slate-700">
        

        <h2 className="text-4xl">Hello👋, Welcome!</h2>
        <h1 className="text-5xl md:text-8xl pt-2 pb-6">I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange">Perfect Nkosi</span></h1>
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


        <a className="flex items-center w-fit text-white bg-purple py-4 px-6 rounded-lg font-bold text-xl mt-6" href="#">
            RESUME <FaLongArrowAltRight />
        </a>
    </section>
  )
}

export default Hero