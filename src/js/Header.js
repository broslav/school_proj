import React from 'react';

export  class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props.data;

        return(
            <header className="header">
                <div className="container">
                    <div className="header__left">
                        <div className="user">
                            <div className="user__avatar"><a className="user__link" href="#">
                                <div className="user__pic-container">
                                    <img className="user__pic" src={props.header_avatar}/>
                                </div>
                                <span className="user__name">{props.name}</span>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="contacts">
                            <div className="contacts__inner">
                                <a className="contacts__link">
                                    Мои контакты
                                </a>
                                <div className="contacts__container">
                                    <ul className="contacts__list">
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--email" href={"mailto:" + props.user.contacts_mail}>
                                                {props.user.contacts_mail}
                                            </a>
                                        </li>
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--tel" href={"tel:" + props.user.contacts_tel}>
                                                {props.user.contacts_tel}
                                            </a>
                                        </li>
                                        <li className="contacts__item">
                                            <a className="contacts__item-link contacts__item-link--skype" href={"skype:" + props.user.contacts_skype}>
                                                {props.user.contacts_skype}
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