import React, { useEffect, useState } from 'react'
import axios from '../../Config/axios'
import { trending } from '../../Config/url'
import {imgUrl} from '../../Constants/Constants'
import './Trending.css'

function Trending() {
    const [movies, setMovies] = useState([])
         useEffect(() => {
        axios.get(trending).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    
    
  return (
    <div className="trending=section">
         <h1 className='trending-title'>Trending Now</h1>
        <div className="trending-row">
        <div className="trending-card">
            {
                movies.map((obj,index)=>
                <img key={index} className='trending-img'  src={`${imgUrl+obj.poster_path}`} alt="trending" />
                )
            }
        </div>
    </div>
    </div>
  )
}

export default Trending