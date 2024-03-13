import React from 'react'

export const Contact = () => {
  return (
    <div>
      <div className="main">
        <div className="image">
            <img src="book3.png" alt="img" width="60%" height="30%"/>
            <div className="label">
            <h1>Contact Us</h1>
                <input type="text" id="firstname" name="ftname" placeholder= "Enter your name :" size="20" required/>   <br/><br/>
                <input type="text" id="email" name="Email" placeholder= "Enter a valid email address :" size="20" required/> <br/><br/>
                <input type="text" id="phone" name="Phone" placeholder="Phone Number" size="10" required/> <br/><br/>
                Message : <br/>
                <textarea cols="80" rows="7" value="Message"></textarea> 
                <button onclick="SubmitEvent">SEND MESSAGE</button>
            </div>
        </div>
        <div className="icon">
            <div className="map">
                <img src="placeholder.png"/>
                <p>Our&nbsp;Main&nbsp;Location</p>
            </div>
            <div className="phone">
                <img src="telephone.png"/>
                <p>Phone&nbsp;Number</p>
            </div>
            <div className="mail">
                <img src="mail.png"/>
                <p>E-&nbsp;Mail</p>
            </div>
            <div className="time">
                <img src="alarm.png"/>
                <p>Opening&nbsp;Time</p>
            </div>
        </div>
    </div>
    </div>
  )
}
