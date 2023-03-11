// NPM Packages
import {
    createBrowserRouter, Route,
    createRoutesFromElements, RouterProvider
} from 'react-router-dom'

// Pages
import { Home ,ClientProjects, PersonalProjects, } from './pages'


// Layouts
import { ProjectsLayout, RootLayout } from './layouts'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route to='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/' element={<ProjectsLayout />}>
                <Route path='/personal-projects' element={<PersonalProjects />} />
                <Route path="/freelance-projects" element={<ClientProjects />} />  
            </Route>
        </Route>
    )
)
const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App