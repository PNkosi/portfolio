import { NavLink } from 'react-router-dom'
import { Hero, About, Contact, ProjectCard } from '../components'

import url from '../assets/project-images/personalImg.png'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      
      <section className='text-slate-700 bg-[#e8e8f7] py-12'>
        <div className="p-container after:flex justify-between items-center">
            <h2 className="section-title"><span className='text-orange'>Projects</span> I worked on</h2>

            <div className='grid grid-flow-col gap-x-24 border-slate-200 border-b-2 mb-8 w-fit'>
                <NavLink to='/personal-projects' className='hover:border-b-2 hover:border-orange hover:text-orange pt-4 hover:font-bold'>Personal Projects</NavLink>
                <NavLink to='/freelance-projects' className='hover:border-b-2 hover:border-orange hover:text-orange pt-4 hover:font-bold'>Freelance Projects</NavLink>
            </div>
        </div>

        <div className="p-container grid gap-6">
          <ProjectCard title="Edu Ground" />
          <ProjectCard title="Edu Ground" />
          <ProjectCard title="Edu Ground" />
        </div>
      </section>

      <Contact />
    </>
  )
}

export default Home
