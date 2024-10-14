import React, { useState } from 'react'
import ImageContainer from './ImageContainer';
// import fetchingData from './ImageContainer';
import DefaultImages from './DefaultImages';

import '../css/Main.css'

function Main() {
  const [query , setQuery] = useState(null);
  const [isquery , setIsquery] = useState(false);

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const handleInput = (e)=>{
    setQuery(e.target.value);
  }
  const handleSeach =()=>{
    setQuery(query);
    console.log("Query in handle Search: ", query)
    setIsquery(true);
    fetchingData(query)
  }

  const fetchingData=(query)=>{
    setLoading(true)
    console.log("hello, fetching data is called!")
    fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=Wtrlw6xrt1W51zXEeqlUHJ1i7Rt58CNXaJ-GGxlnawc`)
    .then(response=>response.json())
    .then(data=>{
        console.log("Response in fetching data: ", data);
        setPhotos(data.results)
        setLoading(false)
        // this.setState({ photos: data.results, isloading: false })
        console.log("photos array in Main : ",photoss);
        
    })
    .catch(error=>{
        // this.setState({ error, isloading: false });
        setLoading(false)
        console.log('error occcured whhile fetching data')
    })
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
      {/* {query && <ImageContainer query={query}/>} */}
      {isquery ? <ImageContainer photos={photos} loading={loading} /> : <DefaultImages/>}
    </>
  )
}
export default Main;