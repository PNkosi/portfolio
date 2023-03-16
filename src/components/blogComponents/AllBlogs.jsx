import React from 'react'
import BlogPostCard from './BlogPostCard'

const AllBlogs = () => {
  return (
    <section className='grid lg:grid-cols-4 gap-6'>
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </section>
  )
}

export default AllBlogs