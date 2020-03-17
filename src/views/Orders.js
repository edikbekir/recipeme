import React, { Component } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

export default class Orders extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid orders_central_container text-center">
                    <h3> Ваши заказы </h3>
                    <div className="row">

                        <div className="col-lg-8 offset-2">
                            <table className="table table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Номер</th>
                                    <th scope="col">Дата</th>
                                    <th scope="col">Получатель</th>
                                    <th scope="col">Цена</th>
                                    <th scope="col">Статус</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>
                                    <td>?</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}