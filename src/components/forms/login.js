import React, { Component } from 'react';

import TextInputField from '../Common/TextInputField';

export default class LoginForm extends React.Component {
  render(){
    return(
      <form>
        <div className="input-group">
          <TextInputField type="text" placeholder="First Name" name="firstName" />
        </div>
        <div className="input-group">
          <TextInputField type="text" placeholder="Last Name" name="lastName" />
        </div>
        <div className="input-group">
          <TextInputField type="password" placeholder="Password" name="password" />
        </div>
        <div className="input-group">
          <TextInputField type="password" placeholder="Password confirmation" name="passwordConfirmation" />
        </div>
      </form>
    )
  }
}
