import axios from 'axios';
import {addTeachersAction, deleteTeachersAction, setTeachers, syncTeachersAction, updateTeachersAction} from "../reducers/teachersReducer.js"

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
export function addTeachers(teacher) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/addTeachers", teacher);
            dispatch(addTeachersAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function addTeachersByLink(link) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/addTeachersByID", {link});
            dispatch(setTeachers(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function updateTeachers(teacher) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/updateTeachers", 
            teacher);
            dispatch(updateTeachersAction(responce.data));
            console.log(responce.data);
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function syncTeachers() {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/syncTeachers");
            dispatch(syncTeachersAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}

export function deleteTeachers(teacher) {
    return async dispatch => {
        try {
            const responce = await axios.post("http://localhost:5000/api/deleteTeachers", {
                _id: teacher._id
            });
            dispatch(deleteTeachersAction(responce.data));
        } catch(e) {
            alert(e.responce.data.message);
        }
    }
}