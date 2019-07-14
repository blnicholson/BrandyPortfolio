import React from 'react'
// import "./about.css";

import { Link } from 'gatsby'
import Layout from '../components/layout'

const DashBoardPage = () => (
  <div className="page-one-bg">
  <Layout>
    <section className="hero is-primary header-hero ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li className="is-active">
                  <Link to="/page-2">Page 2</Link>
                </li>
              </ul>
            </nav>
          </h2>
        </div>
      </div>
    </section>
    </Layout>
    </div>
)

export default DashBoardPage
