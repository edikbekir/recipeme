import React, { Component } from 'react';
import NavBar from './NavBar';
import 'w3-css/w3.css';


export default class Header extends React.Component {
  state = {
    showNavBar: false
  }


  render(){
    return(
        <nav className="navbar navbar-expand-lg" >
          <a className="navbar-brand" href="#">
              <img className="img-fluid img_logo" src="../../public/images/logo1.png" alt=""></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Распознать продукты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Мои заказы</a>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" action="№" >
            <button className="btn btn-outline-warning my-2 my-sm-0 " type="submit"  > Вход</button>   </form>
          <form className="form-inline my-2 my-lg-0 " action="№">
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" >Регистрация</button>
          </form>
        </div>
  </nav>
    )
  }
}
