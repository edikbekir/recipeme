import React, { Component } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

export default class Recognize extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid recognize_central_container text-center">

                    <h3> Мы поможем вам получить список любого рецепта за пару секунд </h3>
                    <div className="row">
                        <div className="col-lg-6 offset-2">
                            <form action="">
                                <input type="text" placeholder="Вставьте ссылку"></input>
                            </form>
                        </div>
                            <form action="">
                                <button className="enter_action" type="submit"> ></button>
                            </form>
                        <div className="col-lg-2 offset-8">
                            <i className="fas fa-plus"></i>
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                        <div className="col-lg-8 offset-2">
                            <table className="table table-light main_table">
                                <thead>
                                <tr>
                                    <th scope="col"> s</th>
                                    <th scope="col"> s</th>
                                    <th scope="col">s</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"> s</th>
                                    <td> s</td>
                                    <td>s</td>
                                </tr>
                                <tr>
                                    <th scope="row"> s</th>
                                    <td>s</td>
                                    <td>s</td>
                                </tr>
                                <tr>
                                    <th scope="row"> s</th>
                                    <td>s</td>
                                    <td>s</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4 offset-4 under_table ">
                            <form action="">
                                <button type="submit"> Распечатать</button>
                                <button type="submit"> Заказать доставку</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
}
}