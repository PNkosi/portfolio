'use strict'

import { useState } from "react"

const ItemsFilter = (props) => {
    const active = {
        color: "#f9a11e",
        borderBottom: "2px solid #f9a11e",
        fontWeight: 'bold'
    }

    const [activeLink, setActiveLink] = useState(0)

    const categories = props.buttons.map((type, index) => (
        <button style={activeLink === index ? active : {}} key={index} onClick={() => {
            setActiveLink(index)
        }}>
            {type}
        </button>
    ))

    const itemsComponents = props.items.map(item => {

    })


    return (
        <div>
            <div className='grid grid-flow-col gap-6 border-slate-200 border-b-2 mb-8 w-fit'>
                {categories}
            </div>

            <div className='flex flex-col gap-12'>

            </div>
        </div>
    )
}

export default ItemsFilter