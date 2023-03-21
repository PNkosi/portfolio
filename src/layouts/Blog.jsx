
import { blogCategories } from '../assets/data.json'
import { BlogHeader, BlogSidebar } from '../components'
import categoryFilters from "../components/CategoryFilters.jsx";
const Blog = () => {
  const { activeLink, filters } = categoryFilters(blogCategories)
  return (
    <>
      <div className='p-container'>
        <div className="grid grid-cols-4 gap-2">
          <BlogHeader />
          <BlogSidebar />
        </div>

        <section className='mt-4'>


          <div className='grid grid-flow-col gap-x-24 border-slate-200 border-b-2 w-fit my-6'>
            {filters}
          </div>

          <h2 className='section-title my-6'>Blog Posts</h2>

          <div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog