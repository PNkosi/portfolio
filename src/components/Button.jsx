import { Link } from 'react-router-dom'


const Button = ({ color, url, icon, text }) => {
    return (
        <Link to={url} className={`${color} flex items-center gap-2 w-fit py-3 px-4 rounded-lg font-bold text-xl mt-6`}>{icon} {text}</Link>
    )
}

export default Button