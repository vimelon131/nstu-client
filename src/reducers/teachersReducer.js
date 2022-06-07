const SET_TEACHERS = "SET_TEACHER";

const defaultState = {
    teachers: [],
}

export default function teachersReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TEACHERS: 
            return {...state, teachers: action.payload}
        default:
            return state;
    }
}

export const setTeachers = (teachers) => ({type: SET_TEACHERS, payload: teachers})