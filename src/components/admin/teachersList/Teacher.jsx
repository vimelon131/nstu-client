import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeachers } from '../../../actions/teachers';

const Teacher = ({teacher}) => {
    const dispatch = useDispatch();
    function deleteTeacherHandler() {
        dispatch(deleteTeachers(teacher))
    }
    return (
        <div className='teacher__item'>
            <div className="news__date">{teacher.name}</div>
            <div className="news__title">{teacher.jobTitle}</div>
            <div className="news__category">{teacher.url}</div>
            <div className="news__manage">
            <Link to={`edit/${teacher._id}`}>Редактировать</Link>
            <button onClick={()=>deleteTeacherHandler()} className="delete">X</button>
        </div>
    </div>
    )
}

export default Teacher;