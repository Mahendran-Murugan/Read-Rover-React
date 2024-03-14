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
    {context.redirected && toast("Login Successful....")}
    {context.redirected && context.changeStatus()}
    <ToastContainer/>
      <section>
        <div className="centerContainer">
            <div className="centerText">
                <h1 className = "maintext">
                    <p>Books</p> open doors <p>to worlds</p> we never knew <p>that existed...!</p>
                </h1>
                <div className = "centerbtn">
                    <li className="list splbtn spl1"><Link to="/" className = "items li2">Get Started</Link></li>
                    <li className="list splbtn spl2"><Link href="/" className = "items li2">Discover</Link></li>
                </div>
            </div>
            <img src = {homeImage} alt= "homeImage" className = "centerImage" height = "555px"/>
        </div>
    </section>
    </>
  )
}
