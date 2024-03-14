import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../style/nav.css'

export const NavBar = () => {
  return (
    <div className="container">
            <div className="logo">
                <img classNameName = "logoimg" alt= "logo" src={logo} height={150}/>
                <h2 className = "title">Read Rover</h2>
            </div>
            <ul className = "navbar">
                <div className = "it">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    <li className="list item2"><NavLink className="items" to="/about" >About</NavLink></li>
                    <li className="list item3"><NavLink className="items" to="/contact" >Contact</NavLink></li>
                    <li className="list item3"><NavLink className="items" to="/service" >Service</NavLink></li>
                </div>
                <li className="list signin"><NavLink to="/login" className = "items li">Sign In</NavLink></li>
            </ul>
        </div>
  )
}
