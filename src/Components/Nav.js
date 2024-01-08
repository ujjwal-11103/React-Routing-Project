import React from 'react'
import '../Styles/Nav.css'
import { Link, NavLink } from 'react-router-dom'
export default function Nav() {
    return (
        <div>

            <div className="nav-main">

                <div className="nav-container">

                    <div className="logo">

                        <h1>Nav</h1>

                    </div>

                    <div className="links">

                        <NavLink className='NavLink'  to='/home'> Home</NavLink><br />
                        
                        <NavLink className='NavLink' to='/Contact'> Contact</NavLink>

                    </div>

                </div>

            </div>

        </div>
    )
}
