import React from 'react';
import "./teachers.css";
import Teacher from './teacher';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTeachers } from '../../actions/teachers.js';

const Teachers = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(state => state.teachers.teachers).map(teacher => <Teacher teacher={teacher}/>);

    useEffect(() => {
        if (teachers.length == 0)
            dispatch(getTeachers());
    });
    return (
        <div className='container-main'>
            <div className="content">
                <p className='page__title'>Преподаватели</p>
                <hr/>
                <p className='page__desc'>В текущем разделе представлен профессорско-преподавательский состав кафедры Автоматизированных систем управления факультета автоматики и вычислительной техники. Для получения более подробной информации о преподавателе перейдите на его персональный сайт по указанной ссылке.</p>
                {teachers}
            </div>
        </div>
    )
}

export default Teachers;