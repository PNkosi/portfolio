import { Outlet } from 'react-router-dom'

import { Navbar } from "../components";

import wave from '../assets/SVG/wave.svg'



const RootLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <img src={wave} alt="" />
        </>
    )
}

export default RootLayout