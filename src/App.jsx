import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './layouts/Home'
import Blog from './layouts/Blog'

import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='pt-[10vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
