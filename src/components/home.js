import React from 'react'
import homeImage from '../assets/homeImage.png'
import { Link } from 'react-router-dom'
import '../style/home.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './Auth'


export const Home = () => {
  const context = useAuth()
  return (
    <>
    {localStorage.getItem("user") !== "" && context.login(localStorage.getItem("user"))}
    {context.redirected && toast("Login Successful....")}
    {context.redirected && context.changeStatus()}
    <ToastContainer/>
      <section>
      {localStorage.getItem("user") !== "" && <h2 className=''>Welcome {localStorage.getItem("user")}</h2>}
        <div className="centerContainer">
            <div data-aos="fade-down" className="centerText">
                <h1 className = "maintext">
                    <p>Books</p> open doors <p>to worlds</p> we never knew <p>that existed...!</p>
                </h1>
                <div className = "centerbtn">
                    <li className="list splbtn spl1"><Link to="/" className = "items li2">Get Started</Link></li>
                    <li className="list splbtn spl2"><Link href="/" className = "items li2">Discover</Link></li>
                </div>
            </div>
            <img src = {homeImage} alt= "homeImage" data-aos="fade-down" className = "centerImage"/>
        </div>
    </section>
    </>
  )
}
