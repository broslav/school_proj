import React from 'react'

export class Career extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        document.title = 'My career';
        return(
            <div>
                <h1 className="title title--career">Карьерный путь</h1>
                <div className="career">
                    <div className="career__left">
                        <div className="career__picture-container">
                            <img className="career__picture" src="img/career.jpg"/>
                        </div>
                    </div>
                    <div className="career__right">
                        <ul className="career__list">
                            <li className="career__item">
                                <div className="career__item-inner">
                                    <div className="career__job">
                                        ООО «Звезды путешествий»
                                    </div>
                                    <div className="career__position">
                                        Системный Администратор
                                    </div>
                                    <div className="career__date">
                                        2015 - по настоящее время
                                    </div>
                                    <div className="career__year">
                                        2016
                                    </div>
                                </div>
                            </li>
                            <li className="career__item">
                                <div className="career__item-inner">
                                    <div className="career__job">
                                        ООО «Звезды путешествий»
                                    </div>
                                    <div className="career__position">
                                        Системный Администратор
                                    </div>
                                    <div className="career__date">
                                        2015 - по настоящее время
                                    </div>
                                    <div className="career__year">
                                        2016
                                    </div>
                                </div>
                            </li>
                            <li className="career__item">
                                <div className="career__item-inner">
                                    <div className="career__job">
                                        ООО «Звезды путешествий»
                                    </div>
                                    <div className="career__position">
                                        Системный Администратор
                                    </div>
                                    <div className="career__date">
                                        2015 - по настоящее время
                                    </div>
                                    <div className="career__year">
                                        2016
                                    </div>
                                </div>
                            </li>
                            <li className="career__item">
                                <div className="career__item-inner">
                                    <div className="career__job">
                                        ООО «Звезды путешествий»
                                    </div>
                                    <div className="career__position">
                                        Системный Администратор
                                    </div>
                                    <div className="career__date">
                                        2015 - по настоящее время
                                    </div>
                                    <div className="career__year">
                                        2016
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}