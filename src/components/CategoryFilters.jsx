import { useState } from 'react'

const CategoryFilters = (categories) => {
    const active = {
        color: "#f9a11e",
        borderBottom: "2px solid #f9a11e",
        fontWeight: 'bold'
    }

    const [activeLink, setActiveLink] = useState(0)

    const filters = categories.map((type, index) => (
        <button style={activeLink === index ? active : {}} key={index} onClick={() => {
            setActiveLink(index)
        }}>
            {type}
        </button>
    ))

    return {
        activeLink, filters
    }
}

export default CategoryFilters