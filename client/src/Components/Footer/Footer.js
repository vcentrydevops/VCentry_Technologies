import React from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'

function Footer() {
    return (
        <div className="admin-footer-sec-div">
            <p>Copyright 2021 © <NavLink to="/">Vcentry Technologies</NavLink>. Designed by <NavLink to="/">Vcentry Technologies</NavLink></p>
        </div>
    )
}

export default Footer
