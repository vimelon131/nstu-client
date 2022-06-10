import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { updateGraduate } from '../../../actions/graduates';
import { Link } from 'react-router-dom';
import { updateGraduates } from '../../../actions/graduates';
import { API_URL } from '../../../config';
import { addGraduates } from '../../../actions/graduates';

const AddGraduate = () => {
    const dispatch = useDispatch();
    const [graduate, setGraduate] = useState({});
    function addGraduateHandler() {
        dispatch(addGraduates(graduate));
    }

    return (
        <div className='graduate-edit'>
            <p className='page__title'>Добавление выпускника</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">ФИО</label>
                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setGraduate({...graduate, name: event.target.value})} id="title" type="text" />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Дата выпуска</label>
                <input style={{fontSize: "18px"}} id="date" type="text" onChange={event => setGraduate({...graduate, graduationDate: event.target.value})} />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Факультет</label>
                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setGraduate({...graduate, faculty: event.target.value})} />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Место работы</label>
                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setGraduate({...graduate, job: event.target.value})} />
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Отзыв</label>
                <textarea style={{fontSize: "18px"}} name="content" id="content" cols="70" rows="20" onChange={event => setGraduate({...graduate, review: event.target.value})}></textarea>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Фото</label>
                <input style={{fontSize: "18px"}} id="categ"  type="file" onChange={event => setGraduate({...graduate, file: event.target.files[0]})} />
            </div>
            <button onClick={() => addGraduateHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../graduates"}> Назад</Link></button> 
        </div>
    )
}

export default AddGraduate;