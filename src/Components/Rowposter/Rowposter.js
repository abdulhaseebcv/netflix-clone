import React, { useState,useEffect } from 'react'
import './Rowposter.css'
import axios from '../../Config/axios'
import {imgUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'
import {API_KEY} from '../../Constants/Constants'



function Rowposter(props) {
  const [movies, setMovies] = useState([])
  const [urlYt,seturlYt] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
  const handleclick=(id)=>{
   axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
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
      
      <div className='row-poster'>
        <div className="title-poster">
      <h2>{props.title}</h2>
      </div>
      <div className="posters">
      
        
     { movies.map((obj,index)=>{
      
      
        return <img key={index} onClick={()=>handleclick(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={ props.originals ? `${imgUrl+obj.backdrop_path}` : `${imgUrl+obj.poster_path}`} alt="poster"/>
        
        
      })
    }
    
      </div>
      { urlYt ? < YouTube videoId={urlYt.key} opts={opts} />: '' }
    </div>
     
  )
}

export default Rowposter