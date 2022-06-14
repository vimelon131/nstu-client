import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTeachers } from '../../../actions/teachers';
import { Link } from 'react-router-dom';
import {useState} from "react";


const AddTeacher = () => {
    const dispatch = useDispatch();
    const [teacher, setTeacher] = useState({});
    function addTeacherHandler() {
        if (!teacher.name || !teacher.jobTitle || !teacher.url) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(addTeachers(teacher));
            alert('Преподаватель добавлен');
        }
        
    }
    return (
        <div>
            <div className='news-edit'>
            <p className='page__title'>Добавление преподавателя</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">ФИО</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, name: event.target.value})} id="title" type="text" /></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Должность</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, jobTitle: event.target.value})} id="title" type="text" /></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Фото</label></div>  
                <div className="form__field__value"><input placeholder='ссылка на фото с портала НГТУ' className='field__input' onChange={event => setTeacher({...teacher, img: event.target.value})} id="title" type="text" /></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Ссылка на портал НГТУ</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, url: event.target.value})} id="title" type="text" /></div>
            </div>
            <button onClick={() => addTeacherHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../teachers"}> Назад</Link></button> 
        </div>
        </div>
    )
}

export default AddTeacher;