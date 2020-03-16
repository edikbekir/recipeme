import React, { Component } from 'react';

import TextInputField from '../Common/TextInputField';

export default class SignUp extends React.Component {
  render(){

    const { onChange, onSubmit } = this.props;

    return(
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <TextInputField onChange={onChange} type="text" placeholder="First name" name="firstName" />
        </div>
        <div className="input-group">
          <TextInputField onChange={onChange} type="text" placeholder="Last name" name="lastName" />
        </div>
        <div className="input-group">
          <TextInputField onChange={onChange} type="text" placeholder="Email" name="email" />
        </div>
        <div className="input-group">
          <TextInputField onChange={onChange} type="password" placeholder="Password" name="password" />
        </div>
        <div className="loginActions">
          <button className="loginButton" type="submit"> Register </button>
        </div>
      </form>
    )
  }
}
