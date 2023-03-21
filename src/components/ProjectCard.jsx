import { Link } from 'react-router-dom'
import { SiGithub, BiGlobe } from 'react-icons/all'

import Button from './Button'

import personImg from '../assets/project-images/personalImg.png'
import clientImg from '../assets/project-images/clientImg.png'


const ProjectCard = (props) => {

  const getProjectLinks = () => {
    if (props.type === 'personal') {
      return (
        <div className="flex gap-4">
          <Link className="bg-slate-900 text-white font-bold flex items-center gap-2 rounded-lg w-fit py-2 px-4" to={props.sourceLink}><SiGithub />source</Link>
          <Link className="bg-orange text-white font-bold flex items-center gap-2 rounded-lg w-fit py-2 px-4" to={props.liveLink}><BiGlobe />view</Link>
        </div>
      )
    }

    if (props.type === "freelance" || props.type === "collaboration") {
        return <Link className="bg-orange text-white font-bold flex items-center gap-2 rounded-lg w-fit py-2 px-4" to={props.liveLink}><BiGlobe />view</Link>
    }

  }

  return (
    <div className='flex flex-col shadow-sm bg-white w-fit lg:w-1/4 rounded-lg overflow-hidden'>
      <img className='w-fit object-cover rounded-br-[50px]' src={props.type == 'freelance' ? clientImg : personImg} alt={props.title} />

      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-2xl font-bold text-slate-900">{props.title}</h2>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 mt-4">
          {getProjectLinks()}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard