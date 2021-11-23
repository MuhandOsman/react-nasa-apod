import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./assets/nasa.jpg"

const Nav = () => {
    return (
        <nav>
                <img src={logo} alt="logo" style={{width: "80px"}}/>
            <ul>
                <NavLink to="/home" ><li>Group Pics of the day</li></NavLink>
                <NavLink to="/"><li>Choose Date</li></NavLink>
            </ul>
        </nav>
    )
}

export default Nav
