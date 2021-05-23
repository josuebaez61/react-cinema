import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Logo.scss'
const Logo = () => {
    return (
        <h2 className="logo p-text-red">
            <FontAwesomeIcon color="#61DAFB" icon={ faFilm } /> React Cinema
        </h2>
    )
}

export default Logo
