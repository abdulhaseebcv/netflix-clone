import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../Config/axios'
import {banner} from '../../Config/url'
import { useState } from 'react'
import {imgUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Banner() {
  const [movies,SetMovies] = useState([])
  const [urlYt,seturlYt] = useState('')
  useEffect(() => {
    axios.get(banner).then((response)=>{
      SetMovies(response.data.results[9])
    })
  }, [])
  const handleclick=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then((response)=>{
     if(response.data.results.length!==0){
       seturlYt(response.data.results[1])
     }else{
       alert('Sorry,No video found')
     }
    })
   
 
   }
   const opts= {
     height: '390',
     width: '100%',
     playerVars: {
       autoplay: 1,
     },
   };
  
  return (
    <div>
    <div style={{backgroundImage:`url(${imgUrl + movies.backdrop_path})`}} className='banner'>
      <div className="content">
        <h1 className='title'>{movies ? movies.original_title : ''}</h1>
        <div className="buttons">
          <button onClick={()=>handleclick(movies.id)} className='btn'>Play</button>
          <button className='btn'>My List</button>
        </div>
        <h1 className='description'>{movies ? movies.overview : ''}</h1>
        <div className="fade-shade"></div>
      </div>
      
    </div>
    { urlYt ? < YouTube videoId={urlYt.key} opts={opts} />: '' }
    </div>
  )
}
export default Banner