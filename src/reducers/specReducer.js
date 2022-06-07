const SET_SPECS = "SET_SPECS"

const defaultState ={
    specs: []
}

export default function specReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SPECS: return {...state, specs: action.payload}
        default:
            return state;
    }
}

export const setSpecs = (specs) => ({type: SET_SPECS, payload: specs})