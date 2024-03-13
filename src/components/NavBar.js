import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <div className="container">
            <div className="logo">
                <img classNameName = "logoimg" alt= "logo" src={logo} height={150}/>
                <h2 className = "title">Read Rover</h2>
            </div>
            <ul className = "navbar">
                <div className = "it">
                    <li className="items item1"><NavLink to="/">Home</NavLink></li>
                    <li className="items item2"><NavLink to="/about" >About</NavLink></li>
                    <li className="items item3"><NavLink to="/contact" >Contact</NavLink></li>
                    <li className="items item3"><NavLink to="/service" >Service</NavLink></li>
                </div>
                <li className="items signin spl"><NavLink to="/login" className = "li">Sign In</NavLink></li>
            </ul>
        </div>
  )
}
