const SET_GRADUATES = "SET_GRADUATES";
const ADD_GRADUATES = "ADD_GRADUATES";
const UPDATE_GRADUATES = "UPDATE_GRADUATES";
const SYNC_GRADUATES = "SYNC_GRADUATES";
const DELETE_GRADUATES = "DELETE_GRADUATES";

const defaultState = {
    graduates: [],
}

export default function graduatesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_GRADUATES: 
            return {...state, graduates: action.payload}
            case ADD_GRADUATES: return {...state, graduates: [...state, action.payload]}
            case UPDATE_GRADUATES: return {
                ...state,
                news: state.graduates.map(n => n._id === action.payload._id ? action.payload : n),
            }
            case SYNC_GRADUATES: return {...state, graduates: action.payload}
            case DELETE_GRADUATES: return {...state, graduates: [state.graduates.filter(el => el._id !==action.payload._id)]}
        default:
            return state;
    }
}

export const setGraduates = (graduates) => ({type: SET_GRADUATES, payload: graduates})
export const addGraduatesAction = (news) => ({type: ADD_GRADUATES, payload: news});
export const updateGraduatesAction = (news) => ({type: UPDATE_GRADUATES, payload: news});
export const syncGraduatesAction = (news) => ({type: SYNC_GRADUATES, payload: news});
export const deleteGraduatesAction = (news) => ({type: DELETE_GRADUATES, payload: news});