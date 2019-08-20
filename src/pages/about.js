import React, {Component} from 'react'
import "./about.css";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Pagination from "../components/test.js"

class AboutUsPage extends Component {
  
  render() {
    return(
      <div className="page-one-bg">
      <Layout>
        <section className="hero is-primary header-hero ">
          <div className="hero-body">
            <div className="container">
              <Pagination/>
            </div>
          </div>
        </section>
        </Layout>
        </div>
    )
  }
}

export default AboutUsPage
