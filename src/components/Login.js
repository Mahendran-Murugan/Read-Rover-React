import React, { useState,useEffect } from 'react'
import { useAuth } from './Auth'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import '../style/login.css'

export const Login = () => {

  const [userlist, setUserList] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(res=>setUserList(res.data))
    .catch(err=>console.log(err))
},[])

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const context = useAuth()

    
    const handleLogin = (e) =>{
      const isUserValid = userlist.some(u =>
        u.name === user && u.pass === pass
      )
      if(isUserValid){
        context.login(user)
        context.changeStatus()
        navigate('/')
      }else{
        alert("User name or Password Not Match")
      }
    }

    return (
      <div className="login-parent" data-aos="fade-down" >
        <h1>Login Here..!</h1>
        <div className="login-form-div"  data-aos="flip-left">
            <form className="login-form">
                <input type="user" placeholder="Username" value={user} onChange={(e)=>{setUser(e.target.value)}} id="user" />
                <input type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} id="password" />
                <button type="submit" id="login-btn"  onClick={handleLogin}>login</button>
                <p className="login-message login-register">
                  <span className ="regmes" >Not registered? </span>
                  <span><NavLink className ="regli" to="/register">Create an account</NavLink></span>
                </p>
            </form>
        </div>
    </div>
  )
}
