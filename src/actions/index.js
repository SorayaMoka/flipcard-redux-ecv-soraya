import { SHOW_ANSWER, HIDE_CARD, NEXT_CARD } from "../constants/action-types";

export const showAnswer = id => {
    return { type: SHOW_ANSWER, id };
};

export const hideCard = id => {
    return { type: HIDE_CARD, id };
};

export const nextCard = () => {
    return {
        type: NEXT_CARD,
        id: 0
    }
};
