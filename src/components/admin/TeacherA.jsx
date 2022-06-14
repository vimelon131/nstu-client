import React from 'react'
import TeachersList from './teachersList/TeachersList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTeachersByLink, getTeachers, syncTeachers } from '../../actions/teachers';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';


const TeacherA = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(state => state.teachers.teachers);
    const isFetching = useSelector(state => state.teachers.isFetching);
    const [url, setUrl] = useState('');
    useEffect(() => {
        dispatch(getTeachers());
    }, []);
    function syncNewsHandler() {
        dispatch(syncTeachers())
    }
    function addNewsByUrlHandler() {
        dispatch(addTeachersByLink(url))
    }
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление преподавателями</p>
            <hr />
            {isFetching === false 
            ? <TeachersList teachers={teachers}/>
            : <Oval/>}
            
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncNewsHandler()} className="btn-action">Синхронизировать</button>
            <div>
                <input style={{width: "400px",padding: "3px",fontSize: "18px"}} placeholder='Введите URL преподаватели с портала НГТУ' type="text" onChange={e => setUrl(e.target.value)}/>
                <button onClick={() => addNewsByUrlHandler()} className="btn-action">Добавить</button>
            </div>
            
        </div>
    )
}

export default TeacherA;