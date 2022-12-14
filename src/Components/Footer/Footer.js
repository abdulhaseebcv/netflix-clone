import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-row'>
     
     <div className="footer-shade">
     
      <img className='footer-logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix logo" />
      </div>
      <div className="footer-content">
      <p>Netflix Clone React made by <a href="https://github.com/abdulhaseebcv">Abdul Haseeb</a></p>
      <p>Copyrights @ Abdul Haseeb</p>
      <div className="socialmedia-logo">
      <a href="https://github.com/abdulhaseebcv" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://abdulhaseebcv.github.io/personal-website/" rel="noreferrer" target="_blank"><i className="fas fa-user-circle"></i></a>
          <a href="mailto:abdulcvhaseeb@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>  
     </div>

      
    </div>
  )
}

export default Footer