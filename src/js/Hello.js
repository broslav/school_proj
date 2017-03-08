import React from 'react';
import {Link} from 'react-router';

import {fetchData} from './fetchData';

export class Hello extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentWillMount() {
        fetchData().then(json => this.setState({data: json}));
    }

    render() {

        if (!this.state.data) {
            return (
                <div>Loading...</div>
            )
        } else {
            let {start_avatar, user} = this.state.data;
            return (
                <div className="wrapper wrapper--flex">
                    <div className="start">
                        <div className="start__avatar-container">
                            <img className="start__avatar" src={start_avatar}/>
                        </div>
                        <div className="start__top-block">
                            <div className="start__name">{user.name}</div>
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

}