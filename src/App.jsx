// NPM Packages
import {
    createBrowserRouter, Route,
    createRoutesFromElements, RouterProvider
} from 'react-router-dom'

// Pages
import { Home } from './pages'


// Layouts
import { BlogLayout, ProjectsLayout, RootLayout } from './layouts'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route to='/' element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path='projects' element={<ProjectsLayout />}>

            </Route>

            <Route path='blog' element={<BlogLayout />}>

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