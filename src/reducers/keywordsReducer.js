const SET_KEYWORDS = "SET_KEYWORDS";
const ADD_KEYWORDS = "ADD_KEYWORDS";
const DELETE_KEYWORDS = "DELETE_KEYWORDS";


const defaultState = {
    keywords: [],
}

export default function keywordsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_KEYWORDS: 
            return {...state, keywords: action.payload}
        case ADD_KEYWORDS: 
            return {...state, keywords: [...state, action.payload]}
        case DELETE_KEYWORDS: 
        return {...state, keywords: [state.keywords.filter(el => el._id !==action.payload._id)]}
        default:
            return state;
    }
}

export const setKeywords = (keywords) => ({type: SET_KEYWORDS, payload: keywords})
export const addKeywordsAction = (keywords) => ({type: ADD_KEYWORDS, payload: keywords})
export const deleteKeywordsAction = (keywords) => ({type: DELETE_KEYWORDS, payload: keywords})