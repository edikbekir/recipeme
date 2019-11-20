import React, { Component } from 'react';

export default class TextInputField extends React.Component {
  render(){
    return(
      <input className="input--style-2" { ...this.props } />
    );
  }
}
