import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTeachers } from '../../../actions/teachers';
import { Link } from 'react-router-dom';
import {useState} from "react";


const AddTeacher = () => {
    const dispatch = useDispatch();
    const [teacher, setTeacher] = useState({});
    function addTeacherHandler() {
        dispatch(addTeachers(teacher));
    }
    return (
        <div>
            <div className='news-edit'>
            <p className='page__title'>Добавление преподавателя</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">ФИО</label>
                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setTeacher({...teacher, name: event.target.value})} id="title" type="text" />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Должность</label>
                <input style={{fontSize: "18px"}} id="date" type="text" onChange={event => setTeacher({...teacher, jobTitle: event.target.value})} />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Фото</label>
                <input style={{width: "500px",fontSize: "18px"}} id="categ" type="text" onChange={event => setTeacher({...teacher, img: event.target.value})} />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Ссылка на портал НГТУ</label>
                <input style={{width: "300px",fontSize: "18px"}} name="content" id="content" onChange={event => setTeacher({...teacher, url: event.target.value})} />
            </div>
            <button onClick={() => addTeacherHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../teachers"}> Назад</Link></button> 
        </div>
        </div>
    )
}

export default AddTeacher;