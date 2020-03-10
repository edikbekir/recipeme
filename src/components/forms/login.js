import React, { Component } from 'react';

import TextInputField from '../Common/TextInputField';

export default class LoginForm extends React.Component {
  render(){
    return(
      <form>
        <div className="input-group">
          <TextInputField type="text" placeholder="Email" name="firstName" />
        </div>
        <div className="input-group">
          <TextInputField type="password" placeholder="Password" name="password" />
        </div>
        <div className="input-group">
          <TextInputField type="password" placeholder="Password confirmation" name="passwordConfirmation" />
        </div>
          <button className="sign_up_button"> Зареєструватись</button>
      </form>
    )
  }
}
