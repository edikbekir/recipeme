import React, {Component} from 'react';
import LoginForm from '../components/forms/login';

export default class Login extends React.Component {
  render(){
    return(
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registration Info</h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}