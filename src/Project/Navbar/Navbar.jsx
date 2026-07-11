import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="empty"></div>
        <div className="elements">
          <a href="">Home</a>
          <a href="">why eatfit?</a>
          <a href="">Visit Eatfit</a>
        </div>
        <div className="icons">
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
