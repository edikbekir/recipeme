import React, { Component } from 'react';

export default class TextInputField extends React.Component {
  render(){
    const { className } = this.props;
    return(
      <input className={className ? className : "input--style-2"} { ...this.props } />
    );
  }
}
