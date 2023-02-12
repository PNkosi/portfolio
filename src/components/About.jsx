import { NavLink } from 'react-router-dom'
import illustration from '../assets/SVG/heroImg.svg'
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiBootstrap,
} from 'react-icons/di'
import { SiTailwindcss, SiAdobexd } from 'react-icons/si'
import SocialLinks from './SocialLinks'

const About = () => {
  return (
    <section className='py-12 text-slate-700' id='skills'>
      <div className='p-container grid md:grid-cols-2 gap-12'>
        <div className='flex flex-col justify-center items-center'>
          <img className='md:order-last' src={illustration} alt='' />
          <SocialLinks className='mt-6' />
        </div>

        <div className=''>
          <h2 className='section-title'>
            About <span className='text-orange'>Me</span>
          </h2>

          <p className='text-slate-500 text-xl mb-12'>
            Hi there! I'm Perfect Nkosi, a front-end web developer. My passion
            for coding and creating digital solutions has led me to build
            beautiful and functional websites and web applications. I have a{' '}
            <NavLink className='text-orange font-bold' to='/blog'>
              blog
            </NavLink>{' '}
            where write about my journey as a developer and share with the
            community.
          </p>

          <h2 className='section-title'>
            My <span className='text-orange'>Skills</span>
          </h2>

          <ul className=' grid grid-cols-2 gap-6'>
            <li className='flex items-center'>
              <DiJavascript1 className='text-yellow-500 pr-2 text-2xl' />
              Javascript
            </li>
            <li className='flex items-center'>
              <DiReact className='text-blue-300 pr-2 text-2xl' /> React Js
            </li>
            <li className='flex items-center'>
              <SiTailwindcss className='text-blue-400 pr-2 text-2xl' />{' '}
              Tailwindcss
            </li>
            <li className='flex items-center'>
              <DiBootstrap className='text-indigo-600 pr-2 text-2xl' />{' '}
              Bootstrap
            </li>
            <li className='flex items-center'>
              <SiAdobexd className='text-fuchsia-600 pr-2 text-2xl' />
              Adobe XD
            </li>
            <li className='flex items-center'>
              <DiNodejsSmall className='text-green-500 pr-2 text-2xl' /> Node Js
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
