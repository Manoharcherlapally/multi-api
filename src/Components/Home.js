import React from 'react'
import image1 from '../images/climate-change-tree.jpg'
import image2 from '../images/Bitcoin-1-900x523.jpg'
import image4 from '../images/anime2.jpg'

import { Link } from 'react-router-dom'

export default function Home() {

  const styling = {
    width: '18rem',
    height: '9rem'


  }

  return (
    <div>
     
      

      <div className=' containerfluid  pt-3 ps-3 '>
        
           
          <div className='row d-flex justify-content-around'>
          <div class=" card" >
              <img src={image1} style={styling} />

              <div class="card-body text-white">
                <h5 class="card-title">Weather Forecast</h5>
                <p class="card-text">I have made a page that shows you the weather report of areas.</p>
                <a href="#" class="btn btn-primary"><Link to='/weather'><span className='text-light'>Click Here</span></Link></a>
              </div>
              </div> 

           <div class=" card" >
              <img src={image2} style={styling} />

                <div class="card-body text-white">
                  <h5 class="card-title">Crypto</h5>
                  <p class="card-text">I have made a page that shows you the live prices of CryptoData.</p>
                  <a href="#" class="btn btn-primary"><Link to='/crypto'><span className='text-light'>Click Here</span></Link></a>
                </div>
              </div> 


          </div>
          <div className='row d-flex justify-content-center'>
          <div class=" card" >
             <img src={image4} style={styling} /> 

                <div class="card-body text-white">
                  <h5 class="card-title">Anime</h5>
                  <p class="card-text">I have made a page that shows you the animeshows.</p>
                  <a href="#" class="btn btn-primary" ><Link to='/anime'><span className='text-light'>Click Here</span></Link></a>
                </div>
              </div>

          </div>



        


      </div>

    </div>

  )
}
