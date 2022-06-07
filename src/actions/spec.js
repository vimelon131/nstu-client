import axios from 'axios';
import {setSpecs} from "../reducers/specReducer.js"

export function getSpec() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/specs");
            dispatch(setSpecs(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}