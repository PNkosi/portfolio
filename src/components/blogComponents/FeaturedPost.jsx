import React from 'react'
import { NavLink } from 'react-router-dom'

const FeaturedPost = () => {
    return (
        <article className='py-4'>
            <h1 className="text-4xl lg:text-5xl text-slate-700 font-bold"><NavLink to='/blog'>Building Reusable Components in React Js</NavLink></h1>
            <p className="lg:text-xl mt-6 w-10/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem laudantium deleniti facilis possimus, rerum numquam.</p>
            <NavLink to='/blog' className="inline-block py-2 px-6 mt-4 bg-purple text-white">Read</NavLink>
        </article>
    )
}

export default FeaturedPost