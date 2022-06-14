const SET_TEACHERS = "SET_TEACHER";
const ADD_TEACHERS = "ADD_TEACHERS";
const UPDATE_TEACHERS = "UPDATE_TEACHERS";
const SYNC_TEACHERS = "SYNC_TEACHERS";
const DELETE_TEACHERS = "DELETE_TEACHERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
    teachers: [],
    isFetching: true
}

export default function teachersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TEACHERS: 
            return {...state, 
                teachers: action.payload,
                isFetching: false}
        case ADD_TEACHERS: 
            return {
                ...state, 
                teachers: [...state, action.payload],
                isFetching: false}
        case UPDATE_TEACHERS: 
            return {
                ...state,
                teachers: state.teachers.map(n => n._id === action.payload._id ? action.payload : n),
                isFetching: false
            }
        case SYNC_TEACHERS: 
            return {
                ...state, 
                teachers: action.payload,
                isFetching: false}
        case DELETE_TEACHERS: 
            return {
                ...state, 
                teachers: state.teachers.filter(el => el._id !==action.payload._id),
                isFetching: false}
        case SET_IS_FETCHING: 
            return {
                ...state, 
                isFetching: action.payload}
        default:
            return state;
    }
}

export const setTeachers = (teachers) => ({type: SET_TEACHERS, payload: teachers})
export const addTeachersAction =  (teachers) => ({type: ADD_TEACHERS, payload: teachers});
export const updateTeachersAction =  (teachers) => ({type: UPDATE_TEACHERS, payload: teachers});
export const syncTeachersAction =  (teachers) => ({type: SYNC_TEACHERS, payload: teachers});
export const deleteTeachersAction =  (teachers) => ({type: DELETE_TEACHERS, payload: teachers});
export const setIsFetching      = (bool) => ({type: SET_IS_FETCHING, payload: bool});