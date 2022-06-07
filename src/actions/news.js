import axios from 'axios';
import {setNews} from "../reducers/newsReducer.js"

export function getNews() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/news");
            dispatch(setNews(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}