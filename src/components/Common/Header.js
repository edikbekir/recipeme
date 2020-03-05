import React, { Component } from 'react';
import NavBar from './NavBar';
import 'w3-css/w3.css';

export default class Header extends React.Component {
  state = {
    showNavBar: false
  }


  render(){
    return(
        <nav class="navbar navbar-expand-lg" >
          <a class="navbar-brand" href="#"><img class="img-fluid img_logo" src="../../public/images/logo1.png" alt=""></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Главная <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Распознать продукты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Мои заказы</a>
              </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" action="№" >
            <button class="btn btn-outline-warning my-2 my-sm-0 " type="submit"  > Вход</button>   </form>
          <form class="form-inline my-2 my-lg-0 " action="№">
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" >Регистрация</button>
          </form>
        </div>
  </nav>
    )
  }
}
