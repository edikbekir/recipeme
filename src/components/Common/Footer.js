import React, { Component } from 'react';

export default class Footer extends React.Component {
    render(){
        return(
            <div className= "footer">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand"><img className="img-fluid" src="../../public/images/logo1.png" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <p className='author'>Recipeme-2020 </p>
                    </li>
                    <li className="nav-item">
                        <p className='authors'> Developing by Bekir E., Zadoroznyy G., Sakovych C.</p>
                    </li>
                </div>
            </div>
            <img className="img_local_ua" src="../../public/images/ua.jpg"></img>
                <img className="img_local_en" src="../../public/images/en.jpg"></img>
        </nav>
            </div>
        );
    }
}
