import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Contact from './Components/Contact'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/Home' element={<Home />} />
          <Route path='/Nav' element={<Nav />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
