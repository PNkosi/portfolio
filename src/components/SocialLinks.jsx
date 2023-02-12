import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'

const socials = () => {
  return (
    <div className=" flex justify-between w-32 mt-12 md:relative">
        <a className='hover-border-rounded md:absolute md:bottom-1' href="#"><SiGithub /></a>
        <a className='hover-border-rounded md:absolute md:bottom-8 md:left-1/2' href="#"><SiTwitter /></a>
        <a className='hover-border-rounded md:absolute left-full md:bottom-1' href="#"><SiLinkedin /></a>
    </div>
  )
}

export default socials