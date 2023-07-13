import React, { useState } from 'react'

function SearchBar(props) {

    const [searchingFor, setSearchingFor] = useState("")

    const handleSearchBar = (event) => {
  
        setSearchingFor(event.target.value)
      
      // aqui buscamos
      // filtrar
      // llevamos el valor del estado buscar a ShoppingList
      props.filterProducts(event.target.value)
    }
  
    return (
      <div>
  
        <h4>Search</h4>
  
          <label htmlFor="search">Search: </label>
          <input type="text" name="search" onChange={handleSearchBar} value={searchingFor}/>
  
      </div>
    )
  }

export default SearchBar