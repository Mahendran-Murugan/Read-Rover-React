import React, { useState } from 'react' 
import { NavLink, useNavigate } from 'react-router-dom'
import '../style/register.css'
import axios from 'axios'

export const Register = () => {
    const navigate = useNavigate();

    
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    
    const handleRegister = () =>{
        axios.post('http://localhost:3001/users',{
            "name":user,
            "email":email,
            "pass":pass
        })
        navigate('/login')
    }

  return (
    <div className="register-parent">
        <h1 className="title-log-register">Register Here..!</h1>
        <div className="register-form-div">
            <form onSubmit={handleRegister} className="register-form">
                <input type="text" value={user} onChange={(e)=>{setUser(e.target.value)}} placeholder="Username" id="username" />
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" id="email" />
                <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" id="password" />
                <button type="submit" id="register-btn">login</button>
                <p className="register-message register-login">
                  <span className ="logmes" >Already Have an Account? </span>
                  <span><NavLink className ="logli" to="/login">Login to an account</NavLink></span>
                </p>
            </form>
        </div>
    </div>
  )
}
