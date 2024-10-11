import React, { useState } from 'react'
import ImageContainer from './ImageContainer';

import '../css/Main.css'

function Main() {
  const [query , setQuery] = useState("");
  const handleInput = (e)=>{
    setQuery(e.target.value);
  }
  const handleSeach =()=>{
    setQuery(query)
    console.log(query);
  }
  return (
    <>
        <div className='container'>
          <h1> Image Gallery App</h1>
          <div className='container2'>
            <input type='text' onChange={handleInput} placeholder='Enter here ...'/>
            <button onClick={handleSeach}>Search</button>
          </div>
        </div>
        {query > 5 && <ImageContainer query={query}/>}
    </>
  )
}

export default Main;