import React, {useState} from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

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
        <Link class="nav-link" to="/sabermas">Saber mas</Link>
      </li>
    </ul>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

    </Routes>
    </>
  )
}

export default Navbar
