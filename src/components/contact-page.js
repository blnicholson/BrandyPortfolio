import React from 'react'
import './contact-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => (
  <div>
  <h1>Contact</h1>
    <form name="contactMe" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contactMe" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
)
export default ContactPage
