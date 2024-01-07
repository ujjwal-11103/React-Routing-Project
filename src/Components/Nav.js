import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div>
            <h1>This is Nav</h1>
            <Link to='/home'> Home</Link><br />
            <Link to='/default'> Default</Link><br />
            <Link to='/Contact'> Contact</Link>
        </div>
    )
}
