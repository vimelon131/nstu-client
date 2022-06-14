const SET_QUESTIONS = "SET_QUESTIONS";
const ADD_QUESTIONS = "ADD_QUESTIONS";
const DELETE_QUESTIONS = "DELTE_QUESTIONS";
const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
    questions: [],
    isFetching: true
}

export default function questoinsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_QUESTIONS: 
            return {
                ...state, 
                questions: action.payload,
                isFetching: false
            }
        case ADD_QUESTIONS: 
            return {
                ...state, 
                questions: [...state, action.payload],
                isFetching: false
            }
        case UPDATE_QUESTIONS: 
            return {
                ...state,
                specs: state.questions.map(n => n._id === action.payload._id ? action.payload : n),
                isFetching: false
            }
        case DELETE_QUESTIONS: 
            return {
                ...state, 
                questions: state.questions.filter(el => el._id !==action.payload._id),
                isFetching: false
            }
        case SET_IS_FETCHING: 
            return {
                ...state, 
                isFetching: action.payload,
            }
        default:
            return state;
    }
}

export const setQuestions = (question) => ({type: SET_QUESTIONS, payload: question})
export const addQuestions = (question) => ({type: ADD_QUESTIONS, payload: question})
export const updateQuestions = (question) => ({type: UPDATE_QUESTIONS, payload: question})
export const deleteQuestions = (question) => ({type: DELETE_QUESTIONS, payload: question})
export const setIsFetching      = (bool) => ({type: SET_IS_FETCHING, payload: bool});