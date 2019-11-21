import React, { Component } from 'react';
import Header from '../components/Common/Header';
import MainTextField from '../components/Common/MainTextField';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div className="main-heading">
          <MainTextField />
        </div>
      </div>
    )
  }
}
