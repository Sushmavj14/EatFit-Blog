import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="text">

        <img src="https://blog.eatfit.in/wp-content/uploads/2022/10/Screenshot-2022-11-14-095801.png" alt="img loading" />
        <h1>Eatfit</h1>
        </div>
        <hr />
        <h3>Follw Us</h3>
        <div className="icons">
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
