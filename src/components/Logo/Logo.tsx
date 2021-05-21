import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'primereact/button';
import './Logo.scss'
const Logo = () => {
    return (
        <h2 className="p-text-red">
            <FontAwesomeIcon color="#61DAFB" icon={ faFilm } /> React Cinema
        </h2>
    )
}

export default Logo
