import React from 'react'
import homeImage from '../assets/homeImage.png'
import { Link } from 'react-router-dom'
import '../style/home.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './Auth'


export const Home = () => {
  const context = useAuth()
  return (
    <div className='home-container'>
      {localStorage.getItem("user") !== "" && context.login(localStorage.getItem("user"))}
      {context.redirected && toast("Login Successful....")}
      {context.redirected && context.changeStatus()}
      <ToastContainer />
      {localStorage.getItem("user") !== "" && <p className='welcome-txt' data-aos='fade-down'>Welcome Back <span className='username'>{localStorage.getItem("user")} ...!</span></p>}
      <div className="center-container">
        <div data-aos="fade-down" className="centerText">
          <h1 className="maintext">
            <p>Books</p> open doors <p>to worlds</p> we never knew <p>that existed...!</p>
          </h1>
          <div className="centerbtn">
            <li className="spllist splbtn spl1"><Link to="/book" className="itemsspl li2">Get Started</Link></li>
            <li className="spllist splbtn spl2"><Link href="/" className="itemsspl li2">Discover</Link></li>
          </div>
        </div>
        <img src={homeImage} data-aos="fade-down" alt="homeImage" className="centerImage" />
      </div>
    </div>
  )
}
