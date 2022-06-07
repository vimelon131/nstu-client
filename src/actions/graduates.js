import axios from 'axios';
import {setGraduates} from "../reducers/graduateReducer.js"

export function getGraduates() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/graduates");
            dispatch(setGraduates(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}