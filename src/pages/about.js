import React, {Component} from 'react'
import "./about.css";

import { Link } from 'gatsby'
import Layout from '../components/layout'

class AboutUsPage extends Component {
  
  render() {
    return(
      <div className="page-one-bg">
      <Layout>
        <section className="hero is-primary header-hero ">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">My about page</h1>
            </div>
          </div>
        </section>
        </Layout>
        </div>
    )
  }
}

export default AboutUsPage
