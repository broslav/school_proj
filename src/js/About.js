import React from 'react';

export class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = 'About me';
        return(
            <div className="about">
                <div className="about__left">
                    <div className="about__user-picture-container">
                        <img className="about__user-picture" src="img/user.jpg"/>
                    </div>
                </div>
                <div className="about__right">
                    <h1 className="title">
                        Обо мне
                    </h1>
                    <div className="about__description">
                        <p>
                           Привет! Меня зовут Денис. Проживаю в г. Липецк. Около года назад я увлекся веб-разработкой и даже не мог мечтать о том, что однажды я сделаю хоть что-то с применением ReactJS ;)
                        </p>

                    </div>
                    <div className="about__buttons">
                        <a className="button button--red" href="http://lipetsk.hh.ru/resume/4c60ced8ff02de6f810039ed1f654f694f3549" target="_blank">
                            <span className="button__text">
                                Посмотреть резюме
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}