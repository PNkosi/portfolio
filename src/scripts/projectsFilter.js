import data from '../assets/data.json'

function filterProjects(activeLink) {
    const projects = data.projects
    let filteredProjects = []

    if (activeLink === 0) filteredProjects = projects.map(project => project)

    if (activeLink === 1) filteredProjects = projects.filter(project => project.type === 'personal')
    if (activeLink === 2) filteredProjects = projects.filter(project => project.type === 'freelance')
    if (activeLink === 3) filteredProjects = projects.filter(project => project.type === 'colaboration')


    return filteredProjects
}


export default filterProjects