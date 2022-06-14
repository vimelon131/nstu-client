import axios from 'axios';
import {setGraduates, setIsFetching} from "../reducers/graduateReducer.js"
import { addGraduatesAction } from '../reducers/graduateReducer.js';
import { updateGraduatesAction } from '../reducers/graduateReducer.js';
import { deleteGraduatesAction } from '../reducers/graduateReducer.js';
import { syncGraduatesAction } from '../reducers/graduateReducer.js';
import { API_URL } from '../config.js';

export function getGraduates() {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.get(`${API_URL}api/graduates`);
            dispatch(setGraduates(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function addGraduates(graduate) {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const formData = new FormData();
            for (let el in graduate) {
                formData.append(el, graduate[el])
            }
            const responce = await axios.post(`${API_URL}api/addGraduates`, formData);
            dispatch(addGraduatesAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateGraduates(graduate) {
    return async dispatch => {
        try {
            const formData = new FormData();
            for (let el in graduate) {
                formData.append(el, graduate[el])
            }
            const responce = await axios.post(`${API_URL}api/updateGraduates`, 
            formData);
            dispatch(updateGraduatesAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function syncGraduates() {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/syncGraduates`);
            console.log("Пришет ответ")
            console.log(responce)
            dispatch(syncGraduatesAction(responce.data));
            console.log("Вызваля дисптач синк")
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteGraduates(graduate) {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true));
            const responce = await axios.post(`${API_URL}api/deleteGraduates`, {
                _id: graduate._id
            });
            dispatch(deleteGraduatesAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}