import React, { Component } from 'react';

export default class MainTextField extends React.Component {
  render(){
    return(
      <form className="flex-form">
        <label htmlFor="from">
          <i className="ion-location"></i>
        </label>
        <input type="text" placeholder="Enter the link for the recipe" />
        <input type="submit" value="Search" />
      </form>
    )
  }
}
