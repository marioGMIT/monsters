import React from 'react'
import './search.style.css'

export const Search = ({placeholder, handleChange}) => (
    
    <input className='search' type='search' onChange={ handleChange} placeholder={placeholder}/>
    
)

export default Search;