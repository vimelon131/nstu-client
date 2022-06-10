const SET_NEWS = "SET_NEWS";
const ADD_NEWS = "ADD_NEWS";
const UPDATE_NEWS = "UPDATE_NEWS";
const SYNC_NEWS = "SYNC_NEWS";
const DELETE_NEWS = "DELETE_NEWS";


const defaultState = {
    news: [],
}

export default function newsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_NEWS: 
            return {...state, news: action.payload}
        case ADD_NEWS: return {...state, news: [...state, action.payload]}
        case UPDATE_NEWS: return {
            ...state,
            news: state.news.map(n => n._id === action.payload._id ? action.payload : n),
        }
        case SYNC_NEWS: return {...state, news: action.payload}
        case DELETE_NEWS: return {...state, news: [state.news.filter(el => el._id !==action.payload._id)]}
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, payload: news});
export const addNewsAction = (news) => ({type: ADD_NEWS, payload: news});
export const updateNewsAction = (news) => ({type: UPDATE_NEWS, payload: news});
export const syncNewsAction = (news) => ({type: SYNC_NEWS, payload: news});
export const deleteNewsAction = (news) => ({type: DELETE_NEWS, payload: news});