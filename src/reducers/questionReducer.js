const SET_QUESTIONS = "SET_QUESTIONS";
const ADD_QUESTIONS = "ADD_QUESTIONS";
const DELETE_QUESTIONS = "DELTE_QUESTIONS";
const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

const defaultState = {
    questions: [],
}

export default function questoinsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_QUESTIONS: 
            return {...state, questions: action.payload}
        case ADD_QUESTIONS: return {...state, questions: [...state, action.payload]}
        case UPDATE_QUESTIONS: return {
            ...state,
            specs: state.questions.map(n => n._id === action.payload._id ? action.payload : n),
        }
        case DELETE_QUESTIONS: return {...state, questions: [state.questions.filter(el => el._id !==action.payload._id)]}
        default:
            return state;
    }
}

export const setQuestions = (question) => ({type: SET_QUESTIONS, payload: question})
export const addQuestions = (question) => ({type: ADD_QUESTIONS, payload: question})
export const updateQuestions = (question) => ({type: UPDATE_QUESTIONS, payload: question})
export const deleteQuestions = (question) => ({type: DELETE_QUESTIONS, payload: question})