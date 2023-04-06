import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar d-flex justify-content-center '>
      
      { <nav class="navbar navbar-expand-lg   ">
  <div class="container-fluid">
  
   
  
   
  
      <ul class="navbar-nav" >
      <li class="nav-item">
          <a class="nav-link active me-5 " ><Link to='/'><h4>Home</h4></Link></a> 
          
        </li>
        <li class="nav-item">
          <a class="nav-link active me-5 " ><Link to='/weather'><h4>Weather Forecast</h4></Link></a> 
          
        </li>
        <li class="nav-item">
          <a class="nav-link  me-5" aria-current="page" href="#"><Link to='/crypto'><h4>Crypto</h4></Link></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active me-5 " aria-current="page" href="#"><Link to='/anime'><h4>Anime</h4></Link></a>
        </li>
        
      </ul>
    
  </div>
</nav> }
    </div>
  )
}
