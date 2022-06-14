import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import {useState} from "react";
import { updateTeachers } from '../../../actions/teachers';
import { Link } from 'react-router-dom';

const EditTeacher = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const teachersID = useSelector(state => state.teachers.teachers).filter(el => el._id === params.teacherID)[0];
    const [teacher, setTeacher] = useState(teachersID);
    function updateTeacherHandler() {
        if (!teacher.name || !teacher.jobTitle || !teacher.url) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(updateTeachers(teacher));
            alert('Преподаватель обновлен');
        }
        
    }
    return (
        <div>
            <div className='news-edit'>
            <p className='page__title'>Редактирование преподавателя</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">ФИО</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, name: event.target.value})} id="title" type="text" value={teacher.name}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Должность</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, jobTitle: event.target.value})} id="title" type="text" value={teacher.jobTitle}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Фото</label></div>  
                <div className="form__field__value"><input placeholder='ссылка на фото с портала НГТУ' className='field__input' onChange={event => setTeacher({...teacher, img: event.target.value})} id="title" type="text" value={teacher.img}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Ссылка на портал НГТУ</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setTeacher({...teacher, url: event.target.value})} id="title" type="text" value={teacher.url}/></div>
            </div>
            <button onClick={() => updateTeacherHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../teachers"}> Назад</Link></button> 
        </div>
        </div>
    )
}

export default EditTeacher;