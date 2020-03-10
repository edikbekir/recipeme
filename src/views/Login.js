import React, {Component} from 'react';
import LoginForm from '../components/forms/login';
import Footer from '../components/Common/Footer';

export default class Login extends React.Component {
  render(){
    return(
        <div>
          <div className="sign">
            <span className="sign__word">Регистрация</span>
          </div>
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
          <Footer/>
        </div>
    )
  }
}
