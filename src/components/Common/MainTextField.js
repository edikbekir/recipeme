import React, { Component } from 'react';

export default class MainTextField extends React.Component {
  render(){
    return(
        <div>
        <div className="sim-slider img-fluid">
            <ul className="sim-slider-list">
                <li className="sim-slider-element"><img src="../../public/images/image1.jpg" alt="0"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image2.jpg" alt="1"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image3.jpg" alt="2"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image4.jpg" alt="4"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image5.jpg" alt="5"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image7.jpg" alt="7"></img></li>
                <li className="sim-slider-element"><img src="../../public/images/image9.jpg" alt="9"></img></li>
            </ul>
        </div>
            <div className="container-fluid central_container ">

                <div className="row justify-content-center">
                    <div className="col-lg-6 ">
                        <form action="">
                            <input type="text" placeholder="Вставьте ссылку"></input>
                        </form>
                    </div>
                    <div className="col-lg-2">
                        <form action="">
                            <button className="next_but" type="submit"> ></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid our_advantages text-center  ">
                <div className="container">
                    <div className="text"></div>
                </div>
                <div className="row ">
                    <div className="col-lg-4 about_us">
                        <div className="border_1"></div>
                        <a> <img className="img-fluid" src="../../public/images/about_us_1.jpg" alt=""></img> </a>
                        <div className="border_2"></div>
                        <p> Наша система позволяет вам распозновать продукты любого блюда, который пришелся
                            вам по душе.</p>
                    </div>
                    <div className="col-lg-4 about_us">
                        <div className="border_1"></div>
                        <a> <img className="img-fluid" src="../../public/images/about_us_2.jpg" alt=""></img> </a>
                        <div className="border_2"></div>
                        <p> Мы доставим вам ваши продукты в считанные минуты.</p>
                    </div>
                    <div className="col-lg-4 about_us">
                        <div className="border_1"></div>
                        <a> <img className="img-fluid" src="../../public/images/about_us_3.jpg" alt=""></img> </a>
                        <div className="border_2"></div>
                        <p> Над системой трудились три прекрасных человека, которые очень ценят каждого
                            пользователя и стараются улучшать ее каждый день.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
