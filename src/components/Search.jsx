import React from 'react'
import '../CSS/Search.css'

function Search() {
  return (
    <div className="search">
      <input className='input' type="text" placeholder="Buscar..."/>
      <button className='button' type="button">Search</button>
    </div>
  )
}

export default Search
