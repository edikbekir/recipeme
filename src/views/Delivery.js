import React, { Component } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

export default class Delivery extends React.Component {
    render(){
        return(
            <div>
                    <Header />
                <div className="container-fluid text-center delivery_central_container">
                    <h3> Ваш заказ </h3>
                    <div className="row">
                        <div className="goods col-lg-4 offset-2">
                            <h4> Уточните количество нужных ингридиентов: </h4>
                        </div>

                        <div className="col-lg-3 offset-2">
                            <i className="fas fa-plus fa-2x"></i>
                            <i className="fas fa-edit fa-2x "></i>
                            <i className="fas fa-trash-alt fa-2x  "></i>
                        </div>
                        <div className="col-lg-8 offset-2">
                            <table className="table-dark table-bordered table table-hover ">
                                <thead>
                                <tr>
                                    <th scope="col">Огурцы</th>
                                    <th scope="col">2 кг</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Яйца</th>
                                    <td> 6 шт</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-2 third_column">
                            <p> + 40 грн доставка</p>
                        </div>

                        <div className="col-lg-2 offset-3 delivery_signs"><p
                            className="approximate_price_sign"> Приблизительная стоимость</p>
                            <p className="name_sign">Магазин</p>
                            <p className="shop_sign">Имя</p>
                            <p className="number_sign"> Номер телефона</p>
                            <p className="street_sign"> Улица</p>
                            <p className="house_sign">Дом </p>
                            <p className="apartment_sign">Квартира </p>
                            <p className="floor_sign"> Этаж </p>
                        </div>
                     <div className="col-lg-2 delivery_inputs">
                           <form action = "#">
                               <input className="approximate_cost_input" type="text"></input>
                               <select className="shop">
                            <option value="r1">Сильпо</option>
                            <option value="r2">Атб</option>
                            <option value="r3">Класс</option>
                               </select>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                           </form>
                    </div>
                      {/*  <div className="col-lg-3 offset-4">
                              <button> Заказать</button>
                        </div>*/}
                        <button type="button" className="btn btn-dark">Заказать</button>
                        <div className="col-lg-12  bottom_sign">
                 <p> *После отправки заказа он будет обработан в течении 5-20 минут и менеджер свяжится с
                                вами по телефону
                                *Стоимость заказа указана приблизительная. Основана на средней цене продукта. При
                                доставке продуктов вам будет предоставляться чек для оплаты</p>
                    </div>

                    </div>
                </div>
                    <Footer/>
            </div>
        )
    }
}
