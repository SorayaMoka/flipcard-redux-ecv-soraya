import React from 'react'
import { connect } from 'react-redux';
import {showAnswer, nextCard} from "../actions/index";

class Lessons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disabled: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if ((this.props.cards.length === 1) && (this.state.value === this.props.cards[0].card.answer)){
            alert('Bravo!!');
            this.setState({ disabled: true });
        }
        else if (this.state.value === this.props.cards[0].card.answer ){
            alert('Right !');
            this.setState({ disabled: false });
        }
        else {
            alert('Wrong answer !');
        }
        event.preventDefault();
        nextCard();
    }

    showAnswer = (index) => {
        this.props.showAnswer(index);
    };

    nextCard = (index) =>{
        this.props.nextCard(index);
        this.setState({
                value: '',
                disabled: true
            }
        )
    };
    render() {
        console.log(this.props.cards[0].card.answerHidden);
        return (
            <>
                <div className="container">
                    <div className="card">
                        <p onClick={() => this.showAnswer(0)}>
                            {!this.props.cards[0].card.answerHidden ? this.props.cards[0].card.question : this.props.cards[0].card.answer}
                        </p>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {this.props.cards[0].card.question} {<input value={this.state.value} onChange={this.handleChange} type='text'></input>}
                        </label>
                        <input type="submit" value="submit" />
                    </form>
                    <button style={{display: this.state.disabled ? 'none' : 'block' }} disabled={this.state.disabled} onClick={this.nextCard}> Next </button>
                </div>
            </>


        );


    }


}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    };
};

const mapDispatchToProps =  {
    showAnswer: showAnswer,
    nextCard: nextCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
