import { NavLink, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='text-slate-700 bg-slate-50 py-12'>
        <div className="p-container flex justify-between items-center">
            <h2 className="section-title"><span className='text-orange'>Projects</span> I worked on</h2>

            <div className='grid grid-flow-col gap-x-24 border-slate-200 border-b-2 mb-8 w-fit'>
                <NavLink to='/personal-projects' className='hover:border-b-2 hover:border-orange hover:text-orange py-4'>Personal Projects</NavLink>
                <NavLink to='/freelance-projects' className='hover:border-b-2 hover:border-orange hover:text-orange py-4'>Freelance Projects</NavLink>
            </div>
        </div>

        <Outlet />
    </section>
  )
}

export default Projects