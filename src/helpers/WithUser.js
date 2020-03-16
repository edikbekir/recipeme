import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default function (ComposedComponent){
  class WithUser extends Component {

    componentWillMount = () => {
      if(!this.props.user.loggedIn){
        this.props.history.push('/login');
      }
    }

    render(){
      if(this.props.user.loggedIn){
        return <ComposedComponent {...this.props} />;
      } else {
        return null;
      }
    }
  }
  function mapStateToProps(state){
    return {
      user: state.users
    }
  }
  return withRouter(connect(mapStateToProps)(WithUser));
}
