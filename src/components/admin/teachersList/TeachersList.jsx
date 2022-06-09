import React from 'react'
import Teacher from './Teacher'
import { useSelector } from 'react-redux'
import "./teacherList.css"

const TeachersList = () => {
    const teachers = useSelector(state => state.teachers.teachers).map(teacher => <Teacher key={teacher._id} teacher={teacher}/>)
    return (
        <div className='teacher-list'>
            <div className="teacher-list__header">
                <div className="teacher-list__date">ФИО</div>
                <div className="teacher-list__title">Должность</div>
                <div className="teacher-list__category">Сайт</div>
                <div className="teacher-list__manage">Управление</div>
            </div>
            {teachers}
        </div>
    )
}

export default TeachersList;