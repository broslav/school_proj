import React from 'react'

export default class Hello extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="wrapper wrapper--flex">
                <div className="start">
                    <div className="start__avatar-container">
                        <img className="start__avatar" src="img/my-ava-400.jpg"/>
                    </div>
                    <div className="start__top-block">
                        <div className="start__name">Брославский Денис</div>
                    </div>
                    <div className="start__bottom-block">
                        <a className="button button--green" href="about.html">Перейти на страницу</a>
                    </div>
                </div>
            </div>
        )
    }

}