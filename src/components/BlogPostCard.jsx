import { NavLink } from 'react-router-dom'
import img from '../assets/project-images/clientImg.png'

const BlogPostCard = () => {
  return (
    <article className='shadow-md p-6 hover:bg-slate-900 hover:text-white grid grid-cols-2'>
      <div className='w-full h-full'>
        <img src={img} alt='' />
      </div>
      <div className='px-4'>
        <h3 className='text-xl'>Setting up React with Tailwindcss</h3>
        <p className='text-md text-slate-500'>
          <i>11 Feb 2023</i>
        </p>
      </div>
      <NavLink
        to='/blog'
        className='mt-4 rounded-md block w-full col-span-2 bg-slate-900 hover:bg-orange text-white text-center px-2 py-4'>
        READ
      </NavLink>
    </article>
  )
}

export default BlogPostCard
