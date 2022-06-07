const SET_QUESTIONS = "SET_QUESTIONS";

const defaultState = {
    questions: [],
}

export default function questoinsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_QUESTIONS: 
            return {...state, questions: action.payload}
        default:
            return state;
    }
}

export const setQuestions = (info) => ({type: SET_QUESTIONS, payload: info})