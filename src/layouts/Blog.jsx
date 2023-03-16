import { useState } from 'react'

import data from '../assets/data.json'

import { AllBlogs, DevBlogs, DesignBlogs, BlogHeader, BlogSidebar } from '../components'

const Blog = () => {
  const active = {
    color: "#f9a11e",
    borderBottom: "2px solid #f9a11e",
    fontWeight: 'bold'
  }

  const [activeLink, setActiveLink] = useState(0)
  const [postsTitle, setPostsTitle] = useState('All')

  const categories = data.blogCategories.map((category, index) => (
    <button style={activeLink === index ? active : {}} key={index} onClick={() => {
      setActiveLink(index)
      setPostsTitle(category)
    }}>
      {category}
    </button>
  ))

  const getPosts = () => {
    if (activeLink === 0) {
      return <AllBlogs />
    }
    else if (activeLink === 1) {
      return <DevBlogs />

    }
    else if (activeLink === 2) {
      return <DesignBlogs />
    }
  }

  return (
    <>
      <div className='p-container'>
        <div className="grid grid-cols-4 gap-2">
          <BlogHeader />
          <BlogSidebar />
        </div>

        <section className='mt-4'>


          <div className='grid grid-flow-col gap-x-24 border-slate-200 border-b-2 w-fit my-6'>
            {categories}
          </div>

          <h2 className='section-title my-6'>{postsTitle} Blog Posts</h2>

          <div>
            {getPosts()}
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog
