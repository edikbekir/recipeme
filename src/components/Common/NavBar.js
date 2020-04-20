import React, { Component } from 'react';
import 'w3-css/w3.css';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

  activeRoute(routeName) {
    return "active"
    // return this.props.location.pathname == routeName ? "active" : "";
  }

  render(){

    return(
      <nav className="w3-sidebar w3-bar-block  w3-top w3-xlarge w3-animate-left" >
        <a className="w3-bar-item w3-button">
          <Link to="/home"><i className="fas fa-heartbeat"></i> <span className="nav-label">Search</span></Link>
        </a>
        <a className="w3-bar-item w3-button">
          <Link to="/recipes"><i className="fas fa-heartbeat"></i> <span className="nav-label">Recipes</span></Link>
        </a>
        <a className="w3-bar-item w3-button">
          <Link to="/shop"><i className="fas fa-heartbeat"></i> <span className="nav-label">Shop</span></Link>
        </a>
        <a className="w3-bar-item w3-button">
          <Link to="/videos"><i className="fas fa-heartbeat"></i> <span className="nav-label">Popular videos</span></Link>
        </a>
        <a className="w3-bar-item w3-button">
          <Link to="/markets"><i className="fas fa-heartbeat"></i> <span className="nav-label">Markets</span></Link>
        </a>
      </nav>
    )
  }
}
