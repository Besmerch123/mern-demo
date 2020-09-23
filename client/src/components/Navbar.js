import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()

    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()

        history.push('/')
    }

    return (
        <nav className="row">
            <div className="nav-wrapper col s12 blue darken-1">
                <a href="/" className="brand-logo">Link-shorter</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/create'>Create link</NavLink></li>
                    <li><NavLink to='/links'>Links</NavLink></li>
                    <li><a href='/' onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav >
    )
}