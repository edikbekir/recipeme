import React, { Component } from 'react';

export default class MainTextField extends React.Component {
  render(){
    return(
      <form class="flex-form">
        <label for="from">
          <i class="ion-location"></i>
        </label>
        <input type="text" placeholder="Enter the link for the recipe" />
        <input type="submit" value="Search" />
      </form>
    )
  }
}
