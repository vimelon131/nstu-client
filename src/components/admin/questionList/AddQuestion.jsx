import React from 'react'
import { useDispatch} from 'react-redux';
import {useState} from "react";
import { Link } from 'react-router-dom';
import { addQuestionHands } from '../../../actions/questions';

const AddQuestion = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState({});
    function updateNewsHandler() {
        if (!question?.name) {
            alert('Поле "Вопрос" не должно бысть пустым')
        }
        dispatch(addQuestionHands(question));
    }

    return (
        <div className='news-edit'>
            <p className='page__title'>Добавление вопроса</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Вопрос</label></div>  
                <div className="form__field__value"><textarea className='field__input' onChange={event => setQuestion({...question, name: event.target.value})} id="title" type="text" /></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Ответ</label></div>  
                <div className="form__field__value"><textarea className='field__input' id="categ" type="text" onChange={event => setQuestion({...question, answer: event.target.value})}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Дата</label></div>  
                <div className="form__field__value"><input  style={{fontSize: "18px"}} id="date" type="date" onChange={event => setQuestion({...question, date: event.target.value})}/></div>
            </div>
            <button onClick={() => updateNewsHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../questions"}> Назад</Link></button> 
        </div>
    )
}

export default AddQuestion;