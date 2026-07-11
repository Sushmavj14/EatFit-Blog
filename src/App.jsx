import React from 'react'
import Navbar from './Project/Navbar/Navbar'
import Title from './Project/Title/Title'
import Subnavbar from './Project/Subnavbar/Subnavbar'
import Cards from './Project/Cards/Cards'
import Footer from './Project/Footer/Footer'
import "./App.css"


const App = () => {
  return (
    <div>
      <div className="app-container">
        <div className="navbar">
      <Navbar/>
        </div>
        <div className="title">
      <Title/>
        </div>
        <div className="subnavbar">
      <Subnavbar/>
        </div>
        <div className="cards">
      <Cards/>
        </div>
        <div className="footer">
      <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
