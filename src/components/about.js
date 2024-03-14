import React from 'react'
import '../style/about.css'
import aboutImage from '../assets/about.png'

export const About = () => {
  return (
    <>
    <div className="aboutitem1">
        <div className="aboutitem3">
            <h1 className="abouthead">How it started</h1>
            <h1 className="aboutsubhead">A dead end is just a good place<br/>to turn around</h1>
            <h5 className="aboutdescription">Welcome to ReadRover, where readers embark on literary journeys and authors find their voice. Explore a world of endless stories, connect with fellow book lovers, and discover the next chapter of your reading adventure. Whether you're seeking captivating tales or eager to share your own, join our community and let the pages of imagination unfold.</h5>
        </div> 
        
        <div className="aboutitem2">
            <img src={aboutImage}/>
        </div>  
    </div>
    </>
  )
}
