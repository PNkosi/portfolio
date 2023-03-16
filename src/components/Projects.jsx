import { useState } from 'react'

import { ProjectCard } from './index'

import { projectCategories, projects } from '../assets/data.json'

const Projects = () => {

    const active = {
        color: "#f9a11e",
        borderBottom: "2px solid #f9a11e",
        fontWeight: 'bold'
    }

    const [activeLink, setActiveLink] = useState(0)

    const categories = projectCategories.map((type, index) => (
        <button style={activeLink === index ? active : {}} key={index} onClick={() => {
            setActiveLink(index)
        }}>
            {type}
        </button>
    ))

    function getProjects() {
        let filtered

        switch (activeLink) {
            case 0:
                filtered = projects.filter(project => project.type === 'personal')
                break;

            case 1:
                filtered = projects.filter(project => project.type === 'freelance')
                break;

            case 2:
                filtered = projects.filter(project => project.type === 'collaboration')
                break;

            default:
                break;
        }
        return filtered.map(({ title, type, sourceLink, liveLink }, index) => {
            return <ProjectCard key={index} title={title} type={type} sourceLink={sourceLink} liveLink={liveLink} />
        })

    }


    return (
        <section className='text-slate-700 bg-[#e8e8f7] py-12'>
            <div className='p-container'>
                <div className="">
                    <h2 className="section-title"><span className='text-orange'>Projects</span> I worked on</h2>
                    <div className='grid grid-flow-col gap-6 border-slate-200 border-b-2 mb-8 w-fit'>
                        {categories}
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                    {getProjects()}
                </div>
            </div>
        </section>
    )
}

export default Projects