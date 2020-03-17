import React, { Component } from 'react';
import Header from '../components/Common/Header';
import MainTextField from '../components/Common/MainTextField';
import Footer from '../components/Common/Footer';

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="main-heading">
                </div>
                <MainTextField/>
                <Footer/>
            </div>
        )
    }
}
