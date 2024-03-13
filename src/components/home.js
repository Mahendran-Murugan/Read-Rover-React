import React from 'react'
import { NavBar } from './NavBar'
import homeImage from '../assets/homeImage.png'
import { Link } from 'react-router-dom'
import '../style/style.css'

export const Home = () => {
  return (
    <>
      <NavBar/>
      <section>
        <div className="centerContainer">
            <div className="centerText">
                <h1 className = "maintext">
                    <p>Books</p> open doors <p>to worlds</p> we never knew <p>that existed...!</p>
                </h1>
                <div className = "centerbtn">
                    <li className="items signin spl1"><Link to="/" className = "li">Get Started</Link></li>
                    <li className="items signin spl2"><Link href="/" className = "li">Discover</Link></li>
                </div>
            </div>
            <img src = {homeImage} alt= "homeImage" className = "centerImage"/>
        </div>
    </section>
    </>
  )
}
