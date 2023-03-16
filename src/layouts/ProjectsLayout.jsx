import { Projects } from '../components'

import img from '../assets/cool-pc.jpg'


const ProjectsLayout = () => {
  const headerBackground = {
    background: `linear-gradient(to bottom, #8b41fb, #8b41fb0b),url(${img}) center/cover no-repeat`
  }
  return (
    <>
      <header style={headerBackground} className='pt-[10vh] h-[50vh] flex justify-center items-center'>
        <h1 className="text-3xl text-white font-bold" >My Recent Projects</h1>
      </header>
      <section className='text-slate-700 bg-slate-50'>
        <Projects />
      </section>
    </>
  )
}

export default ProjectsLayout