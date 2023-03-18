import React, { useEffect, useState } from 'react'
import axios from '../../Config/axios'
import { upcoming } from '../../Config/url'
import { imgUrl } from '../../Constants/Constants'
import './Upcoming.css'

function Upcoming() {
    const [movies, setMovies] = useState([])

    const sendReq = () => {
        axios.get(upcoming).then((response) => {
            setMovies(response.data.results)
        })
    }
    useEffect(() => {
        sendReq()
    }, [])


    return (
        <div className="upcoming-section">
            <h1 className='upcoming-title'>Upcoming Movies</h1>
            <div className="upcoming-row">
                <div className="upcoming-card">
                    {
                        movies.map((obj, index) =>
                            <img key={index} className='upcoming-img' src={`${imgUrl + obj.poster_path}`} alt="upcoming" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Upcoming