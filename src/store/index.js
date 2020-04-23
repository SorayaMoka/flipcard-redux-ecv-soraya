import { createStore } from "redux";
import rootReducer from "../reducers/index";

export const initialState = {
    cards: [
        {
            card: {
                id: 0,
                answerHidden: false,
                question: "How to buffer an object",
                answer: "Buffer.from(JSON.stringify(object)).toString() ",
            }
        },
        {
            card:
                {
                    id: 1,
                    answerHidden: false,
                    question: "What means API?",
                    answer: "Application program interface",
                }
        },
        {
            card :
                {   id: 2,
                    answerHidden: false,
                    question: "Whats the function of var definition ?",
                    answer: "host the variable to the top of js code, so you can declare anywhere the effect will be the same as in the beginning",
                }
        },
        {
            card: {
                id: 3,
                answerHidden: false,
                question: "What is the definition of let ?",
                answer: "initiate a variable inside a scope.",
            }
        },
        {
            card:
                {
                    id: 4,
                    answerHidden: false,
                    question: "What is a ternary?",
                    answer: "One line if",
                }
        },
    ]
};

const store = createStore(rootReducer, initialState);

export default store;
