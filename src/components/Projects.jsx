import { ProjectCard } from './index'
import { projectCategories } from '../assets/data.json'

import categoryFilters from "./CategoryFilters.jsx";
import { getFilteredProjects } from "../scripts/filters.js";

const Projects = () => {

    const { activeLink, filters } = categoryFilters(projectCategories)

    const filteredProjects = getFilteredProjects(activeLink)

    const projects = filteredProjects.map(({ title, type, sourceLink, liveLink }, index) => {
        return <ProjectCard key={index} title={title} type={type} sourceLink={sourceLink} liveLink={liveLink} />
    })


    return (
        <section className='text-slate-700 bg-[#e8e8f7] py-12'>
            <div className='p-container'>
                <div className="">
                    <h2 className="section-title"><span className='text-orange'>Projects</span> I worked on</h2>
                    <div className='grid grid-flow-col gap-6 border-slate-200 border-b-2 mb-8 w-fit'>
                        {filters}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-12'>
                    {projects}
                </div>
            </div>
        </section>
    )
}

export default Projects