import React from 'react'

export class Career extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }
    
    render() {
        document.title = 'My career';

        const jobList = this.data.career.map((item, index) => {
            return(
                <li key={index} className="career__item">
                    <div className="career__item-inner">
                        <div className="career__job">
                            {item.job}
                        </div>
                        <div className="career__position">
                            {item.position}
                        </div>
                        <div className="career__date">
                            {item.date}
                        </div>
                        <div className="career__year">
                            {item.year}
                        </div>
                    </div>
                </li>
            )
        });

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
                            {jobList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}