import axios from 'axios';
import {setTeachers} from "../reducers/teachersReducer.js"

export function getTeachers() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/teachers");
            dispatch(setTeachers(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}