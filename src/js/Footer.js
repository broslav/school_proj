import React from 'react';

export  class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer__left">
                        <div className="copyrights">© Дизайн сайта был разработан в школе LoftSchool</div>
                    </div>
                    <div className="footer__right">
                        <div className="socials">
                            <ul className="socials__list">
                                <li className="social__item">
                                    <a className="social__link social__link--fb" href={this.props.data.user.fb_link} target="_blank">
                                        facebook
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link social__link--vk" href={this.props.data.user.vk_link} target="_blank">
                                        vkontakte
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}