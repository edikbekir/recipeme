import React, { Component } from 'react';

import TextInputField from '../Common/TextInputField';

export default class LoginForm extends React.Component {
  render(){

    const { onChange, onSubmit } = this.props;

    return(
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <TextInputField onChange={onChange} type="text" placeholder="Email" name="email" />
        </div>
        <div className="input-group">
          <TextInputField onChange={onChange} type="password" placeholder="Password" name="password" />
        </div>
        <div className="loginActions">
          <button className="loginButton" type="submit"> Login </button>
        </div>
      </form>
    )
  }
}
