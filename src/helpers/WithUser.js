import React, {
  Component
} from "react";
import {
  connect
} from 'react-redux';
import {
  withRouter
} from 'react-router';

export default function(ComposedComponent) {
  class WithUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        authenticated: localStorage.getItem('authenticated')
      };
      this.checkLoggedIn = this.checkLoggedIn.bind(this);
    }

    checkLoggedIn() {
      if (!this.state.authenticated) {
        this.props.history.push(`/login?back=${encodeURIComponent(this.props.history.location.pathname)}`);
      }
    }

    componentWillMount() {
      this.checkLoggedIn();
    }

    render() {
      if (this.state.authenticated) {
        return <ComposedComponent { ...this.props } />
      }
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.users
    };
  }

  return withRouter(connect(mapStateToProps)(WithUser));
}
