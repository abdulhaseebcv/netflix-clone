import React, { useEffect, useState } from 'react'
import axios from '../../Config/axios'
import { popular } from '../../Config/url'
import {imgUrl} from '../../Constants/Constants'
import './Popular.css'

function Popular() {
    const [movies, setMovies] = useState([])
         useEffect(() => {
        axios.get(popular).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    
    
  return (
    <div className="popular-section">
         <h1 className='popular-title'>Popular on Netflix</h1>
        <div className="popular-row">
        <div className="popular-card">
            {
                movies.map((obj,index)=>
                <img key={index} className='popular-img'  src={`${imgUrl+obj.poster_path}`} alt="popular" />
                )
            }
        </div>
    </div>
    </div>
  )
}

export default Popular