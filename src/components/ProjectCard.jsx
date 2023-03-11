import personImg from '../assets/project-images/personalImg.png'
import clientImg from '../assets/project-images/clientImg.png'

const ProjectCard = (props) => {
  return (
    <div className='flex gap-6 shadow-sm'>
        <img className='w-1/2 lg:w-64 object-cover' src={props.type == 'client' ? clientImg : personImg} alt={props.title} />

        <div className="">
            <h2 className="text-2xl font-bold text-slate-900">{props.title}</h2>
            { <h4 className="text-xl text-orange">{props.type == 'client' ? props.client : 'Personal'}</h4> }

            <p className='my-4 w-3/4 hidden lg:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, a. In illum necessitatibus beatae perferendis aspernatur est vel nam molestiae!</p>

            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                { props.type !== 'client' && <a className='py-4 px-6 bg-slate-900 text-white' href="#">Source Code</a> }
                <a className='py-4 px-6 bg-purple text-white' href="#">View Project</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard