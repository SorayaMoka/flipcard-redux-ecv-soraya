import React from 'react';
import { connect } from 'react-redux';
import { showAnswer, hideCard } from "../actions";

import visibility from '../assets/visibility_grey_24x24.png';
import visibilityoff from '../assets/visibility_off_grey_24x24.png';

class Cards extends React.Component {

    showAnswer = (index) => {
        this.props.showAnswer(index);
    };

    hideCard = (index) => {
        this.props.hideCard(index)
    };

    render() {
        const cards = this.props.cards.map((cards, index) => {

                return (
                    <>
                        <div className="card">
                            <p key={index} onClick={() => this.showAnswer(index)}
                               className={cards.card.visible ? 'visibilityOff' : ''}>
                                {cards.card.answerHidden ? cards.card.answer : cards.card.question}
                            </p>
                        </div>
                        <div>
                            <p key={index} onClick={() => this.hideCard(index)}>
                                {cards.card.visible === false ? <img src={visibility} alt="visibility"/> : <img src={visibilityoff} alt="visibilityoff" />}
                            </p>
                        </div>
                    </>
                );
            }
        );

        return (
            <React.Fragment>
                <div className="container">
                    <ul>
                        {cards}
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    };
};

const mapDispatchToProps =  {
    showAnswer: showAnswer,
    hideCard: hideCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
