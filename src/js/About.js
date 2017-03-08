import React from 'react';

export class About extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {

        document.title = 'About me';

        const listP = this.data.user.user_description.map((p, index) => {
            return(
                <p key={index}>{p}</p>
            )
        });

        return(
            <div className="about">
                <div className="about__left">
                    <div className="about__user-picture-container">
                        <img className="about__user-picture" src={this.data.big_avatar}/>
                    </div>
                </div>
                <div className="about__right">
                    <h1 className="title">
                        Обо мне
                    </h1>
                    <div className="about__description">

                        {listP}

                    </div>
                    <div className="about__buttons">
                        <a className="button button--red" href={this.data.user.resume_link} target="_blank">
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