const SET_SPECS = "SET_SPECS";
const ADD_SPECS = "ADD_SPECS";
const UPDATE_SPECS = "UPDATE_SPECS";
const SYNC_SPECS = "SYNC_SPECS";
const DELETE_SPECS = "DELETE_SPECS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState ={
    specs: [],
    isFetching: true
}

export default function specReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SPECS: 
            return {
                ...state, 
                specs: action.payload,
                isFetching: false}
        case ADD_SPECS: 
            return {
                ...state, 
                specs: [...state, action.payload],
                isFetching: false}
        case UPDATE_SPECS: 
            return {
                ...state,
                specs: state.specs.map(n => n._id === action.payload._id ? action.payload : n),
                isFetching: false
            }
        case SYNC_SPECS: 
            return {
                ...state, 
                specs: action.payload,
                isFetching: false}
        case DELETE_SPECS: 
            return {
                ...state, 
                specs: state.specs.filter(el => el._id !== action.payload._id),
                isFetching: false}
        case SET_IS_FETCHING: 
            return {
                ...state, 
                isFetching: action.payload}
        default:
            return state;
    }
}

export const setSpecs           = (specs) => ({type: SET_SPECS, payload: specs})
export const addSpeccAction     = (specs) => ({type: ADD_SPECS, payload: specs});
export const updateSpecsAction  = (specs) => ({type: UPDATE_SPECS, payload: specs});
export const syncSpecsAction    = (specs) => ({type: SYNC_SPECS, payload: specs});
export const deleteSpecsAction  = (specs) => ({type: DELETE_SPECS, payload: specs});
export const setIsFetching      = (bool) => ({type: SET_IS_FETCHING, payload: bool});