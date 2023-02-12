import clientImg from '../assets/project-images/clientImg.png'
import personalImg from '../assets/project-images/personalImg.png' 
import wave from '../assets/SVG/wave.svg'

const Projects = () => {
  return (
    <section className='text-slate-700 bg-slate-50 py-12'>
        <div className="p-container">
            <h2 className="section-title"><span className='text-orange'>Projects</span> I worked on</h2>

            

            {/* client projects */}
            <section className="grid md:grid-cols-3 grid-flow-row-dense gap-2">
                <Project className="col-span-2"/>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </section>
        </div>
    </section>
  )
}

function Project() {
    return (
        <article className=''>
            <img className='w-fit' src={clientImg} alt="" />
        </article>
    )
}

export default Projects