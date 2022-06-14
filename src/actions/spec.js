import axios from 'axios';
import {addSpeccAction, deleteSpecsAction, setIsFetching, setSpecs, syncSpecsAction, updateSpecsAction} from "../reducers/specReducer.js"
import { API_URL } from '../config.js';

export function getSpec() {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.get(`${API_URL}api/specs`);
            dispatch(setSpecs(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}
export function addSpecs(news) {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/addSpecs`, {
                title: news.title,
                date: news.date,
                content: news.content,
                category: news.category
            });
            dispatch(addSpeccAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateSpecs(spec) {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/updateSpecs`, spec);
            dispatch(updateSpecsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function syncSpecs() {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/syncSpecs`);
            dispatch(syncSpecsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteSpecs(news) {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/deleteSpecs`, {
                _id: news._id
            });
            dispatch(deleteSpecsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}