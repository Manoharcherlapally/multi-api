import React, { useEffect, useState } from 'react'


export default function Weather() {

  const [data,setData]= useState('')
  const [search,setSearch]= useState({})

  function weatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c8a1d1f0e2141ac1052cfec7b67c74cf&units=metric`)
    .then(response=>{
      return response.json();
    }).then(data=>{
      console.log(data)
      setData(data)
      setSearch("")

    })
    
  }
  const handleSearch=()=>{
    weatherData(search)
  }
   useEffect(()=>{
      weatherData()
    },[])
  return (
    <div>
   
    <div className='weatherContainer'>
      <input type="text" className="search mt-5" placeholder="Enter City" onChange={(e)=>setSearch(e.target.value)} /><br></br> 
    <button type="button" class="btn btn-dark mt-4" onClick={handleSearch}>ENTER</button>
      <h3>Name:{data.name}</h3>
      <h3>Temperature:{data?.main?.temp}</h3>
      <h3>Country:{data?.sys?.country}</h3>
      <h3>Degree:{data.wind?.deg}</h3>
    </div>
    </div>
  )
}
