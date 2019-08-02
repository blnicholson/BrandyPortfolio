import React from "react";
import {Link} from "gatsby";
import './all.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippy.js/react";
import Logo from "../images/transparentBlackcover_photo.png"

const Landing = () => (
    <div className = "hero is-large">
     
        <nav className = "navbar" role="navigation" aria-label = "main navigation">
          <div className = "navbar-brand">
            <div className = "navbar-item" href="#">
            <img src = {Logo} />
            </div>
            <div className = "navbar-item">
            <a href = " https://github.com/blnicholson">
              <FontAwesomeIcon icon = {["fab", "github"]} size="2x"/>
              </a>
              </div>
              <div className = "navbar-item">
              <a href = " https://www.linkedin.com/in/brandy-nicholson/"> 
              <FontAwesomeIcon icon = {["fab", "linkedin"]} size="2x"/>
              </a>
              </div>
              <div className = "navbar-item">
              <a href = "mailto:blnicholson13@gmail.com?subject = Your Portfolio">
              <FontAwesomeIcon icon = "envelope" size = "2x"/>
              </a>
              </div>
          </div>
        </nav>
        <div className = "container has-text-centered name">
        <h1 id="nameTitle">Brandy</h1>
        </div>
        <div className = "sideIcons">
        <ul className = "sideMenu">
          <li className= "sideIcon">
            <Link to ="/dashboard">
              <span class="icon">
                <FontAwesomeIcon icon = "chart-line" size="2x"/>
              </span>
            </Link>
          </li>
          <li className= "sideIcon">
            <Link to = "/about">
              <span class="icon">
                <FontAwesomeIcon icon = "portrait" size="2x"/>
              </span>
            </Link>
          </li>
          <li className= "sideIcon">
            <Link to = "/portfolio">
              <span class="icon">
                <FontAwesomeIcon icon = "sitemap" size="2x"/>
              </span>
            </Link>
          </li>
          <li className= "sideIcon">
            <Link to = "/contact">
              <span className="icon">
                <FontAwesomeIcon icon = "envelope" size="2x"/>
              </span>
            </Link>
          </li>
        </ul>
          
        </div>
        
        <div className="rightArrow">
        <Link to ="/dashboard">
        <FontAwesomeIcon icon ="arrow-alt-circle-right" size="3x"/>
        </Link>
        </div>
        

        
      
   </div>
)
export default Landing;