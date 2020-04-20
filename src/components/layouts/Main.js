import React, { Component } from 'react';
import MainRoutes from '../../config/routes/main';
import NavBar from '../Common/NavBar';

export default class Main extends React.Component {
  render(){
    return(
      <>
        <div className="main-nav">
          <NavBar />
        </div>
        <MainRoutes />
      </>
    )
  }
}
