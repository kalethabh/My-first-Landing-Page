import React from 'react'
import '../CSS/Search.css'

function Search() {
  const [pais, setPais] = React.useState({});

 React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(res => res.json())
      .then(data => {
        setPais(data);
      })
      .catch(error => console.error(error));
      return () => setPais({})
  }, []);

  return (
    <div className="search">
      <input className='input' type="text" placeholder="Buscar..." />
      <button className='button' type="submit">Search</button>
    </div>
  )
}

export default Search
