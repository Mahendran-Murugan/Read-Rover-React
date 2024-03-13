import React from 'react'
import '../style/contact.css'

export const Contact = () => {
  return (
    <div class = "wholeContainer">
    <div class="contactcontainer">
      <div class="contacttitle">Contact Us</div>
      <form action="#">
        <div class="contactrow">
          <div class="contactform-group">
            <input type="text" required id="firstname" />
            <div class="contactunderline"></div>
            <label for="firstname">First Name</label>
          </div>
          <div class="contactform-group">
            <input type="text" required id="lastname" />
            <div class="contactunderline"></div>
            <label for="lastname">Last Name</label>
          </div>
        </div>
        <div class="contactrow">
          <div class="contactform-group">
            <input type="text" required id="email" />
            <div class="contactunderline"></div>
            <label for="email">Email</label>
          </div>
          <div class="contactform-group">
            <input type="text" required id="contact" />
            <div class="contactunderline"></div>
            <label for="contact">Contact No</label>
          </div>
        </div>
        <div class="contactrow">
          <div class="contactform-group textarea">
            <textarea required></textarea>
            <div class="contactunderline"></div>
            <label for="">Write your message</label>
          </div>
        </div>
        <div class="contactrow">
          <div class="contactform-group">
            <input type="submit" value="Send Message" />
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}
