import React, { Component } from 'react';
import 'w3-css/w3.css';

export default class NavBar extends React.Component {
  render(){
    const { showNavBar, toggleNavBar } = this.props;
    const display = showNavBar ? 'block' : 'none';
    return(
      <nav className="w3-sidebar w3-bar-block  w3-top w3-xlarge w3-animate-left" style={{display: display, zIndex:2, minWidth: '300px', width:'40%'}} >
        <a onClick={toggleNavBar} className="w3-bar-item w3-button">Close Menu</a>
        <a className="w3-bar-item w3-button">Food</a>
        <a className="w3-bar-item w3-button">About</a>
      </nav>
    )
  }
}
