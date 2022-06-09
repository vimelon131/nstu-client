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
        dispatch(updateTeachers(teacher));
    }
    return (
        <div>
            <div className='news-edit'>
            <p className='page__title'>Редактирование преподавателя</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">ФИО</label>
                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setTeacher({...teacher, name: event.target.value})} id="title" type="text" value={teacher.name}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Должность</label>
                <input style={{fontSize: "18px"}} id="date" type="text" onChange={event => setTeacher({...teacher, jobTitle: event.target.value})} value={teacher.jobTitle}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Фото</label>
                <input style={{width: "500px",fontSize: "18px"}} id="categ" type="text" onChange={event => setTeacher({...teacher, img: event.target.value})} value={teacher.img}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Ссылка на портал НГТУ</label>
                <input style={{width: "300px",fontSize: "18px"}} name="content" id="content" onChange={event => setTeacher({...teacher, url: event.target.value})} value={teacher.url} />
            </div>
            <button onClick={() => updateTeacherHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../teachers"}> Назад</Link></button> 
        </div>
        </div>
    )
}

export default EditTeacher;