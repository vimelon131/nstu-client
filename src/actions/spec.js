import axios from 'axios';
import {addSpeccAction, deleteSpecsAction, setSpecs, syncSpecsAction, updateSpecsAction} from "../reducers/specReducer.js"

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
export function addSpecs(news) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/addSpecs", {
                title: news.title,
                date: news.date,
                content: news.content,
                category: news.category
            });
            dispatch(addSpeccAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateSpecs(spec) {
    return async dispatch => {
        try {
            console.log(spec)
            const responce = await axios.post("http://localhost:5000/api/updateSpecs", 
            spec);
            dispatch(updateSpecsAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function syncSpecs() {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/syncSpecs");
            dispatch(syncSpecsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteSpecs(news) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/deleteSpecs", {
                _id: news._id
            });
            dispatch(deleteSpecsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}