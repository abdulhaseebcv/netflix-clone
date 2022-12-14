import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  const [state,setState] = useState(false)
  const handleClick = ()=>{
    setState(!state)
  }
  return (
    <div className='nav'>
      <div className="left-section">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
      </div>
     <div>
      <ul id='navbar' className={state ? '#navbar active' : '#navbar'}>
        <Link className='link' to='/netflix-clone'><li>Home</li></Link>
        <Link className='link' to='/toprated'><li>Top Rated</li></Link>
        <Link className='link' to='/trending'><li>Trending</li></Link>
        <Link className='link' to='/popular'><li>Popular</li></Link>
        <Link className='link' to='/upcoming'><li>Upcoming</li></Link>
      </ul>
     </div>
     <div className="toggle">
      <button id='btn' onClick={handleClick}><i className='fa-solid fa-bars'></i></button>
     </div>
      <div className="right-section">
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
      </div>
      </div>
  )
}

export default Navbar