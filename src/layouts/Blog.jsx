import hive from '../assets/SVG/hive.svg'
import wave from '../assets/SVG/wave.svg'
import BlogPostCard from '../components/BlogPostCard'
import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'

const Blog = () => {
  return (
    <>
      <header className='relative h-[60vh] bg-slate-900 overflow-hidden'>
        <img className='absolute right-0 top-[-30%] z-[0]' src={hive} alt='' />
        <div className='p-container flex flex-col justify-center h-full '>
          <h1 className='text-white text-6xl font-bold z-10'>
            My <span className='text-orange'>Blog</span>
          </h1>
          <p className='text-slate-300 my-4 z-10'>
            Practice makes{' '}
            <span className='line-through text-slate-500'>perfect</span>{' '}
            <span>improvement</span>
          </p>

          <p className='hidden md:block text-slate-500 text-right z-10'>
            <i>
              "A journey of a thousand miles begin with one step" -{' '}
              <span className='text-orange'>Author</span>
            </i>
          </p>

          <h2 className='text-white mt-4 z-10'>Let's connect</h2>
          <div className=' flex justify-between w-32 md:relative'>
            <a
              className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent'
              href='#'>
              <SiGithub />
            </a>
            <a
              className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent'
              href='#'>
              <SiTwitter />
            </a>
            <a
              className='z-10 text-slate-300 hover-border-rounded p-2 border-2 border-transparent'
              href='#'>
              <SiLinkedin />
            </a>
          </div>
        </div>
      </header>

      <section className='p-container'>
        <h2 className='section-title'>Blog Posts</h2>

        <div className='grid grid-flow-col gap-x-6 border-slate-200 border-b-2 mb-8'>
          <button className='hover:bg-slate-900 hover:text-orange py-4'>
            All
          </button>
          <button className='hover:bg-slate-900 hover:text-orange py-4'>
            Development
          </button>
          <button className='hover:bg-slate-900 hover:text-orange py-4'>
            Design
          </button>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </section>
      <img src={wave} alt='' />
    </>
  )
}

export default Blog
