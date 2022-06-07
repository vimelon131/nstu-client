const SET_GRADUATES = "SET_GRADUATES";

const defaultState = {
    graduates: [],
}

export default function graduatesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_GRADUATES: 
            return {...state, graduates: action.payload}
        default:
            return state;
    }
}

export const setGraduates = (graduates) => ({type: SET_GRADUATES, payload: graduates})