import React from 'react'
import '../style/logout.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Logout = () => {
    const navigate = useNavigate()
    const context = useAuth()
  return (
    <div className="logout-modal">
      <h2 className='logout-text' data-aos = "fade-in">Are You Really Want to Logout?</h2>
      <div className='logout-btns'>
        <button className="logout-button"  data-aos = "fade-in" onClick={()=>{
            context.logout()
            navigate('/login')
            }}>Logout</button>
        <button className="cancel-button" data-aos = "fade-in">Cancel</button>
      </div>
    </div>
  )
}
