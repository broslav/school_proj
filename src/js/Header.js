import React from 'react';

export  class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="header">
                <div className="container">
                    <div className="header__left">
                        <div className="user">
                            <div className="user__avatar"><a className="user__link" href="#">
                                <div className="user__pic-container">
                                    <img className="user__pic" src="img/ava.jpg"/>
                                </div>
                                <span className="user__name">Денис Брославский</span>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="contacts">
                            <div className="contacts__inner"><a className="contacts__link" href="#">Мои контакты</a>
                                <div className="contacts__container">
                                    <ul className="contacts__list">
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--email" href="#">
                                                brosla196@gmail.com
                                            </a>
                                        </li>
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--tel" href="#">
                                                +7 980 253 79 05
                                            </a>
                                        </li>
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--skype" href="#">
                                                bro_deni
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}