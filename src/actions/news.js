import axios from 'axios';
import { addKeywordsAction, deleteKeywordsAction, setKeywords } from '../reducers/keywordsReducer.js';
import {setNews} from "../reducers/newsReducer.js"
import { addNewsAction, deleteNewsAction } from '../reducers/newsReducer.js';
import { updateNewsAction } from '../reducers/newsReducer.js';
import { syncNewsAction } from '../reducers/newsReducer.js';

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

export function addNews(news) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/addNews", {
                title: news.title,
                date: news.date,
                content: news.content,
                category: news.category
            });
            dispatch(addNewsAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateNews(news) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/updateNews", {
                _id: news._id,
                title: news.title,
                date: news.date,
                content: news.content
            });
            dispatch(updateNewsAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function syncNews() {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/syncNews");
            dispatch(syncNewsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteNews(news) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/deleteNews", {
                _id: news._id
            });
            dispatch(deleteNewsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function getKeyword() {
    return async dispatch => {
        try {
            const responce = await axios.get("http://localhost:5000/api/keywords");
            dispatch(setKeywords(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}



export function addKeyword(keyword) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/addKeyword", {
                _id: keyword._id
            });
            dispatch(addKeywordsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteKeyword(keyword) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/deleteKeyword", {
                _id: keyword._id
            });
            dispatch(deleteKeywordsAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}