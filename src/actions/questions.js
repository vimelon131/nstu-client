import axios from 'axios';
import {setQuestions} from "../reducers/questionReducer.js"

export function getQuestions() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/question");
            dispatch(setQuestions(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

// export async function addQuestion(name, answer, date=Date.now()) {
//     try {
//         const responce = await axios.post("http://localhost:5000/api/question");
//         dispatch(setQuestions(responce.data));
//         console.log(responce.data);
//     } catch(e) {
//         alert(e.responce.data.message);
//     }
// }