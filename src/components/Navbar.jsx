import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/SVG/logo.svg'
import { TbMenu, IoClose } from 'react-icons/all'

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

  }

  return (
    <header className='bg-white fixed w-full z-50'>
      {isMenuOpen && <div onClick={toggleMenu} className="absolute bg-black bg-opacity-80 h-screen w-screen mt-[10vh]"></div>}
      <nav className='relative h-[10vh] p-container flex justify-between items-center'>
        <NavLink onClick={isMenuOpen && toggleMenu} to='/'>
          <img className='' width={30} src={logo} alt='logo' />
        </NavLink>

        {isMenuOpen &&
          <ul
            id='mobileMenu'
            className="animate-scale-up-center absolute top-[15vh] left-[50%] translate-x-[-50%] bg-orange p-6 rounded-lg text-slate-100 flex flex-col w-3/5 text-center font-bold">
            <MenuLinks onMenuToggle={toggleMenu} />
          </ul>}

        {/* Menu for tablet, desktop and larger screens */}
        <ul className='hidden md:flex text-slate-500 font-bold'>
          <MenuLinks />
        </ul>

        <TbMenu
          className='md:hidden cursor-pointer'
          size={30}
          color='#f9a11e'
          onClick={toggleMenu}
        />
      </nav>
    </header>
  )
}

function MenuLinks(props) {
  const linksData = [
    { name: 'Home', to: '/' },
    { name: 'My Work', to: 'projects' },
    { name: 'Blog', to: 'blog' },
    { name: 'contact', to: 'contact' }
  ]

  const links = linksData.map(({ name, to }, index) => (
    <li className='mx-8 my-4 lg:my-0' key={index} onClick={props.onMenuToggle}>
      <NavLink to={to}>{name}</NavLink>
    </li>
  ))

  return <>
    {links}
  </>
}

export default Navbar