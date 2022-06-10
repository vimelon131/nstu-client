import axios from 'axios';
import {setQuestions, addQuestions, updateQuestions, deleteQuestions} from "../reducers/questionReducer.js"
import { API_URL } from '../config.js';

export function getQuestions() {
    return async dispatch => {
        try {
            const responce = await axios.get(`${API_URL}api/question`);
            dispatch(setQuestions(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function addQuestionHands(question) {
    return async dispatch => {
        try {
            const responce = await axios.post(`${API_URL}api/addQuestion`, question);
            dispatch(addQuestions(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function addQuestionSite(question) {
    return async dispatch => {
        try {
            const responce = await axios.post(`${API_URL}api/addQuestion`
                                                , {...question, fromSite: true});
            dispatch(addQuestions(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateQuestion(question) {
    return async dispatch => {
        try {
            console.log(question)
            const responce = await axios.post(`${API_URL}api/updateQuestion`
                                                , question);
            dispatch(updateQuestions(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteQuestion(question) {
    return async dispatch => {
        try {
            const responce = await axios.post(`${API_URL}api/deleteQuestion`
                                                , question);
            dispatch(deleteQuestions(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}