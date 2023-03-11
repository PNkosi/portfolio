import { NavLink } from 'react-router-dom'
import logo from '../assets/SVG/logo.svg'
import { TbMenu } from 'react-icons/tb'

const Navbar = () => {
  const toggleMenu = () => {
    document.querySelector('body').style.background = 'rgba(255,255,255, 1)'
    const menu = document.getElementById('mobileMenu')

    menu.classList.toggle('hidden')
  }

  const hideMenu = () => {
    const menu = document.getElementById('mobileMenu')
    menu.classList.add('hidden')
  }

  const activeNavLink = {
    color: 'red',
    borderBottom: '1px solid red'
  }

  return (
    <header className='bg-white fixed w-full z-50'>
      <nav className='relative h-[10vh] p-container flex justify-between items-center'>
        <NavLink to='/'>
          <img className='' width={30} src={logo} alt='logo' />
        </NavLink>

        {/* Menu for Mobile */}
        <ul
          id='mobileMenu'
          className='animate-scale-up-center hidden md:hidden absolute top-[15vh] left-[50%] translate-x-[-50%] bg-orange p-6 rounded-lg text-slate-100 flex flex-col w-3/5 text-center'>
          <li className='my-4'>
            <NavLink onClick={hideMenu} to='/'>
              Home
            </NavLink>
          </li>
          <li className='my-4'>
            <a onClick={hideMenu} href='#skills'>
              Skills
            </a>
          </li>
          <li className='my-4'>
            <a onClick={hideMenu} href='#projects'>
              Projects
            </a>
          </li>
          <li className='my-4'>
            <NavLink onClick={hideMenu} to='/blog'>
              Blog
            </NavLink>
          </li>
          <li className='my-4'>
            <a onClick={hideMenu} href='#contact'>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Menu for tablet, desktop and larger screens */}
        <ul className='hidden md:flex text-slate-500'>
          <li className='mx-4'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='mx-4'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='mx-4'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='mx-4'>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li className='mx-4'>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>

        <TbMenu
          className='md:hidden'
          size={30}
          color='#f9a11e'
          onClick={toggleMenu}
        />
      </nav>
    </header>
  )
}

export default Navbar
