import { projects } from '../assets/data.json'

export const getFilteredProjects = (activeLink) => {
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
    return filtered
}

// export const getFilteredBlogs = (activeLink) => {
//     let filtered
//
//     switch (activeLink) {
//         case 0:
//             filtered = projects.filter(blog => blog.type === 'dev')
//             break;
//
//         case 1:
//             filtered = projects.filter(blog => blog.type === 'design')
//             break;
//
//         default:
//             break;
//     }
//     return filtered
// }