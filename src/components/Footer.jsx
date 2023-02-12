import logoWhite from '../assets/SVG/logo-white.svg'

const Footer = () => {
  return (
    <footer className="bg-orange">
        <div className="p-container pb-6 flex flex-col items-center">
            <img className="w-10" src={logoWhite} alt="" />
            
            <p className="text-white">Thanks for visiting!</p>
        </div>
    </footer>
  )
}

export default Footer