import { NavLink } from 'react-router-dom'
import img from '../../assets/project-images/clientImg.png'

const BlogPostCard = () => {
  return (
    <article className='shadow-md flex flex-col p-4 lg:w-[300px] '>
      <NavLink to='/blog' className='inline-block'>
        <img className='h-fit' src={img} alt='' />
      </NavLink>
      <div className='px-4 flex flex-col'>
        <h3 className='text-xl font-bold mb-2'>Setting up React with Tailwindcss</h3>
        <NavLink
          to='./dev/setting-up-react-with-tailwindcss'
          className='mt-4 rounded-md block w-full text-orange font-bold hover:bg-slate-200 p-2 text-center'>
          READ
        </NavLink>
      </div>
    </article>

  )
}

export default BlogPostCard
