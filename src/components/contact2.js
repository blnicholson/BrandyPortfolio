import React from 'react'
import './contact-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPageTwo= () => (
    <div className = "hero is-large" id = "contactHero">
      <div className = "container" id = "contactContainer">
        <div className="columns">
          <div className="column is-6">
            <div id = "form-card" className = "card is-shadowless">
              <header className = "card-header is-shadowless">
                <p className = "card-header-title is-centered is-size-2 has-text-white">
                    Lets Get In Touch!
                </p>
              </header>
              <div className = "card-content" id = "contact-form-content">
                <form name = "contactMe" method = "POST" data-netlify = "true">
                <input type = "hidden" name = "form-name" value = "contactMe"/>
                    <input className = "input" type = "text" name = "firstName" placeholder = "First Name"/>
                    <button className = "button">Submit</button>
                </form>
              </div>
            </div>
        </div>
      </div>

    </div>

    </div>
)

export default ContactPageTwo;