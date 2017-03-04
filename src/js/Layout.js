import React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Sidebar} from './Sidebar';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="wrapper">
                    <Header/>
                    <div className="main-section">
                        <div className="container">
                            <Sidebar/>
                            <main className="page-content">

                                {this.props.children}

                            </main>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}