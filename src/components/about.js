import React from 'react'
// import '../style/about.css'
import aboutImage from '../assets/about.png'

export const About = () => {
  return (
    <>
      <header>
        <h1>About Us</h1>
    </header>
    <div className="item1">
        <div className="item3">
            <h1 className = "head">How it started</h1>
            <h1 className = "subhead">A dead end is just a good place<br/>to turn around</h1>
            <h5 className = "description">Welcome to ReadRover, where readers embark on literary journeys and authors find their voice. Explore a world of endless stories, connect with fellow book lovers, and discover the next chapter of your reading adventure. Whether you're seeking captivating tales or eager to share your own, join our community and let the pages of imagination unfold.</h5>
        </div> 
        
        <div className="item2">
            <img src={aboutImage}/>
        </div>  
    </div>
    </>
  )
}
