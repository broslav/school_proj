import React from 'react';

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }
    
    render() {
        document.title = 'My portfolio';

        const examplesList = this.data.portfolio.map((item, index) => {
            return(
                <li key={index} className="portfolio__item">
                    <div className="portfolio__item-inner">
                        <div className="portfolio__item-top">
                            <a className="portfolio__img-link" href="#">
                                <img className="portfolio__img" src={item.image}/>
                            </a>
                        </div>
                        <div className="portfolio__item-bottom">
                            <a className="portfolio__link" href="#">
                                        <span className="portfolio__item-name">
                                           {item.title}
                                        </span>
                                <span className="portfolio__item-descr">
                                            {item.descr}
                                        </span>
                                <span className="portfolio__item-type portfolio__item-type--app">
                                           {item.type}
                                        </span>
                            </a>
                        </div>
                    </div>
                </li>
            )
        });

        return(
            <div className="content-wrapper">
                <h1 className="title title--career">Портфолио</h1>
                <div className="portfolio">
                    <ul className="portfolio__list">
                        {examplesList}
                    </ul>
                </div>
            </div>
        )
    }
}