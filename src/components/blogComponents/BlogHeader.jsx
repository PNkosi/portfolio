import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'

import hive from '../../assets/SVG/hive.svg'
import img from '../../assets/cool-pc.jpg'
import FeaturedPost from './FeaturedPost'

const BlogHeader = () => {

    const headerBackground = {
        background: `linear-gradient(to bottom, #8b41fb, #8b41fb0b),url(${img}) center/cover no-repeat`
    }

    return (
        <div className='col-span-4 lg:col-span-3'>
            <header style={headerBackground} className='relative h-[400px] overflow-hidden pt-[10vh]'>
                <img className='opacity-30 md:opacity-100 absolute right-0 top-[-375px] md:top-[-30%] z-[0]' src={hive} alt='' />
                <div className='p-container flex flex-col justify-center h-full '>
                    <h1 className='text-white text-6xl font-bold z-10'>
                        My <span className='text-orange'>Blog</span>
                    </h1>


                    <p className='text-2xl text-white mt-4 z-10'>Let's connect</p>
                    <div className=' flex justify-between w-32 md:relative'>
                        <a className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent' href='#'><SiGithub /></a>
                        <a className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent' href='#'><SiTwitter /></a>
                        <a className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent' href='#'><SiLinkedin /></a>
                    </div>

                </div>
            </header>
            <FeaturedPost />
        </div>
    )
}

export default BlogHeader