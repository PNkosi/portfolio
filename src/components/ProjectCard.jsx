import { SiGithub, BiGlobe } from 'react-icons/all'

import Button from './Button'

import personImg from '../assets/project-images/personalImg.png'
import clientImg from '../assets/project-images/clientImg.png'


const ProjectCard = (props) => {

  const getProjectLinks = () => {
    if (props.type === 'personal') {
      return (
        <>
          <Button color='dark' url={props.sourceLink} text="Source Code" icon={<SiGithub />} />
          <Button color='orange' url={props.liveLink} text="Project Preview" icon={<BiGlobe />} />

        </>
      )
    }

    if (props.type === "freelance" || props.type === "collaboration") {
      return <Button color='orange' url={props.liveLink} text="Project Preview" icon={<BiGlobe />} />
    }

  }

  return (
    <div className='flex gap-6 shadow-sm'>
      <img className='w-1/2 lg:w-64 object-cover' src={props.type == 'freelance' ? clientImg : personImg} alt={props.title} />

      <div className="">
        <h2 className="text-2xl font-bold text-slate-900">{props.title}</h2>
        <h4 className="text-xl text-orange">{props.type}</h4>

        <p className='my-4 w-3/4 hidden lg:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, a. In illum necessitatibus beatae perferendis aspernatur est vel nam molestiae!</p>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          {getProjectLinks()}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard