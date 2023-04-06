import React, { useEffect, useState } from 'react'

export default function Anime() {

  const [data, setData] = useState([])
  const[search,setSearch]=useState('')

  function anidata() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a601ff3eb8msh24154aa79244c1fp1b5ebbjsn2840a00685f4',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };

    fetch('https://anime-db.p.rapidapi.com/anime?page=3&size=100&genres=Fantasy%2CDram&sortBy=ranking&sortOrder=asc', options)
      .then(response => { 
        return response.json() })
      .then((data) => {
        console.log(data.data)
        
        setData(data.data)
      })
  }

  useEffect(() => {
    anidata()
  }, [search])


let filterData=data.filter((val)=>{
  return val.title.toLowerCase().includes(search.toLowerCase())
})





  return (
    <div className='AnimeContainer'>
     
      <div class="input-group mb-3 d-flex justify-content-center">

<input type="text" className="search mt-3 " placeholder="SearchName" onChange={(e)=>setSearch(e.target.value)} />
</div>
      <div className='animeData  d-flex justify-content-around'>
     

    {
      filterData.map((val) => {
        return (
          <div >
            <div className="cards" >
              <img src={val.image} className="card-img-top" alt="..."  />
              <div className="card-body">
              <p className="card-text"><span className='heading'>Ranking</span>:{val.ranking}</p>
              <p className='card-text'><span className='heading'>Type</span>:{val.type}</p>
                <p className="card-title"><span className='heading'>Title</span>:{val.title}</p>
                   <p><span className='heading'>Genres</span>:{val.genres.join(',')}</p>
              </div>
            </div>
          </div>

        )
      })
    }
        
      </div>
  
    

    </div>
  )

}




 