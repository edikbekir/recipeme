import React, { Component } from 'react';
import 'w3-css/w3.css';

export default class Header extends React.Component {
  render(){
    return(
      <div className="w3-top navbar">
        <div className="w3-xlarge bg-black" style={{ margin: 'auto'}}>
          <div onClick={() => this.toggleNavBar() } className="w3-button w3-padding-16 bg-white w3-left">☰</div>
          <div className="w3-center w3-padding-16 bg-white">R E C I P E M E</div>
        </div>
      </div>
    )
  }
}
