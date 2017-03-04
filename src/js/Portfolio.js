import React from 'react';

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        document.title = 'My portfolio';
        return(
            <div className="content-wrapper">
                <h1 className="title title--career">Портфолио</h1>
                <div className="portfolio">
                    <ul className="portfolio__list">
                        <li className="portfolio__item">
                            <div className="portfolio__item-inner">
                                <div className="portfolio__item-top">
                                    <a className="portfolio__img-link" href="#">
                                        <img className="portfolio__img" src="img/portfolio/port-1.jpg"/>
                                    </a>
                                </div>
                                <div className="portfolio__item-bottom">
                                    <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                            Deals App
                                        </span>
                                        <span className="portfolio__item-descr">
                                            Продажа одежды
                                        </span>
                                        <span className="portfolio__item-type portfolio__item-type--app">
                                            Приложение
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__item-inner">
                                <div className="portfolio__item-top">
                                    <a className="portfolio__img-link" href="#">
                                        <img className="portfolio__img" src="img/portfolio/port-2.jpg"/>
                                    </a>
                                </div>
                                <div className="portfolio__item-bottom">
                                    <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                            Dream-scapes
                                        </span>
                                        <span className="portfolio__item-descr">
                                            Лагуна Люфтганза
                                        </span>
                                        <span className="portfolio__item-type">
                                            Лендинг
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__item-inner">
                                <div className="portfolio__item-top">
                                    <a className="portfolio__img-link" href="#">
                                        <img className="portfolio__img" src="img/portfolio/port-3.jpg"/>
                                    </a>
                                </div>
                                <div className="portfolio__item-bottom">
                                    <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                            Creative Studio
                                        </span>
                                        <span className="portfolio__item-descr">
                                            Танцевальная студия
                                        </span>
                                        <span className="portfolio__item-type">
                                            Корпоративный сайт
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__item-inner">
                                <div className="portfolio__item-top">
                                    <a className="portfolio__img-link" href="#">
                                        <img className="portfolio__img" src="img/portfolio/port-4.jpg"/>
                                    </a>
                                </div>
                                <div className="portfolio__item-bottom">
                                    <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                            Studio Frog
                                        </span>
                                        <span className="portfolio__item-descr">
                                            Мебельный магазин
                                        </span>
                                        <span className="portfolio__item-type">
                                            Лендинг
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__item-inner">
                                <div className="portfolio__item-top">
                                    <a className="portfolio__img-link" href="#">
                                        <img className="portfolio__img" src="img/portfolio/port-5.jpg"/>
                                    </a>
                                </div>
                                <div className="portfolio__item-bottom">
                                    <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                            Carbonara
                                        </span>
                                        <span className="portfolio__item-descr">
                                            Итальянский ресторан
                                        </span>
                                        <span className="portfolio__item-type">
                                            Лендинг
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}