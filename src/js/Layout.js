import React from 'react';

import {Header} from './Header';
import {Footer} from './Footer';
import {Sidebar} from './Sidebar';

import { fetchData } from './fetchData';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        fetchData().then(json => this.setState({data: json}));
    }

    render() {

        if (!this.state.data) {
            return(
                <div>Loading...</div>
            )
        } else {
            let data = this.state.data;

            const childrenWithProps = React.Children.map(this.props.children,
                (child) => React.cloneElement(child, {
                    data
                })
            );

            return (
                <div className="main-wrapper">
                    <div className="wrapper">
                        <Header data={data}/>
                        <div className="main-section">
                            <div className="container">
                                <Sidebar/>
                                <main className="page-content">

                                    {childrenWithProps}

                                </main>
                            </div>
                        </div>
                    </div>
                    <Footer data={data}/>
                </div>
            )
        }
    }
}