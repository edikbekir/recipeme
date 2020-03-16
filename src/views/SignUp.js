import React, {Component} from 'react';
import SignUpForm from '../components/forms/signup';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { usersActions } from '../data/actions/users';
import parser from 'url-parse';

export class SignUp extends React.Component {
  constructor(props){
    super(props);

    const { query : { back = '/'} } = parser(this.props.location.search, '', true);

    this.state = {
      redirect: back,
      user: {
        password: '',
        email: ''
      },
      error: { message: "", value: false }
    };

  }

  componentDidUpdate(prevProps){
    if(this.props.user.loggedIn){
      this.props.history.push('/home');
    }
  }

  handleChange = () => {
    this.setState(state => {
      const user = Object.assign({}, state.user);
      user[`${event.target.name}`] = event.target.value;
      return {
        user
      };
    });
  };

  _handleEmptyFields = () => {
    const stateValues = Object.values(this.state.user);
    const existEmptyField = stateValues.some( field => field === "" );
    if(existEmptyField){
      this.setState({ error: { value: true, message: "Please complete the form" } });
    } else {
      this.setState({ error: { value: false, message: "" } });
    }
    return existEmptyField;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const existEmptyField = this._handleEmptyFields();
    if(!existEmptyField){
      this.props.onSignUp(this.state.user);
    }
  }

  render(){
    return(
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="login-title">Sign up</h2>
              <SignUpForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
              { this.props.user.error && <div>{ this.props.user.error }</div> }
              { this.state.error.value && <div>{ this.state.error.message }</div> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: params => dispatch(usersActions.signup(params)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
