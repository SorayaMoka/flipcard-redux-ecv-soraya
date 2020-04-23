import { SHOW_ANSWER, HIDE_CARD } from "../constants/action-types";

const rootReducer = (state, action) => {
    switch(action.type) {
        case SHOW_ANSWER: {
            return {
                cards: state.cards.map((cards, index) => {
                    if(action.id === index) {
                        return Object.assign({}, cards, {
                            card: {
                                id: cards.card.id,
                                answerHidden: !cards.card.answerHidden,
                                question: cards.card.question,
                                answer: cards.card.answer,
                                visible: cards.card.visible
                            }
                        })
                    }
                    else {
                        return Object.assign({}, cards, {
                            card: {
                                id: cards.card.id,
                                answerHidden: cards.card.answerHidden,
                                question: cards.card.question,
                                answer: cards.card.answer,
                                visible: cards.card.visible
                            }
                        })
                    }
                })
            }
        }
        case HIDE_CARD: {
            return {
                cards: state.cards.map((cards, index) => {
                    if(action.id === index) {
                        return Object.assign({}, cards, {
                            card: {
                                id: cards.card.id,
                                answerHidden: cards.card.answerHidden,
                                question: cards.card.question,
                                answer: cards.card.answer,
                                visible: !cards.card.visible
                            }
                        })
                    }
                    else {
                        return Object.assign({}, cards, {
                            card: {
                                id: cards.card.id,
                                answerHidden: cards.card.answerHidden,
                                question: cards.card.question,
                                answer: cards.card.answer,
                                visible: cards.card.visible
                            }
                        })
                    }
                })
            }
        }
        default:
            return state;
    }
};
export default rootReducer;
