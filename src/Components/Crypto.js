import React, { useEffect, useState } from 'react'

export default function Crypto() {

  const [data, setData] = useState([])
  const [search,setsearch]= useState('')

  function cryptoData() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false%27%27')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
        setData(data)
      })
  }

  useEffect(() => {
    cryptoData()
  }, [search])

  let filterData= data.filter((val)=>{
    return val.name.toLowerCase().includes(search.toLowerCase())
  })

  const cryptostyle={
    width:'3rem',
    height:'3rem'
  }
  return (
<div className='cryptoContainer'>

  <div class="input-group mb-3 d-flex justify-content-center bg-secondary-subtle">

<input type="text" className="search mt-3 mb-3  " placeholder="SearchName" onChange={(e)=>setsearch(e.target.value)}/>
</div>


   <div className='container'>
   <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Id</th>
      <th scope="col">Price</th>
    </tr>
  </thead> 

  
  <tbody>{
    filterData.map((val)=>{
      return(
        
     <tr>
     <td>#</td>
     <td><img src={val.image} style={cryptostyle}/></td>
     <td>  <h4>{val.name}</h4></td>
     <td><h5>{val.symbol}</h5></td>
     <td><h5>{val.id}</h5></td>
     <td> <h5>{val.current_price}</h5></td>
   </tr>
    
            
    )
  })
    }
   
  </tbody>
</table>
   </div>
        

              
            
             
             
            
</div>
           
  )
  

}
