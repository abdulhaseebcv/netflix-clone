import React, { useEffect, useState } from 'react'
import axios from '../../Config/axios'
import { toprated } from '../../Config/url'
import { imgUrl } from '../../Constants/Constants'
import './Toprated.css'

function Toprated() {
    const [movies, setMovies] = useState([])

    const sendReq = () => {
        axios.get(toprated).then((response) => {
            setMovies(response.data.results)
        }).catch((error) => {
            alert(error.message)
        })
    }

    useEffect(() => {
        sendReq()
    }, [])


    return (
        <div className="main">
            <div className='header-part'>
                <h1 className='toprated-title'>Top Rated on Netflix</h1>
            </div>
            <div className="toprated-row">
                <div className="toprated-card">
                    {
                        movies.map((obj, index) =>
                            <img key={index} className='toprated-img' src={`${imgUrl + obj.poster_path}`} alt="toprated" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Toprated