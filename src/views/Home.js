import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Header from '../components/Common/Header';
import SearchField from '../components/Common/SearchField';
import NavBar from '../components/Common/NavBar';

export class Home extends React.Component {

  handleSubmit = e => {
    e.preventDefault();

    console.log('do request');
  }

  render(){
    return(
      <div className="main">
        <div className="main-heading">
          <Header />
          <SearchField onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
