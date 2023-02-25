import React from 'react'
import { Link, Routes ,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Search from './Search'
import '../CSS/Navbar.css'

function Navbar(props) {
  return (
    <>
      <ul class="nav nav-pills">
      <li>
        <Link class="nav-link active" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/registrarse">Registrase</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/iniciarsesion">Iniciar sesion</Link>
      </li>
    </ul>
    <Search/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default Navbar
