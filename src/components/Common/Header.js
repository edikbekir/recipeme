import React, { Component } from 'react';
import NavBar from './NavBar';
import 'w3-css/w3.css';

export default class Header extends React.Component {
  state = {
    showNavBar: false
  }

  toggleNavBar = () => {
    this.setState({
      showNavBar: !this.state.showNavBar
    })
  }

  render(){
    return(
      <div className="w3-top navbar">
        <div className="w3-xlarge bg-black border-bottom-radius" style={{ margin: 'auto'}}>
          <div onClick={() => this.toggleNavBar() } className="w3-button w3-padding-16 border-bottom-radius bg-white w3-left">☰</div>
          <div className="w3-center w3-padding-16 bg-white">R E C I P E M E</div>
          <NavBar toggleNavBar={this.toggleNavBar} showNavBar={this.state.showNavBar} />
        </div>
      </div>
    )
  }
}
