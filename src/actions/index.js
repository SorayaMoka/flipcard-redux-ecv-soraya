import { SHOW_ANSWER, HIDE_CARD } from "../constants/action-types";

export function showAnswer(id) {
    return { type: SHOW_ANSWER, id };
}

export function hideCard(id) {
    return { type: HIDE_CARD, id };
}
