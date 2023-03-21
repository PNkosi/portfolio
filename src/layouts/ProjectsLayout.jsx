
import categoryFilters from "../components/CategoryFilters.jsx";

import img from '../assets/cool-pc.jpg'
import { getFilteredProjects } from '../scripts/filters.js'
import { projectCategories } from '../assets/data.json'
import {ProjectCard} from "../components/index.js";


const ProjectsLayout = () => {

    const { activeLink, filters } = categoryFilters(projectCategories)

    const filteredProjects = getFilteredProjects(activeLink)

    const projects = filteredProjects.map(({ title, type, sourceLink, liveLink }, index) => {
        return <ProjectCard key={index} title={title} type={type} sourceLink={sourceLink} liveLink={liveLink} />
    })


  const headerBackground = {
    background: `linear-gradient(to bottom, #8b41fbcc, #8b41fb55),url(${img}) center/cover no-repeat`
  }
  return (
    <>
      <header style={headerBackground} className='h-[50vh] flex flex-col justify-center items-center'>
        <div className="p-container text-center">
            <h1 className="text-4xl lg:text-6xl text-white font-bold" >Project Case Studies</h1>
            <p className="text-white lg:text-2xl mt-4">A brief overview of each project. Detailing my thought process, target audience, design decisions, and technologies used.</p>
        </div>
      </header>
      <section className='text-slate-700 bg-slate-50 p-container'>
          <div className='grid grid-flow-col gap-6 border-slate-200 border-b-2 my-8 w-fit'>
              {filters}
          </div>
          {projects}
      </section>
    </>
  )
}

export default ProjectsLayout