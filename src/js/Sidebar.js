import React from 'react';
import {Link} from 'react-router';

export class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <aside className="sidebar">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="app/" className="nav__link nav__link--about" activeClassName="active" onlyActiveOnIndex={true}>
                                <span className="nav__text">
                                    Обо мне
                                </span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="app/career" className="nav__link nav__link--career" activeClassName="active">
                                <span className="nav__text">
                                    Карьерный путь
                                </span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="app/portfolio" className="nav__link nav__link--portfolio" activeClassName="active"    >
                                <span className="nav__text">
                                    Портфолио
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}