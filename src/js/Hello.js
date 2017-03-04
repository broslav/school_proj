import React from 'react';
import {Link} from 'react-router';

export class Hello extends React.Component {
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
                        <Link to="app/" className="button button--green">
                            Перейти на страницу
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}