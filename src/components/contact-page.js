import React from 'react'
import './contact-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => (
  <div className="hero is-large" id="contactHero">
    <div className="container" id="contactContainer">
      <div className="columns">
        <div className="column is-6">
          <div id="form-card" className="card is-shadowless">
            <header className="card-header is-shadowless">
              <p className="card-header-title is-centered is-size-3 has-text-teal">
                Lets Get in Touch!
              </p>
            </header>
            <div id="contact-form-content" className="card-content">
              <form name="contactMe" method="POST" data-netlify="true">
              <div className="field is-horizontal">
              <div className="field-body">
              <div className="field">
              <p className=" is-expanded has-icons-left">
              <input type="hidden" name="form-name" value="contactMe" />
                        <input
                          className="input"
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                        />
                        
                      </p>
                    </div>
                    <div className="field">
                      <p className=" is-expanded has-icons-left has-icons-right">
                        <input
                          className="input"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <p className=" is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="phone"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className=" is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Email"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className=" is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      name="messageSubject"
                      id="messageSubject"
                      placeholder="Subject"
                    />
                  </p>
                </div>
                <div className="field">
                  <p >
                    <textarea
                      id="contactText"
                      className="textarea"
                      rows="5"
                      name="sentMessage"
                      id="sentMessage"
                      placeholder="Drop Me a Line!"
                    />
                  </p>
                </div>
                <button
                  id="contact-form-submit-button"
                  className="button is-outlined is-full-width"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="card" id="contact-info">
            <div className="card-header is-shadowless">
            <br/>
            <br/>
              <p className="card-header-title is-centered is-size-3">
                Contact Me
              </p>
              <br />
              </div>
              <div className="card-content">
              <div className="content" id="contactPanel">
                <div className = "locationPin">
                <FontAwesomeIcon icon ="map-marker-alt" size="2x"/><span className="is-size-5" id="myLocation">Frisco, Tx</span>
                </div>
                <br/>
                <div className = "myPhone">
                <FontAwesomeIcon icon ="mobile-alt" size="2x"/><span id="myNumber">972-971-2576</span>
                </div>
                <br/>
                <div className = "emailAddy">
                <FontAwesomeIcon icon ="envelope" size="2x"/><span id="myEmail">blnicholson13@gmail.com</span>
                </div>
                <hr/>
                <ul id="social">
                  <li className="socialMedia">
                    <a href=" https://github.com/blnicholson">
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </a>
                  </li>
                  <li className="socialMedia">
                    <a href=" https://www.linkedin.com/in/brandy-nicholson/">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default ContactPage
