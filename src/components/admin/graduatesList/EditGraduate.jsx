import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { updateGraduate } from '../../../actions/graduates';
import { Link } from 'react-router-dom';
import { updateGraduates } from '../../../actions/graduates';
import { API_URL } from '../../../config';

const EditGraduate = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const graduateID = useSelector(state => state.graduates.graduates).filter(el => el._id === params.graduateID)[0];
    const [graduate, setGraduate] = useState(graduateID);
    function updategraduateHandler() {
        if (!graduate.name || !graduate.graduationDate || !graduate.faculty || !graduate.review) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(updateGraduates(graduate));
            alert('Выпускник обновлен!');
        } 
    }

    return (
        <div className='graduate-edit'>
            <p className='page__title'>Редактирование выпускника</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">ФИО</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setGraduate({...graduate, name: event.target.value})} id="title" type="text" value={graduate.name}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Дата выпуска</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setGraduate({...graduate, graduationDate: event.target.value})} id="title" type="text" value={graduate.graduationDate}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Факультет</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setGraduate({...graduate, faculty: event.target.value})} id="title" type="text"  value={graduate.faculty}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Место работы</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setGraduate({...graduate, job: event.target.value})} id="title" type="text"  value={graduate.job}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Отзыв</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content" cols="70" rows="20" onChange={event => setGraduate({...graduate, review: event.target.value})} value={graduate.review}></textarea> </div>   
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Фото</label></div>  
                <div className="form__field__value"><input type="file" onChange={event => setGraduate({...graduate, file: event.target.files[0]})}/></div>
            </div>
            <button onClick={() => updategraduateHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../graduates"}> Назад</Link></button> 
        </div>
    )
}

export default EditGraduate;