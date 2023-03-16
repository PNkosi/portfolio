import { NavLink } from 'react-router-dom'
import data from '../../assets/data.json'

const BlogSidebar = () => {

    const sidebarArticles = data.sidebarBlogArticles.map((article, index) => {
        return <NavLink className='text-slate-300 text-xl lg:text-2xl border-slate-500 border-b-2 my-6 py-2 hover:text-orange hover:pl-2 transition-all' to='/blog' key={index}>{article.title}</NavLink>
    })

    return (
        <aside className='lg:block lg:pt-[10vh] col-span-4 lg:col-span-1 bg-slate-900 text-white'>
            <div className="p-4">
                <h1 className="text-4xl">Have Some <span className='text-orange'>Fun!</span></h1>

                <section className='col-span-4 flex flex-col'>
                    {sidebarArticles}
                </section>
            </div>
        </aside>
    )
}

export default BlogSidebar