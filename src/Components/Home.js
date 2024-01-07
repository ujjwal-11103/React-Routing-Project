import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h1>This is Home</h1>
            <Link to='/Nav'> Nav</Link>
        </div>
    )
}
